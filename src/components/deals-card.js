"use client";
import Image1 from "../../public/images/fashion.png";
import Image2 from "../../public/images/fashion2.jpg";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";

export function DealsCard() {
	return (
		<div className="container mx-auto  ">
			<Card className="w-96 mt-2 ms-3  justify-center">
				<Typography className="flex justify-end px-0 pt-0 mt-2  ">
					{/* <img src="/public/images/fashion.png" alt="fashion" /> */}
					<Image src={Image1} alt="this is my image" />
				</Typography>
				<CardBody className="flex flex-col items-center pb-10">
					<Image src={Image2} alt="this is my image" height="100" width="100" className="mb-3  " />
				</CardBody>
				<CardFooter className="flex justify-center gap-7 pt-2 bg-gray-200 h-50">
					<Typography variant="h6" color="black" className="mb-2">
						Modest Wear
						<br />
						Up to 80% Off
					</Typography>
				</CardFooter>
			</Card>
		</div>
	);
}
