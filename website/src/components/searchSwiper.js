"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


import {

    Button,
    Collapse,
    Input,
    Card,
    Typography,
    CardBody,
    Checkbox
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
export function SearchSwiper() {
    const [slidesPerView, setSlidesPerView] = useState(6);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const toggleOpen = () => setOpen((cur) => !cur);
    const toggleOpen2 = () => setOpen2((cur) => !cur);

    const [openMenu, setOpenMenu] = React.useState(false);


    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(2);
            } else if (window.innerWidth < 768) {
                setSlidesPerView(3);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(4);
            } else if (window.innerWidth < 1280) {
                setSlidesPerView(5);
            } else {
                setSlidesPerView(6);
            }
        };

        updateSlidesPerView();

        window.addEventListener("resize", updateSlidesPerView);

        return () => {
            window.removeEventListener("resize", updateSlidesPerView);
        };
    }, []);
    return (
        <>

            <Swiper
                className="py-5"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={12}
                slidesPerView={slidesPerView}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                <SwiperSlide>
                    <div className="ms-10">

                        <Button
                            onClick={toggleOpen}
                            variant="text"
                            className="flex items-center  rounded-3xl bg-blue-gray-100 mt-2  font-normal capitalize tracking-normal"
                        >

                            Price (EGP)

                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""}`}
                            />
                        </Button>
                        <Collapse open={open}>
                            <Card className="  w-12/12">
                                <CardBody>
                                    <Typography className="font-bold">
                                        Price
                                    </Typography>
                                    <Typography className="block">
                                        <div className="w-25 ">
                                            <Input type="number" className=" rounded-sm" />
                                        </div>TO
                                        <div className="w-25">
                                            <Input type="number" className=" rounded-sm" />
                                        </div>GO
                                    </Typography>
                                </CardBody>
                            </Card>
                        </Collapse>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div>

                        <Button
                            onClick={toggleOpen2}
                            variant="text"
                            className="flex items-center  rounded-3xl bg-blue-gray-100 mt-2  font-normal capitalize tracking-normal"
                        >
                            Type of Console Software

                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""}`}
                            />
                        </Button>
                        <Collapse open={open2}>
                            <Card className="  w-12/12">
                                <CardBody>
                                    <Typography className="justify-between">
                                        <div className="flex">
                                            <Checkbox color="blue" />
                                            <label mt-2>PlayStation 4 (PS4)</label>
                                            <div className="space-x-4 ">(875)</div>
                                        </div>

                                        <div className="flex">
                                            <Checkbox color="blue" />
                                            <label mt-2>PlayStation 5 (PS5)
                                            </label>
                                            <div className="space-x-4 "><span className="ms-2">(275)</span></div>
                                        </div>


                                        <div className="flex">
                                            <Checkbox color="blue" />
                                            <label mt-2>PS4/PS5</label>
                                            <div className="space-x-4 "><span className="ms-7">(95)</span></div>
                                        </div>
                                        <div className="flex">
                                            <Checkbox color="blue" />
                                            <label mt-2>PC Games</label>
                                            <div className="space-x-4"><span className="ms-6">(4)</span></div>
                                        </div>
                                        <div className="flex">
                                            <Checkbox color="blue" />
                                            <label mt-2>PlayStation3(PS3)</label>
                                            <div className="space-x-4"><span className="ms-4">(3)</span></div>
                                        </div>


                                    </Typography>

                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Button

                            variant="text"
                            className="flex items-center  rounded-3xl bg-blue-gray-100 mt-2  font-normal capitalize tracking-normal"
                        >
                            <strong>Type : </strong> PlayStation5(PS5)
                        </Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Button

                            variant="text"
                            className="flex items-center  rounded-3xl bg-blue-gray-100 mt-2  font-normal capitalize tracking-normal"
                        >
                            Video & Game
                        </Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Button

                            variant="text"
                            className="flex items-center  rounded-3xl bg-blue-gray-100 mt-2  font-normal capitalize tracking-normal"
                        >
                            Mobiles & accessories
                        </Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <Button

                            variant="text"
                            className="flex items-center  rounded-3xl bg-blue-gray-100 mt-2  font-normal capitalize tracking-normal"
                        >
                            Televions & Video
                        </Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">
                        <Button

                            variant="text"
                            className="flex items-center  rounded-3xl bg-blue-gray-100 mt-2  font-normal capitalize tracking-normal"
                        >
                            Camera & Photo
                        </Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">
                        <Button

                            variant="text"
                            className="flex items-center  rounded-3xl bg-blue-gray-100 mt-2  font-normal capitalize tracking-normal"
                        >
                            Sony
                        </Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">
                        <Button

                            variant="text"
                            className="flex items-center  rounded-3xl bg-blue-gray-100 mt-2  font-normal capitalize tracking-normal"
                        >
                            Generic
                        </Button>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
