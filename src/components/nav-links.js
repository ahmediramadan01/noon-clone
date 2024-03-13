"use client";
import React, { useState } from "react";
import { Menu, MenuList, MenuItem, MenuHandler, Button } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import LinksSwiper from "./LinksSwiper";

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
								<a href="#" className="nav-link flex items-center px-5 w-50 text-sm text-nowrap">
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

				<div className="main-links overflow-hidden flex items-center px-2">
					<LinksSwiper />
				</div>
			</div>
		</div>
	);
};
