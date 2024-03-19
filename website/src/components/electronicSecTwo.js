import Image from "next/image";

export function SectionTwo({ items }) {
    return (
        <>
            <div className="grid h-full w-full gap-5 bg-[#fef08a] xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-5 mx-4">
                {items.map((item, index) => {
                    console.log(item)
                    return (
                        <>
                            <div className="w-full flex mb-3  bg-[#f1f5f9]">
                                <div className="w-1/2 flex-col justify-between ">
                                    <div className=" w-[276] h-[167] bg-slate-50">
                                        <div className="w-[276] h-[27] ">
                                            <div className="py-[2px]  px-[14px]  text-base w-[154] h-[26] m-3">
                                                <span key={index} className="text-white p-1 text-nowrap w-full bg-black rounded-tl-lg rounded-br-lg px-auto mx-auto no-wrap">
                                                    {item.title}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-4 mb-2 px-3">
                                            {item.description}
                                        </div>
                                        <div className="px-3">
                                            <span className="line-through decoration-red-400">{item.pricebefore}</span>
                                            <span className="text-2xl font-bold"> {item.priceAfter} EGP</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex  align-middle justify-center bg-white">
                                    <Image className=" " src={item.imgSrc} alt={item.imgalt} width={117} height={159} />
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}