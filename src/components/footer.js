"use client";
import { IconButton } from "@material-tailwind/react";


function FooterIcon({ title, icon, email }) {
    return (
        <>
            <div className="md:col-span-1">
                <h2 className="text-[15.4] font-bold mb-4">{title}</h2>
                {items.map((item, index, email) => (
                    <p key={index} className="text-sm pb-3 text-[#404553]">{item}</p>
                ))}
            </div>
        </>
    );
}
function FooterRow({ title, items }) {
    return (
        <>
            <div className="md:col-span-1">
                <h2 className="text-[15.4] font-bold mb-4">{title}</h2>
                {items.map((item, index) => (
                    <p key={index} className="text-sm pb-3 text-[#404553]">{item}</p>
                ))}
            </div>
        </>
    );
}
function FooterColumn({ title, items }) {
    return (
        <>
            <div className="md:col-span-1">
                <h2 className="text-[15.4] text-[#404553] font-bold mb-4 ">{title}</h2>
                {items.map((item, index) => (
                    <p key={index} className="text-sm pb-3 text-[#404553]">{item}</p>
                ))}
            </div>
        </>
    );
}
export function Footer() {
    return (
        <>
            <div className=" flex flex-row w-full mx-auto p-5 bg-gray-200">
                <div className="w-1/2 flex flex-col">
                    <p className=" text-xl text-[#404553] ">We're Always Here To Help </p>
                    <p className="w-5/2 text-[#7E859B] mt-1 bg-zinc-400">Reach out to us through any of these support channels</p>
                </div>
                <div>
                    <div className="flex flex-row rounded-full bg-[#FFFFFF] gap-1">
                        <IconButton variant="outlined" className="rounded-full">
                            <i className="fas fa-heart" />
                        </IconButton>
                        <div class="flex flex- rounded-l-lg  bg-[#FFFFFF] text-slate-950 ">
                            <div className=" text-xl text-[#404553] ">We're  </div>
                            <div className="w-5/2 text-[#7E859B] mt-1 bg-zinc-400">of these support channels</div>
                        </div>
                    </div>
                </div>



            </div>
            <footer className="bg-white-900 text-black p-5">
                <div className=" mx-auto">
                    <div className="w-[113] grid grid-cols-1 md:grid-cols-6 gap-8">
                        <div className="md:col-span-1">

                            <FooterColumn title="Electronics" items={["Mobiles", "Laptops", "Cameras"]} />
                        </div>
                        <div className="md:col-span-1">

                            <FooterColumn title="Electronics" items={["Mobiles", "Laptops", "Cameras"]} />
                        </div>
                        <div className="md:col-span-1">

                            <FooterColumn title="Electronics" items={["Mobiles", "Laptops", "Cameras"]} />
                        </div>
                        <div className="md:col-span-1">

                            <FooterColumn title="Electronics" items={["Mobiles", "Laptops", "Cameras"]} />
                        </div>
                        <div className="md:col-span-1">

                            <FooterColumn title="Electronics" items={["Mobiles", "Laptops", "Cameras"]} />
                        </div>
                        <div className="md:col-span-1">

                            <FooterColumn title="Electronics" items={["Mobiles", "Laptops", "Cameras"]} />
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}