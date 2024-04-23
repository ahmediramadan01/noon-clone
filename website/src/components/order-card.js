"use client";
import Image from "next/image";
import orderImg from "../../public/ps5-1.png";
import React, { useEffect, useState } from "react";
import {
	ArrowPathIcon,
	BanknotesIcon,
	CalendarDaysIcon,
	CheckIcon,
	ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Spinner } from "@material-tailwind/react";

export function OrderCard({ data }) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [order, setOrder] = useState({});
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setOrder({ ...data });
	}, []);

	useEffect(() => {
		console.log(order);
		setLoading(true);
		const getOrderProducts = async () => {
			try {
				const orderProducts = await Promise.all(
					order.orderItems.map(async (item) => {
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
				setProducts(orderProducts);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		getOrderProducts();
	}, [order]);

	useEffect(() => {
		console.log(products);
	}, [products]);

	if (loading) {
		return (
			<div className="w-full h-full p-2 flex flex-col-reverse items-center justify-center gap-2 bg-white rounded">
				<Spinner color="amber" className="h-16 w-16" />
			</div>
		);
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className="w-full h-full p-2 flex flex-col-reverse items-center justify-center gap-2 bg-white rounded">
			<div className="w-full h-1/3 font-bold text-base flex items-center">
				Status:
				{order.orderStatus === "pending" ? (
					<span className="mx-2 font-normal flex items-center text-red-500">
						<ArrowPathIcon className="w-5 h-5 mx-1" />
						Pending
					</span>
				) : (
					<span className="mx-2 font-normal flex items-center text-green-500">
						<CheckIcon className="w-5 h-5 mx-1" />
						Completed
					</span>
				)}
			</div>
			<div className="flex w-full h-2/3">
				<div className="hidden">ID</div>
				<div className="border h-full w-1/4 flex items-center justify-center p-2">
					<span className="font-bold text-md flex items-center flex-col lg:flex-row">
						<CalendarDaysIcon className="w-7 h-7 mr-2" />
						Date:
						<span className="text-sm mx-2">{new Date(order.orderDate).toLocaleDateString()}</span>
					</span>
				</div>

				<div className="border h-full w-1/4 flex items-center justify-center">
					<span className="font-bold text-md flex items-center p-2 flex-col lg:flex-row">
						<BanknotesIcon className="w-7 h-7 mr-2" />
						Price:
						<span className="text-sm mx-2">
							{order.orderPrice}
							<span> EGP</span>
						</span>
					</span>
				</div>

				<div className="border h-full w-2/4 flex items-center flex-col lg:flex-row">
					<span className="font-bold text-md flex items-center p-2">
						<ShoppingBagIcon className="w-7 h-7 mr-2" />
						Products:
					</span>

					<div className="h-full w-full flex flex-col items-center justify-evenly overflow-x-auto whitespace-nowrap">
						{products &&
							products.map((product, index) => (
								<div className="h-1/5 w-full flex items-center justify-center p-1 bg-yellow-200 rounded my-1 py-2">
									{product.title.slice(0, 15)}... | Q: {product.quantity}
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
