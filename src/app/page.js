import { CarouselMain } from "@/components/carousel-main";
import Image1 from "../../public/images/carousel-main-01.jpg";
import Image2 from "../../public/images/carousel-main-02.jpg";
import Image3 from "../../public/images/carousel-main-03.jpg";
import Image4 from "../../public/images/carousel-main-04.jpg";
import Image5 from "../../public/images/carousel-main-05.jpg";
import Image6 from "../../public/images/carousel-main-06.jpg";
import Image7 from "../../public/images/carousel-main-07.jpg";
import { NavbarSimple } from "@/components/nav-bar";
import { MegaMenuWithHover } from "@/components/nav-links";

const carouselImages = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

export default function Home() {
	return (
		<>
			<NavbarSimple></NavbarSimple>
			<MegaMenuWithHover></MegaMenuWithHover>
			<CarouselMain images={carouselImages}></CarouselMain>
		</>
	);
}
