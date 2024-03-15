"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Menu, MenuList, MenuItem, MenuHandler, Button } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export function MegaMenuWithHover() {
	// Define the links array
	const links = [
		{ title: "Electronics", href: "/category" },
		{ title: "Mobile", href: "#" },
		{ title: "Baby Toys", href: "#" },
		{ title: "Men", href: "#" },
		{ title: "Women", href: "#" },
		{ title: "Market", href: "#" },
		{ title: "Home", href: "#" },
		{ title: "Sell on Noon", href: "#" },
		{ title: "Deals", href: "#" },
	];

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

	return (
		<div className="nav-links">
			<div className="container-fluid flex">
				<div className="col-2 flex justify-left items-center border-r border-gray-300 text-sm font-semibold">
					<Menu
						className=""
						allowHover="true"
						animate={{
							mount: { y: -5 },
							unmount: { y: 10 },
						}}
					>
						<MenuHandler>
							<Button className="text-black bg-white rounded-none border-none">
								<a href="#" className="nav-link flex items-center px-5 w-50 text-sm text-nowrap">
									ALL CATEGORIES
									<span className="ml-2">
										<ChevronDownIcon className="h-5 w-5" />
									</span>
								</a>
							</Button>
						</MenuHandler>

						<MenuList className="w-full bg-white text-black text-md">
							{links.map((link, index) => (
								<MenuItem key={index}>
									<a
										href={link.href}
										className={`nav-link ${index === links.length - 1 ? " text-red-500 font-semibold" : ""}`}
									>
										{link.title}
									</a>
								</MenuItem>
							))}
						</MenuList>
					</Menu>
				</div>

				<div className="main-links overflow-hidden flex items-center px-2">
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
									className={`nav-link text-xs md:text-base lg:text-base text-nowrap block text-center font-bold ${
										index === links.length - 1 ? " text-red-500 font-semibold" : ""
									}`}
								>
									{link.title}
								</a>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
}
