"use client";

import Image from "next/image";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import topBrandsImage0 from "../../public/images/top-brands/top-brands-00.png";
import topBrandsImage1 from "../../public/images/top-brands/top-brands-01.png";
import topBrandsImage2 from "../../public/images/top-brands/top-brands-02.png";
import topBrandsImage3 from "../../public/images/top-brands/top-brands-03.png";
import topBrandsImage4 from "../../public/images/top-brands/top-brands-04.png";
import topBrandsImage5 from "../../public/images/top-brands/top-brands-05.png";
import topBrandsImage6 from "../../public/images/top-brands/top-brands-06.png";
import topBrandsImage7 from "../../public/images/top-brands/top-brands-07.png";
import topBrandsImage8 from "../../public/images/top-brands/top-brands-08.png";
import topBrandsImage9 from "../../public/images/top-brands/top-brands-09.png";
import topBrandsImage10 from "../../public/images/top-brands/top-brands-10.png";
import topBrandsImage11 from "../../public/images/top-brands/top-brands-11.png";
import topBrandsImage12 from "../../public/images/top-brands/top-brands-12.png";
import topBrandsImage13 from "../../public/images/top-brands/top-brands-13.png";
import topBrandsImage14 from "../../public/images/top-brands/top-brands-14.png";
import topBrandsImage15 from "../../public/images/top-brands/top-brands-15.png";
import topBrandsImage16 from "../../public/images/top-brands/top-brands-16.png";
import topBrandsImage17 from "../../public/images/top-brands/top-brands-17.png";
import topBrandsImage18 from "../../public/images/top-brands/top-brands-18.png";
import topBrandsImage19 from "../../public/images/top-brands/top-brands-19.png";
import topBrandsImage20 from "../../public/images/top-brands/top-brands-20.png";
import topBrandsImage21 from "../../public/images/top-brands/top-brands-21.png";
import topBrandsImage22 from "../../public/images/top-brands/top-brands-22.png";

export function TopBrands() {
	return (
		<>
			<div className="bg-white px-4 pb-8">
				<Image src={topBrandsImage0} className="py-[10px] w-full"></Image>
				<Swiper
					className=""
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={12}
					slidesPerView={8}
					navigation
				>
					<SwiperSlide>
						<div className="grid grid-col-2 gap-4">
							<Image src={topBrandsImage1}></Image>
							<Image src={topBrandsImage2}></Image>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid-col-2 gap-4">
							<Image src={topBrandsImage3}></Image>
							<Image src={topBrandsImage4}></Image>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid-col-2 gap-4">
							<Image src={topBrandsImage5}></Image>
							<Image src={topBrandsImage6}></Image>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid-col-2 gap-4">
							<Image src={topBrandsImage7}></Image>
							<Image src={topBrandsImage8}></Image>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid-col-2 gap-4">
							<Image src={topBrandsImage9}></Image>
							<Image src={topBrandsImage10}></Image>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid-col-2 gap-4">
							<Image src={topBrandsImage11}></Image>
							<Image src={topBrandsImage12}></Image>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid-col-2 gap-4">
							<Image src={topBrandsImage13}></Image>
							<Image src={topBrandsImage14}></Image>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid-col-2 gap-4">
							<Image src={topBrandsImage15}></Image>
							<Image src={topBrandsImage16}></Image>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid-col-2 gap-4">
							<Image src={topBrandsImage17}></Image>
							<Image src={topBrandsImage18}></Image>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid-col-2 gap-4">
							<Image src={topBrandsImage19}></Image>
							<Image src={topBrandsImage20}></Image>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="grid grid-col-2 gap-4">
							<Image src={topBrandsImage21}></Image>
							<Image src={topBrandsImage22}></Image>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
