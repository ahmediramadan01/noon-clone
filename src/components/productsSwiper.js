"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ProductCard } from "./product-card";

export function ProductSwiper() {
	const [slidesPerView, setSlidesPerView] = useState(6);

	useEffect(() => {
		const updateSlidesPerView = () => {
			if (window.innerWidth < 640) {
				setSlidesPerView(2);
			} else if (window.innerWidth < 768) {
				setSlidesPerView(3);
			} else if (window.innerWidth < 1024) {
				setSlidesPerView(4);
			} else if (window.innerWidth < 1280) {
				setSlidesPerView(5);
			} else {
				setSlidesPerView(6);
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
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard></ProductCard>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
