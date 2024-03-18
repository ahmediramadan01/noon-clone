"use client";
import React from "react";
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

export default function CartCard3() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen((cur) => !cur);
	return (
		<>
			<Card className="mt-3 rounded-none w-100 ">
				<CardBody>
					<Typography variant="h5" color="blue-gray" className="mb-2">
						Order Summary
					</Typography>
					<Typography>
						<div className="relative flex w-full max-w-[24rem]">
							<Menu className="" placement="">
								<MenuHandler>
									<Button
										// ripple={false}
										// variant="text"
										// color="blue"
										className="  h-10 text-center text-white absolute right-0 gap-2 rounded-l-none border border-l-0 border-blue-gray-200 bg-light-blue-800 pl-3"
									>
										APPLY{" "}
									</Button>
								</MenuHandler>
							</Menu>
							<Input
								type="tel"
								placeholder="coupon code"
								className="rounded-l-sm h-13 !border-blue-gray-200  "
								labelProps={{
									className: "before:content-none after:content-none",
								}}
								containerProps={{
									className: "min-w-0",
								}}
							/>
						</div>

						<div className="me-5">
							{" "}
							<Button
								className="mt-2 relative   border-2 rounded-lg text-blue-900 bg-inherit px-44 py-5 "
								onClick={handleOpen}
							>
								<div className="flex pb-3  absolute left-1 bottom-0 ">
									<Image className="px-1 " src="/cart-8.svg" width="25" height="25"></Image>
									<span className="text-xs capitalize   "> view available offers</span>
								</div>
								<div className="">
									<Image className="absolute right-2 bottom-2 " src="/cart-9.svg" width="20" height="20"></Image>
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
							<h4 className="p-0 text-gray-500">Subtotal (6 items) </h4>
							<h4 className="ml-5 text-black">EGP 94108.90</h4>
						</div>

						<div className="mt-2 flex mb-3   w-full justify-between">
							<h4 className="p-0 text-gray-500">Shipping Fee</h4>
							<h4 className="ml-5 text-green-800">FREE</h4>
						</div>

						<hr />
						<div className="mt-2 flex text-xl font-extrabold   w-full justify-between">
							<h2 className="+  text-black">
								Total<span className="text-gray-500 text-sm font-thin mx-1">(Inclusive of VAT)</span>{" "}
							</h2>
							<h4 className="ml-5 text-black">EGP 94108.90</h4>
						</div>

						<Card className="w-full max-w-[50rem] flex-row rounded-none py-2">
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

						<Button className=" bg-light-blue-800 px-32 rounded-sm  text-lg ">CHECKOUT</Button>
					</Typography>
				</CardBody>
			</Card>
		</>
	);
}
