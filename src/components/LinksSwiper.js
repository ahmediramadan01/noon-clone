"use client"
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Navigation } from "swiper";

// SwiperCore.use([Navigation]);

const LinksSwiper = () => {
	const [slidesPerView, setSlidesPerView] = useState(3); // Default slides per view

	useEffect(() => {
		// Update slides per view based on screen size
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setSlidesPerView(9); // Large screens
			} else if (window.innerWidth >= 768) {
				setSlidesPerView(4); // Medium screens
			} else {
				setSlidesPerView(3); // Small screens
			}
		};

		handleResize(); // Call once on initial render
		window.addEventListener("resize", handleResize); // Listen for window resize events

		return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
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
		<Swiper
			slidesPerView={slidesPerView}
			spaceBetween={1} // Adjust the space between slides here
			navigation={false}
			speed={400}
		>
			{links.map((link, index) => (
				<SwiperSlide key={index}>
					<a
						href={link.href}
						className={`nav-link text-sm md:text-base lg:text-md text-nowrap block text-center${
							index === links.length - 1 ? " text-red-500 font-semibold" : ""
						}`}
					>
						{link.title}
					</a>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default LinksSwiper;
