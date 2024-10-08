"use client";
import React, { useEffect, useState } from "react";
import {
	Input,
	Typography,
	List,
	ListItem,
	Accordion,
	AccordionHeader,
	AccordionBody,
	Checkbox,
	Slider,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";
import { Spinner } from "@material-tailwind/react";

export default function SearchPage() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [open, setOpen] = React.useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	const [products, setProducts] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedBrands, setSelectedBrands] = useState([]);
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");

	useEffect(() => {
		fetch(`https://noon-clone-livid.vercel.app/api/products`)
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setLoading(false);
			});
	}, [selectedCategories, selectedBrands]);

	const handleCategoryChange = (category) => {
		if (selectedCategories.includes(category)) {
			setSelectedCategories(selectedCategories.filter((c) => c !== category));
		} else {
			setSelectedCategories([category]);
		}
	};
	const handleBrandChange = (brand) => {
		if (selectedBrands.includes(brand)) {
			setSelectedBrands(selectedBrands.filter((b) => b !== brand));
		} else {
			setSelectedBrands([...selectedBrands, brand]);
		}
	};

	const handleMinPriceChange = (event) => {
		setMinPrice(event.target.value);
	};

	const handleMaxPriceChange = (event) => {
		setMaxPrice(event.target.value);
	};

	const filteredProducts = products.filter((product) => {
		const categoryFilter = selectedCategories.length === 0 || selectedCategories.includes(product.category);

		const brandFilter = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
		const priceFilter =
			(!minPrice || parseInt(product.price) >= parseInt(minPrice)) &&
			(!maxPrice || parseInt(product.price) <= parseInt(maxPrice));

		return categoryFilter && brandFilter && priceFilter;
	});

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
			<div className="mx-auto bg-blue-gray-50">
				<div className="grid lg:grid-cols-[350px_auto] md:grid-cols-[300px_auto] sm:grid-cols-[auto]">
					<div className="basis-3/12 hidden md:flex flex-col flex-1">
						<List>
							<Accordion
								open={open === 1}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
									/>
								}
							>
								<ListItem className="p-0" selected={open === 1}>
									<AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
										<Typography color="blue-gray" className="mr-auto font-normal">
											Fulfillment
										</Typography>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-2 ">
									<List className="p-0 ">
										<div className="flex">
											<Checkbox color="blue" />
											<svg
												width="60"
												height="20"
												viewBox="0 0 82 22"
												fill="none"
												xmlns="http://www.w3.org/2000/svg "
												className="mt-4"
											>
												<path
													d="M82 0C81.6986 1.14758 78.4111 13.3232 77.4248 16.2901C76.603 18.8372 73.9729 21.4682 69.2608 22C68.8498 21.972 11.9447 22 11.1228 22H10.7667C10.6023 22 10.4379 22 10.2736 22C4.54776 21.7481 0 16.9338 0 11.028C0 7.9771 1.20543 5.2341 3.15056 3.24682C5.09569 1.23155 7.80791 0 10.7667 0H82Z"
													fill="#FEEE00"
												/>
												<path
													d="M12.1576 15.1428C13.2913 15.1428 14.5007 14.8037 15.3888 14.2009L14.6518 12.5245C14.085 12.9577 13.1591 13.1838 12.3465 13.1838C10.6459 13.1838 9.83338 12.1478 9.83338 11.3755C9.83338 11.319 9.83338 11.2059 9.83338 11.1494H16.617C16.6926 10.8669 16.806 10.1888 16.806 9.6425C16.806 7.09957 15.0487 5.59265 12.7056 5.59265C9.66331 5.59265 7.43359 8.09791 7.43359 11.0552C7.43359 13.5982 9.28539 15.1428 12.1576 15.1428ZM14.6329 9.49181H10.0979C10.2869 8.49348 11.2506 7.55165 12.5544 7.55165C13.9905 7.55165 14.6707 8.38046 14.6707 9.30345C14.6707 9.34112 14.6707 9.45414 14.6518 9.49181H14.6329Z"
													fill="#404553"
												/>
												<path
													d="M25.8521 14.9167L23.6224 10.2453L27.6661 5.81869H24.9073L22.3941 8.6065L21.147 5.81869H18.5394L20.599 10.2453L16.3286 14.9167H19.0685L21.8462 11.8464L23.2634 14.9167H25.8521Z"
													fill="#404553"
												/>
												<path
													d="M32.6151 15.1428C35.714 15.1428 37.4146 12.0913 37.4146 9.35996C37.4146 6.94888 36.0163 5.59265 33.9567 5.59265C32.8607 5.59265 31.9726 6.04473 31.1979 6.94888L31.4624 5.81869H29.0626L26.266 18.3827H28.6658L29.7051 13.7112C30.3098 14.6153 31.3868 15.1428 32.6151 15.1428ZM32.2183 13.0142C31.2546 13.0142 30.4798 12.581 30.083 11.9594L30.8011 8.8137C31.2924 8.19209 32.0482 7.72118 32.8796 7.72118C34.0512 7.72118 34.9015 8.54999 34.9015 9.84971C34.9015 11.5262 33.8055 13.0142 32.2183 13.0142Z"
													fill="#404553"
												/>
												<path
													d="M40.457 14.9167L41.7797 8.94555C42.3088 8.34278 43.1592 7.85303 44.0473 7.85303C44.4252 7.85303 44.7653 7.92838 44.9165 7.96605L45.4456 5.59265C43.9906 5.59265 43.008 6.13891 42.2144 7.00539L42.4789 5.81869H40.0791L38.0573 14.9167H40.457Z"
													fill="#404553"
												/>
												<path
													d="M49.9494 15.1428C51.0832 15.1428 52.2925 14.8037 53.1806 14.2009L52.4437 12.5245C51.8768 12.9577 50.9509 13.1838 50.1384 13.1838C48.4378 13.1838 47.6252 12.1478 47.6252 11.3755C47.6252 11.319 47.6252 11.2059 47.6252 11.1494H54.4089C54.4845 10.8669 54.5978 10.1888 54.5978 9.6425C54.5978 7.09957 52.8405 5.59265 50.4974 5.59265C47.4552 5.59265 45.2254 8.09791 45.2254 11.0552C45.2254 13.5982 47.0773 15.1428 49.9494 15.1428ZM52.4248 9.49181H47.8898C48.0787 8.49348 49.0424 7.55165 50.3462 7.55165C51.7823 7.55165 52.4626 8.38046 52.4626 9.30345C52.4626 9.34112 52.4626 9.45414 52.4437 9.49181H52.4248Z"
													fill="#404553"
												/>
												<path
													d="M59.279 15.1428C61.7733 15.1428 63.2283 13.6924 63.2283 11.9594C63.2283 9.19043 58.5799 9.4353 58.5799 8.32395C58.5799 7.85303 59.0523 7.4763 59.9026 7.4763C61.0174 7.4763 62.1512 8.09791 62.5858 8.663L63.8329 7.0619C62.9637 6.17658 61.5087 5.59265 59.9593 5.59265C57.5217 5.59265 56.199 7.08074 56.199 8.663C56.199 11.3943 60.8474 11.0929 60.8474 12.3173C60.8474 12.8259 60.3372 13.2591 59.5247 13.2591C58.2019 13.2591 56.8792 12.468 56.3312 11.8275L54.9896 13.504C56.01 14.5777 57.6162 15.1428 59.279 15.1428Z"
													fill="#404553"
												/>
												<path
													d="M68.2841 15.1428C70.7784 15.1428 72.2333 13.6924 72.2333 11.9594C72.2333 9.19043 67.5849 9.4353 67.5849 8.32395C67.5849 7.85303 68.0573 7.4763 68.9077 7.4763C70.0225 7.4763 71.1563 8.09791 71.5909 8.663L72.838 7.0619C71.9688 6.17658 70.5138 5.59265 68.9643 5.59265C66.5268 5.59265 65.2041 7.08074 65.2041 8.663C65.2041 11.3943 69.8525 11.0929 69.8525 12.3173C69.8525 12.8259 69.3423 13.2591 68.5297 13.2591C67.207 13.2591 65.8843 12.468 65.3363 11.8275L63.9947 13.504C65.0151 14.5777 66.6213 15.1428 68.2841 15.1428Z"
													fill="#404553"
												/>
											</svg>
										</div>
									</List>
								</AccordionBody>
							</Accordion>
							<Accordion
								open={open === 2}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
									/>
								}
							>
								<ListItem className="p-0" selected={open === 2}>
									<AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
										<Typography color="blue-gray" className="mr-auto font-normal">
											Category
										</Typography>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-2 ">
									<List className="p-0 block ">
										<div className="flex justify-between">
											<Link href={"#"} className="mt-3 ms-4 hover:text-blue-700 ">
												Electronics
											</Link>
											<Checkbox
												color="blue"
												onChange={() => handleCategoryChange("electronics")}
												checked={selectedCategories.includes("electronics")}
											/>
										</div>
										<div className="flex justify-between">
											<Link href={"#"} className="mt-3 ms-4 hover:text-blue-700 ">
												Beauty
											</Link>
											<Checkbox
												color="blue"
												onChange={() => handleCategoryChange("beauty")}
												checked={selectedCategories.includes("beauty")}
											/>
										</div>
										<div className="flex justify-between">
											<Link href={"#"} className="mt-3 ms-4 hover:text-blue-700 ">
												Fashion
											</Link>
											<Checkbox
												color="blue"
												onChange={() => handleCategoryChange("fashion")}
												checked={selectedCategories.includes("fashion")}
											/>
										</div>
										<div className="flex justify-between">
											<Link href={"#"} className="mt-3 ms-4 hover:text-blue-700 ">
												Stationery
											</Link>
											<Checkbox
												color="blue"
												onChange={() => handleCategoryChange("stationery")}
												checked={selectedCategories.includes("stationery")}
											/>
										</div>
										<div className="flex justify-between">
											<Link href={"#"} className="mt-3 ms-4 hover:text-blue-700 ">
												Grocery
											</Link>
											<Checkbox
												color="blue"
												onChange={() => handleCategoryChange("grocery")}
												checked={selectedCategories.includes("grocery")}
											/>
										</div>
									</List>
								</AccordionBody>
							</Accordion>
							<Accordion
								open={open === 3}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
									/>
								}
							>
								<ListItem className="p-0" selected={open === 3}>
									<AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
										<Typography color="blue-gray" className="mr-auto font-normal">
											Brand
										</Typography>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-2 ">
									<List className="p-0 ">
										<div className="block">
											<Input label="Search" className="mb-4 bg-white rounded-none h-10 w-16" />
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("Dell")}
													checked={selectedBrands.includes("Dell")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">Dell</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("Samsung")}
													checked={selectedBrands.includes("Samsung")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">Samsung</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("Apple")}
													checked={selectedBrands.includes("Apple")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">Apple</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("Anker")}
													checked={selectedBrands.includes("Anker")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">Anker</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("L'Oréal Paris")}
													checked={selectedBrands.includes("L'Oréal Paris")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">L'Oréal Paris</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("Xiaomi")}
													checked={selectedBrands.includes("Xiaomi")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">Xiaomi</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("OPPO")}
													checked={selectedBrands.includes("OPPO")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">OPPO</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("HP")}
													checked={selectedBrands.includes("HP")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">HP</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("Crucial")}
													checked={selectedBrands.includes("Crucial")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">Crucial</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("na1")}
													checked={selectedBrands.includes("na1")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">na1</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("Logitech")}
													checked={selectedBrands.includes("Logitech")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">Logitech</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("Casio")}
													checked={selectedBrands.includes("Casio")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">Casio</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("Farouk Pasha")}
													checked={selectedBrands.includes("Farouk Pasha")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">Farouk Pasha</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("Abu Auf")}
													checked={selectedBrands.includes("Abu Auf")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">Abu Auf</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("Amanple")}
													checked={selectedBrands.includes("Amanple")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">Amanple</span>
												</Link>
											</div>
											<div className="flex">
												<Checkbox
													color="blue"
													onChange={() => handleBrandChange("UIXJODO")}
													checked={selectedBrands.includes("UIXJODO")}
												/>
												<Link href={"#"} className="mt-2">
													<span className="text-sm mt-6 hover:text-blue-500">UIXJODO</span>
												</Link>
											</div>

											<Link href={"#"} className="text-blue-700 ms-3 text-sm underline">
												See All
											</Link>
										</div>
									</List>
								</AccordionBody>
							</Accordion>

							<Accordion
								open={open === 4}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`}
									/>
								}
							>
								<ListItem className="p-0" selected={open === 4}>
									<AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
										<Typography color="blue-gray" className="mr-auto font-normal">
											Price (EGP)
										</Typography>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-2 ">
									<List className="p-0 ">
										<div className="block w-12/12">
											<Input
												type="number"
												value={minPrice}
												onChange={handleMinPriceChange}
												className="w-5/12 bg-white"
											/>
											<span className=" w-1/12 ">TO</span>
											<Input
												type="number"
												value={maxPrice}
												onChange={handleMaxPriceChange}
												className="w-5/12 bg-white"
											/>
											<span className=" w-1/12 ">GO</span>
										</div>
									</List>
								</AccordionBody>
							</Accordion>
							<Accordion
								open={open === 5}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${open === 5 ? "rotate-180" : ""}`}
									/>
								}
							>
								<ListItem className="p-0" selected={open === 5}>
									<AccordionHeader onClick={() => handleOpen(5)} className="border-b-0 p-3">
										<Typography color="blue-gray" className="mr-auto font-normal">
											Product Rating
										</Typography>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-2 ">
									<List className="p-0 ">
										<div className="block">
											<div className="text-sm ms-3 text-blue-600">1.1 Stars or more</div>
											<div className="flex w-12/12 flex-col"></div>
											<Slider color="blue" className="w-10/12 ms-3" defaultValue={100} />
											<div className="text-xs ms-3 text-gray-500 ">
												1.1 Star <span className="ms-48">5stars</span>
											</div>
										</div>
									</List>
								</AccordionBody>
							</Accordion>

							<Accordion
								open={open === 8}
								icon={
									<ChevronDownIcon
										strokeWidth={2.5}
										className={`mx-auto h-4 w-4 transition-transform ${open === 8 ? "rotate-180" : ""}`}
									/>
								}
							>
								<ListItem className="p-0" selected={open === 8}>
									<AccordionHeader onClick={() => handleOpen(8)} className="border-b-0 p-3">
										<Typography color="blue-gray" className="mr-auto font-normal">
											Seller
										</Typography>
									</AccordionHeader>
								</ListItem>
								<AccordionBody className="py-2 ">
									<List className="p-0 ">
										<div className="block">
											<div className="flex justify-between">
												<div className="flex">
													<Checkbox color="blue" />

													<span className="text-md mt-3 text-sm">Genius</span>
												</div>
												<span className=" mt-2 text-gray-400 text-sm">(1271)</span>
											</div>
											<div className="flex justify-between">
												<div className="flex">
													<Checkbox color="blue" />
													<span className="text-md mt-3 text-sm">Covers line</span>
												</div>
												<span className=" mt-2 text-gray-400 text-sm">(546)</span>
											</div>
											<div className="flex justify-between">
												<div className="flex">
													<Checkbox color="blue" />

													<span className="text-md mt-3 text-sm">Egy Gamers</span>
												</div>
												<span className=" mt-2 text-gray-400 text-sm">(370)</span>
											</div>
											<div className="flex justify-between">
												<div className="flex">
													<Checkbox color="blue" />

													<span className="text-md mt-3 text-sm">TheGameCave</span>
												</div>
												<span className=" mt-2 text-gray-400 text-sm">(56)</span>
											</div>
											<div className="flex justify-between">
												<div className="flex">
													<Checkbox color="blue" />

													<span className="text-md mt-3 text-sm">gamesworldegypt</span>
												</div>
												<span className=" mt-2 text-gray-400 text-sm">(38)</span>
											</div>
											<div className="flex justify-between">
												<div className="flex">
													<Checkbox color="blue" />

													<span className="text-md mt-3 text-sm">Gamers colony</span>
												</div>
												<span className=" mt-2 text-gray-400 text-sm">(35)</span>
											</div>
											<div className="flex justify-between">
												<div className="flex">
													<Checkbox color="blue" />

													<span className="text-md mt-3 text-sm">Brand House</span>
												</div>
												<span className=" mt-2 text-gray-400 text-sm">(21)</span>
											</div>
											<div className="flex justify-between">
												<div className="flex">
													<Checkbox color="blue" />

													<span className="text-md mt-3 text-sm">Walaa abd elaziz</span>
												</div>
												<span className=" mt-2 text-gray-400 text-sm">(20)</span>
											</div>
											<Link href={"#"} className="text-blue-700 ms-3 text-sm underline">
												See All
											</Link>
										</div>
									</List>
								</AccordionBody>
							</Accordion>
						</List>
					</div>
					<div className="basis-9/12">
						<div className="lg:flex md:block  w-full ">
							<div className="mt-3 ">{filteredProducts.length} Results</div>
						</div>
						<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 w-full mt-7 justify-items-center">
							{filteredProducts.map((product, index) => (
								<ProductCard key={index} data={product} />
							))}
						</div>
					</div>
				</div>
				<div className="border-t-2 border-blue-gray-100 sm:w-full w-full mt-2"></div>
			</div>
		</>
	);
}
