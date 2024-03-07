"use client";
import React, { useState } from "react";
import { Menu, MenuList, MenuItem, MenuHandler, Button } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export const MegaMenuWithHover = () => {
	return (
		<div className="nav-links">
			<div className="container-fluid flex">
				<div className="col-2 flex justify-left items-center border-r border-gray-300 text-sm font-semibold">
					<Menu
						className=""
						allowHover="true"
						animate={{
							mount: { y: -5 },
							unmount: { y: 10 },
						}}
					>
						<MenuHandler>
							<Button className="text-black bg-white rounded-none border-none">
								<a href="#" className="nav-link flex items-center px-5 w-50">
									ALL CATEGORIES
									<span className="ml-2">
										<ChevronDownIcon className="h-5 w-5" />
									</span>
								</a>
							</Button>
						</MenuHandler>

						<MenuList className="w-full bg-white text-black text-md">
							<MenuItem>
								<a href="#" className="nav-link">
									Electronics
								</a>
							</MenuItem>
							<MenuItem>
								<a href="#" className="nav-link">
									Mobiles
								</a>
							</MenuItem>
							<MenuItem>
								<a href="#" className="nav-link">
									Men
								</a>
							</MenuItem>
							<MenuItem>
								<a href="#" className="nav-link">
									Women
								</a>
							</MenuItem>
							<MenuItem>
								<a href="#" className="nav-link">
									Home
								</a>
							</MenuItem>
							<MenuItem>
								<a href="#" className="nav-link">
									Beauty & Health
								</a>
							</MenuItem>
							<MenuItem>
								<a href="#" className="nav-link">
									Baby & Toys
								</a>
							</MenuItem>
							<MenuItem>
								<a href="#" className="nav-link">
									Supermarket
								</a>
							</MenuItem>
							<MenuItem>
								<a href="#" className="nav-link">
									Sell on noon
								</a>
							</MenuItem>
							<MenuItem>
								<a href="#" className="nav-link text-danger">
									Deals
								</a>
							</MenuItem>
						</MenuList>
					</Menu>
				</div>
				<div className="col-10 justify-left items-center main-links flex">
					<a href="#" className="nav-link p-2 text-sm md:text-base">
						Electronics
					</a>
					<a href="#" className="nav-link p-2 text-sm md:text-base">
						Mobile
					</a>
					<a href="#" className="nav-link p-2 text-sm md:text-base">
						Men
					</a>
					<a href="#" className="nav-link p-2 text-sm md:text-base">
						Women
					</a>
					<a href="#" className="nav-link p-2 text-sm md:text-base">
						Home
					</a>
					<a href="#" className="nav-link p-2 text-sm md:text-base">
						Beauty and Healthy
					</a>
					<a href="#" className="nav-link p-2 text-sm md:text-base">
						Baby and Toys
					</a>
					<a href="#" className="nav-link p-2 text-sm md:text-base">
						Super Market
					</a>
					<a href="#" className="nav-link p-2 text-sm md:text-base">
						Sell on Noon
					</a>
					<a href="#" className="nav-link p-2 text-sm md:text-base text-red-500">
						Deals
					</a>
				</div>
			</div>
		</div>
	);
};
