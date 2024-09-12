"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CartCard from "@/components/CartCard";
import CartCard2 from "@/components/CartCard2";
import CartCard3 from "@/components/CartCard3";
import CartCard4 from "@/components/CartCard4";
import Image9 from "../../../public/cart-1.png";
import { Spinner } from "@material-tailwind/react";

export default function CartPage() {
	const session = useSession();
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [userCart, setUserCart] = useState([]);

	useEffect(() => {
		setLoading(true);
		const getCartProducts = async () => {
			try {
				const cartProducts = await Promise.all(
					session.data.user.cart.map(async (item) => {
						const response = await fetch(`https://noon-clone-livid.vercel.app/api/products/${item.id}`);
						if (!response.ok) {
							throw new Error(`Error getting ${item.id} product`);
						}
						const product = await response.json();
						return {
							...product,
							quantity: item.quantity,
						};
					})
				);
				setUserCart(cartProducts);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getCartProducts();
	}, [session]);

	useEffect(() => {
		if (session?.status !== "authenticated") {
			setLoading(false);
			router?.refresh();
		}
	}, [session, router]);

	if (loading) {
		return (
			<div className="h-[80vh] flex items-center justify-center">
				<Spinner color="amber" className="h-16 w-16" />
			</div>
		);
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<div className="bg-gray-100 mx-auto px-6 ">
				<div className="flex flex-wrap ">
					<div className="w-full md:w-8/12 px-4">
						<div className=" p-4 ">
							<h1 className="p-1 text-2xl fw-bolder font-extrabold  font-sans">
								Cart{" "}
								<span className=" text-sm text-gray-500">
									({session.data?.user.cart.reduce((totalQuantity, product) => totalQuantity + product.quantity, 0)}{" "}
									items)
								</span>
							</h1>
							<Image className="py-2  2xl:w-auto " src={Image9} layout="responsive"></Image>
							<CartCard2 />
							{userCart && userCart.map((product, index) => <CartCard key={index} data={product} />)}
						</div>
					</div>
					<div className="w-full md:w-4/12 px-2 relative ">
						<div className=" p-2 sticky top-0">
							<CartCard3 data={userCart} />
							<CartCard4 />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
