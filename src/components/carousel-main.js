"use client";

import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import Image1 from "../../public/images/carousel-main-01.jpg";
import Image2 from "../../public/images/carousel-main-02.jpg";
import Image3 from "../../public/images/carousel-main-03.jpg";
import Image4 from "../../public/images/carousel-main-04.jpg";
import Image5 from "../../public/images/carousel-main-05.jpg";
import Image6 from "../../public/images/carousel-main-06.jpg";
import Image7 from "../../public/images/carousel-main-07.jpg";

export function CarouselMain() {
	return (
		<Carousel
			navigation={({ setActiveIndex, activeIndex, length }) => (
				<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
					{new Array(length).fill("").map((_, i) => (
						<span
							key={i}
							className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
								activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
							}`}
							onClick={() => setActiveIndex(i)}
						/>
					))}
				</div>
			)}
		>
			<Image src={Image1} width="auto" alt="image 1" className="h-full w-full object-cover" />
			<Image src={Image2} width="auto" alt="image 2" className="h-full w-full object-cover" />
			<Image src={Image3} width="auto" alt="image 3" className="h-full w-full object-cover" />
			<Image src={Image4} width="auto" alt="image 4" className="h-full w-full object-cover" />
			<Image src={Image5} width="auto" alt="image 5" className="h-full w-full object-cover" />
			<Image src={Image6} width="auto" alt="image 6" className="h-full w-full object-cover" />
			<Image src={Image7} width="auto" alt="image 7" className="h-full w-full object-cover" />
		</Carousel>
	);
}
