"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { ProfileSidebar } from "@/components/profileSidebar";
import { ProfileFooter } from "@/components/profileFooter";
import { OrderCard } from "@/components/order-card";

export default function OrdersPage() {
	const router = useRouter();
	const session = useSession();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (session?.status !== "authenticated") {
			router?.replace("/");
		} else {
			setOrders([...session.data.user.orders]);
		}
	}, [session, router]);

	useEffect(() => {
		console.log(orders);
	}, [orders]);

	return (
		<>
			<div className="mx-auto bg-blue-gray-50">
				<div className="flex">
					<div className="lg:basis-1/6 md:basis-1/5  flex-col">
						<ProfileSidebar></ProfileSidebar>
					</div>
					<div className="grid gap-4 overflow-auto max-h-[80vh] w-full p-4">
						{orders && orders.map((order, index) => <OrderCard data={order} />)}
					</div>
				</div>
				<hr></hr>
			</div>
			<ProfileFooter></ProfileFooter>
		</>
	);
}
