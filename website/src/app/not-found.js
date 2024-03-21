import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import Image from "next/image";
import Link from "next/link";
import error404Image from "/public/images/error-404.svg";

export default function NotFound() {
	return (
		<>
			<Header></Header>
			<main className="flex flex-col items-center min-h-[75vh] justify-center ">
				<Image src={error404Image} className="mb-[30px]"></Image>
				<p className="mb-[4px] text-[#404553] font-sans text-3xl font-bold">Uh-oh, something went wrong here</p>
				<p className="text-[#404553] text-base">Just keep browsing to get back on track</p>
				<Link href="/" className="mt-[20px] text-white bg-[#3866df] py-[12px] px-[20px] rounded font-bold">
					BACK TO HOMEPAGE
				</Link>
			</main>
			<Footer></Footer>
		</>
	);
}
