"use client";
//Swiper Imports
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export function ImageList({ items }) {
	const [slidesPerView, setSlidesPerView] = useState(12);

	useEffect(() => {
		const updateSlidesPerView = () => {
			if (window.innerWidth < 640) {
				setSlidesPerView(3);
			} else if (window.innerWidth < 768) {
				setSlidesPerView(4);
			} else if (window.innerWidth < 1024) {
				setSlidesPerView(6);
			} else if (window.innerWidth < 1280) {
				setSlidesPerView(8);
			} else {
				setSlidesPerView(12);
			}
		};

		updateSlidesPerView();

		window.addEventListener("resize", updateSlidesPerView);

		return () => {
			window.removeEventListener("resize", updateSlidesPerView);
		};
	}, []);

	return (
		<>
			<Swiper
				className="py-5"
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={12}
				slidesPerView={slidesPerView}
				navigation
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				{items.map((item, index) => (
					<SwiperSlide key={index}>
						<div className="mx-4 my-4" key={index}>
							<Image className="cursor-pointer" src={item.img} alt={item.alt} width={120} height={90} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
