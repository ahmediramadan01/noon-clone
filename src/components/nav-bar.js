"use client";
import React from "react";

import { Navbar, Collapse, Typography, IconButton, Input } from "@material-tailwind/react";
import { Bars3Icon, HeartIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function NavList() {
	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
			<li className="p-1 font-medium">
				<a href="#" className="flex items-center hover:text-blue-500 transition-colors">
					<span className="font-bold">العربية</span>
				</a>
			</li>
			<li className="px-2 font-medium border-black" style={{ borderLeftWidth: "1px" }}>
				<a href="#" className="flex items-center hover:text-blue-500 transition-colors">
					<span className="font-bold">Login</span>
					<UserIcon className="w-5 h-5 ml-1" />
				</a>
			</li>
			<li className="px-2 font-medium border-black" style={{ borderLeftWidth: "1px" }}>
				<a href="#" className="flex items-center hover:text-blue-500 transition-colors">
					<span className="font-bold">Wishlist</span>
					<HeartIcon className="w-5 h-5 ml-1" />
				</a>
			</li>
			<li className="px-2 font-medium border-black" style={{ borderLeftWidth: "1px" }}>
				<a href="/cart" className="flex items-center hover:text-blue-500 transition-colors">
					<span className="font-bold">Cart</span>
					<ShoppingCartIcon className="w-5 h-5 ml-1" />
				</a>
			</li>
		</ul>
	);
}

export function NavbarSimple() {
	const [openNav, setOpenNav] = React.useState(false);

	const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

	React.useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<Navbar
			className="w-full text-black mx-auto px-4 py-4 rounded-none"
			style={{ backgroundColor: "#FEEE00", boxShadow: "none" }}
			fullWidth="true"
		>
			<div className="flex items-center justify-between text-blue-gray-900">
				<a href="#">
					{/* <img src={"/noon-logo-en.svg"} alt="Noon Logo" className="mr-4 cursor-pointer w-20 h-auto" /> */}
					<Image
						src={"/noon-logo-en.svg"}
						alt="Noon Logo"
						width={20}
						height={10}
						className="mr-4 cursor-pointer w-20 h-auto"
					></Image>
				</a>

				<div className="px-1 w-2/3 relative flex gap-2 ">
					<Input
						type="search"
						placeholder="What are you looking for?"
						containerProps={{
							className: "w-full bg-white rounded-lg",
						}}
						className="!border-t-blue-gray-300 pl-7 placeholder-text-blue-gray-300 focus:!border-blue-gray-300"
						labelProps={{
							className: "before:content-none after:content-none",
						}}
					/>

					<div className="!absolute left-3 top-[13px]">
						<svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
								fill="#CFD8DC"
							/>
							<path
								d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
								stroke="#CFD8DC"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>

				<div className="hidden lg:block">
					<NavList />
				</div>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<XMarkIcon className="h-6 w-6" strokeWidth={2} />
					) : (
						<Bars3Icon className="h-6 w-6" strokeWidth={2} />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	);
}
