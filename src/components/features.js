import Image from 'next/image';
import React, { useState } from 'react';

export function Freatures({ featuresImgSrc }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 h-20 flex items-center px-2 border-b-2">Product Features</h1>

      <div className={`relative w-full px-10 pt-14 ${expanded ? '' : 'h-96'} overflow-hidden transition-height duration-500 ease-in-out`}>

        <Image src={featuresImgSrc} width={400} height={400} layout="responsive" alt="product features image" className="mb-12"/>
        
        <div className={`absolute bottom-0 w-full h-20 flex justify-center ${!expanded ? 'bg-gradient-to-b from-transparent to-white' : ''}`}>
        <button className="mt-6 px-4 py-2 bg-transparent text-black rounded-md underline hover:no-underline transition-all" onClick={toggleExpanded}>
          {expanded ? 'Show Less' : 'View Full Product Features'}
        </button>
      </div>
      </div>


    </div>
  );
}
