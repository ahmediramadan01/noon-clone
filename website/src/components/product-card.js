"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Card, CardHeader, CardBody, CardFooter, Typography, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ data }) {
	const session = useSession();
	const [product, setProduct] = useState({});

	useEffect(() => {
		setProduct({ ...data });
	}, [data]);

	const addToWishlist = () => {
		if (!session.data.user.wishlist.includes(product._id)) {
			session.update({
				...session.data.user,
				wishlist: [...session.data.user.wishlist, product._id],
				cart: [...session.data.user.cart.filter((item) => item.id !== product._id)],
			});
		} else {
			session.update({
				...session.data.user,
				wishlist: [...session.data.user.wishlist.filter((productId) => productId !== product._id)],
			});
		}
	};

	const addToCart = () => {
		if (!session.data.user.cart.some((item) => item.id === product._id)) {
			session.update({
				...session.data.user,
				cart: [...session.data.user.cart, { id: product._id, quantity: 1 }],
				wishlist: [...session.data.user.wishlist.filter((productId) => productId !== product._id)],
			});
		} else {
			session.update({
				...session.data.user,
				cart: [...session.data.user.cart.filter((item) => item.id !== product._id)],
			});
		}
	};

	return (
		<Card className="w-full max-w-[26rem] shadow-lg">
			<CardHeader floated={false} color="transparent" className="flex justify-center">
				<Image
					src={product.thumbnail}
					width="175"
					height="240"
					alt="Product Image"
					className="m-10"
					style={{
						objectFit: "contain",
						width: "175px",
						height: "240px",
					}}
				/>

				<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-black/5 " />
				<IconButton
					size="md"
					color="white"
					variant="text"
					className="!absolute top-4 right-4 bg-white shadow-lg"
					onClick={addToWishlist}
				>
					<svg
						width="25"
						height="25"
						viewBox="0 0 20 20"
						fill={session.data?.user.wishlist.includes(product._id) ? "#3866df" : "none"}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M17.3667 3.84172C16.941 3.41589 16.4357 3.0781 15.8795 2.84763C15.3232 2.61716 14.7271 2.49854 14.125 2.49854C13.5229 2.49854 12.9268 2.61716 12.3705 2.84763C11.8143 3.0781 11.309 3.41589 10.8833 3.84172L10 4.72506L9.11666 3.84172C8.25692 2.98198 7.09086 2.49898 5.875 2.49898C4.65914 2.49898 3.49307 2.98198 2.63333 3.84172C1.77359 4.70147 1.29059 5.86753 1.29059 7.08339C1.29059 8.29925 1.77359 9.46531 2.63333 10.3251L3.51666 11.2084L10 17.6917L16.4833 11.2084L17.3667 10.3251C17.7925 9.89943 18.1303 9.39407 18.3608 8.83785C18.5912 8.28164 18.7099 7.68546 18.7099 7.08339C18.7099 6.48132 18.5912 5.88514 18.3608 5.32893C18.1303 4.77271 17.7925 4.26735 17.3667 3.84172V3.84172Z"
							stroke={session.data?.user.wishlist.includes(product._id) ? "none" : "#7E859B"}
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</IconButton>
				<IconButton
					size="md"
					color="white"
					variant="text"
					className={`!absolute bottom-4 right-4 ${
						session.data?.user.cart.some((item) => item.id === product._id) ? "bg-[#3866df]" : "bg-[#fff]"
					} shadow-lg`}
					onClick={addToCart}
				>
					<svg
						width="25"
						height="25"
						viewBox="0 0 20 20"
						fill={session.data?.user.cart.some((item) => item.id === product._id) ? "none" : "#fff"}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.125 4.56689H3.18573L3.803 7.31653L5.13521 13.2495H14.7469L16.3343 7.87281"
							stroke={session.data?.user.cart.some((item) => item.id === product._id) ? "#fff" : "#454956"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M6.94436 16.5C7.50644 16.5 7.96209 16.0444 7.96209 15.4823C7.96209 14.9202 7.50644 14.4646 6.94436 14.4646C6.38229 14.4646 5.92664 14.9202 5.92664 15.4823C5.92664 16.0444 6.38229 16.5 6.94436 16.5Z"
							fill={session.data?.user.cart.some((item) => item.id === product._id) ? "#fff" : "#454956"}
						/>
						<path
							d="M13.3427 16.5C13.9048 16.5 14.3604 16.0444 14.3604 15.4823C14.3604 14.9202 13.9048 14.4646 13.3427 14.4646C12.7806 14.4646 12.325 14.9202 12.325 15.4823C12.325 16.0444 12.7806 16.5 13.3427 16.5Z"
							fill={session.data?.user.cart.some((item) => item.id === product._id) ? "#fff" : "#454956"}
						/>
						<path
							d="M10.162 3V8.97255"
							stroke={session.data?.user.cart.some((item) => item.id === product._id) ? "#fff" : "#454956"}
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
						<path
							d="M13.1483 5.98631H7.17544"
							stroke={session.data?.user.cart.some((item) => item.id === product._id) ? "#fff" : "#454956"}
							strokeWidth="1.5"
							strokeLinecap="round"
						/>
					</svg>
				</IconButton>
				<Typography color="black" className="!absolute bottom-4 left-4 flex items-center gap-1.5 font-normal">
					{typeof product?.rating === "number" && !isNaN(product.rating) && product.rating > 0
						? product.rating.toFixed(1)
						: "0"}

					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="-mt-0.5 h-5 w-5 text-green-700"
					>
						<path
							fillRule="evenodd"
							d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="text-gray-400">{product.ratingQuantity}</span>
				</Typography>
			</CardHeader>
			<CardBody>
				<div className="mb-3 flex items-center justify-between">
					<Link href={`/product/${product._id}`}>
						<Typography variant="h6" color="blue-gray" className="font-medium text-sm">
							{product.title}
						</Typography>
					</Link>
				</div>
				<p className="text-xs">
					EGP <span className="font-bold text-sm">{product.price}</span>{" "}
					<span className="line-through">{product.price + (product.price * product.discountPercentage) / 100}</span>{" "}
					<span className="text-green-700 font-semibold">{product.discountPercentage}%</span>
				</p>
			</CardBody>
			<CardFooter className="pt-3">
				<svg width="60" height="20" viewBox="0 0 82 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M82 0C81.6986 1.14758 78.4111 13.3232 77.4248 16.2901C76.603 18.8372 73.9729 21.4682 69.2608 22C68.8498 21.972 11.9447 22 11.1228 22H10.7667C10.6023 22 10.4379 22 10.2736 22C4.54776 21.7481 0 16.9338 0 11.028C0 7.9771 1.20543 5.2341 3.15056 3.24682C5.09569 1.23155 7.80791 0 10.7667 0H82Z"
						fill="#FEEE00"
					/>
					<path
						d="M12.1576 15.1428C13.2913 15.1428 14.5007 14.8037 15.3888 14.2009L14.6518 12.5245C14.085 12.9577 13.1591 13.1838 12.3465 13.1838C10.6459 13.1838 9.83338 12.1478 9.83338 11.3755C9.83338 11.319 9.83338 11.2059 9.83338 11.1494H16.617C16.6926 10.8669 16.806 10.1888 16.806 9.6425C16.806 7.09957 15.0487 5.59265 12.7056 5.59265C9.66331 5.59265 7.43359 8.09791 7.43359 11.0552C7.43359 13.5982 9.28539 15.1428 12.1576 15.1428ZM14.6329 9.49181H10.0979C10.2869 8.49348 11.2506 7.55165 12.5544 7.55165C13.9905 7.55165 14.6707 8.38046 14.6707 9.30345C14.6707 9.34112 14.6707 9.45414 14.6518 9.49181H14.6329Z"
						fill="#404553"
					/>
					<path
						d="M25.8521 14.9167L23.6224 10.2453L27.6661 5.81869H24.9073L22.3941 8.6065L21.147 5.81869H18.5394L20.599 10.2453L16.3286 14.9167H19.0685L21.8462 11.8464L23.2634 14.9167H25.8521Z"
						fill="#404553"
					/>
					<path
						d="M32.6151 15.1428C35.714 15.1428 37.4146 12.0913 37.4146 9.35996C37.4146 6.94888 36.0163 5.59265 33.9567 5.59265C32.8607 5.59265 31.9726 6.04473 31.1979 6.94888L31.4624 5.81869H29.0626L26.266 18.3827H28.6658L29.7051 13.7112C30.3098 14.6153 31.3868 15.1428 32.6151 15.1428ZM32.2183 13.0142C31.2546 13.0142 30.4798 12.581 30.083 11.9594L30.8011 8.8137C31.2924 8.19209 32.0482 7.72118 32.8796 7.72118C34.0512 7.72118 34.9015 8.54999 34.9015 9.84971C34.9015 11.5262 33.8055 13.0142 32.2183 13.0142Z"
						fill="#404553"
					/>
					<path
						d="M40.457 14.9167L41.7797 8.94555C42.3088 8.34278 43.1592 7.85303 44.0473 7.85303C44.4252 7.85303 44.7653 7.92838 44.9165 7.96605L45.4456 5.59265C43.9906 5.59265 43.008 6.13891 42.2144 7.00539L42.4789 5.81869H40.0791L38.0573 14.9167H40.457Z"
						fill="#404553"
					/>
					<path
						d="M49.9494 15.1428C51.0832 15.1428 52.2925 14.8037 53.1806 14.2009L52.4437 12.5245C51.8768 12.9577 50.9509 13.1838 50.1384 13.1838C48.4378 13.1838 47.6252 12.1478 47.6252 11.3755C47.6252 11.319 47.6252 11.2059 47.6252 11.1494H54.4089C54.4845 10.8669 54.5978 10.1888 54.5978 9.6425C54.5978 7.09957 52.8405 5.59265 50.4974 5.59265C47.4552 5.59265 45.2254 8.09791 45.2254 11.0552C45.2254 13.5982 47.0773 15.1428 49.9494 15.1428ZM52.4248 9.49181H47.8898C48.0787 8.49348 49.0424 7.55165 50.3462 7.55165C51.7823 7.55165 52.4626 8.38046 52.4626 9.30345C52.4626 9.34112 52.4626 9.45414 52.4437 9.49181H52.4248Z"
						fill="#404553"
					/>
					<path
						d="M59.279 15.1428C61.7733 15.1428 63.2283 13.6924 63.2283 11.9594C63.2283 9.19043 58.5799 9.4353 58.5799 8.32395C58.5799 7.85303 59.0523 7.4763 59.9026 7.4763C61.0174 7.4763 62.1512 8.09791 62.5858 8.663L63.8329 7.0619C62.9637 6.17658 61.5087 5.59265 59.9593 5.59265C57.5217 5.59265 56.199 7.08074 56.199 8.663C56.199 11.3943 60.8474 11.0929 60.8474 12.3173C60.8474 12.8259 60.3372 13.2591 59.5247 13.2591C58.2019 13.2591 56.8792 12.468 56.3312 11.8275L54.9896 13.504C56.01 14.5777 57.6162 15.1428 59.279 15.1428Z"
						fill="#404553"
					/>
					<path
						d="M68.2841 15.1428C70.7784 15.1428 72.2333 13.6924 72.2333 11.9594C72.2333 9.19043 67.5849 9.4353 67.5849 8.32395C67.5849 7.85303 68.0573 7.4763 68.9077 7.4763C70.0225 7.4763 71.1563 8.09791 71.5909 8.663L72.838 7.0619C71.9688 6.17658 70.5138 5.59265 68.9643 5.59265C66.5268 5.59265 65.2041 7.08074 65.2041 8.663C65.2041 11.3943 69.8525 11.0929 69.8525 12.3173C69.8525 12.8259 69.3423 13.2591 68.5297 13.2591C67.207 13.2591 65.8843 12.468 65.3363 11.8275L63.9947 13.504C65.0151 14.5777 66.6213 15.1428 68.2841 15.1428Z"
						fill="#404553"
					/>
				</svg>
			</CardFooter>
		</Card>
	);
}
