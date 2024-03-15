import { ProductCard } from "./product-card";

export function Cards() {
    return (
        <>
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   xl:gap-8 lg:gap-6 p-5 md:gap-2 sm:gap-3">
               {[1,2,3,4,5,6].map((item,index) =>(
                <div key={index} className="md:col-span-1 ">
                    <ProductCard />
                </div>
                ))}
                {/* <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div>
                <div className="md:col-span-1 ">
                    <ProductCard />
                </div> */}
            </div>
        </>
    );
}
