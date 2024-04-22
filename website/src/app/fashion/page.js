"use client";
import Image from "next/image";

import { CarouselMain } from "@/components/carousel-main";
import Image1 from "../../../public/imgFashion/imgFashion-1.jpg";
import Image2 from "../../../public/imgFashion/imgFashion-1.jpg";
import Image3 from "../../../public/imgFashion/imgFashion-1.jpg";
import Image4 from "../../../public/imgFashion/imgFashion-1.jpg";
import Image5 from "../../../public/imgFashion/imgFashion-1.jpg";
import Image6 from "../../../public/imgFashion/imgFashion-1.jpg";
import Image7 from "../../../public/imgFashion/imgFashion-1.jpg";
const carouselImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
import watchesGift from "../../../public/imgFashion/watch-gift.jpg";
import bestSeller from "../../../public/imgFashion/bestSeller.jpg";
import newArr from "../../../public/imgFashion/newArr.jpg";
import topDeal from "../../../public/imgFashion/topdeal.jpg";
import watchesvisit from "../../../public/imgFashion/visitWatch.jpg";
import visit1 from "../../../public/imgFashion/visit-1.jpg";
import visit2 from "../../../public/imgFashion/visit-2.jpg";
import trend from "../../../public/imgFashion/watchTrend.jpg";
import analog from "../../../public/imgFashion/analog.jpg";
import metalStrap from "../../../public/imgFashion/metal strap.jpg";
import strap2 from "../../../public/imgFashion/strap2.jpg";
import digitalWatch from "../../../public/imgFashion/digitalWatch.jpg";
import Brands from "../../../public/imgFashion/Brands.jpg";
import Brand1 from "../../../public/imgFashion/brand-1.jpg";
import Brand2 from "../../../public/imgFashion/brand-2.jpg";
import Brand3 from "../../../public/imgFashion/brand-3.jpg";
import Brand4 from "../../../public/imgFashion/brand-4.jpg";
import Brand5 from "../../../public/imgFashion/brand-5.jpg";
import Brand6 from "../../../public/imgFashion/brand-6.jpg";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { ProductSwiper } from "@/components/productsSwiper";
import { Spinner } from "@material-tailwind/react";

export default function FashionPage() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState([]);
	const [fashionProducts, setFashionProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/api/products/")
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
			setFashionProducts(products.filter((product) => product.category === "fashion"));
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
			<div className="mx-auto">
				<CarouselMain images={carouselImages}></CarouselMain>
				<Image src={watchesGift} className="w-full"></Image>
				<div className="flex justify-center gap-5     bg-green-100">
					<div>
						<Image src={bestSeller} className=" mt-5 mb-5"></Image>
					</div>
					<div>
						<Image src={newArr} className=" mt-5 mb-5"></Image>
					</div>
					<div>
						<Image src={topDeal} className=" mt-5 mb-5"></Image>
					</div>
				</div>
				<Image src={watchesvisit} className="w-full"></Image>
				<div className="grid justify-items-center grid-cols-2  mt-4">
					<Image src={visit1} className=""></Image>
					<Image src={visit2} className="  "></Image>
				</div>
				<Image src={trend} className="w-full"></Image>
				<div className="w-full h-1 bg-white"></div>

				<div className="grid grid-cols-4  bg-light-green-50 ">
					<Image src={analog} className="mb-5 ms-5"></Image>
					<Image src={metalStrap} className="mb-5 "></Image>

					<Image src={strap2} className="mb-5"></Image>

					<Image src={digitalWatch} className="mb-5"></Image>
				</div>
				<Image src={Brands} className="w-full "></Image>
				<div className="grid grid-cols-6 ms-5 items-center justify-center">
					<Image src={Brand1}></Image>
					<Image src={Brand2}></Image>
					<Image src={Brand3}></Image>
					<Image src={Brand4}></Image>
					<Image src={Brand5}></Image>
					<Image src={Brand6}></Image>
				</div>
				{/* <div className="grid grid-cols-6 ms-5">
                <ProductCard ></ProductCard>

            </div> */}
				<hr className="mt-5 mb-5"></hr>

				<div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 items-center justify-center">
					{fashionProducts.map((product, index) => (
						<div className="mb-5">
							<ProductCard key={index} data={product} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
