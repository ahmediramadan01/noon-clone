"use client";

import Image1 from "../../public/images/fashion.png";
import Image2 from "../../public/images/fashion2.jpg";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function DealsCard({ deal, image, title, discount }) {
	const [cardDeal, setCardDeal] = useState(deal);
	const [cardImage, setCardImage] = useState(image);
	const [cardTitle, setCardTitle] = useState(title);
	const [cardDiscount, setCardDiscount] = useState(discount);

	return (
		<Card className="h-[283px] w-[288px] max-w-[100%] max-h-[100%] rounded-lg overflow-hidden flex flex-col">
			<CardBody className="flex flex-col items-center p-0 flex-grow">
				<Typography className="text-[#ea3d52] bg-[#f3e20c] py-[2px] px-[10px] font-semibold rounded-tr-lg rounded-bl-lg ml-auto mb-6  lg:text-base md:text-sm sm:text-sm xs:text-sm">
					{cardDeal}
				</Typography>
				<Image src={cardImage} alt="this is my image" height="110" width="80" className="mb-3" />
			</CardBody>
			<CardFooter className="bg-gray-200 p-3">
				<Typography variant="h6" color="black">
					<span className="font-normal lg:text-base md:text-sm sm:text-sm xs:text-sm">{cardTitle}</span>
					<br />
					<span className="text-2xl lg:text-base md:text-sm sm:text-sm xs:text-sm">{cardDiscount}</span>
				</Typography>
			</CardFooter>
		</Card>
	);
}
