"use client";

import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

export function SmallCarsoel({ images }) {
    return (
        <Carousel
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-1 ">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-10 bg-white" : "w-5 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <div className="grid 2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 2xl:gap-0   xl:gap-1 lg:gap-1 p-1 md:gap-2 sm:gap-3">
                {images.map((image, index) => (
                    <div className="md:col-span-1 bg-orange-50">
                        <Image key={index} src={image} alt={` image ${index + 1}`} className=" h-full w-full object-cover grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3" />
                    </div>

                ))}

            </div>
        </Carousel>
    );
}
