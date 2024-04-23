"use client";

import Image from "next/image";

import CatImage1 from "../../public/images/cat/cat-01.png";
import CatImage2 from "../../public/images/cat/cat-02.png";
import CatImage3 from "../../public/images/cat/cat-03.png";
import CatImage4 from "../../public/images/cat/cat-04.png";
import CatImage5 from "../../public/images/cat/cat-05.png";
import CatImage6 from "../../public/images/cat/cat-06.png";
import CatImage7 from "../../public/images/cat/cat-07.png";
import CatImage8 from "../../public/images/cat/cat-08.png";
import CatImage9 from "../../public/images/cat/cat-09.png";
import CatImage10 from "../../public/images/cat/cat-10.png";
import CatImage11 from "../../public/images/cat/cat-11.png";
import CatImage12 from "../../public/images/cat/cat-12.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function CategorySwiper() {
	return (
		<>
			<Swiper
				className="bg-[#fff1e2] py-5"
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={12}
				slidesPerView={12}
				navigation
			>
				<SwiperSlide>
					<Image src={CatImage1}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage2}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage3}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage4}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage5}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage6}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage7}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage8}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage9}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage10}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage11}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage12}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage1}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage2}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage3}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage4}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage5}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage6}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage7}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage8}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage9}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage10}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage11}></Image>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={CatImage12}></Image>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
