"use client"
import React from 'react';

export function Freatures() {


  return (
    <div className="w-full shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 h-20 flex items-center px-2 border-b-2">Product Features</h1>

      <div className="w-full flex items-start flex-col md:flex-row gap-3 px-2">

        <div className="w-full md:w-1/2 lg:w-1/2">
          <h2 className="py-3">Product Features</h2>
          <p className="px-1 w-8/10 text-sm">  </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-3">
          <h2 className="py-3">Product</h2>
 
        </div>
      </div>
    </div>
  );
}
