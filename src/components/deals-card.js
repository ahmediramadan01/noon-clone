"use client";

import Image1 from "../../public/images/fashion.png";
import Image2 from "../../public/images/fashion2.jpg";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";

export function DealsCard() {
	return (
		<Card className="h-[283px] w-[288px] max-w-[100%] max-h-[100%] rounded-lg overflow-hidden flex flex-col">
			<CardBody className="flex flex-col items-center p-0 flex-grow">
				<Typography className="text-[#ea3d52] bg-[#f3e20c] py-[2px] px-[10px] font-semibold rounded-tr-lg rounded-bl-lg ml-auto mb-6">
					Fashion deals
				</Typography>
				<Image src={Image2} alt="this is my image" height="110" width="80" className="mb-3" />
			</CardBody>
			<CardFooter className="bg-gray-200 p-3">
				<Typography variant="h6" color="black">
					<span className="font-normal md:text-base sm:text-sm">Modest Wear</span>
					<br />
					<span className="text-2xl md:text-lg sm:text-base text-">Up to 80% Off</span>
				</Typography>
			</CardFooter>
		</Card>
	);
}
