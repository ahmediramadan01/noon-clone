import Image from "next/image";

function BeautyProduct({ items }) {
  return (
    <div className="w-full p-3">
      <div className="grid grid-cols-4 gap-3 w-full bg-[#fffcef] py-3">
        {items.map((item, index) => (
          <div key={index}>
            <Image src={item} className="w-full" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 w-full bg-[#fffcef] py-3">
        {items.map((item, index) => (
          <div key={index}>
            <Image src={item} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeautyProduct;
