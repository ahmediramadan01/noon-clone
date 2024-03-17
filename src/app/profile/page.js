"use client";
import React from "react";
import { Header } from "@/components/header";
import { ProfileSidebar } from "@/components/profileSidebar";
import { ProfileFooter } from "@/components/profileFooter";
import { ProfileFormbody } from "@/components/profileFormbody";
export default function ProfilePage() {

	return (
		<>
			<Header></Header>
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
