"use client";
import React, { useEffect, useState } from "react";

export function ProductGallery({ data }) {
	const [images, setImages] = useState([]);
	const [selectedImage, setSelectedImage] = useState("");

	useEffect(() => {
		if (data && data.length > 0) {
			setImages(data);
			setSelectedImage(data[0]);
		}
	}, [data]);

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	return (
		<div className="product-gallery flex sticky top-0">
			<div className="thumbnails">
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Thumbnail ${index + 1}`}
						style={{ width: "90px", height: "auto" }}
						className={`border rounded my-2 ${selectedImage === image ? "border-blue-500" : ""}`}
						onClick={() => handleImageClick(image)}
					/>
				))}
			</div>
			<div className="main-image w-full mx-2">
				<img src={selectedImage} alt="Main Image" className="w-full transition-all ease-out" />
			</div>
		</div>
	);
}
