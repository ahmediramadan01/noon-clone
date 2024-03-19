// PriceDivs.js
import React from 'react';

const ProductPrice = ({ prices }) => {
  return (
    <>
      {prices.map((price, index) => (
        <div key={index} className={`${price.className} my-3`}>
          <span className="text-gray-600">{price.label}: </span>
          <span className="text-gray-900">{price.currency} </span>
          <span className="text-gray-900">{price.amount}</span>
        </div>
      ))}
    </>
  );
}

export default ProductPrice;
