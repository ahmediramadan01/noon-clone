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
    Checkbox,
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
    return (
        <>
            <div className="mx-auto bg-blue-gray-50">
                <div className="grid lg:grid-cols-[350px_auto] md:grid-cols-[300px_auto] sm:grid-cols-[auto]">
                    <div className="basis-3/12 hidden md:flex flex-col flex-1">
                        <SearchSidebar></SearchSidebar>
                    </div>
                    <div className="basis-9/12">
                        <div className="lg:flex md:block  w-full ">
                            <div className="mt-3 ">2457 Results for "sony"</div>
                        </div>


                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3 w-full mt-7 justify-items-center">
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                        </div>

                    </div>

                </div>
                <div className="border-t-2 border-blue-gray-100 sm:w-full w-full mt-2 "></div>
            </div>
        </>
    );
}
