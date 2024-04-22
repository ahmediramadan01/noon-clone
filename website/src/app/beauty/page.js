"use client";
import Image from "next/image";
import { CategorySwiper } from "@/components/categorySwiper";
import { CarouselMain } from "@/components/carousel-main";

import Image1 from "../../../public/images/carousel-main-01.jpg";
import Image2 from "../../../public/images/carousel-main-02.jpg";
import Image3 from "../../../public/images/carousel-main-03.jpg";
import Image4 from "../../../public/images/carousel-main-04.jpg";
import Image5 from "../../../public/images/carousel-main-05.jpg";
import Image6 from "../../../public/images/carousel-main-06.jpg";
import Image7 from "../../../public/images/carousel-main-07.jpg";

import sliderImg from "../../../public/BeautyImages/beautySlider.png";
import beautySlider_2 from "../../../public/BeautyImages/BeautySlider_2.png";
import beautySlider_3 from "../../../public/BeautyImages/BestSellerShopNow.png";
import beautySlider_5 from "../../../public/BeautyImages/slider_5.jpg";
import offerZone from "../../../public/BeautyImages/beautyOfferZone.png";

import offerZone_1 from "../../../public/BeautyImages/offer_1.png";
import offerZone_2 from "../../../public/BeautyImages/offer_2.png";
import offerZone_3 from "../../../public/BeautyImages/offer_3.png";
import offerZone_4 from "../../../public/BeautyImages/offer_4.png";

import BeautyBudgetSavings from "../../../public/BeautyImages/BeautyBudgetSavings.png";
import OfficialStores_Img from "../../../public/BeautyImages/OfficialStores.png";

import Bionnex from "../../../public/BeautyImages/Bionnex.png";
import lOreal from "../../../public/BeautyImages/l'Oreal.png";
import Phillips from "../../../public/BeautyImages/Phillips.png";
import Nievea from "../../../public/BeautyImages/Nievea.png";
import Larocheposay from "../../../public/BeautyImages/Larocheposay.png";
import starville from "../../../public/BeautyImages/starville.png";
import Maybelling from "../../../public/BeautyImages/Maybelling.png";

import MakeUP from "../../../public/BeautyImages/MakeUP.png";
import HairCare from "../../../public/BeautyImages/HairCare.png";
import PersonalCare from "../../../public/BeautyImages/PersonalCare.png";
import SkinCare from "../../../public/BeautyImages/SkinCare.png";

import Dedorantes from "../../../public/BeautyImages/Dedorantes.jpg";
import Lipgloss from "../../../public/BeautyImages/Lipgloss.jpg";
import Lipsticks from "../../../public/BeautyImages/Lipsticks.jpg";
import Shampoos from "../../../public/BeautyImages/Shampoos.jpg";
import sunBlocks from "../../../public/BeautyImages/sunBlocks.jpg";

import NewArrivals from "../../../public/BeautyImages/NewArrivals.png";
import shopProductSlider from "../../../public/BeautyImages/shopProductSlideravif.png";

import face from "../../../public/BeautyImages/face.png";
import Eyes from "../../../public/BeautyImages/Eyes.png";
import Nails from "../../../public/BeautyImages/Nails.png";
import Lips from "../../../public/BeautyImages/Lips.png";
4;
import buildYourSkinRoutingSlider from "../../../public/BeautyImages/buildYourSkinRoutingSlider.png";

//PersonalEsseintial Images
import PersonalEsseintialsSlider from "../../../public/BeautyImages/PersonalEsseintials.png";
import PersonalEsseintial_1 from "../../../public/BeautyImages/PersonalImg_1.png";
import PersonalEsseintial_2 from "../../../public/BeautyImages/PersonalImg2.png";
import PersonalEsseintial_3 from "../../../public/BeautyImages/PersonalImg3.png";
import PersonalEsseintial_4 from "../../../public/BeautyImages/PersonalImg4.png";
import PersonalEsseintial_5 from "../../../public/BeautyImages/PersonalImg5.png";
import PersonalEsseintial_6 from "../../../public/BeautyImages/PersonalImg6.png";
import PersonalEsseintial_7 from "../../../public/BeautyImages/PersonalImg6.png";

import GlameTime from "../../../public/BeautyImages/GlameTime.png";
import BeautyProduct from "@/components/beautyProduct";
import { ProductSwiper } from "@/components/productsSwiper";

//Fragranc slider
import fragranceSlider from "../../../public/BeautyImages/chooseYourFragrance.png";
//Fragranc Items
import frgrances from "../../../public/BeautyImages/frgrances.png";
import women_Frgrance_3items from "../../../public/BeautyImages/women_Frgrance_3items.png";
import bodyMiste_3Itemsfrom from "../../../public/BeautyImages/bodyMiste_3Items.png";
import { fromJSON } from "postcss";

//PersonalEsseintial Images
import LookingForSlider from "../../../public/BeautyImages/AreYouLooking.png";
import bootomSliderOne from "../../../public/BeautyImages/ShopNow-0.png";
import bootomSlidertwo from "../../../public/BeautyImages/FavourBrands.png";
import LookingForPic_1 from "../../../public/BeautyImages/pictureContainer1_2.png";
import LookingForPic_2 from "../../../public/BeautyImages/PictureContainer2_2.png";

const LookingArray = [LookingForPic_1, LookingForPic_2];
const TripleItems = [frgrances, women_Frgrance_3items, bodyMiste_3Itemsfrom];
const PersonalEsseintialsArr = [
	PersonalEsseintial_1,
	PersonalEsseintial_2,
	PersonalEsseintial_3,
	PersonalEsseintial_4,
	PersonalEsseintial_5,
	PersonalEsseintial_6,
	PersonalEsseintial_7,
];
const carouselImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
const images = [
	offerZone_1,
	offerZone_2,
	offerZone_3,
	offerZone_4,
	offerZone_1,
	offerZone_2,
	offerZone_3,
	offerZone_4,
	offerZone_1,
	offerZone_2,
	offerZone_3,
	offerZone_4,
];
//   cards Seven Items ===> 7 =>x2

const imageBrans = [
	Bionnex,
	lOreal,
	Phillips,
	Nievea,
	Larocheposay,
	starville,
	Maybelling,
	Nievea,
	Larocheposay,
	starville,
	Phillips,
	Maybelling,
	Bionnex,
	lOreal,
];
const imageBrans1 = [
	Bionnex,
	lOreal,
	Phillips,
	Nievea,
	starville,
	Maybelling,
	Nievea,
	Larocheposay,
	starville,
	Phillips,
	Maybelling,
	Bionnex,
	lOreal,
	lOreal,
	Phillips,
	Nievea,
	Larocheposay,
	starville,
	Maybelling,
	Nievea,
];

//   cards Four Items ===> 4
const BeautyImgBelow90 = [MakeUP, HairCare, PersonalCare, SkinCare];
const BeautyImgBelow50 = [face, Eyes, Nails, Lips, face];
const glameTimeArr = [face, Eyes, Nails, Lips];
//   cards Ten Items ===> 10
const searchedFor = [
	Dedorantes,
	Shampoos,
	sunBlocks,
	Lipgloss,
	Lipsticks,
	Dedorantes,
	Lipgloss,
	Lipsticks,
	sunBlocks,
	Shampoos,
];
const searchedFor1 = [Dedorantes, Shampoos, sunBlocks, Lipgloss, Lipsticks, Dedorantes, Lipgloss, Lipsticks, sunBlocks];
function Beauty() {
	return (
		<div className="w-full flex-col">
			{/* //Carousel Main    */}
			<CarouselMain images={carouselImages} />
			{/* End Of Carsouel Main */}

			{/* // ( First Slider ) Slider Beauty Image  ==> UP TO 20% OFF*/}
			<div className="row p-2">
				<Image src={sliderImg} className="w-full" />
			</div>
			{/* End Of First Slider */}
			{/* Category Swiper */}
			<CategorySwiper />
			{/* End Of Categry Swiper */}
			{/* // ( Second Slider ) Slider Beauty Image  ==> FULL FILL YOUR HAIR NEEDS */}
			<div className="row p-2">
				<Image src={beautySlider_2} className="w-full" />
			</div>
			{/* End Of Second Slider */}
			<div>
				<div className="row py-3">
					<Image src={offerZone} className="w-full" />
				</div>
				<BeautyProduct FourItems={images} threeItems={images} twoItems={images} />
			</div>
			<div className="row p-2">
				<Image src={beautySlider_3} className="w-full" />
			</div>
			<ProductSwiper />
			<div className="row p-2">
				<Image src={OfficialStores_Img} className="w-full" />
			</div>
			<div className="grid grid-cols-7 gap-2  w-full bg-[#f4eaef] py-3 px-4">
				{imageBrans.map((item, index) => (
					<div key={index}>
						<Image src={item} className="w-full" />
					</div>
				))}
			</div>
			<div className="bg-[#ffffff]">
				<div className="row py-3">
					<Image src={BeautyBudgetSavings} className="w-full " />
				</div>
				<div className="grid grid-cols-4 gap-5  w-full bg-[#ffffff] py-3 px-4">
					{BeautyImgBelow90.map((item, index) => (
						<div key={index}>
							<Image src={item} className="w-full" />
						</div>
					))}
				</div>
			</div>
			<div className="bg-[#ffffff]">
				<div className="row py-3">
					<Image src={beautySlider_5} className="w-full " />
				</div>
				<div className="grid grid-cols-10 gap-2  w-full bg-[#ffffff] py-3 px-4">
					{searchedFor.map((item, index) => (
						<div key={index}>
							<Image src={item} className="w-full" />
						</div>
					))}
				</div>
			</div>
			<div className="row py-3">
				<Image src={NewArrivals} className="w-full " />
			</div>
			<div className="bg-[#faefe7]">
				<div className="row py-3">
					<Image src={GlameTime} className="w-full " />
				</div>
				<div className="grid grid-cols-4 gap-5  w-full bg-[#ffffff] py-3 px-4 bg-[#faefe7]">
					{glameTimeArr.map((item, index) => (
						<div key={index}>
							<Image src={item} className="w-full" />
						</div>
					))}
				</div>
			</div>
			<div className="">
				<div className="row py-3">
					<Image src={PersonalEsseintialsSlider} className="w-full " />
				</div>
				<div className="grid grid-cols-7 gap-5  w-full bg-[#ffffff] py-3 px-4 bg-[#faefe7]">
					{PersonalEsseintialsArr.map((item, index) => (
						<div key={index}>
							<Image src={item} className="w-full" />
						</div>
					))}
				</div>
			</div>

			<div className="bg-[#faefe7]">
				<div className="row py-3">
					<Image src={shopProductSlider} className="w-full " />
				</div>
				<div className="grid grid-cols-10 gap-2  w-full bg-[#faefe7] py-3 px-4">
					{searchedFor.map((item, index) => (
						<div key={index}>
							<Image src={item} className="w-full  bg-[#faefe7]" />
						</div>
					))}
				</div>
			</div>
			<div className="bg-[#f4eaef]">
				<div className="row py-3">
					<Image src={buildYourSkinRoutingSlider} className="w-full " />
				</div>
				<div className="grid grid-cols-5 gap-2  w-full bg-[#f4eaef] py-3 px-4">
					{BeautyImgBelow50.map((item, index) => (
						<div key={index}>
							<Image src={item} className="w-full  bg-[#f4eaef]" />
						</div>
					))}
				</div>
			</div>
			<div className="bg-[#ffffff]">
				<div className="row py-3">
					<Image src={fragranceSlider} className="w-full " />
				</div>
				<div className="grid grid-cols-3 gap-6  w-full bg-[#fffffff] py-3 px-4">
					{TripleItems.map((item, index) => (
						<div key={index}>
							<Image src={item} className="w-full  bg-[#ffffff]" />
						</div>
					))}
				</div>
			</div>
			<div className="bg-[#ffffff]">
				<div className="row py-3">
					<Image src={LookingForSlider} className="w-full " />
				</div>
				<div className="grid grid-cols-2 gap-8  w-full bg-[#fffffff] py-3 px-4">
					{LookingArray.map((item, index) => (
						<div key={index}>
							<Image src={item} className="w-full  bg-[#ffffff]" />
						</div>
					))}
				</div>
			</div>
			<div className="row py-3 bg-[#f7f3ed]">
				<Image src={bootomSliderOne} className="w-full " />
			</div>
			<div className="bg-[#f7f3ed]">
				<div className="row py-3">
					<Image src={beautySlider_5} className="w-full " />
				</div>
				<div className="grid grid-cols-10 gap-3  w-full bg-[#f7f3ed] py-3 px-4">
					{imageBrans1.map((item, index) => (
						<div key={index}>
							<Image src={item} className="w-full" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Beauty;
