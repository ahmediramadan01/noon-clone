"use client";

import { IconButton } from "@material-tailwind/react";
import Image from "next/image";
const linkFooter = ["Careers", "Warranty Policy", "Sell with us", "Terms of Use", "Terms of Sale", "Privacy Policy"];
const imgIcons = ["icon1.svg", "icon2.svg", "icon3.svg", "cod-en.svg"];
const svgSocialIcons = [
	<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24" fill="none">
		<title id="title">footer_fb_color</title>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
			fill="#FEEE00"
		></path>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.99 18.667v-6.334h1.775L15 10.15h-2.01l.003-1.093c0-.569.055-.874.885-.874h1.11V6h-1.776C11.08 6 10.33 7.059 10.33 8.84v1.31H9v2.183h1.33v6.334h2.66z"
			fill="#404553"
		></path>
	</svg>,
	<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24" fill="none">
		<title id="title">footer_twitter_color</title>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 12.124C0 5.566 5.304.25 11.846.25s11.846 5.317 11.846 11.875c0 6.56-5.304 11.876-11.846 11.876S0 18.683 0 12.124z"
			fill="#FEEE00"
		></path>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.083 10.495l.025.411-.414-.05c-1.508-.193-2.826-.847-3.944-1.946l-.547-.545-.141.403c-.298.897-.108 1.845.514 2.482.331.352.257.403-.315.193-.199-.067-.373-.117-.39-.092-.058.058.141.821.299 1.123.215.42.654.83 1.135 1.074l.406.193-.48.008c-.465 0-.481.008-.432.185.166.545.82 1.123 1.55 1.375l.514.176-.448.268a4.657 4.657 0 01-2.22.621c-.373.008-.68.042-.68.067 0 .084 1.011.553 1.6.738 1.764.545 3.86.31 5.435-.62 1.118-.663 2.237-1.98 2.76-3.254.28-.68.563-1.92.563-2.516 0-.386.024-.436.488-.898.274-.268.53-.561.58-.645.083-.16.075-.16-.348-.017-.704.252-.803.218-.455-.16.256-.268.563-.754.563-.897 0-.025-.124.017-.265.093-.15.083-.48.21-.73.285l-.447.142-.406-.276c-.223-.151-.538-.32-.704-.37-.422-.117-1.069-.1-1.45.034-1.036.377-1.69 1.35-1.616 2.415z"
			fill="#404553"
		></path>
	</svg>,
	<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24" fill="none">
		<title id="title">footer_instagram_color</title>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 12C0 5.373 5.36 0 11.97 0s11.97 5.373 11.97 12-5.36 12-11.97 12S0 18.627 0 12z"
			fill="#FEEE00"
		></path>
		<mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 12C0 5.373 5.36 0 11.97 0s11.97 5.373 11.97 12-5.36 12-11.97 12S0 18.627 0 12z"
				fill="#fff"
			></path>
		</mask>
		<g mask="url(#a)">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.97 5.6c-1.733 0-1.95.008-2.632.039-.68.03-1.143.139-1.55.297-.42.163-.775.382-1.13.738a3.143 3.143 0 00-.737 1.134c-.158.407-.266.872-.297 1.553-.03.683-.038.9-.038 2.64 0 1.737.008 1.955.039 2.637.03.682.138 1.147.296 1.554.163.42.381.778.736 1.134.355.355.711.575 1.13.738.407.158.871.266 1.55.297.682.031.9.04 2.633.04 1.734 0 1.95-.009 2.631-.04.68-.03 1.145-.139 1.55-.297.42-.163.776-.383 1.13-.738.356-.356.574-.713.738-1.134.157-.407.264-.872.296-1.553.03-.683.039-.9.039-2.639 0-1.738-.008-1.956-.039-2.639-.032-.681-.14-1.146-.296-1.553a3.142 3.142 0 00-.737-1.134 3.12 3.12 0 00-1.13-.738c-.408-.158-.872-.266-1.551-.297-.681-.031-.898-.039-2.633-.039h.002zm-.572 1.153h.572c1.705 0 1.907.006 2.58.037.623.029.96.133 1.185.22.298.117.51.255.734.48.224.223.362.437.478.735.087.226.191.564.22 1.188.03.675.037.878.037 2.586 0 1.708-.007 1.91-.037 2.585-.029.624-.133.963-.22 1.188a1.98 1.98 0 01-.478.735 1.973 1.973 0 01-.734.479c-.224.088-.562.192-1.185.22-.673.031-.875.038-2.58.038-1.704 0-1.906-.007-2.58-.038-.622-.028-.96-.133-1.185-.22a1.977 1.977 0 01-.734-.479 1.984 1.984 0 01-.477-.736c-.088-.225-.192-.564-.22-1.188-.03-.674-.037-.877-.037-2.586 0-1.71.006-1.91.037-2.585.028-.624.132-.963.22-1.189.115-.298.254-.512.477-.736a1.98 1.98 0 01.734-.479c.225-.088.563-.192 1.186-.22.589-.027.817-.035 2.007-.036v.001zm3.831 1.063a.618.618 0 10.001 1.235.618.618 0 00-.001-1.235zm-3.258.897A3.283 3.283 0 008.691 12a3.282 3.282 0 003.278 3.286c1.811 0 3.278-1.47 3.278-3.286a3.282 3.282 0 00-3.278-3.287zm0 1.154A2.13 2.13 0 0114.098 12a2.13 2.13 0 01-2.128 2.133A2.13 2.13 0 019.843 12a2.13 2.13 0 012.127-2.133z"
				fill="#404553"
			></path>
		</g>
	</svg>,
	<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 24 24" fill="none">
		<title id="title">footer_linkedin_color</title>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
			fill="#FEEE00"
		></path>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.777 7.872C8.537 7.872 9 7.319 9 6.636c-.015-.7-.462-1.236-1.193-1.236-.73 0-1.207.537-1.207 1.236 0 .683.462 1.236 1.177 1.236zm-1.117.976V16.8h2.266V8.848H6.66z"
			fill="#404553"
		></path>
		<path
			d="M10.266 11.605c0-.951-.033-1.747-.066-2.433h2.2l.117 1.06h.05C12.9 9.734 13.717 9 15.083 9 16.75 9 18 10.045 18 12.291V16.8h-2.534v-4.228c0-.982-.366-1.653-1.283-1.653-.7 0-1.116.452-1.3.89-.066.155-.083.373-.083.592V16.8h-2.534v-5.195z"
			fill="#404553"
		></path>
	</svg>,
];
const ImgAltData = [
	{ imgSrc: "/app-store.svg", imgAlt: "App Store" },
	{ imgSrc: "/google-play.svg", imgAlt: "Google Play" },
	{ imgSrc: "/Huawei-icon.png", imgAlt: "Huawei Icon" },
];
const footerIcons = [
	{
		title: "HELP Center",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
				<path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
			</svg>
		),
		email: "Help.Noon.com",
	},
	{
		title: "Email Support",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<title id="title">email_support</title>
				<path
					d="M5.625 6H18.625C19.5188 6 20.25 6.73125 20.25 7.625V17.375C20.25 18.2688 19.5188 19 18.625 19H5.625C4.73125 19 4 18.2688 4 17.375V7.625C4 6.73125 4.73125 6 5.625 6Z"
					stroke="#404553"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
				<path
					d="M20.25 7.62501L12.125 13.3125L4 7.62501"
					stroke="#404553"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
		),
		email: "egypt@Noon.com",
	},
	{
		title: "PHONE SUPPORT",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<title id="title">phone_support</title>
				<path
					d="M18.1912 14.2183C17.5384 13.5738 16.7234 13.5738 16.0748 14.2183C15.58 14.7089 15.0852 15.1996 14.5987 15.6985C14.4656 15.8358 14.3534 15.8649 14.1912 15.7734C13.871 15.5988 13.5301 15.4574 13.2224 15.2661C11.7879 14.3638 10.5862 13.2037 9.52176 11.8981C8.99369 11.2495 8.52384 10.5551 8.19535 9.77339C8.12883 9.61538 8.1413 9.51143 8.2702 9.38253C8.765 8.90436 9.24733 8.41372 9.73382 7.92308C10.4116 7.24116 10.4116 6.44283 9.72966 5.75675C9.34296 5.3659 8.95627 4.98337 8.56957 4.59251C8.17041 4.19335 7.7754 3.79002 7.37207 3.39501C6.71926 2.75883 5.90429 2.75883 5.25565 3.39917C4.75668 3.88981 4.27851 4.39293 3.77124 4.87526C3.30138 5.32016 3.06438 5.86486 3.01448 6.50104C2.93548 7.53638 3.18912 8.51351 3.54671 9.46569C4.27851 11.4366 5.39286 13.1871 6.74421 14.7921C8.56957 16.9626 10.7484 18.6798 13.2972 19.9189C14.4448 20.4761 15.634 20.9044 16.9272 20.975C17.817 21.0249 18.5904 20.8004 19.2099 20.106C19.634 19.632 20.1122 19.1996 20.5613 18.7464C21.2265 18.0728 21.2307 17.2578 20.5696 16.5925C19.7796 15.7983 18.9854 15.0083 18.1912 14.2183Z"
					stroke="#404553"
					strokeWidth="1.5"
				></path>
			</svg>
		),
		email: "16358",
	},
];
function FooterIcon({ items }) {
	return (
		<div className=" flex flex-col  items-center md:flex-row  sm:flex-col gap-5">
			{items.map((item, index) => (
				<>
					<div className="flex flex-row md:flex-col rounded-full   hover:opacity-[0.6] ">
						<IconButton key={index} variant="outlined" className="rounded-full bg-white border-none w-28 h-28">
							{item.icon}
						</IconButton>
						<div className="flex flex-col rounded-l-lg pl-2   text-slate-950 ">
							<div className="text-[#7E859B] text-[10.8] whitespace-nowrap ">{item.title} </div>
							<div className="w-5/2 text-[#404553] text-[18.4] font-bold  mt-1 bg-zinc-400">{item.email}</div>
						</div>
					</div>
				</>
			))}
		</div>
	);
}
function FooterColumn({ title, items }) {
	return (
		<>
			<div className="md:col-span-1 ">
				<h2 className="text-[15.4] text-[#404553] font-bold mb-4 sm:text-wrap">{title}</h2>
				{items.map((item, index) => (
					<p key={index} className="text-sm pb-3 text-[#404553] cursor-pointer">
						{item}
					</p>
				))}
			</div>
		</>
	);
}
export function Footer() {
	return (
		<>
			<footer className="bg-white-900 text-black py-5">
				{/* Main content */}
				<div className="mx-auto">
					<div className="flex justify-between flex-col md:flex-row w-full">
						<div className="w-full justify-between items-center mx-auto p-5 bg-gray-200 md:flex sm:flex ">
							<div className="flex flex-col xl:w-full lg:w-full sm:h-auto md:h-auto  sm:w-full md:w-full">
								<p className="text-xl text-[#404553] mb-4">We're Always Here To Help</p>
								<p className="text-[#7E859B] bg-zinc-400 mb-4">Reach out to us through any of these support channels</p>
							</div>
							{/* <div className=" w-1/2 flex flex-row rounded-full   p-2"> */}
							{/* <div className="xl:flex xl:flex-row lg:flex lg:flex-row rounded-full lg:w-full xl:w-full p-2 justify-around  mt-4 md:mt-0 "> */}
								<FooterIcon items={footerIcons} />
							{/* </div> */}
						</div>
					</div>
					<div className="">
						{/* <div className="w-[113] grid grid-cols-1 md:grid-cols-6 gap-8 p-5"> */}
						<div className="grid sm:grid-cols-3  md:grid-cols-6 xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
							<div className="md:col-span-1 ">
								<FooterColumn
									title="Electronics"
									items={["Mobiles", "Laptops", "Cameras", "Televisone", "HeadPhones", "Videpo Games"]}
								/>
							</div>
							<div className="md:col-span-1">
								<FooterColumn
									title="FASHION"
									items={[
										"Women's Fashion",
										"Men's Fashion",
										"Girl's Fashion",
										"Women's Watches",
										"Home Appliances Tools",
										"Home Improvement",
										"EyaWear",
										"Bags & Luggags",
									]}
								/>
							</div>
							<div className="md:col-span-1">
								<FooterColumn
									title="HOME AND KITCHEN"
									items={["Beding", "Path", "Home Appliances Tools", "Home Improvement", , "Home And Decor"]}
								/>
							</div>
							<div className="md:col-span-1">
								<FooterColumn title="BEAUTY" items={["Women's Fragrance", "Men's Fragrance", "Make-Up", "Haircare"]} />
							</div>
							<div className="md:col-span-1">
								<FooterColumn
									title="KIDS & BABY TOYS"
									items={["Strollers", "Car Seats", "Baby Clothing", "Feeding", "Bathing & Skincare"]}
								/>
							</div>
							<div className="md:col-span-1">
								<FooterColumn
									title="TOP BRADS"
									items={["Apple", "Samsung", "Nike", "Ray-Ban", "Tefal", "L'Oreal Paris"]}
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row justify-center items-center   mt-4 mb-6 p-5">
						<div className="flex flex-col justify-center w-full md:w-1/2">
							<p className="text-center mb-2 text-[#404553] font-bold">SHOP ON THE GO</p>
							<div className="flex justify-center gap-1.5 sm:gap-8">
								{ImgAltData.map((item) => (
									<Image className="cursor-pointer " src={item.imgSrc} alt={item.imgAlt} width={113} height={35} />
								))}
							</div>
						</div>
						<div className="flex flex-col justify-center w-full md:w-1/2 mt-4 md:mt-0">
							<p className="text-center mb-2 text-[#404553] font-bold">Connect With Us</p>
							<div className="flex justify-center gap-3 sm:gap-7">
								{svgSocialIcons.map((item, index) => (
									<div key={index} className="w-11 h-11 hover:opacity-[0.7] cursor-pointer">
										{item}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2   lg:flex-row justify-between  items-center  bg-gray-200 ">
					<div className="w-full  justify-between mx-auto py-6 px-5 items-center  md:flex md:w-full sm:w-full ">
						<div className="w-full flex flex-col gap-4  sm:flex-row sm:w-full justify-center">
							<div className="text-sm text-[#7E859B] font-normal mt-1 bg-zinc-400 mr-10 cursor-pointer sm:justify-between">
								© 2024 noon. All Rights Reserved
							</div>
							<div className="flex justify-center gap-8">
								{imgIcons.map((item) => (
									<Image src={item} width={41} height={26} />
								))}
							</div>
						</div>
					</div>
					<div className=" w-1/2 flex flex-row rounded-full gap-4 sm:gap-8 justify-center p-2 mt-4 md:mt-0 sm:w-full sm:pt-3">
						{linkFooter.map((item) => (
							<p className="text-[8px] sm:text-sm text-[#404553] text-sm h-[19.6]	w-fit cursor-pointer hover:underline ">{item}</p>
						))}
					</div>
				</div>
			</footer>
		</>
	);
}
