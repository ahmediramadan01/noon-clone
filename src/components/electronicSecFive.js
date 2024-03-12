import Image from "next/image";

export function ElectronicSecFive({ items }) {
    return (
        <>
            {items.map((item, index) => (
                <div key={index} className="mt-3 flex flex-col bg-[#e5e5e5] p-0 sm:p-5  sm:justify-around ">
                    <div>
                        {item.SliderImgSrc && item.SliderImgSrc.img && (
                            <Image className="" src={item.SliderImgSrc.img} alt={item.SliderImgSrc.alt} />
                        )}
                    </div>
                    <div className="flex w-full p-0 sm:flex-row flex-col sm:p-6">
                        <div className="w-1/2 my-7  justify-center mx-auto sx:ml-0">
                            {item.SmallImgSrc.slice(0, 1).map((src, i) => (
                                <Image key={i} className="cursor-pointer" src={src} alt={item.SmallImgAlt[i]} />
                            ))}
                        </div>
                        <div className="w-1/2 flex-col mr-8 my-5 sm:justify-center md:justify-center lg:justify-center xl:justify-center">
                            <div className="flex">
                                {item.SmallImgSrc.slice(1, 3).map((src, i) => (
                                    <Image key={i} className="cursor-pointer ml-5" src={src} alt={item.SmallImgAlt[i + 1]} />
                                ))}
                            </div>
                            <div className="flex">
                                {item.SmallImgSrc.slice(3).map((src, i) => (
                                    <Image key={i} className="cursor-pointer ml-5" src={src} alt={item.SmallImgAlt[i + 3]} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}