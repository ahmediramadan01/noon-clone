"use client";

import React from "react";
import { Footer } from "@/components/footer";
import Image from "next/image";
import CartCard from "@/components/CartCard";
import CartCard2 from "@/components/CartCard2";
import CartCard3 from "@/components/CartCard3";
import CartCard4 from "@/components/CartCard4";
import { Header } from "@/components/header";
import Image9 from "../../../public/cart-1.png";

export default function CartPage() {
	return (
		<>
			<Header></Header>
			<div className="bg-gray-100 mx-auto px-6 ">
				<div className="flex flex-wrap ">
					<div className="w-full md:w-8/12 px-4">
						<div className=" p-4 ">
							<h1 className="p-1 text-2xl fw-bolder font-extrabold  font-sans">
								Cart <span className=" text-sm text-gray-500">(6 items)</span>
							</h1>
							<Image className="py-2  2xl:w-auto " src={Image9} layout="responsive"></Image>
							<CartCard2 />
							<CartCard />
							<CartCard />
							<CartCard />
							<CartCard />
							<CartCard />
							<CartCard />
						</div>
					</div>
					<div className="w-full md:w-4/12 px-2 relative ">
						<div className=" p-2 sticky top-0">
							<CartCard3 />
							<CartCard4 />
						</div>
					</div>
				</div>
			</div>

			{/* <Footer></Footer> */}
		</>
	);
}
