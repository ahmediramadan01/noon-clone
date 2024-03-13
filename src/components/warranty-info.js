
import React from 'react';

const WarrantyInfo = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="flex items-center my-5 ml-4 border shadow-sm rounded-lg h-10">
          <img src={item.icon} alt={item.text} className="w-6 h-6 mr-3" />
          <p className="text-sm text-gray-600">
            {item.text}
            <a href={item.href} className="text-sm text-blue-900 underline ml-4">
              Learn More
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default WarrantyInfo;
