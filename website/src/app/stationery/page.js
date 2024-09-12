"use client";
import React, { useEffect, useState } from "react";
import { CarouselMain } from "@/components/carousel-main";
import Image1 from "../../../public/images/stationery/carousel-img1.png";
import Image2 from "../../../public/images/stationery/carousel-img2.png";
import Image3 from "../../../public/images/stationery/carousel-img3.png";
import Image4 from "../../../public/images/stationery/carousel-img4.png";
import bannerImage from "../../../public/images/stationery/banner.png";

import { CategorySwiper } from "@/components/categorySwiper";
import { ProductSwiper } from "@/components/productsSwiper";
import Image from "next/image";
import StationaryCard from "@/components/stationary-card";

import { Spinner } from "@material-tailwind/react";

function Stationery() {
	// images for first items section
	const artsImages = [
		{ src: "/images/stationery/1-1.avif" },
		{ src: "/images/stationery/1-2.avif" },
		{ src: "/images/stationery/1-3.avif" },
		{ src: "/images/stationery/1-4.avif" },
	];

	const writingImages = [
		{ src: "/images/stationery/2-1.avif" },
		{ src: "/images/stationery/2-2.avif" },
		{ src: "/images/stationery/2-3.avif" },
		{ src: "/images/stationery/2-4.avif" },
	];

	const schoolImages = [
		{ src: "/images/stationery/3-1.avif" },
		{ src: "/images/stationery/3-2.avif" },
		{ src: "/images/stationery/3-3.avif" },
		{ src: "/images/stationery/3-4.avif" },
	];

	const officeImages = [
		{ src: "/images/stationery/4-1.avif" },
		{ src: "/images/stationery/4-2.avif" },
		{ src: "/images/stationery/4-3.avif" },
		{ src: "/images/stationery/4-4.avif" },
	];

	const officeToolsImages = [
		{ src: "/images/stationery/5-1.avif" },
		{ src: "/images/stationery/5-2.avif" },
		{ src: "/images/stationery/5-3.avif" },
		{ src: "/images/stationery/5-4.avif" },
		{ src: "/images/stationery/5-4.avif" },
	];

	const topBrandsImgs = [
		{ src: "/images/stationery/brand1.avif" },
		{ src: "/images/stationery/brand2.avif" },
		{ src: "/images/stationery/brand3.avif" },
		{ src: "/images/stationery/brand4.avif" },
		{ src: "/images/stationery/brand5.avif" },
		{ src: "/images/stationery/brand6.avif" },
		{ src: "/images/stationery/brand7.avif" },
		{ src: "/images/stationery/brand8.avif" },
		{ src: "/images/stationery/brand9.avif" },
		{ src: "/images/stationery/brand10.avif" },
	];

	const otherStaioneryImgs = [
		{ src: "/images/stationery/other1.avif" },
		{ src: "/images/stationery/other2.avif" },
		{ src: "/images/stationery/other3.avif" },
		{ src: "/images/stationery/other4.avif" },
		{ src: "/images/stationery/other5.avif" },
		{ src: "/images/stationery/other6.avif" },
	];

	// main carousel images
	const carouselImages = [Image1, Image2, Image3, Image4];
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState([]);
	const [stationaryProducts, setStationaryProducts] = useState([]);

	useEffect(() => {
		fetch("https://noon-clone-livid.vercel.app/api/products/")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				return response.json();
			})
			.then((data) => {
				setProducts([...data]);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		if (products.length > 0) {
			setStationaryProducts(products.filter((product) => product.category === "stationery"));
		}
	}, [products]);

	if (loading) {
		return (
			<div className="h-[80vh] flex items-center justify-center">
				<Spinner color="amber" className="h-16 w-16" />
			</div>
		);
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<div className="container-fluid mx-auto">
				<div className="px-1 md:px-12">
					<CarouselMain images={carouselImages}></CarouselMain>
					<div className="my-1">
						<CategorySwiper></CategorySwiper>
					</div>
					<div>
						<h2 className="text-2xl font-bold my-5">Best Seller</h2>
						<ProductSwiper data={stationaryProducts} />
					</div>
					<Image src={bannerImage} className="my-4 w-full"></Image>

					<StationaryCard titleImg={"/images/stationery/title1.png"} images={artsImages} />
					<StationaryCard titleImg={"/images/stationery/title2.png"} images={writingImages} />
					<StationaryCard titleImg={"/images/stationery/title3.png"} images={schoolImages} />
					<StationaryCard titleImg={"/images/stationery/title4.png"} images={officeImages} />
					<StationaryCard titleImg={"/images/stationery/title5.png"} images={officeToolsImages} />
					{/* top brands */}
					<StationaryCard titleImg={"/images/stationery/top-brands.avif"} images={topBrandsImgs} />
					{/* other stationery */}
					<StationaryCard titleImg={"/images/stationery/title-others.avif"} images={otherStaioneryImgs} />
				</div>
			</div>
		</>
	);
}

export default Stationery;
