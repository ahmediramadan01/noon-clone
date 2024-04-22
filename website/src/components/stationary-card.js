import Image from "next/image";
import React, { useMemo } from "react";

function StationaryCard({ titleImg, images }) {
	let numCols = 3;

	if (images.length == 4) {
		numCols = 4;
	} else if (images.length == 5) {
		numCols = 5;
	} else if (images.length == 6) {
		numCols = 6;
	} else if (images.length == 10) {
		numCols = 5;
	}

	return (
		<>
			<div className="my-2">
				<div className="w-full my-1 py-1">
					<Image src={titleImg} alt={"stationery-item"} width={50} height={5} layout="responsive" />
				</div>
				<div className={`grid grid-cols-${numCols} gap-4`}>
					{images.map((image, index) => (
						<div key={index}>
							<img src={image.src} alt={`Image ${index + 1}`} className="w-full h-auto" />
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default StationaryCard;
