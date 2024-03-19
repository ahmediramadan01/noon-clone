import React from 'react';

const DeliveryInfoItems = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className="text-center" key={index}>
          <img src={item.imgSrc} alt={`Image ${index}`} className="w-8 h-8 rounded-full mx-auto" />
          <p className="mt-2 text-xs">{item.text}</p>
        </div>
      ))}
    </>
  );
}

export default DeliveryInfoItems;
