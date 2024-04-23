import Image from "next/image";

export function ElectronicSecFive({ items }) {
	return (
		<>
			{items.map((item, index) => (
				<div key={index} className="mt-3 flex flex-col bg-[#e5e5e5] p-0 sm:p-5  sm:justify-around p-3 pb-4">
					<div>
						{item.SliderImgSrc && item.SliderImgSrc.img && (
							<Image className="" src={item.SliderImgSrc.img} alt={item.SliderImgSrc.alt} />
						)}
					</div>
					<div className="flex flex-col w-full p-0   lg:flex-row sm:p-6">
						<div className="w-full my-7 p-7 mx-2  justify-center mx-auto  sm:justify-center">
							{item.SmallImgSrc.slice(0, 1).map((src, i) => (
								<Image key={i} className="cursor-pointer" src={src} alt={item.SmallImgAlt[i]} />
							))}
						</div>
						<div className="w-full flex flex-col  md:flex-row">
							<div className="flex flex-col justify-center items-center mx-2	">
								{item.SmallImgSrc.slice(1, 3).map((src, i) => (
									<Image key={i} className="cursor-pointer ml-5" src={src} alt={item.SmallImgAlt[i + 1]} />
								))}
							</div>
							<div className="flex flex-col justify-center items-center mx-2">
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
