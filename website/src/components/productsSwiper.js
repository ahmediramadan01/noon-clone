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

export function ProductSwiper({ data }) {
	const [slidesPerView, setSlidesPerView] = useState(6);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(data);

		const updateSlidesPerView = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth < 640) {
				setSlidesPerView(2);
			} else if (windowWidth < 768) {
				setSlidesPerView(3);
			} else if (windowWidth < 1024) {
				setSlidesPerView(4);
			} else if (windowWidth < 1280) {
				setSlidesPerView(5);
			} else {
				setSlidesPerView(6);
			}
		};

		updateSlidesPerView();

		const handleResize = () => {
			updateSlidesPerView();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [data]);

	useEffect(() => {
		// console.log(products);
	}, [products]);

	return (
		<Swiper
			className="py-5"
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={12}
			slidesPerView={slidesPerView}
			navigation
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
		>
			{products &&
				products.slice(0, 12).map((product, index) => (
					<SwiperSlide key={index}>
						<ProductCard data={product} />
					</SwiperSlide>
				))}
		</Swiper>
	);
}
