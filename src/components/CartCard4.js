"use client";
import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function CartCard4() {
	return (
		<>
			<Card className="w-full rounded-lg  border border-cyan-800	 max-w-[50rem] flex-row  mt-2">
				<CardBody className="flex ">
					<Typography color="gray" className=" flex font-thin text-sm">
						<Image className=" " src="/cart-11.svg" width="60" height="60"></Image>
						<p className="pt-5 font-thin text-xs ml-9 pb-4 ">Pay 3 interest-free payments of EGP 30982.97</p>
					</Typography>
				</CardBody>
			</Card>
		</>
	);
}
