"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { ProfileSidebar } from "@/components/profileSidebar";
import { ProfileFooter } from "@/components/profileFooter";
import { OrderCard } from "@/components/order-card";

export default function OrdersPage() {
	const router = useRouter();
	const session = useSession();

	useEffect(() => {
		if (session?.status !== "authenticated") {
			router?.replace("/");
		}
	}, [session, router]);

	return (
		<>
			<div className="mx-auto bg-blue-gray-50">
				<div className="flex">
					<div className="lg:basis-1/6 md:basis-1/5  flex-col">
						<ProfileSidebar></ProfileSidebar>
					</div>
					<div className="grid grid-cols-2 overflow-auto max-h-[80vh]">
						<OrderCard></OrderCard>
						<OrderCard></OrderCard>
						<OrderCard></OrderCard>
						<OrderCard></OrderCard>
						<OrderCard></OrderCard>
						<OrderCard></OrderCard>
						<OrderCard></OrderCard>
						<OrderCard></OrderCard>
					</div>
				</div>
				<hr></hr>
			</div>
			<ProfileFooter></ProfileFooter>
		</>
	);
}
