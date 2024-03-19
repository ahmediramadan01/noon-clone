import Image from "next/image";

export function ElectronForEvery({ items }) {
    return (
        <>
            {
                items.map((item, index) => (
                    <div className="my-5 flex-col bg-[#e5e5e5] py-4" key={index} >
                        <div className="">
                            {/* Assuming Image is imported from a library like 'next/image' */}
                            <Image className=" " src={item.SliderImg} alt="hhhkjy" />
                        </div>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-4 ">
                            {/* Correcting the key issue here */}
                            {item.SrcImg.map((imgSrc, i) => (
                                <div className="flex justify-center" key={i}>
                                    {/* Assuming Image is imported from a library like 'next/image' */}
                                    <Image className="cursor-pointer " src={imgSrc} alt={item.AltImg[i]} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </>
    );
}
