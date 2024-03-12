"use client"
import React from 'react';

export function Overview({ overviewText, productData }) {

    const { brand= '', name= '', mode= '', modelNode= ''} = productData;

  return (
    <div className="w-full shadow-md">
      <h1 className="text-2xl font-semibold text-gray-900 h-20 flex items-center px-2 border-b-2">Overview</h1>

      <div className="w-full flex items-start flex-col md:flex-row gap-3 px-2">

        <div className="w-full md:w-1/2 lg:w-1/2">
          <h2 className="py-3">Overview</h2>
          <p className="px-1 w-8/10 text-sm"> {overviewText} </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-3">
          <h2 className="py-3">Product Details</h2>
          <table className="table-auto border-collapse w-full my-2 text-sm">
            <tbody>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">Brand</td>
                <td className="border px-4 py-2">{productData.brand}</td>
              </tr>
              <tr className="bg-white">
                <td className="border px-4 py-2">Name</td>
                <td className="border px-4 py-2">{productData.name}</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">Color</td>
                <td className="border px-4 py-2">{productData.color}</td>
              </tr>
              <tr className="bg-white">
                <td className="border px-4 py-2">Model No.</td>
                <td className="border px-4 py-2">{productData.modelNo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
