"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function CategoriesCards({ images, bgColor }) {
	const [colsNum, setColsNum] = useState(images.length - 1);

	useEffect(() => {
		setColsNum(images.length - 1);
	}, [images]);

	return (
		<div className="p-2" style={{ backgroundColor: `${bgColor}` }}>
			<Image src={images[0]} className="pb-4 w-full"></Image>
			{/* <div className={`grid grid-cols-${colsNum} gap-4 justify-items-center`}> */}
			<div
				className="grid justify-items-center gap-4"
				style={{ gridTemplateColumns: `repeat(${colsNum}, minmax(0, 1fr))` }}
			>
				{images.slice(1).map((image, index) => (
					<Image key={index} src={image} className="w-full"></Image>
				))}
			</div>
		</div>
	);
}
