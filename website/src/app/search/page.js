"use client";
import React from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Collapse,
    Input,
    Card,
    Typography,
    CardBody,
    Checkbox
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SearchSidebar } from "@/components/searchSidebar";

import { ProductCard } from "@/components/product-card";
import { SearchSwiper } from "@/components/searchSwiper";

export default function SearchPage() {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const toggleOpen = () => setOpen((cur) => !cur);
    const toggleOpen2 = () => setOpen2((cur) => !cur);
    return (<>
        <div className="mx-auto bg-blue-gray-50">
            <div className="flex ">
                <div className="basis-3/12 hidden md:flex flex-col flex-1">

                    <SearchSidebar></SearchSidebar>
                </div>
                <div className="basis-9/12">
                    <div className="lg:flex md:block  w-full ">
                        <div className="mt-3 w-1/3">2457 Results for "sony"</div>
                        <div className="lg:flex md:flex sm:block  ">
                            {/* <div className="mt-3 text-blue-gray-300">SORT BY</div> */}
                            <div className="flex w-1/3 ms-auto">
                                <span className="mt-3 text-blue-gray-300 text-xs">SORTBY</span>
                                <Menu open={openMenu} handler={setOpenMenu}>
                                    <MenuHandler>
                                        <Button
                                            variant="text"
                                            className="flex items-center bg-white h-8 border-black border mt-2 rounded-none font-normal capitalize tracking-normal ms-2"
                                        >
                                            RECOMMENDED{" "}
                                            <ChevronDownIcon
                                                strokeWidth={2.5}
                                                className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem className="font-bold">RECOMMENDED</MenuItem>
                                        <MenuItem>PRICE: HIGH TO LOW</MenuItem>
                                        <MenuItem>PRICE: LOW TO HIGH</MenuItem>
                                        <MenuItem>NEW ARRIVALS</MenuItem>
                                        <MenuItem>BEST RATED</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>

                            <div className="flex w-1/3 ms-auto ">
                                <span className="mt-3 text-blue-gray-300 absolute right-48 text-xs">DISPLAY</span>
                                <Menu open={openMenu2} handler={setOpenMenu2}>
                                    <MenuHandler>

                                        <Button
                                            variant="text"
                                            className="flex items-center bg-white h-8 rounded-none absolute right-10 border-black border mt-2  font-normal capitalize tracking-normal ms-2"
                                        >
                                            50PERPAGE{" "}
                                            <ChevronDownIcon
                                                strokeWidth={2.5}
                                                className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </Button>
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem className="font-bold">50 PER PAGE</MenuItem>
                                        <MenuItem>100 PER PAGE</MenuItem>
                                        <MenuItem>150 PER PAGE</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-5">

                        {/* <SearchSwiper></SearchSwiper> */}
                    </div>

                    <div className="flex flex-wrap gap-3 w-full mt-7">
                        <div className="border-t-2 border-blue-gray-200 sm:w-full w-full"></div>
                        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2">
                            <ProductCard></ProductCard>
                        </div>
                        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2">
                            <ProductCard></ProductCard>
                        </div>
                        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2">
                            <ProductCard></ProductCard>
                        </div>
                        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2">
                            <ProductCard></ProductCard>
                        </div>
                        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2">
                            <ProductCard></ProductCard>
                        </div>
                        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2">
                            <ProductCard></ProductCard>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </>);
}