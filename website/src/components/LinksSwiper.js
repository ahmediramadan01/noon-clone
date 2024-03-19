"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const LinksSwiper = () => {
	const [slidesPerView, setSlidesPerView] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setSlidesPerView(9);
			} else if (window.innerWidth >= 768) {
				setSlidesPerView(4);
			} else {
				setSlidesPerView(3);
			}
		};

		handleResize(); // Call once on initial render
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const links = [
		{ title: "Electronics", href: "#" },
		{ title: "Mobile", href: "#" },
		{ title: "Baby Toys", href: "#" },
		{ title: "Men", href: "#" },
		{ title: "Women", href: "#" },
		{ title: "Super Market", href: "#" },
		{ title: "Home", href: "#" },
		{ title: "Sell on Noon", href: "#" },
		{ title: "Deals", href: "#" },
	];

	return (
		<Swiper slidesPerView={slidesPerView} spaceBetween={1} navigation={false} speed={400}>
			{links.map((link, index) => (
				<SwiperSlide key={index}>
					<a
						href={link.href}
						className={`nav-link text-sm md:text-base lg:text-md text-nowrap block text-center${
							index === links.length - 1 ? " text-red-500 font-semibold" : ""
						}`}
					>
						{link.title}
					</a>{" "}
					{/* Responsive font size and text centering */}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default LinksSwiper;
