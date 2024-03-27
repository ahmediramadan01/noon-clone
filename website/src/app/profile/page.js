"use client";

import React, { useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { ProfileSidebar } from "@/components/profileSidebar";
import { ProfileFooter } from "@/components/profileFooter";
import { ProfileFormbody } from "@/components/profileFormbody";

export default function ProfilePage() {
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
				<div className="flex ">
					<div className="lg:basis-1/6 md:basis-1/5  flex-col ">
						<ProfileSidebar></ProfileSidebar>
					</div>

					<ProfileFormbody></ProfileFormbody>
				</div>
				<hr></hr>
			</div>
			<ProfileFooter></ProfileFooter>
		</>
	);
}
