import Image from "next/image";
//==> ==//> // Components Of Electronic Page
import { CarouselMain } from "@/components/carousel-main";
import { MegaMenuWithHover } from "@/components/nav-links";
import { ProductCard } from "@/components/product-card";
import { SmallCarsoel } from "@/components/smllCarsouel";
import { DealsCard } from "@/components/deals-card";
import { SectionTwo } from "@/components/electronicSecTwo";
import { ElectronForEvery } from "@/components/electronicForEvery";
import { Footer } from "@/components/footer";
import { NavbarSimple } from "@/components/nav-bar";
import { ElectronicSecFive } from "@/components/electronicSecFive";

//==> ==//> // Images Of Electronic Page
import Image1 from "../../../public/images/carousel-main-01.jpg";
import Image2 from "../../../public/images/carousel-main-02.jpg";
import Image3 from "../../../public/images/carousel-main-03.jpg";
import Image4 from "../../../public/images/carousel-main-04.jpg";
import Image5 from "../../../public/images/carousel-main-05.jpg";
import Image6 from "../../../public/images/carousel-main-06.jpg";
import Image7 from "../../../public/images/carousel-main-07.jpg";
import imgsec1 from "../../../public/imgSection/sction2_img1.jpg";
import imgsec2 from "../../../public/imgSection/sction2_img2.jpg";
import imgsec3 from "../../../public/imgSection/sction2_img3.jpg";
import imgsec4 from "../../../public/imgSection/sction2_img4.jpg";
import imgsec5 from "../../../public/imgSection/sction2_img5.jpg";
import imgsec6 from "../../../public/imgSection/sction2_img6.jpg";
import smallImg1 from "../../../public/imgSlider/a.png";
import smallImg2 from "../../../public/imgSlider/b.png";
import smallImg3 from "../../../public/imgSlider/c.png";
import smallImg4 from "../../../public/imgSlider/d.png";
import smallImg5 from "../../../public/imgSlider/e.png";
import smallImg6 from "../../../public/imgSlider/f.png";
import smallImg7 from "../../../public/imgSlider/g.png";
import smallImg8 from "../../../public/imgSlider/h.png";
import smallImg9 from "../../../public/imgSlider/i.png";
import smallImg10 from "../../../public/imgSlider/j.png";
import smallImg11 from "../../../public/imgSlider/k.png";
import smallImg12 from "../../../public/imgSlider/l.png";
import slidersho from "../../../public/slid1.png";
import slidersho1 from "../../../public/section3/to1png.png";
import slidersho2 from "../../../public/section3/to2png.png";
import slidersho3 from "../../../public/section3/to3png.png";
import slidersho4 from "../../../public/section3/to4png.png";
import Sec4Slider1 from "../../../public/section4/sec4slide1.png";
import Sec4Slider2 from "../../../public/section4/sec4slider2.png";
import Sec4Slider3 from "../../../public/section4/sec4slider3.png";
import Sec4Img4 from "../../../public/section4/sec4slider4.png";
import Sec4Img5 from "../../../public/section4/sec4img5.png";
import Sec4Img6 from "../../../public/section4/sec4img6.png";
import Sec4Img7 from "../../../public/section4/sec4img7.png";
import Sec4Img8 from "../../../public/section4/sec4img11.png";
import SecImg9 from "../../../public/section4/sec4img8.png";
import SecImg10 from "../../../public/section4/sec4img9.png";
import SecImg11 from "../../../public/section4/sec4img10.png";
//Section 5
import SectionSliderImg5 from "../../../public/Section5/Sec5Slider1.png";
import sectionLargeImg5 from "../../../public/Section5/Sec5LargeImg.png";
import sectionLargesmall1 from "../../../public/Section5/Sec5SmallImg.png";
import sectionLargesmall2 from "../../../public/Section5/Sec5Smallimg2.png";
import sectionLargesmall3 from "../../../public/Section5/Sec5Smallimg2.png";
import sectionLargesmall4 from "../../../public/Section5/Sec5SmallImg3.png";
import AnnonceMent from "../../../public/Section5/sliderAnnoncement.png";

const carouselImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
const smallSliderImg = [smallImg1, smallImg2, smallImg3, smallImg4, smallImg5, smallImg6, smallImg7, smallImg8, smallImg9, smallImg10, smallImg11, smallImg12, smallImg1, smallImg2, smallImg3, smallImg4, smallImg5, smallImg6, smallImg5, smallImg6, smallImg7, smallImg8, smallImg9, smallImg10];
const secTwo = [
    { title: "TELEVISION DEALSS", description: "  This is The Description  of TELEVISION DEALSS", pricebefore: "1569", priceAfter: "865", imgSrc: imgsec1, imgalt: "hhhh" },
    { title: "Mobile Iphone", description: " This is The Description  of Mobile Iphone", pricebefore: "1120", priceAfter: "875", imgSrc: imgsec2, imgalt: "hhhh1" },
    { title: "Mobile Androide ", description: "  This is The Description  of Mobile Androide", pricebefore: "1490", priceAfter: "999.5", imgSrc: imgsec3, imgalt: "hhhh2" },
    { title: "Tablet DEALSS", description: "  This is The Description  of Tablet DEALSS", pricebefore: "1569", priceAfter: "865", imgSrc: imgsec4, imgalt: "dhhhh" },
    { title: "Airbuds Iphone", description: " This is The Description  of Airbuds Iphone", pricebefore: "1120", priceAfter: "875", imgSrc: imgsec5, imgalt: "hddhhh1" },
    { title: "Sounding sub  ", description: "  This is The Description  of Sounding sub", pricebefore: "1490", priceAfter: "999.5", imgSrc: imgsec6, imgalt: "hhhdh2" },
];


const ElectronicSecFour = [
    {
        SliderImg: slidersho,
        SrcImg: [sectionLargesmall1, sectionLargesmall2, sectionLargesmall3, sectionLargesmall4],
        AltImg: ["Img Section 4 image Alt 1", "Img Section 4 image Alt 2", "Img Section 4 image Alt 3", "Img Section 4 image Alt 4"]
    }
];
const ElectronicSecFiveData = [
    {
        SliderImgSrc: { img: SectionSliderImg5, alt: "Slider Section Five Main Slider" },
        SmallImgSrc: [sectionLargeImg5, sectionLargesmall1, sectionLargesmall2, sectionLargesmall3, sectionLargesmall4],
        SmallImgAlt: ["Slider Section Five Large Image", "Img Section 4 image Alt 1", "Img Section 4 image Alt 2", "Img Section 4 image Alt 3", "Img Section 4 image Alt 4"]
    }
];

const imgListData = [
    { img: Sec4Img5, alt: "Slider Section Five Main Slider 1" },
    { img: Sec4Img4, alt: "Slider Section Five Main Slider 2" },
    { img: Sec4Img6, alt: "Slider Section Five Main Slider 3" },
    { img: Sec4Img7, alt: "Slider Section Five Main Slider 4" },
    { img: Sec4Img8, alt: "Slider Section Five Main Slider 5" },
    { img: SecImg9, alt: "Slider Section Five Main Slider 6" },
    { img: SecImg10, alt: "Slider Section Five Main Slider 7" },
    { img: SecImg11, alt: "Slider Section Five Main Slider 8" }
];

function ImageList({ items }) {
    console.log(items);
    return (
        <>
            {items.map((item, index) => (
                <div key={index}>
                    <Image className="cursor-pointer" src={item.img} alt={item.alt} width={120} height={90} />
                </div>
            ))}
        </>

    );
}
export default function ElectronicPage() {
    return (
        <div className="">
            <NavbarSimple />
            <MegaMenuWithHover />
            <div className="w-full ">
                <Image className=" cursor-pointer  w-full" src={AnnonceMent} alt="hhhkjy" />
            </div>
            <CarouselMain images={carouselImages} />
            <SmallCarsoel images={smallSliderImg} />
            <div className="flex-col bg-[#fef08a]">
                <div className="font-extrabold text-bold align-top p-5"> Mega Deals</div>
                <div className="flex grid-cols-3">
                    <SectionTwo items={secTwo} />
                </div>
            </div>
            <div className="w-full flex justify-between pb-0 p-6">
                <div className="text-lg	font-extrabold	">Best Deals </div>
                <div className="">
                    <button class="bg-transparent hover:bg-[#f6e05e] hover:text-black text-black-700 font-semibold py-2 px-4 border border-black-[900] hover:border-transparent rounded">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
            </div>
            <ElectronForEvery items={ElectronicSecFour} />
            <div className="w-full flex justify-between pb-0 p-6">
                <div className="text-lg	font-extrabold	">Best Deals </div>
                <div className="">
                    <button class="bg-transparent hover:bg-[#f6e05e] hover:text-black text-black-700 font-semibold py-2 px-4 border border-black-[900] hover:border-transparent rounded">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
            </div>
            <div className="w-full flex justify-between pb-0 p-6">
                <div className="text-lg	font-extrabold	">Best Deals </div>
                <div className="">
                    <button class="bg-transparent hover:bg-[#f6e05e] hover:text-black text-black-700 font-semibold py-2 px-4 border border-black-[900] hover:border-transparent rounded">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
            </div>
            <div className="w-full flex justify-between pb-0 p-6">
                <div className="text-lg	font-extrabold	">Best Deals </div>
                <div className="">
                    <button class="bg-transparent hover:bg-[#f6e05e] hover:text-black text-black-700 font-semibold py-2 px-4 border border-black-[900] hover:border-transparent rounded">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
            </div>
            <ElectronForEvery items={ElectronicSecFour} />
            <div className="w-full flex justify-between pb-0 p-6">
                <div className="text-lg	font-extrabold	">Best Deals </div>
                <div className="">
                    <button class="bg-transparent hover:bg-[#f6e05e] hover:text-black text-black-700 font-semibold py-2 px-4 border border-black-[900] hover:border-transparent rounded">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
            </div>
            <div className="mt-3 flex-col bg-[#e5e5e5] py-5" >
                <div>
                    <Image className=" " src={Sec4Slider1} alt="hhhkjy" />
                </div>
                <div className="flex justify-around mt-4">
                    <div>
                        <Image className="cursor-pointer" src={Sec4Slider2} alt="hhhkjy" />
                    </div>
                    <div>
                        <Image className=" cursor-pointer" src={Sec4Slider3} alt="hhhkjy" />
                    </div>
                </div>
                <div className=" grid xl:grid-cols-8 lg:grid-cols-8 lg:gap-5   md:grid-cols-4 md:gap-1 sm:grid-cols-3 sm:gap-1 my-4 ml-7 ">

                    <ImageList items={imgListData} />

                </div>
            </div>
            <div className="w-full flex justify-between pb-0 p-6">
                <div className="text-lg	font-extrabold	">Best Deals </div>
                <div className="">
                    <button class="bg-transparent hover:bg-[#f6e05e] hover:text-black text-black-700 font-semibold py-2 px-4 border border-black-[900] hover:border-transparent rounded">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
            </div>
            <div className="w-full flex justify-between pb-0 p-6">
                <div className="text-lg	font-extrabold	">Best Deals </div>
                <div className="">
                    <button class="bg-transparent hover:bg-[#f6e05e] hover:text-black text-black-700 font-semibold py-2 px-4 border border-black-[900] hover:border-transparent rounded">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
            </div>
            <div className="">
                <ElectronicSecFive className="flex justify-center" items={ElectronicSecFiveData} />
            </div>
            <div className="w-full flex justify-between pb-0 p-6">
                <div className="text-lg	font-extrabold	">Best Deals </div>
                <div className="">
                    <button class="bg-transparent hover:bg-[#f6e05e] hover:text-black text-black-700 font-semibold py-2 px-4 border border-black-[900] hover:border-transparent rounded">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
            </div>
            <div className="w-full flex justify-between pb-0 p-6">
                <div className="text-lg	font-extrabold	">Best Deals </div>
                <div className="">
                    <button class="bg-transparent hover:bg-[#f6e05e] hover:text-black text-black-700 font-semibold py-2 px-4 border border-black-[900] hover:border-transparent rounded">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
            </div>
            <div className="">
                <ElectronicSecFive className="flex justify-center" items={ElectronicSecFiveData} />
            </div>
            <div className="w-full flex justify-between pb-0 p-6">
                <div className="text-lg	font-extrabold	">Best Deals </div>
                <div className="">
                    <button class="bg-transparent hover:bg-[#f6e05e] hover:text-black text-black-700 font-semibold py-2 px-4 border border-black-[900] hover:border-transparent rounded">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
            </div>
            <div className="flex justify-between ">
                <div></div>
                <div className=" flex gap-2 ">
                    <div>
                        <DealsCard />
                        <DealsCard />
                    </div>
                    <div>
                        <DealsCard />
                        <DealsCard />
                    </div>
                </div>
                <div></div>
            </div>
            <Footer />
        </div >
    )
}
