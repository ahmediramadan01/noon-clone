"use client";
import React, { useEffect, useState } from "react";
import { ProductGallery } from "@/components/product-gallery";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import DeliveryInfoItems from "@/components/delivery-info";
import ProductPrice from "@/components/product-price";
import WarrantyInfo from "@/components/warranty-info";

function ProductPage({ params }) {
	const productImages = ["/ps5-1.png", "/ps5-2.png", "/ps5-3.png", "/ps5-4.png"];

	const [product, setProduct] = useState({});

	useEffect(() => {
		fetch(`http://localhost:3000/api/products/${params.productId}`)
			.then((response) => response.json())
			.then((data) => {
				setProduct({ ...data });
			})
			.catch((error) => console.error(error));
	}, []);

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
						<div className="flex items-center shadow-md p-2 my-3">
							<div className="w-1/6 flex items-center flex-col">
								<span className="text-black-600 text-sm">Quantity: </span>
								<input type="number" className="border border-gray-300 rounded-lg p-2 w-16 h-10 mb-4" />
							</div>

							<div className="w-4/6 h-10 mx-2">
								<button className="bg-purple-500 text-white px-4 py-2 rounded-lg w-full">Add To Cart</button>
							</div>

							<div className="w-1/6 h-10  flex items-center bg-purple-50 rounded-lg">
								<HeartIcon className="w-6 h-6 m-auto" />
							</div>
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

				{/* product features section */}
				{/* <div className="my-5">
					<Features featuresImgSrc="/ps5-features.jpg" />
				</div> */}

				{/* related products */}
				{/* <div className="my-10">
					<h1 className="text-2xl font-semibold text-gray-900 h-20 flex items-center px-2">More Form Sony</h1>

					<div className="my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</div> */}
			</div>
		</>
	);
}

export default ProductPage;
