"use client"
import React, { useState } from 'react';

export const ProductGallery = ({ images }) => {

  // images props will be array of images src's
  
  const [selectedImage, setSelectedImage] = useState(images[0]);

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
            style={{ width: '90px', height: 'auto' }}
            className={`border rounded my-2 ${selectedImage === image ? 'border-blue-500' : ''}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className="main-image w-full mx-2">
        <img src={selectedImage} alt="Main Image" className="w-full transition-all ease-out" />
      </div>
    </div>
  );
};
