"use client";
import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function () {
	return (
		<>
			<Card className="w-full max-w-[50rem] flex-row rounded-none py-2">
				<CardBody className="flex">
					<Typography color="gray" className=" font-thin text-sm">
						Like so many organizations these days, Autodesk is a company in transition. It was until recently a
						traditional boxed software company selling licenses. Yet its own business model
					</Typography>
					<a href="#" className="inline-block px-1 ">
						<Button variant="text" className=" text-red-800 text-xs  ">
							Dismiss
						</Button>
					</a>
				</CardBody>
			</Card>
		</>
	);
}
