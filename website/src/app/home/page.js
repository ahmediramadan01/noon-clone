"use client";

import Image from "next/image";

import bankInstallmentsImage from "../../../public/images/bank-installments.jpg";
import { CarouselMain } from "@/components/carousel-main";
import Image1 from "../../../public/images/carousel-main-01.jpg";
import Image2 from "../../../public/images/carousel-main-02.jpg";
import Image3 from "../../../public/images/carousel-main-03.jpg";
import Image4 from "../../../public/images/carousel-main-04.jpg";
import Image5 from "../../../public/images/carousel-main-05.jpg";
import Image6 from "../../../public/images/carousel-main-06.jpg";
import Image7 from "../../../public/images/carousel-main-07.jpg";

const carouselImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

import reasonsImage0 from "../../../public/images/reasons/reasons-00.png";
import reasonsImage1 from "../../../public/images/reasons/reasons-01.png";
import reasonsImage2 from "../../../public/images/reasons/reasons-02.png";
import reasonsImage3 from "../../../public/images/reasons/reasons-03.png";
import reasonsImage4 from "../../../public/images/reasons/reasons-04.png";

import dealsImage0 from "../../../public/images/deals-00.png";
import dealsImage1 from "../../../public/images/deals-01.jpg";
import dealsImage2 from "../../../public/images/deals-02.jpg";
import dealsImage3 from "../../../public/images/deals-03.jpg";
import dealsImage4 from "../../../public/images/deals-04.jpg";

import focusImage0 from "../../../public/images/focus/focus-00.png";
import focusImage1 from "../../../public/images/focus/focus-01.png";
import focusImage2 from "../../../public/images/focus/focus-02.png";

import sponsoredImage from "../../../public/images/sponsored.png";

import mothersdayImage0 from "../../../public/images/mothersday/mothersday-00.png";
import mothersdayImage1 from "../../../public/images/mothersday/mothersday-01.png";
import mothersdayImage2 from "../../../public/images/mothersday/mothersday-02.png";
import mothersdayImage3 from "../../../public/images/mothersday/mothersday-03.png";
import mothersdayImage4 from "../../../public/images/mothersday/mothersday-04.png";
import mothersdayImage5 from "../../../public/images/mothersday/mothersday-05.png";

const mothersdayImages = [
	mothersdayImage0,
	mothersdayImage1,
	mothersdayImage2,
	mothersdayImage3,
	mothersdayImage4,
	mothersdayImage5,
];

import joyImage from "../../../public/images/joy.gif";

import offersImage0 from "../../../public/images/offers/offer-00.png";
import offersImage1 from "../../../public/images/offers/offer-01.png";
import offersImage2 from "../../../public/images/offers/offer-02.png";
import offersImage3 from "../../../public/images/offers/offer-03.png";
import offersImage4 from "../../../public/images/offers/offer-04.png";

const offersImages = [offersImage0, offersImage1, offersImage2, offersImage3, offersImage4];

import ramadanDealsImage from "../../../public/images/ramadan-deals.png";

import savingsImage0 from "../../../public/images/savings/savings-00.png";
import savingsImage1 from "../../../public/images/savings/savings-01.png";
import savingsImage2 from "../../../public/images/savings/savings-02.png";
import savingsImage3 from "../../../public/images/savings/savings-03.png";
import savingsImage4 from "../../../public/images/savings/savings-04.png";
import savingsImage5 from "../../../public/images/savings/savings-05.png";
import savingsImage6 from "../../../public/images/savings/savings-06.png";

const savingsImages = [
	savingsImage0,
	savingsImage1,
	savingsImage2,
	savingsImage3,
	savingsImage4,
	savingsImage5,
	savingsImage6,
];

import wellnessImage from "../../../public/images/wellness.png";

import supermarketImage0 from "../../../public/images/supermarket/supermarket-00.png";
import supermarketImage1 from "../../../public/images/supermarket/supermarket-01.png";
import supermarketImage2 from "../../../public/images/supermarket/supermarket-02.png";
import supermarketImage3 from "../../../public/images/supermarket/supermarket-03.png";
import supermarketImage4 from "../../../public/images/supermarket/supermarket-04.png";
import supermarketImage5 from "../../../public/images/supermarket/supermarket-05.png";
import supermarketImage6 from "../../../public/images/supermarket/supermarket-06.png";
import supermarketImage7 from "../../../public/images/supermarket/supermarket-07.png";

const supermarketImages = [
	supermarketImage0,
	supermarketImage1,
	supermarketImage2,
	supermarketImage3,
	supermarketImage4,
	supermarketImage5,
	supermarketImage6,
	supermarketImage7,
];

import ramadanGroceriesImage from "../../../public/images/ramadan-groceries.png";

import kitchenImage0 from "../../../public/images/kitchen/kitchen-00.png";
import kitchenImage1 from "../../../public/images/kitchen/kitchen-01.png";
import kitchenImage2 from "../../../public/images/kitchen/kitchen-02.png";
import kitchenImage3 from "../../../public/images/kitchen/kitchen-03.png";
import kitchenImage4 from "../../../public/images/kitchen/kitchen-04.png";
import kitchenImage5 from "../../../public/images/kitchen/kitchen-05.png";
import kitchenImage6 from "../../../public/images/kitchen/kitchen-06.png";

const kitchenImages = [
	kitchenImage0,
	kitchenImage1,
	kitchenImage2,
	kitchenImage3,
	kitchenImage4,
	kitchenImage5,
	kitchenImage6,
];

import ramadanEssentialsImage from "../../../public/images/ramadan-essentials.png";

import appliancesImage0 from "../../../public/images/appliances/appliances-00.png";
import appliancesImage1 from "../../../public/images/appliances/appliances-01.png";
import appliancesImage2 from "../../../public/images/appliances/appliances-02.png";
import appliancesImage3 from "../../../public/images/appliances/appliances-03.png";
import appliancesImage4 from "../../../public/images/appliances/appliances-04.png";
import appliancesImage5 from "../../../public/images/appliances/appliances-05.png";
import appliancesImage6 from "../../../public/images/appliances/appliances-06.png";

const appliancesImages = [
	appliancesImage0,
	appliancesImage1,
	appliancesImage2,
	appliancesImage3,
	appliancesImage4,
	appliancesImage5,
	appliancesImage6,
];

import topAppliancesImage from "../../../public/images/top-appliances.png";

import ramadanStyleImage0 from "../../../public/images/ramadan-style/ramadan-style-00.png";
import ramadanStyleImage1 from "../../../public/images/ramadan-style/ramadan-style-01.png";
import ramadanStyleImage2 from "../../../public/images/ramadan-style/ramadan-style-02.png";
import ramadanStyleImage3 from "../../../public/images/ramadan-style/ramadan-style-03.png";
import ramadanStyleImage4 from "../../../public/images/ramadan-style/ramadan-style-04.png";
import ramadanStyleImage5 from "../../../public/images/ramadan-style/ramadan-style-05.png";

const ramadanStyleImages = [
	ramadanStyleImage0,
	ramadanStyleImage1,
	ramadanStyleImage2,
	ramadanStyleImage3,
	ramadanStyleImage4,
	ramadanStyleImage5,
];

import womensFashionImage0 from "../../../public/images/womens-fashion/womens-fashion-00.png";
import womensFashionImage1 from "../../../public/images/womens-fashion/womens-fashion-01.png";
import womensFashionImage2 from "../../../public/images/womens-fashion/womens-fashion-02.png";
import womensFashionImage3 from "../../../public/images/womens-fashion/womens-fashion-03.png";
import womensFashionImage4 from "../../../public/images/womens-fashion/womens-fashion-04.png";
import womensFashionImage5 from "../../../public/images/womens-fashion/womens-fashion-05.png";
import womensFashionImage6 from "../../../public/images/womens-fashion/womens-fashion-06.png";
import womensFashionImage7 from "../../../public/images/womens-fashion/womens-fashion-07.png";

const womensFashionImages = [
	womensFashionImage0,
	womensFashionImage1,
	womensFashionImage2,
	womensFashionImage3,
	womensFashionImage4,
	womensFashionImage5,
	womensFashionImage6,
	womensFashionImage7,
];

import mensFashionImage0 from "../../../public/images/mens-fashion/mens-fashion-00.png";
import mensFashionImage1 from "../../../public/images/mens-fashion/mens-fashion-01.png";
import mensFashionImage2 from "../../../public/images/mens-fashion/mens-fashion-02.png";
import mensFashionImage3 from "../../../public/images/mens-fashion/mens-fashion-03.png";
import mensFashionImage4 from "../../../public/images/mens-fashion/mens-fashion-04.png";
import mensFashionImage5 from "../../../public/images/mens-fashion/mens-fashion-05.png";
import mensFashionImage6 from "../../../public/images/mens-fashion/mens-fashion-06.png";
import mensFashionImage7 from "../../../public/images/mens-fashion/mens-fashion-07.png";

const mensFashionImages = [
	mensFashionImage0,
	mensFashionImage1,
	mensFashionImage2,
	mensFashionImage3,
	mensFashionImage4,
	mensFashionImage5,
	mensFashionImage6,
	mensFashionImage7,
];

import kidsFashionImage0 from "../../../public/images/kids-fashion/kids-fashion-00.png";
import kidsFashionImage1 from "../../../public/images/kids-fashion/kids-fashion-01.png";
import kidsFashionImage2 from "../../../public/images/kids-fashion/kids-fashion-02.png";
import kidsFashionImage3 from "../../../public/images/kids-fashion/kids-fashion-03.png";
import kidsFashionImage4 from "../../../public/images/kids-fashion/kids-fashion-04.png";
import kidsFashionImage5 from "../../../public/images/kids-fashion/kids-fashion-05.png";
import kidsFashionImage6 from "../../../public/images/kids-fashion/kids-fashion-06.png";
import kidsFashionImage7 from "../../../public/images/kids-fashion/kids-fashion-07.png";

const kidsFashionImages = [
	kidsFashionImage0,
	kidsFashionImage1,
	kidsFashionImage2,
	kidsFashionImage3,
	kidsFashionImage4,
	kidsFashionImage5,
	kidsFashionImage6,
	kidsFashionImage7,
];

import eyewareImage from "../../../public/images/eyeware.png";
import watchesImage from "../../../public/images/watches.png";

import ramadanMustHaveImage0 from "../../../public/images/ramadan-musthave/ramadan-musthave-00.png";
import ramadanMustHaveImage1 from "../../../public/images/ramadan-musthave/ramadan-musthave-01.png";
import ramadanMustHaveImage2 from "../../../public/images/ramadan-musthave/ramadan-musthave-02.png";
import ramadanMustHaveImage3 from "../../../public/images/ramadan-musthave/ramadan-musthave-03.png";
import ramadanMustHaveImage4 from "../../../public/images/ramadan-musthave/ramadan-musthave-04.png";
import ramadanMustHaveImage5 from "../../../public/images/ramadan-musthave/ramadan-musthave-05.png";
import ramadanMustHaveImage6 from "../../../public/images/ramadan-musthave/ramadan-musthave-06.png";
import ramadanMustHaveImage7 from "../../../public/images/ramadan-musthave/ramadan-musthave-07.png";

const ramadanMustHaveImages = [
	ramadanMustHaveImage0,
	ramadanMustHaveImage1,
	ramadanMustHaveImage2,
	ramadanMustHaveImage3,
	ramadanMustHaveImage4,
	ramadanMustHaveImage5,
	ramadanMustHaveImage6,
	ramadanMustHaveImage7,
];

import topBeautyDealsImage from "../../../public/images/top-beauty-deals.png";

import electronicsImage0 from "../../../public/images/electronics/electronics-00.png";
import electronicsImage1 from "../../../public/images/electronics/electronics-01.png";
import electronicsImage2 from "../../../public/images/electronics/electronics-02.png";
import electronicsImage3 from "../../../public/images/electronics/electronics-03.png";
import electronicsImage4 from "../../../public/images/electronics/electronics-04.png";
import electronicsImage5 from "../../../public/images/electronics/electronics-05.png";
import electronicsImage6 from "../../../public/images/electronics/electronics-06.png";
import electronicsImage7 from "../../../public/images/electronics/electronics-07.png";

const electronicsImages = [
	electronicsImage0,
	electronicsImage1,
	electronicsImage2,
	electronicsImage3,
	electronicsImage4,
	electronicsImage5,
	electronicsImage6,
	electronicsImage7,
];

import topElectronicsDealsImage from "../../../public/images/top-electronics-deals.png";

import babyImage0 from "../../../public/images/baby/baby-00.png";
import babyImage1 from "../../../public/images/baby/baby-01.png";
import babyImage2 from "../../../public/images/baby/baby-02.png";
import babyImage3 from "../../../public/images/baby/baby-03.png";
import babyImage4 from "../../../public/images/baby/baby-04.png";
import babyImage5 from "../../../public/images/baby/baby-05.png";
import babyImage6 from "../../../public/images/baby/baby-06.png";
import babyImage7 from "../../../public/images/baby/baby-07.png";

const babyImages = [babyImage0, babyImage1, babyImage2, babyImage3, babyImage4, babyImage5, babyImage6, babyImage7];

import topBabyDealsImage from "../../../public/images/top-baby-deals.png";

import automotiveImage0 from "../../../public/images/automotive/automotive-00.png";
import automotiveImage1 from "../../../public/images/automotive/automotive-01.png";
import automotiveImage2 from "../../../public/images/automotive/automotive-02.png";
import automotiveImage3 from "../../../public/images/automotive/automotive-03.png";
import automotiveImage4 from "../../../public/images/automotive/automotive-04.png";
import automotiveImage5 from "../../../public/images/automotive/automotive-05.png";
import automotiveImage6 from "../../../public/images/automotive/automotive-06.png";
import automotiveImage7 from "../../../public/images/automotive/automotive-07.png";

const automotiveImages = [
	automotiveImage0,
	automotiveImage1,
	automotiveImage2,
	automotiveImage3,
	automotiveImage4,
	automotiveImage5,
	automotiveImage6,
	automotiveImage7,
];

import topAutomotiveDealsImage from "../../../public/images/top-automotive-deals.png";

import sportsImage0 from "../../../public/images/sports/sports-00.png";
import sportsImage1 from "../../../public/images/sports/sports-01.png";
import sportsImage2 from "../../../public/images/sports/sports-02.png";
import sportsImage3 from "../../../public/images/sports/sports-03.png";
import sportsImage4 from "../../../public/images/sports/sports-04.png";
import sportsImage5 from "../../../public/images/sports/sports-05.png";
import sportsImage6 from "../../../public/images/sports/sports-06.png";

const sportsImages = [sportsImage0, sportsImage1, sportsImage2, sportsImage3, sportsImage4, sportsImage5, sportsImage6];

import othersCategoriesImage0 from "../../../public/images/other-categories/other-categories-00.png";
import othersCategoriesImage1 from "../../../public/images/other-categories/other-categories-01.png";
import othersCategoriesImage2 from "../../../public/images/other-categories/other-categories-02.png";
import othersCategoriesImage3 from "../../../public/images/other-categories/other-categories-03.png";
import othersCategoriesImage4 from "../../../public/images/other-categories/other-categories-04.png";

const othersCategoriesImages = [
	othersCategoriesImage0,
	othersCategoriesImage1,
	othersCategoriesImage2,
	othersCategoriesImage3,
	othersCategoriesImage4,
];

import React, { useEffect, useState } from "react";
import { DealsCard } from "@/components/deals-card";
import { CategorySwiper } from "@/components/categorySwiper";
import { ProductSwiper } from "@/components/productsSwiper";
import { TopBrands } from "@/components/top-brands";
import { CategoriesCards } from "@/components/categories-cards";

import { Spinner } from "@material-tailwind/react";

export default function HomePage() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [products, setProducts] = useState([]);
	const [electronicsProducts, setElectronicsProducts] = useState([]);
	const [beautyProducts, setBeautyProducts] = useState([]);
	const [stationaryProducts, setStationaryProducts] = useState([]);
	const [fashionProducts, setFashionProducts] = useState([]);
	const [groceryProducts, setGroceryProducts] = useState([]);

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
			setElectronicsProducts(products.filter((product) => product.category === "electronics"));
			setBeautyProducts(products.filter((product) => product.category === "beauty"));
			setStationaryProducts(products.filter((product) => product.category === "stationary"));
			setFashionProducts(products.filter((product) => product.category === "fashion"));
			setGroceryProducts(products.filter((product) => product.category === "grocery"));
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
				<Image src={bankInstallmentsImage} className="w-full"></Image>
				<CarouselMain images={carouselImages}></CarouselMain>
				<CategorySwiper></CategorySwiper>
				<div className="grid grid-cols-3 gap-4 mt-4">
					<div className="bg-white py-2">
						<Image src={reasonsImage0} className="w-full"></Image>
						<div className="grid grid-cols-2 gap-4 px-4">
							<Image src={reasonsImage1}></Image>
							<Image src={reasonsImage2}></Image>
							<Image src={reasonsImage3}></Image>
							<Image src={reasonsImage4}></Image>
						</div>
					</div>
					<div className="bg-[#ffddb2] py-2">
						<Image src={dealsImage0} className="w-full"></Image>
						<div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-1 xs:grid-cols-1">
							<DealsCard deal="Fashion deals" image={dealsImage1} title="Footwear" discount="Up to 80% Off"></DealsCard>
							<DealsCard
								deal="Camera deals"
								image={dealsImage2}
								title="Cameras and accessories"
								discount="Up to 40% Off"
							></DealsCard>
							<DealsCard
								deal="Health deals"
								image={dealsImage3}
								title="Health care"
								discount="Up to 50% Off"
							></DealsCard>
							<DealsCard deal="Home deals" image={dealsImage4} title="Lighting" discount="Up to 55% Off"></DealsCard>
						</div>
					</div>
					<div className="bg-white py-2">
						<Image src={focusImage0} className="pb-4 w-full"></Image>
						<div className="flex flex-col items-center gap-4">
							<Image src={focusImage1} className="w-full"></Image>
							<Image src={focusImage2} className="w-full"></Image>
						</div>
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-bold my-5">Recommended for you</h2>
					<ProductSwiper data={products.slice(0, 13)}></ProductSwiper>
				</div>
				<Image src={sponsoredImage} className="my-4 w-full"></Image>
				<CategoriesCards images={mothersdayImages} bgColor="#fff1f1"></CategoriesCards>
				<div className="bg-[#f1e8c5] py-2">
					<Image src={joyImage} unoptimized className="pb-4 w-full"></Image>
					<div className="p-4">
						<ProductSwiper data={groceryProducts}></ProductSwiper>
					</div>
				</div>
				<CategoriesCards images={offersImages} bgColor="#fff1e2]"></CategoriesCards>
				<div className="bg-white py-2">
					<Image src={ramadanDealsImage} className="pb-4 w-full"></Image>
					<div className="p-4">
						<ProductSwiper data={products.slice(0, 13)}></ProductSwiper>
					</div>
				</div>
				<CategoriesCards images={savingsImages} bgColor="#fff3e4"></CategoriesCards>
				<Image src={wellnessImage} className="my-4 bg-[#fff3e4] w-full"></Image>
				<CategoriesCards images={supermarketImages} bgColor="#fffcef"></CategoriesCards>
				<div className="bg-[#fffcef] py-2">
					<Image src={ramadanGroceriesImage} className="pb-4 w-full"></Image>
					<div className="p-4">
						<ProductSwiper data={groceryProducts}></ProductSwiper>
					</div>
				</div>
				<CategoriesCards images={kitchenImages} bgColor="#fff2e2"></CategoriesCards>
				<div className="bg-[#fff2e2] py-2">
					<Image src={ramadanEssentialsImage} className="pb-4 w-full"></Image>
					<div className="p-4">
						<ProductSwiper data={groceryProducts}></ProductSwiper>
					</div>
				</div>
				<CategoriesCards images={appliancesImages} bgColor="#fffcef"></CategoriesCards>
				<div className="bg-[#fffcef] py-2">
					<Image src={topAppliancesImage} className="pb-4 w-full"></Image>
					<div className="p-4">
						<ProductSwiper data={electronicsProducts}></ProductSwiper>
					</div>
				</div>
				<CategoriesCards images={ramadanStyleImages} bgColor="#fff2ed"></CategoriesCards>
				<CategoriesCards images={womensFashionImages} bgColor="#fff2e2"></CategoriesCards>
				<CategoriesCards images={mensFashionImages} bgColor="#fff2e2"></CategoriesCards>
				<CategoriesCards images={kidsFashionImages} bgColor="#fff2e2"></CategoriesCards>
				<div className="grid grid-cols-2">
					<Image src={eyewareImage} className="w-full"></Image>
					<Image src={watchesImage} className="w-full"></Image>
				</div>
				<CategoriesCards images={ramadanMustHaveImages} bgColor="#fffcef"></CategoriesCards>
				<div className="bg-[#fffcef] py-2">
					<Image src={topBeautyDealsImage} className="pb-4 w-full"></Image>
					<div className="p-4">
						<ProductSwiper data={beautyProducts}></ProductSwiper>
					</div>
				</div>
				<CategoriesCards images={electronicsImages} bgColor="#fff2e2"></CategoriesCards>
				<div className="bg-[#fff2e2] py-2">
					<Image src={topElectronicsDealsImage} className="pb-4 w-full"></Image>
					<div className="p-4">
						<ProductSwiper data={electronicsProducts}></ProductSwiper>
					</div>
				</div>
				<CategoriesCards images={babyImages} bgColor="#fffcef"></CategoriesCards>
				<div className="bg-[#fffcef] py-2">
					<Image src={topBabyDealsImage} className="pb-4 w-full"></Image>
					<div className="p-4">
						<ProductSwiper data={stationaryProducts}></ProductSwiper>
					</div>
				</div>
				<CategoriesCards images={automotiveImages} bgColor="#fff2e2"></CategoriesCards>
				<div className="bg-[#fff2e2] py-2">
					<Image src={topAutomotiveDealsImage} className="pb-4 w-full"></Image>
					<div className="p-4">
						<ProductSwiper data={electronicsProducts}></ProductSwiper>
					</div>
				</div>
				<CategoriesCards images={sportsImages} bgColor="#fffcef"></CategoriesCards>
				<CategoriesCards images={othersCategoriesImages} bgColor="#fffede"></CategoriesCards>
				<TopBrands></TopBrands>
				<div className="bg-white py-3 px-5">
					<h6 className="text-base text-[#404553] font-semibold pb-2">Superior online shopping in Egypt</h6>
					<p className="text-sm text-[#7e859b] pb-3">
						Offering a world-class customer experience, noon is the top choice for online shopping in Egypt. From
						electronics products to fashion, kids' toys, baby products, homeware, furniture, sporting and outdoor
						products, beauty products, books and stationery, groceries, and much, much more, the noon Egypt store has
						millions of authentic products. As a customer-centric store, we are committed to providing our customers
						with authentic products, top brands, and long-term quality. We make it easier to buy online with flexible
						payment plans to help you save, regular sales, gift cards, wishlists, the noon shopping app, and other
						benefits exclusive to noon customers.
					</p>
					<h6 className="text-base text-[#404553] font-semibold pb-2">
						Shop the best products & top brands at noon Egypt
					</h6>
					<p className="text-sm text-[#7e859b] pb-3">
						If you’re looking for a wide range of products from top brands, noon Egypt has you covered. In our
						electronics department, you’ll find mobile phones and mobile phone accessories, wireless, noise cancelling
						and in-ear headsets, laptops and laptop accessories, audio-visual products, wearable devices, smartwatches
						and other wearable technology, cameras, TVs, video game consoles such as PC and Xbox controllers, and a
						variety of video games. Shop top tech brands in this department, including Apple, Sony, Xiaomi, Huawei,
						Lenovo, Samsung, and others. On the hunt for the best mobiles in Egypt? At noon, we’ve put together a
						collection of top-selling mobiles for every need.
					</p>
					<h6 className="text-base text-[#404553] font-semibold pb-2">Stress-free Egypt online shopping</h6>
					<p className="text-sm text-[#7e859b] pb-3">
						You can always have peace of mind when you buy online at noon. We make online shopping in Cairo, Giza and
						other Egypt cities as easy as possible, with a number of features and flexible payment plans that make
						shopping simpler, faster, and better. Our Buy Now, Pay Later plans, these include valU (BNPL over 60 months
						at 0% downpayment, 0% purchase fees). Payment options include cash on delivery as well as credit, debit
						cards and Mobile Wallet (VCN). For even more convenience, we offer installments up to 36 months with
						National Bank of Egypt, CIB, Banque Misr, HSBC, Emirates NBD and more Returns are quick and easy, with a
						15-day return policy.
					</p>
				</div>
			</div>
		</>
	);
}
