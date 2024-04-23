"use client";
//Swiper Imports
import Image from "next/image";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export function SmallCarousel({ images }) {
	return (
		<Swiper
			modules={[Navigation, Pagination, A11y]}
			spaceBetween={2}
			slidesPerView={12}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: false }}
		>
			{images.map((image, index) => (
				<SwiperSlide key={index}>
					<div className="md:col-span-1 bg-white">
						<Image
							src={image}
							alt={`image ${index + 1}`}
							width={300}
							height={200}
							className="h-full w-full object-cover"
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
