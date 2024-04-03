"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Badge,
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
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function NavList() {
	const session = useSession();

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen((cur) => !cur);

	const [type, setType] = React.useState("login");

	const [error, setError] = useState("");
	const [logInError, setLogInError] = useState("");

	const [userFirstName, setUserFirstName] = useState("");
	const [wishlistLength, setWishlistLength] = useState(0);
	const [cartLength, setCartLength] = useState(0);

	useEffect(() => {
		if (session?.status === "authenticated") {
			// console.log(session);
			setUserFirstName(session.data.user.firstName);
			setWishlistLength(session.data.user.wishlist.length);
			setCartLength(session.data.user.cart.length);
		}
	}, [session]);

	// useEffect(() => {
	// 	console.log(session.data.user.wishlist.length);
	// 	console.log(session.data.user.cart.length);
	// }, [userFirstName]);

	const isValidEmail = (email) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		return emailRegex.test(email);
	};

	const signupUser = async (event) => {
		event.preventDefault();

		const firstName = event.target[0].value;
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
					firstName,
					email,
					password,
					lastName: "",
					phoneNumber: "",
					birthday: "",
					gender: "",
					nationality: "",
					wishlist: [],
					cart: [],
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

	const [openMenu, setOpenMenu] = React.useState(false);

	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
			<li className="p-1 font-medium text-sm">
				<a href="#" className="flex items-center hover:text-[#3866df] transition-colors">
					<span className="font-bold">العربية</span>
				</a>
			</li>

			<li
				className={`${
					session?.status === "authenticated" || "hidden"
				} px-2 font-medium border-black h-6 w-32 flex items-center`}
				style={{ borderLeftWidth: "1px" }}
			>
				<Menu open={openMenu} handler={setOpenMenu} allowHover>
					<MenuHandler className="cursor-pointer flex items-center gap-3 tracking-normal">
						<span variant="text" className="flex items-center gap-3 tracking-normal">
							<span className="font-bold text-left text-sm">
								<span className="text-xs font-light whitespace-no-wrap">Ahlan {userFirstName}!</span>
								<br />
								<span className="whitespace-no-wrap">My Account</span>
							</span>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""}`}
							/>
						</span>
					</MenuHandler>
					<MenuList>
						<MenuItem className="flex items-center gap-2">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M2.59998 4.9843C2.59874 3.66719 3.66612 2.5988 4.98324 2.5988H15.019C16.3354 2.5988 17.4025 3.66615 17.4022 4.9826L17.3999 15.022C17.3996 16.338 16.3327 17.4047 15.0167 17.4047H4.99269C3.67733 17.4047 2.61067 16.3391 2.60943 15.0237L2.59998 4.9843Z"
									stroke="#404553"
									strokeWidth="1.25849"
								/>
								<path
									d="M5.64991 5.41625C5.64987 5.40625 5.65796 5.39814 5.66796 5.39814H8.18204C8.19202 5.39814 8.2001 5.40623 8.20009 5.4162L8.19767 8.62894C8.19766 8.6389 8.18958 8.64698 8.17962 8.64698H5.67805C5.6681 8.64698 5.66003 8.63893 5.65999 8.62898L5.64991 5.41625Z"
									fill="#FEEE00"
									stroke="#404553"
									strokeWidth="0.968066"
								/>
								<path
									d="M5.64991 11.0388C5.64987 11.0288 5.65796 11.0207 5.66796 11.0207H8.18204C8.19202 11.0207 8.2001 11.0288 8.20009 11.0388L8.19767 14.2515C8.19766 14.2615 8.18958 14.2695 8.17962 14.2695H5.67805C5.6681 14.2695 5.66003 14.2615 5.65999 14.2515L5.64991 11.0388Z"
									fill="#FEEE00"
									stroke="#404553"
									strokeWidth="0.968066"
								/>
								<mask id="path-4-inside-1_3553_16698" fill="white">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M9.38402 5.31553C9.38032 5.09463 9.55837 4.91357 9.7793 4.91357L14.6082 4.91357C14.8272 4.91357 15.0044 5.09154 15.0035 5.3105C15.0027 5.52822 14.8259 5.70424 14.6082 5.70424H9.7793C9.56354 5.70424 9.38763 5.53126 9.38402 5.31553Z"
									/>
								</mask>
								<path
									d="M9.7793 6.84971H14.6082V2.97744H9.7793V6.84971ZM14.6082 3.76811H9.7793V7.64038H14.6082V3.76811ZM9.7793 3.76811C10.6202 3.76811 11.3058 4.44233 11.3199 5.28311L7.44816 5.34795C7.46947 6.62018 8.50688 7.64038 9.7793 7.64038V3.76811ZM13.0674 5.30271C13.0708 4.45418 13.7597 3.76811 14.6082 3.76811V7.64038C15.8922 7.64038 16.9345 6.60225 16.9396 5.3183L13.0674 5.30271ZM14.6082 6.84971C13.7548 6.84971 13.064 6.15608 13.0674 5.30271L16.9396 5.3183C16.9448 4.02701 15.8995 2.97744 14.6082 2.97744V6.84971ZM9.7793 2.97744C8.47639 2.97744 7.42634 4.04523 7.44816 5.34795L11.3199 5.28311C11.3343 6.14404 10.6403 6.84971 9.7793 6.84971V2.97744Z"
									fill="#404553"
									mask="url(#path-4-inside-1_3553_16698)"
								/>
								<mask id="path-6-inside-2_3553_16698" fill="white">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M9.38402 10.9381C9.38032 10.7172 9.55837 10.5361 9.7793 10.5361L14.6082 10.5361C14.8272 10.5361 15.0044 10.7141 15.0035 10.9331C15.0027 11.1508 14.8259 11.3268 14.6082 11.3268H9.7793C9.56354 11.3268 9.38763 11.1538 9.38402 10.9381Z"
									/>
								</mask>
								<path
									d="M9.7793 12.4723H14.6082V8.6H9.7793V12.4723ZM14.6082 9.39067H9.7793V13.2629H14.6082V9.39067ZM9.7793 9.39067C10.6202 9.39067 11.3058 10.0649 11.3199 10.9057L7.44816 10.9705C7.46947 12.2427 8.50688 13.2629 9.7793 13.2629V9.39067ZM13.0674 10.9253C13.0708 10.0767 13.7597 9.39067 14.6082 9.39067V13.2629C15.8922 13.2629 16.9345 12.2248 16.9396 10.9409L13.0674 10.9253ZM14.6082 12.4723C13.7548 12.4723 13.064 11.7786 13.0674 10.9253L16.9396 10.9409C16.9448 9.64956 15.8995 8.6 14.6082 8.6V12.4723ZM9.7793 8.6C8.47639 8.6 7.42634 9.66778 7.44816 10.9705L11.3199 10.9057C11.3343 11.7666 10.6403 12.4723 9.7793 12.4723V8.6Z"
									fill="#404553"
									mask="url(#path-6-inside-2_3553_16698)"
								/>
							</svg>
							Orders
							<ArrowRightIcon
								strokeWidth={2}
								className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							/>
						</MenuItem>
						<MenuItem className="flex items-center gap-2">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M2.18168 4.16965C2.1807 3.13343 3.02045 2.29288 4.05668 2.29288H17.6047L17.6017 15.835C17.6014 16.8703 16.762 17.7096 15.7267 17.7096H4.06767C3.03283 17.7096 2.19365 16.8712 2.19267 15.8363L2.18168 4.16965Z"
									stroke="#404553"
									strokeWidth="1.25"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M11.7859 12.3955C12.1627 12.0186 12.3958 11.4978 12.3958 10.9227C12.3958 9.7721 11.4631 8.83936 10.3125 8.83936C9.16187 8.83936 8.22913 9.7721 8.22913 10.9227C8.22913 11.4797 8.44774 11.9857 8.80385 12.3595L10.3102 14.1928L11.7859 12.3955Z"
									fill="#404553"
								/>
								<path
									d="M11.7859 12.3955L11.3439 11.9537L11.3223 11.9753L11.3029 11.9989L11.7859 12.3955ZM8.80385 12.3595L9.28676 11.9627L9.27219 11.945L9.25637 11.9284L8.80385 12.3595ZM10.3102 14.1928L9.82725 14.5896L10.3103 15.1775L10.7932 14.5894L10.3102 14.1928ZM12.2279 12.8374C12.7171 12.348 13.0208 11.6702 13.0208 10.9227H11.7708C11.7708 11.3255 11.6083 11.6891 11.3439 11.9537L12.2279 12.8374ZM13.0208 10.9227C13.0208 9.42692 11.8082 8.21436 10.3125 8.21436V9.46436C11.1179 9.46436 11.7708 10.1173 11.7708 10.9227H13.0208ZM10.3125 8.21436C8.81669 8.21436 7.60413 9.42692 7.60413 10.9227H8.85413C8.85413 10.1173 9.50704 9.46436 10.3125 9.46436V8.21436ZM7.60413 10.9227C7.60413 11.6466 7.88894 12.3052 8.35134 12.7906L9.25637 11.9284C9.00655 11.6662 8.85413 11.3129 8.85413 10.9227H7.60413ZM10.7931 13.796L9.28676 11.9627L8.32095 12.7563L9.82725 14.5896L10.7931 13.796ZM11.3029 11.9989L9.82712 13.7962L10.7932 14.5894L12.2689 12.7922L11.3029 11.9989Z"
									fill="#404553"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.3124 12.1724C11.0027 12.1724 11.5624 11.6127 11.5624 10.9224C11.5624 10.232 11.0027 9.67236 10.3124 9.67236C9.62202 9.67236 9.06238 10.232 9.06238 10.9224C9.06238 11.6127 9.62202 12.1724 10.3124 12.1724Z"
									fill="white"
								/>
								<path
									d="M2.18937 4.79836C2.18503 3.41595 3.30449 2.29297 4.68691 2.29297H17.6046L17.6018 6.04297H3.4379C2.74989 6.04297 2.19154 5.48637 2.18937 4.79836Z"
									fill="#FEEE00"
									stroke="#404553"
									strokeWidth="1.25"
								/>
							</svg>
							Addresses
							<ArrowRightIcon
								strokeWidth={2}
								className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							/>
						</MenuItem>
						<MenuItem className="flex items-center gap-2">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M2.28959 4.16965C2.28861 3.13343 3.12836 2.29288 4.16459 2.29288H15.8372C16.8729 2.29288 17.7125 3.13261 17.7122 4.16831L17.7096 15.835C17.7094 16.8703 16.87 17.7096 15.8346 17.7096H4.17558C3.14074 17.7096 2.30156 16.8712 2.30058 15.8363L2.28959 4.16965Z"
									stroke="#404553"
									strokeWidth="1.25"
								/>
								<path
									d="M2.29523 8.13185C2.29207 7.20915 3.03918 6.45947 3.96189 6.45947H16.0444C16.9654 6.45947 17.7118 7.2065 17.711 8.12751C17.7103 9.04745 16.9643 9.79281 16.0444 9.79281H3.96189C3.04364 9.79281 2.29838 9.05009 2.29523 8.13185Z"
									fill="#FEEE00"
									stroke="#404553"
									strokeWidth="1.25"
								/>
								<mask id="path-3-inside-1_3246_15983" fill="white">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M5.00368 13.9673C4.9993 13.6191 5.28038 13.3345 5.62863 13.3345L10.2111 13.3345C10.557 13.3345 10.8371 13.6154 10.8361 13.9614C10.835 14.3058 10.5555 14.5845 10.2111 14.5845H5.62863C5.28651 14.5845 5.00798 14.3094 5.00368 13.9673Z"
									/>
								</mask>
								<path
									d="M5.62863 14.5845H10.2111V12.0845H5.62863V14.5845ZM10.2111 13.3345H5.62863V15.8345H10.2111V13.3345ZM5.62863 13.3345C5.97075 13.3345 6.24928 13.6095 6.25358 13.9516L3.75378 13.983C3.76667 15.0093 4.60228 15.8345 5.62863 15.8345V13.3345ZM9.58607 13.9576C9.58711 13.6131 9.86663 13.3345 10.2111 13.3345V15.8345C11.2444 15.8345 12.0829 14.9985 12.0861 13.9651L9.58607 13.9576ZM10.2111 14.5845C9.86515 14.5845 9.58503 14.3035 9.58607 13.9576L12.0861 13.9651C12.0892 12.9274 11.2488 12.0845 10.2111 12.0845V14.5845ZM5.62863 12.0845C4.58388 12.0845 3.74065 12.9384 3.75378 13.983L6.25358 13.9516C6.25796 14.2998 5.97688 14.5845 5.62863 14.5845V12.0845Z"
									fill="#404553"
									mask="url(#path-3-inside-1_3246_15983)"
								/>
							</svg>
							Payments
							<ArrowRightIcon
								strokeWidth={2}
								className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							/>
						</MenuItem>
						<MenuItem className="flex items-center gap-2">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M2.28947 4.16965C2.28849 3.13343 3.12824 2.29288 4.16447 2.29288H15.8371C16.8728 2.29288 17.7123 3.13261 17.7121 4.16831L17.7095 15.835C17.7092 16.8703 16.8698 17.7096 15.8345 17.7096H4.17546C3.14062 17.7096 2.30144 16.8712 2.30046 15.8363L2.28947 4.16965Z"
									stroke="#404553"
									strokeWidth="1.25"
								/>
								<mask id="path-2-inside-1_3553_16769" fill="white">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M7.49084 13.2725C7.49254 13.2725 7.49424 13.2725 7.49594 13.2725H10.0039C12.3047 13.2725 14.1698 11.4073 14.1698 9.10657C14.1692 6.80372 12.3031 4.93823 10.0015 4.93823H7.5015"
									/>
								</mask>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M7.49084 13.2725C7.49254 13.2725 7.49424 13.2725 7.49594 13.2725H10.0039C12.3047 13.2725 14.1698 11.4073 14.1698 9.10657C14.1692 6.80372 12.3031 4.93823 10.0015 4.93823H7.5015"
									fill="#FEEE00"
								/>
								<path
									d="M10.0039 13.2725V12.0225V13.2725ZM14.1698 9.10657L15.4198 9.10621V9.10657H14.1698ZM7.49238 12.0225C7.49357 12.0225 7.49476 12.0225 7.49594 12.0225V14.5225C7.49373 14.5225 7.49152 14.5225 7.48931 14.5225L7.49238 12.0225ZM7.49594 12.0225H10.0039V14.5225H7.49594V12.0225ZM10.0039 12.0225C11.6143 12.0225 12.9198 10.717 12.9198 9.10657H15.4198C15.4198 12.0977 12.9951 14.5225 10.0039 14.5225V12.0225ZM12.9198 9.10694C12.9194 7.49406 11.6127 6.18823 10.0015 6.18823V3.68823C12.9936 3.68823 15.419 6.11337 15.4198 9.10621L12.9198 9.10694ZM10.0015 6.18823H7.5015V3.68823H10.0015V6.18823Z"
									fill="#404553"
									mask="url(#path-2-inside-1_3553_16769)"
								/>
								<path d="M9.0083 10.2869L6.65128 12.644L9.0083 15.001" stroke="#404553" strokeWidth="1.25" />
							</svg>
							Returns
							<ArrowRightIcon
								strokeWidth={2}
								className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							/>
						</MenuItem>
						<MenuItem>
							<Link href={`/profile/`} className="flex items-center gap-2">
								<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_3246_15982)">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M5.49414 14.9193C5.49414 13.0317 7.02438 11.5015 8.91202 11.5015C9.54151 11.5015 9.16313 11.5015 10.0534 11.5015C10.9436 11.5015 10.5501 11.5015 11.1796 11.5015C13.0756 11.5015 14.6126 13.0384 14.6126 14.9344V15.4908H10.0534H5.49414V14.9193Z"
											fill="#FEEE00"
											stroke="#404553"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M10.0001 9.72474C11.2591 9.72474 12.2797 8.70412 12.2797 7.44513C12.2797 6.18614 11.2591 5.16553 10.0001 5.16553C8.74107 5.16553 7.72046 6.18614 7.72046 7.44513C7.72046 8.70412 8.74107 9.72474 10.0001 9.72474Z"
											fill="#FEEE00"
											stroke="#404553"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M18.5416 10.9987C18.5416 15.7161 14.7174 19.5404 9.99992 19.5404C5.28249 19.5404 1.45825 15.7161 1.45825 10.9987C1.45825 8.87298 2.23395 6.93003 3.51852 5.43504C5.08597 3.61083 7.40786 2.45703 9.99992 2.45703C14.7174 2.45703 18.5416 6.28127 18.5416 10.9987Z"
											stroke="#404553"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_3246_15982">
											<rect width="20" height="20" fill="white" transform="translate(0 0.998047)" />
										</clipPath>
									</defs>
								</svg>
								<p>Profile</p>
							</Link>
						</MenuItem>
						<hr className="my-2 border-blue-gray-50" />
						<MenuItem
							className="flex items-center gap-2"
							onClick={() => {
								signOut();
							}}
						>
							<Typography variant="small" className="font-medium">
								Sign Out
							</Typography>
						</MenuItem>
					</MenuList>
				</Menu>
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
												<Typography variant="h6" color="blue-gray">
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
												<Typography variant="h6" color="blue-gray">
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
												<Typography variant="h6" color="blue-gray">
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
												<Typography variant="h6" color="blue-gray">
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
												<Typography variant="h6" color="blue-gray">
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

			<li className={`px-2 font-medium border-black h-6 w-auto flex items-center`} style={{ borderLeftWidth: "1px" }}>
				<Link href="/wishlist" className="flex items-center hover:text-[#3866df] transition-colors">
					<span className="font-bold text-sm">Wishlist</span>
					{wishlistLength > 0 ? (
						<Badge content={wishlistLength} color="blue" className="bg-[#3866df] min-w-[20px] min-h-[20px]">
							<HeartIcon className="w-5 h-5 ml-1" />
						</Badge>
					) : (
						<HeartIcon className="w-5 h-5 ml-1" />
					)}
				</Link>
			</li>
			<li className={`px-2 font-medium border-black h-6 w-auto flex items-center`} style={{ borderLeftWidth: "1px" }}>
				<Link href="/cart" className="flex items-center hover:text-[#3866df] transition-colors">
					<span className="font-bold text-sm">Cart</span>
					{cartLength > 0 ? (
						<Badge content={cartLength} color="blue" className="bg-[#3866df] min-w-[20px] min-h-[20px]">
							<ShoppingCartIcon className="w-5 h-5 ml-1" />
						</Badge>
					) : (
						<ShoppingCartIcon className="w-5 h-5 ml-1" />
					)}
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
						className="w-full"
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
