"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default function SuccessfulOrder() {
	const session = useSession();
	const [userCart, setUserCart] = useState([]);

	useEffect(() => {
		const getCartProducts = async () => {
			try {
				const cartProducts = await Promise.all(
					session.data.user.cart.map(async (item) => {
						const response = await fetch(`http://localhost:3000/api/products/${item.id}`);
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
				const orderPrice = cartProducts.reduce(
					(totalPrice, product) => totalPrice + product.price * product.quantity,
					0
				);
				if (session?.status === "authenticated" && session.data.user.cart.length > 0) {
					const newOrder = {
						orderId: uuidv4(),
						orderItems: [...session.data.user.cart],
						orderDate: new Date(),
						orderPrice: orderPrice,
						orderStatus: "pending",
					};

					session.update({
						...session.data.user,
						orders: [...session.data.user.orders, newOrder],
						cart: [],
					});
				}
			} catch (error) {
				console.error(error);
			}
		};
		if (session) {
			getCartProducts();
		}
	}, [session]);

	return (
		<>
			<main className="flex flex-col items-center min-h-[75vh] justify-center ">
				<p className="mb-[4px] text-[#404553] font-sans text-3xl font-bold">Thank you! You order has been placed</p>
				<p className="text-[#404553] text-base">You order is now pending and awaiting approval :D</p>
				<Link href="/" className="mt-[20px] text-white bg-[#3866df] py-[12px] px-[20px] rounded font-bold">
					BACK TO HOMEPAGE
				</Link>
			</main>
		</>
	);
}
