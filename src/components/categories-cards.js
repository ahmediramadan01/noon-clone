import React from "react";
import Image from "next/image";

export function CategoriesCards({ images, bgColor }) {
	const colsNum = images.length - 1;
	// console.log(colsNum);

	return (
		<div className={`bg-[${bgColor}] p-2`}>
			<Image src={images[0]} className="pb-4"></Image>
			<div className={`grid grid-cols-${colsNum} gap-4 justify-items-center`}>
				{images.slice(1).map((image, index) => (
					<Image key={index} src={image}></Image>
				))}
			</div>
		</div>
	);
}
