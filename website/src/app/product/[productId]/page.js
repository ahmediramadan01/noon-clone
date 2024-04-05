"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ProductGallery } from "@/components/product-gallery";
import Image from "next/image";
import DeliveryInfoItems from "@/components/delivery-info";
import ProductPrice from "@/components/product-price";
import WarrantyInfo from "@/components/warranty-info";
import { IconButton, Typography, Rating } from "@material-tailwind/react";

function ProductPage({ params }) {
	const session = useSession();
	const [product, setProduct] = useState({});
	const [cartQuantity, setCartQuantity] = useState(1);

	useEffect(() => {
		fetch(`http://localhost:3000/api/products/${params.productId}`)
			.then((response) => response.json())
			.then((data) => {
				setProduct({ ...data });
			})
			.catch((error) => console.error(error));
	}, []);

	useEffect(() => {
		if (session.data?.user.cart.some((item) => item.id === product._id)) {
			setCartQuantity(session.data?.user.cart.find((item) => item.id === product._id).quantity);
		}
	}, [product]);

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
		const cartItemIndex = session.data.user.cart.findIndex((item) => item.id === product._id);
		if (cartItemIndex === -1) {
			session.update({
				...session.data.user,
				cart: [...session.data.user.cart, { id: product._id, quantity: cartQuantity }],
				wishlist: [...session.data.user.wishlist.filter((productId) => productId !== product._id)],
			});
		} else {
			const newQuantity = session.data.user.cart[cartItemIndex].quantity + cartQuantity;
			if (newQuantity <= product.quantityInStock) {
				const updatedCart = session.data.user.cart.map((item, index) => {
					if (index === cartItemIndex) {
						return { ...item, quantity: newQuantity };
					}
					return item;
				});

				session.update({
					...session.data.user,
					cart: [...updatedCart],
				});
			}
		}
	};

	const DeliveryInfo = [
		{ imgSrc: "/secure_transaction.png", text: "Delivery by noon" },
		{ imgSrc: "/delivery_by_noon.png", text: "High Rated Seller" },
		{ imgSrc: "/high_rated_seller.png", text: "Secure Transaction" },
	];

	const warrantyInfoItems = [
		{ icon: "/warranty.svg", text: "1 year warranty", href: "#" },
		{ icon: "/noon-locker.svg", text: "Free delivery on Pickup Points", href: "#" },
		{ icon: "/non_returnable.svg", text: "This item cannot be exchanged or returned", href: "#" },
	];

	const [rated, setRated] = useState();

	useEffect(() => {
		setRated(session.data?.user.ratings?.find((item) => item.id === product._id)?.rating);
	}, [product]);

	useEffect(() => {
		console.log(rated);
	}, [rated]);

	const rateProduct = (value) => {
		setRated(0);
		if (value == rated) {
			const updatedRatings = session.data.user.ratings.filter((item) => item.id !== product._id);
			session.update({
				...session.data.user,
				ratings: updatedRatings,
			});
		} else {
			setRated(value);

			const updatedRatings = session.data.user.ratings.filter((item) => item.id !== product._id);
			session.update({
				...session.data.user,
				ratings: updatedRatings,
			});

			if (!session.data.user.ratings.some((item) => item.id === product._id)) {
				session.update({
					...session.data.user,
					ratings: [...session.data.user.ratings, { id: product._id, rating: value }],
				});
			} else {
				const updatedRatings = session.data.user.ratings.map((item) => {
					if (item.id === product._id) {
						return { ...item, rating: value };
					}
					return item;
				});
				session.update({
					...session.data.user,
					ratings: updatedRatings,
				});
			}
		}
	};

	return (
		<>
			<div className="mx-auto my-2">
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/2 lg:w-1/3 px-2">
						{/* product images gallery */}
						<ProductGallery data={product.images} />
					</div>

					{/* product info */}
					<div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2" style={{ borderRight: "1px solid #DDD" }}>
						<span className="brand">{product.brand}</span>
						<h1 className="font-semibold text-2xl my-5">{product.title}</h1>

						<div className="flex items-center gap-2 font-bold text-blue-gray-500">
							<Typography color="blue-gray" className="font-medium text-blue-gray-500">
								{product.rating} Based on {product.ratingQuantity} Ratings
							</Typography>

							<Rating
								unratedColor="amber"
								ratedColor="amber"
								value={rated || 0} // Use `rated` directly as the value, default to 0 if `rated` is falsy
								onChange={(value) => rateProduct(value)}
							/>
						</div>

						{/* product price */}
						<ProductPrice data={product} />

						<div className="delivery my-5 flex">
							<Image src={"/express.svg"} width={80} height={20}></Image>
							<div className="mx-4">Free Delivery by: </div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 ml-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
								/>
							</svg>
						</div>

						<div className="visa">
							<a href="#">
								<img src="/visa-banner.avif" alt="visa-banner" />
							</a>
						</div>

						{/* Render delivery info card */}
						<div className="mx-auto my-5 rounded p-6 shadow-md">
							<div className="flex justify-between items-center space-x-4">
								<DeliveryInfoItems data={DeliveryInfo} />
							</div>
						</div>

						{/* add to cart/wishlist buttons */}
						<div className="flex items-end justify-around p-2 my-3">
							<div className=" flex items-center flex-col">
								<span className="text-black-600 text-sm mb-2">Quantity</span>
								<select
									className="w-16 h-10 p-2 px-3 bg-white border-2 text-sm text-center rounded-md"
									value={cartQuantity}
									onChange={(event) => {
										setCartQuantity(parseInt(event.target.value));
									}}
								>
									{product &&
										Array.from({ length: product.quantityInStock }, (_, index) => (
											<option key={index + 1} value={index + 1}>
												{index + 1}
											</option>
										))}
								</select>
							</div>

							<div className="w-4/6 h-10">
								{session.data?.user.cart.some((item) => item.id === product._id) ? (
									<button
										onClick={addToCart}
										className="bg-[#3866df] text-white px-4 py-2 rounded-lg w-full flex gap-2 items-center justify-center"
									>
										<span className="text-[#3866df] rounded-full flex items-center justify-center bg-white border border-[#3866df] w-6 h-6 text-xs">
											{session.data.user.cart.find((item) => item.id === product._id).quantity}
										</span>
										Added To Cart
									</button>
								) : (
									<button onClick={addToCart} className="bg-[#3866df] text-white px-4 py-2 rounded-lg w-full">
										Add To Cart
									</button>
								)}
							</div>

							<IconButton
								size="md"
								color="white"
								variant="text"
								className="bg-white shadow-lg w-10 h-10"
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
						</div>

						{/* related products */}
					</div>

					{/* seller and warranty info */}
					<div className="w-full md:w-1/2 lg:w-1/3 px-2">
						{/* Content for the third column */}
						<WarrantyInfo items={warrantyInfoItems} />

						{/* seller info and rating*/}
						<div className="shadow-md w-9/10 ml-4 my-7 py-4 rounded-md">
							{/* seller name */}
							<div className="seller flex items-center px-5 py-2 border-b-2">
								<img src="/seller.svg" className="w-10 h-10 bg-purple-50 rounded-full mr-2" />
								Sold by
								<a href="#" className="text-blue-900 underline ml-2">
									Noon
								</a>
								<img src="/arrow-right.svg" className="w-8 h-8 rounded-full ml-auto" />
							</div>

							{/* seller rates */}
							<div className="seller flex items-center flex-wrap gap-5 px-3 my-5">
								<div className="flex items-center text-xs">
									<img src="/partner_icon.png" className="p-1 w-9 h- bg-purple-50 rounded-full mr-2" />
									<p>Partner since 3+y</p>
								</div>

								<div className="flex items-center text-xs">
									<img src="/product_as_described.png" className="p-1 w-9 h-9 bg-purple-50 rounded-full mr-2" />
									<div>
										<p>Product as described</p>
										<div className="flex items-center gap-1">
											<progress
												value="90"
												max="100"
												className="w-full h-3 bg-gray-100 rounded-full overflow-hidden"
											></progress>
											<span>90%</span>
										</div>
									</div>
								</div>

								<div className="flex items-center text-xs">
									<img src="/great_recent_rating.png" className="p-1 w-9 h- bg-purple-50 rounded-full mr-2" />
									<p>Great Recent Rating</p>
								</div>
							</div>
						</div>

						{/* shipping info */}
						<div className="shadow-md rounded-md px-5 py-5 flex flex-col gap-4 ml-4">
							<div className="flex items-start gap-2">
								<img src="/shipping-truck.svg" alt="shipping truck" className="w-8 h-8" />
								<div className="">
									<p className="text-sm text-black">TRUSTED SHIPPING</p>
									<p className=" text-gray-600 text-xs">
										Free shipping when you spend EGP 200 and above on express items
									</p>
								</div>
							</div>

							<div className="flex items-start gap-2">
								<img src="/secure_usp.svg" alt="shipping truck" className="w-8 h-8" />
								<div className="">
									<p className="text-sm text-black">SECURE SHOPPING</p>
									<p className=" text-gray-600 text-xs">Your data is always protected</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* overview section */}
				<div>
					<p className="p-2">{product.description}</p>
				</div>
			</div>
		</>
	);
}

export default ProductPage;
