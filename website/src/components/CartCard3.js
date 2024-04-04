"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
	Card,
	CardBody,
	Typography,
	Button,
	Input,
	Menu,
	MenuHandler,
	Dialog,
	DialogHeader,
	DialogBody,
} from "@material-tailwind/react";
import Image from "next/image";

export default function CartCard3({ data }) {
	const session = useSession();
	const [cartProducts, setCartProducts] = useState([]);

	useEffect(() => {
		setCartProducts([...data]);
	}, [data]);

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen((cur) => !cur);
	return (
		<>
			<Card className="mt-3 rounded-none  lg:w-100 overflow-hidden   ">
				<CardBody className=" ">
					<Typography variant="h5" color="blue-gray" className="mb-2">
						Order Summary
					</Typography>
					<Typography className="   ">
						<div className="  lg:relative  flex lg:w-full  md:w-36 2xl:w-full">
							<Menu className="    sm:relative  md:relative  " placement="">
								<MenuHandler>
									<Button
										// ripple={false}
										// variant="text"
										// color="blue"
										className="  lg:h-10  md:h-9 text-center text-white z-10  xs:absolute xs:right-0    sm:absolute sm:right-4   md:absolute md:right-0  lg:absolute lg:right-0  xl:absolute xl:right-0     rounded-l-none border border-l-0 border-blue-gray-200 bg-light-blue-800   md:p-2 lg:pl-3  "
									>
										APPLY{" "}
									</Button>
								</MenuHandler>
							</Menu>
							<Input
								type="tel"
								placeholder="coupon code"
								className="rounded-l-sm lg:h-13 md:h-9  md:w-full   lg:w-full  2xl:w-full  !border-blue-gray-200 sm:!border-r-0  md:!border-r-0 lg:!border-r-0 "
								labelProps={{
									className: "before:content-none after:content-none",
								}}
								containerProps={{
									className: "min-w-0",
								}}
							/>
						</div>

						<div className="me-5  ">
							{" "}
							<Button
								className="mt-2 relative  w-full border-2 rounded-lg text-blue-900 bg-inherit  xl:px-36 xl:py-4  2xl:px-44 2xl:py-5"
								onClick={handleOpen}
							>
								<div className="flex md:pb-1 lg:pb-3 absolute left-1 bottom-0 ">
									<Image className="px-1 " src="/cart-8.svg" width="25" height="25"></Image>
									<span className=" sm:text-xs sm:capitalize   ">
										{" "}
										view available <span className=" sm:hidden   xl:inline">offers</span>{" "}
									</span>
								</div>
								<div className="">
									<Image
										className="xs:hidden sm:hidden  absolute sm:right-1 sm:bottom-1 md:right-2 md:bottom-2 2xl:right-2 2xl:bottom-2 "
										src="/cart-9.svg"
										width="20"
										height="20"
									></Image>
								</div>
							</Button>
						</div>

						<Dialog size="md" open={open} handler={handleOpen}>
							<DialogHeader className="justify-between">
								<div>
									<Typography variant="h5" color="blue-gray">
										<h2 className="mb-4 text-xl"> available offers</h2>

										<h4 className="mb-4 text-lg"> Coupon Offers</h4>
										<h6 className="mb-2 text-sm"> Bank Offers</h6>
									</Typography>
								</div>
							</DialogHeader>
							<DialogBody className="overflow-y-scroll !px-5">
								<div className="mb-6">
									<Typography variant="paragraph" color="blue-gray" className="py-3 font-semibold uppercase opacity-70">
										<Card className="w-full rounded-lg  border border-cyan-800	 max-w-[50rem] flex-row  mt-2">
											<CardBody className="flex ">
												<Typography color="gray" className=" flex font-thin text-sm">
													<Image className=" " src="/cart-11.svg" width="60" height="60"></Image>
													<p className="pt-5 font-thin text-xs ml-9 pb-4 ">
														Get 5% instant discount up to EGP 150 per Transaction when using CIB noon Credit Card
													</p>
												</Typography>
											</CardBody>
										</Card>

										<Card className="lg:w-full rounded-lg  border border-cyan-800	 lg:max-w-[50rem] flex-row  mt-2">
											<CardBody className="flex ">
												<Typography color="gray" className=" flex font-thin text-sm">
													<Image className=" " src="/cart-11.svg" width="60" height="60"></Image>
													<p className="pt-5 font-thin text-xs ml-9 pb-4 ">
														Get 5% instant discount up to EGP 150 per Transaction when using CIB noon Credit Card
													</p>
												</Typography>
											</CardBody>
										</Card>

										<Card className="w-full rounded-lg  border border-cyan-800	 max-w-[50rem] flex-row  mt-2">
											<CardBody className="flex ">
												<Typography color="gray" className=" flex font-thin text-sm">
													<Image className=" " src="/cart-11.svg" width="60" height="60"></Image>
													<p className="pt-5 font-thin text-xs ml-9 pb-4 ">
														Get 5% instant discount up to EGP 150 per Transaction when using CIB noon Credit Card
													</p>
												</Typography>
											</CardBody>
										</Card>
									</Typography>
								</div>
							</DialogBody>
						</Dialog>

						<div className="mt-2 flex   w-full justify-between">
							<h4 className="p-0 text-gray-500">
								Subtotal ({cartProducts.reduce((totalQuantity, product) => totalQuantity + product.quantity, 0)} items)
							</h4>
							<h4 className="ml-5 text-black">
								EGP {cartProducts.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0)}
							</h4>
						</div>

						<div className="mt-2 flex mb-3   w-full justify-between">
							<h4 className="p-0 text-gray-500">Shipping Fee</h4>
							<h4 className="ml-5 text-green-800">FREE</h4>
						</div>

						<hr />
						<div className="mt-2 flex text-xl font-extrabold   w-full justify-between">
							<h2 className="sm:text-xs  md:text-sm lg:text-sm  xl:text-xl text-black">
								Total
								<span className="text-gray-500 sm:text-xs  md:text-sm lg:text-sm  font-thin mx-1">
									(Inclusive of VAT)
								</span>{" "}
							</h2>
							<h4 className="ml-5 sm:text-xs  md:text-xs lg:text-sm  xl:text-xl text-black">
								EGP {cartProducts.reduce((totalPrice, product) => totalPrice + product.price * product.quantity, 0)}
							</h4>
						</div>

						<Card className="w-full  flex-row rounded-none py-2">
							<CardBody className="flex">
								<Typography color="gray" className=" flex font-thin text-sm">
									<Image className="mx-1 " src="/cart-10.svg" width="20" height="20"></Image>
									<p className="pt-5 font-thin text-xs ">Monthly payment plans from EGP 500.</p>
								</Typography>
								<a href="#" className="inline-block mt-2 ">
									<Button variant="text" className="text-xs text-deep-orange-400  ">
										<a className="underline lowercase">view more details</a>
									</Button>
								</a>
							</CardBody>
						</Card>

						<Button className=" w-full  bg-light-blue-800  rounded-sm  md:text-sm  2xl:text-xl ">
							<span className=" inline-block">CHECKOUT</span>
						</Button>
					</Typography>
				</CardBody>
			</Card>{" "}
		</>
	);
}
