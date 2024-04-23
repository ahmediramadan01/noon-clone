import React, { useEffect, useState } from "react";

const ProductPrice = ({ data }) => {
	const [product, setProduct] = useState({});
	useEffect(() => {
		setProduct({ ...data });
	});
	return (
		<>
			<div className={`old-price my-3`}>
				<span className="text-gray-600">Was: </span>
				<span className="text-gray-900">EG </span>
				<span className="text-gray-900">{product.price + (product.price * product.discountPercentage) / 100}</span>
			</div>
			<div className={`current-price font-extrabold my-3`}>
				<span className="text-gray-600">Now: </span>
				<span className="text-gray-900">EG </span>
				<span className="text-gray-900">{product.price}</span>
			</div>
			<div className={`saving-amount my-3`}>
				<span className="text-gray-600">Saving: </span>
				<span className="text-gray-900">EG </span>
				<span className="text-gray-900">{((product.price * product.discountPercentage) / 100).toFixed(1)}</span>
			</div>
		</>
	);
};

export default ProductPrice;
