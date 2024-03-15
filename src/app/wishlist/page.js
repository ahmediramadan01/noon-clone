"use client";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Collapse,
	Switch,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Input,
	Textarea,
	Checkbox,
} from "@material-tailwind/react";
import React from "react";
import Image from "next/image";
import ProductImage from "/public/images/product.jpg";
import Script from "next/script";
import { MainCard } from "@/components/mainCard";

export function WishlistPage() {
	const [open, setOpen] = React.useState(false);

	const toggleOpen = () => setOpen((cur) => !cur);
	const [openn, setOpenn] = React.useState(false);

	const handleOpen = () => setOpenn(!openn);
	const [openshare, setOpenshare] = React.useState(false);

	const handleOpenshare = () => setOpenshare(!openshare);

	return (
		<>
			<div className="container mx-auto px-4 ms:max-width: 640px ">
				<div className="bg-gray-50 w-full">
					<hr className="mt-3"></hr>
					<div className="w-full">
						<div className="flex w-full h-16 mt-5">
							<div className="text-xl text-left font-bold mt-2 ms-4">WishList</div>
							<div className="ms-auto">
								<Button className="w-200 font-bold bg-blue-800 absolute right-20 mt-2" onClick={handleOpen}>
									CREATE NEW WISHLIST
								</Button>
								<Dialog open={openn} className="opacity-100" size="sm" handler={handleOpen}>
									<div className="flex items-center justify-between">
										<DialogHeader className="flex flex-col items-start">
											{" "}
											<Typography className="mb-1" variant="h4">
												Create New Wishlist
											</Typography>
										</DialogHeader>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="mr-3 h-5 w-5"
											onClick={handleOpen}
										>
											<path
												fillRule="evenodd"
												d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<DialogBody>
										<hr></hr>
										<div className="w-full mt-3">
											<Input label="enter wish list name" />
										</div>
										<Checkbox label="Use this as default wishlist" />
									</DialogBody>
									<DialogFooter className="space-x-2">
										<Button className="w-full" color="blue" onClick={handleOpen}>
											Create
										</Button>
									</DialogFooter>
								</Dialog>
							</div>
						</div>
						<hr className="mt-4"></hr>
						<div className="flex w-full">
							<div className="basis-1/3 ">
								<div className=" p-1 bg-gray-200 mr-9 mt-4">
									<div className="flex mt-4">
										<p className="font-bold">menna ismail</p>
										<button className="rounded-full bg-blue-700 ms-8 text-white w-24">Default</button>
									</div>
									<div className="flex mt-3">
										<p> 2 items</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											width="20"
											height="20"
											viewBox="0 0 30 30"
											className="ms-4"
										>
											<path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
										</svg>
									</div>
								</div>
							</div>
							<div className="h-800 border-l border-gray-200"></div>
							<div className="basis-2/3   ">
								<div className="w-full">
									<div className="flex flex-wrap items-start mt-4">
										<div className="w-full lg:w-1/4 md:w-1/4 sm:w-full">
											<p className="font-bold w-full lg:w-32 md:w-32 mt-2 ps-2">menna ismail</p>
										</div>
										<div className="w-full lg:w-1/4 md:w-1/4 sm:w-1/4">
											<button className="rounded-full bg-blue-700 ms-2 mt-2 text-white w-full lg:w-24 md:w-24">
												Default
											</button>
										</div>

										<div className="w-full lg:w-1/4 md:w-1/4 sm:w-1/4">
											<button
												className="rounded-full ms-4 lg:ms-auto mt-2 lg:mt-2 md:mt-2 border-2 border-black-50 text-black w-full lg:w-24 md:w-24 flex"
												onClick={handleOpenshare}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													x="0px"
													y="0px"
													width="20"
													height="20"
													viewBox="0 0 48 48"
													className="mt-1"
												>
													<path d="M 36 5 C 32.151772 5 29 8.1517752 29 12 C 29 12.585766 29.198543 13.109464 29.335938 13.654297 L 17.345703 19.652344 C 16.059118 18.073938 14.181503 17 12 17 C 8.1517722 17 5 20.151775 5 24 C 5 27.848225 8.1517722 31 12 31 C 14.181503 31 16.059118 29.926062 17.345703 28.347656 L 29.335938 34.345703 C 29.198543 34.890536 29 35.414234 29 36 C 29 39.848225 32.151772 43 36 43 C 39.848228 43 43 39.848225 43 36 C 43 32.151775 39.848228 29 36 29 C 33.818497 29 31.940882 30.073938 30.654297 31.652344 L 18.664062 25.654297 C 18.801457 25.109464 19 24.585766 19 24 C 19 23.414234 18.801457 22.890536 18.664062 22.345703 L 30.654297 16.347656 C 31.940882 17.926062 33.818497 19 36 19 C 39.848228 19 43 15.848225 43 12 C 43 8.1517752 39.848228 5 36 5 z M 36 8 C 38.226909 8 40 9.7730927 40 12 C 40 14.226907 38.226909 16 36 16 C 33.773091 16 32 14.226907 32 12 C 32 9.7730927 33.773091 8 36 8 z M 12 20 C 14.226909 20 16 21.773093 16 24 C 16 26.226907 14.226909 28 12 28 C 9.7730915 28 8 26.226907 8 24 C 8 21.773093 9.7730915 20 12 20 z M 36 32 C 38.226909 32 40 33.773093 40 36 C 40 38.226907 38.226909 40 36 40 C 33.773091 40 32 38.226907 32 36 C 32 33.773093 33.773091 32 36 32 z"></path>
												</svg>
												<p className="ms-2">Share</p>
											</button>
											<Dialog open={openshare} className="opacity-100" size="sm" handler={handleOpenshare}>
												<div className="flex items-center justify-between">
													<DialogHeader className="flex flex-col items-start">
														{" "}
														<Typography className="mb-1" variant="h4">
															Want others to see your wishlist?
														</Typography>
													</DialogHeader>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="currentColor"
														className="mr-3 h-5 w-5"
														onClick={handleOpenshare}
													>
														<path
															fillRule="evenodd"
															d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
												<DialogBody>
													<hr></hr>
													<div className="w-full mt-3">
														<Input label="enter wish list name" />
													</div>
													<Checkbox label="Use this as default wishlist" />
												</DialogBody>
												<DialogFooter className="space-x-2">
													<Button className="w-full" color="blue" onClick={handleOpen}>
														Create
													</Button>
												</DialogFooter>
											</Dialog>
										</div>

										<div className="w-full lg:w-1/4 md:w-1/4 sm:w-full">
											<button
												className="rounded-full ms-2  mt-2 lg:mt-2 md:mt-2 border-2 border-black-50 text-black w-full lg:w-16 md:w-16 sm:w-16 flex"
												onClick={toggleOpen}
											>
												...More
											</button>
											<Collapse open={open}>
												<Card className="my-4 mx-auto w-full lg:w-52">
													<CardBody>
														<Typography>
															<div className="flex">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	x="0px"
																	y="0px"
																	width="20"
																	height="20"
																	viewBox="0 0 24 24"
																>
																	<path d="M 14.925781 2 C 14.813054 1.9991672 14.748047 2.0058594 14.748047 2.0058594 A 0.50005 0.50005 0 0 0 14.378906 2.2207031 L 4.2558594 16.998047 A 0.50005 0.50005 0 0 0 4.1699219 17.253906 L 4 20.474609 A 0.50005 0.50005 0 0 0 4.7128906 20.953125 L 7.6328125 19.585938 A 0.50005 0.50005 0 0 0 7.8320312 19.416016 L 17.955078 4.6386719 A 0.50005 0.50005 0 0 0 18.021484 4.2109375 C 18.021484 4.2109375 17.722643 3.2071312 16.755859 2.5566406 C 16.031006 2.0689324 15.263963 2.0024984 14.925781 2 z M 15.019531 3.0546875 C 15.173987 3.0505575 15.632727 3.0068745 16.197266 3.3867188 C 16.759177 3.7647948 16.88795 4.2002352 16.943359 4.3476562 L 15.902344 5.8652344 L 13.980469 4.5703125 L 15.019531 3.0546875 z M 13.416016 5.3964844 L 15.337891 6.6914062 L 7.0859375 18.736328 L 5.0429688 19.693359 L 5.1601562 17.447266 L 13.416016 5.3964844 z M 11.5 20 A 0.5 0.5 0 0 0 11.5 21 A 0.5 0.5 0 0 0 11.5 20 z M 14.5 20 A 0.5 0.5 0 0 0 14.5 21 A 0.5 0.5 0 0 0 14.5 20 z M 17.5 20 A 0.5 0.5 0 0 0 17.5 21 A 0.5 0.5 0 0 0 17.5 20 z"></path>
																</svg>

																<p>Edit</p>
															</div>
															<hr></hr>
															<div className="flex">
																<svg
																	xmlns="http://www.w3.org/2000/svg"
																	x="0px"
																	y="0px"
																	width="30"
																	height="30"
																	viewBox="0 0 48 48"
																	className="mt-1"
																>
																	<path d="M 36 5 C 32.151772 5 29 8.1517752 29 12 C 29 12.585766 29.198543 13.109464 29.335938 13.654297 L 17.345703 19.652344 C 16.059118 18.073938 14.181503 17 12 17 C 8.1517722 17 5 20.151775 5 24 C 5 27.848225 8.1517722 31 12 31 C 14.181503 31 16.059118 29.926062 17.345703 28.347656 L 29.335938 34.345703 C 29.198543 34.890536 29 35.414234 29 36 C 29 39.848225 32.151772 43 36 43 C 39.848228 43 43 39.848225 43 36 C 43 32.151775 39.848228 29 36 29 C 33.818497 29 31.940882 30.073938 30.654297 31.652344 L 18.664062 25.654297 C 18.801457 25.109464 19 24.585766 19 24 C 19 23.414234 18.801457 22.890536 18.664062 22.345703 L 30.654297 16.347656 C 31.940882 17.926062 33.818497 19 36 19 C 39.848228 19 43 15.848225 43 12 C 43 8.1517752 39.848228 5 36 5 z M 36 8 C 38.226909 8 40 9.7730927 40 12 C 40 14.226907 38.226909 16 36 16 C 33.773091 16 32 14.226907 32 12 C 32 9.7730927 33.773091 8 36 8 z M 12 20 C 14.226909 20 16 21.773093 16 24 C 16 26.226907 14.226909 28 12 28 C 9.7730915 28 8 26.226907 8 24 C 8 21.773093 9.7730915 20 12 20 z M 36 32 C 38.226909 32 40 33.773093 40 36 C 40 38.226907 38.226909 40 36 40 C 33.773091 40 32 38.226907 32 36 C 32 33.773093 33.773091 32 36 32 z"></path>
																</svg>
																<p className="text-sm">Enable/Disable Public Sharing</p>
																<Switch />
															</div>
														</Typography>
													</CardBody>
												</Card>
											</Collapse>
										</div>
									</div>
									{/* <hr className="mt-2 w-3/4 lg:w-96"></hr> */}
								</div>

								<hr className="mt-2 w-full"></hr>
								<div className="flex w-full ">
									<hr className="mt-2 "></hr>
									<div className="basis-1/4">
										<MainCard></MainCard>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
