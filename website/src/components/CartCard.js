"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function CartCard({ data }) {
	const session = useSession();
	const [product, setProduct] = useState({});

	useEffect(() => {
		setProduct({ ...data });
	}, [data]);

	const removeFromCart = () => {
		session.update({
			...session.data.user,
			cart: [...session.data.user.cart.filter((item) => item.id !== product._id)],
		});
	};

	const moveToWishlist = () => {
		if (!session.data.user.wishlist.includes(product._id)) {
			session.update({
				...session.data.user,
				wishlist: [...session.data.user.wishlist, product._id],
			});
		}
	};

	return (
		<>
			<Card className="w-full rounded-none  flex-row mt-2">
				<CardHeader shadow={false} floated={false} className="m-0 w-1/5 shrink-0 rounded-r-none">
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
				</CardHeader>
				<CardBody>
					<Typography
						variant=" md:h6"
						color="blue-gray"
						className="md:mb-2 sm:text-sm sm:font-bold md:text-sm md:font-bold"
					>
						{product.title}
					</Typography>
					<Typography color="gray" className="mb-8 text-xs font-xs">
						Order in the next 57 m <br />
						Get it <span className="p-0 font-extrabold text-green-900">Tomorrow.</span>
						<h4 className="pt-3">
							Sold by <span className="text-black font-extrabold">noon</span>
						</h4>
						<div className="flex pt-4 ">
							<Image className=" object-cover   " src="/cart-3.svg" width="25" height="25"></Image>
							<h4 className=" text-black px-2 py-1">This item cannot be exchanged or returned.</h4>
						</div>
					</Typography>

					<div className="flex w-auto">
						<div className="flex  ">
							<button className="flex items-center gap-2 border-2 text-xs p-2 me-3 rounded-md" onClick={removeFromCart}>
								<Image className=" object-cover   " src="/cart-4.svg" width="15" height="15"></Image>
								remove
							</button>

							<button className="flex items-center gap-2 border-2 rounded-md  text-xs p-2" onClick={moveToWishlist}>
								<Image className=" object-cover   " src="/cart-5.svg" width="15" height="15"></Image>
								Move to wishlist
							</button>
						</div>
						<div className=" absolute right-3 ">
							<label className="text-xs  sm:px-0 md:px-1 lg:px-2" for="op">
								Qty
							</label>
							<select id="op" className="p-2 px-3 bg-white border-2 text-sm text-center rounded-md">
								{product &&
									Array.from({ length: product.quantityInStock }, (_, index) => (
										<option key={index + 1} value={index + 1}>
											{index + 1}
										</option>
									))}
							</select>
						</div>
					</div>

					<div className="absolute top-4 right-1">
						<p>
							<h2 className=" xl:font-extrabold xl:text-xl sm:text-sm text-black">
								<span className="text-xs font-thin">EGP </span> {product.price}
							</h2>{" "}
							<span className="line-through text-xs">
								{product.price + (product.price * product.discountPercentage) / 100}
							</span>{" "}
							<span className="text-green-700  text-xs font-semibold">{product.discountPercentage}%</span>
							<Image className=" object-cover mt-2   " src="/cart-6.svg" width="60" height="60"></Image>
							<div className="flex gap-1 mt-3">
								<Image className="  " src="/cart-7.png" width="15" height="10"></Image>
								<h6 className="text-xs ms-auto">Free Delivery</h6>
							</div>
						</p>
					</div>
				</CardBody>
			</Card>
		</>
	);
}
