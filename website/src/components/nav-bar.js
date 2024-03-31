"use client";

import React, { useState, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
	Input,
	Button,
	Dialog,
	Card,
	CardHeader,
	CardBody,
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";
import {
	Bars3Icon,
	ChevronDownIcon,
	HeartIcon,
	ShoppingCartIcon,
	UserIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

function NavList() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen((cur) => !cur);

	const [type, setType] = React.useState("login");

	const [error, setError] = useState("");
	const [logInError, setLogInError] = useState("");

	const router = useRouter();
	const session = useSession();

	// useEffect(() => {
	// 	if (!session?.status === "authenticated") {
	// 		router.replace("/");
	// 	}
	// }, [session, router]);

	const isValidEmail = (email) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		return emailRegex.test(email);
	};

	const signupUser = async (event) => {
		event.preventDefault();

		const name = event.target[0].value;
		const email = event.target[1].value;
		const password = event.target[2].value;

		if (!isValidEmail(email)) {
			setError("Invalid Email");
			return;
		}

		if (!password || password.length < 8) {
			setError("Invalid Password");
			return;
		}

		try {
			const response = await fetch("/api/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			});

			if (response.ok) {
				console.log("Signup successful");
				setOpen(false);
			} else {
				console.error("Signup failed:", response.status);
				setError("Email is already registered");
			}
		} catch (error) {
			console.error("Signup failed:", error);
			setError("Signup failed. Please try again later.");
		}
	};

	const loginUser = async function (event) {
		event.preventDefault();

		const email = event.target[0].value;
		const password = event.target[1].value;

		if (!isValidEmail(email)) {
			setError("Invalid Email");
			return;
		}

		if (!password || password.length < 8) {
			setError("Invalid Password");
			return;
		}

		const response = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});

		if (response?.error) {
			setLogInError("Invalid email or password");
		} else {
			setLogInError("");
			setOpen(false);
		}
	};

	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
			<li className="p-1 font-medium text-sm">
				<a href="#" className="flex items-center hover:text-blue-500 transition-colors">
					<span className="font-bold">العربية</span>
				</a>
			</li>

			<li
				className={`${
					session?.status === "authenticated" || "hidden"
				} px-2 font-medium border-black h-6 w-32 flex items-center`}
				style={{ borderLeftWidth: "1px" }}
			>
				<Link href="/profile" className="flex items-center hover:text-blue-500 transition-colors">
					<span className="font-bold text-left text-sm">
						<span className="text-xs font-light whitespace-no-wrap">Ahlan Ahmed!</span>
						<br />
						<span className="whitespace-no-wrap">My Account</span>
					</span>
					<ChevronDownIcon className="w-5 h-5 ml-1" />
				</Link>
			</li>

			<li
				className={`${
					session?.status === "authenticated" && "hidden"
				} px-2 font-medium border-black h-6 w-auto flex items-center`}
				style={{ borderLeftWidth: "1px" }}
			>
				<button onClick={handleOpen} className="flex items-center hover:text-blue-500 transition-colors">
					<span className="font-bold text-sm">Log In</span>
					<UserIcon className="w-5 h-5 ml-1" />
				</button>
				<Dialog size="sm" open={open} handler={handleOpen} className="bg-transparent shadow-none">
					<Card className="w-full">
						<CardHeader floated={false} shadow={false} className="m-0 grid place-items-center px-4 pt-4 text-center">
							<Typography className="text-[#404553] text-2xl font-bold">Hala! Let's get started</Typography>
						</CardHeader>
						<CardBody>
							<Tabs value={type} className="overflow-visible">
								<TabsHeader className="relative z-0 bg-[#404553cc] max-w-[250px] mx-auto">
									<Tab
										value="login"
										onClick={() => setType("login")}
										className={`${type === "signup" ? "text-white" : "text-[#404553cc]"}`}
									>
										Log In
									</Tab>
									<Tab
										value="signup"
										onClick={() => setType("signup")}
										className={`${type === "login" ? "text-white" : "text-[#404553cc]"}`}
									>
										Sign Up
									</Tab>
								</TabsHeader>
								<TabsBody
									className="!overflow-x-hidden"
									animate={{
										initial: {
											x: type === "login" ? 400 : -400,
										},
										mount: {
											x: 0,
										},
										unmount: {
											x: type === "login" ? 400 : -400,
										},
									}}
								>
									<TabPanel value="login" className="p-0">
										<form onSubmit={loginUser} className="mt-12 flex flex-col gap-4">
											<div className="mb-1 flex flex-col gap-6">
												<Typography variant="h6" color="blue-gray" className="">
													Email
												</Typography>
												<Input
													type="email"
													size="lg"
													className="form-control !border-t-blue-gray-200 focus:!border-t-gray-900"
													labelProps={{
														className: "before:content-none after:content-none",
													}}
													required
												/>
												<Typography variant="h6" color="blue-gray" className="">
													Password
												</Typography>
												<Input
													type="password"
													size="lg"
													className="form-control !border-t-blue-gray-200 focus:!border-t-gray-900"
													labelProps={{
														className: "before:content-none after:content-none",
													}}
													required
												/>
											</div>

											<Button type="submit" className="mt-6 text-base bg-[#3866df]" fullWidth>
												LOG IN
											</Button>
											<p className="text-red-600 text-[16px] mt-4">{logInError && logInError}</p>
										</form>
									</TabPanel>
									<TabPanel value="signup" className="p-0">
										<form onSubmit={signupUser} className="mt-12 flex flex-col gap-4">
											<div className="mb-1 flex flex-col gap-6">
												<Typography variant="h6" color="blue-gray" className="">
													Name
												</Typography>
												<Input
													type="text"
													size="lg"
													className="form-control !border-t-blue-gray-200 focus:!border-t-gray-900"
													labelProps={{
														className: "before:content-none after:content-none",
													}}
													required
												/>
												<Typography variant="h6" color="blue-gray" className="">
													Email
												</Typography>
												<Input
													type="email"
													size="lg"
													className="form-control !border-t-blue-gray-200 focus:!border-t-gray-900"
													labelProps={{
														className: "before:content-none after:content-none",
													}}
													required
												/>
												<Typography variant="h6" color="blue-gray" className="">
													Password
												</Typography>
												<Input
													type="password"
													size="lg"
													className="form-control !border-t-blue-gray-200 focus:!border-t-gray-900"
													labelProps={{
														className: "before:content-none after:content-none",
													}}
													required
												/>
											</div>

											<Button type="submit" className="mt-6 text-base bg-[#3866df]" fullWidth>
												SIGN UP
											</Button>
											<p className="text-red-600 text-[16px] mt-4">{error && error}</p>
										</form>
									</TabPanel>
								</TabsBody>
							</Tabs>
						</CardBody>
					</Card>
				</Dialog>
			</li>
			<li
				className={`${
					session?.status === "authenticated" || "hidden"
				} px-2 font-medium border-black h-6 w-auto flex items-center`}
				style={{ borderLeftWidth: "1px" }}
			>
				<button
					onClick={() => {
						signOut();
					}}
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					<span className="font-bold text-sm">Sign Out</span>
					<UserIcon className="w-5 h-5 ml-1" />
				</button>
			</li>

			<li className={`px-2 font-medium border-black h-6 w-auto flex items-center`} style={{ borderLeftWidth: "1px" }}>
				<Link href="/wishlist" className="flex items-center hover:text-blue-500 transition-colors">
					<span className="font-bold text-sm">Wishlist</span>
					<HeartIcon className="w-5 h-5 ml-1" />
				</Link>
			</li>
			<li className={`px-2 font-medium border-black h-6 w-auto flex items-center`} style={{ borderLeftWidth: "1px" }}>
				<Link href="/cart" className="flex items-center hover:text-blue-500 transition-colors">
					<span className="font-bold text-sm">Cart</span>
					<ShoppingCartIcon className="w-5 h-5 ml-1" />
				</Link>
			</li>
		</ul>
	);
}

export function NavbarSimple() {
	const [openNav, setOpenNav] = React.useState(false);

	const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);
	const [searchedProduct, setSearchedProduct] = useState("");
	const handleTypedProduct = (event) => {
		setSearchedProduct(event.target.value);
	};
	const router = useRouter();
	const searchProduct = (event) => {
		event.preventDefault();
		if (!searchedProduct) router.push(`/search`);
		router.push(`/search/${searchedProduct}`);
	};

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
			fullWidth={true}
		>
			<div className="flex items-center justify-between text-blue-gray-900">
				<Link href="/">
					<Image
						src={"/noon-logo-en.svg"}
						alt="Noon Logo"
						width={20}
						height={10}
						className="mr-4 cursor-pointer w-20 h-auto"
					></Image>
				</Link>

				<div className="px-1 w-2/3 relative flex gap-2 ">
					<form
						onSubmit={(event) => {
							searchProduct(event);
						}}
					>
						<Input
							onChange={(event) => {
								handleTypedProduct(event);
							}}
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
					</form>
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
