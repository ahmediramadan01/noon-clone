
export default function ({ items }) {
    return (
        <>
            {
                items.map((item, index) => (
                    <div className="w-full flex justify-between pb-0 p-6">
                        <div className="text-lg	font-extrabold	">Best Deals </div>
                        <div className="">
                            <button class="bg-transparent hover:bg-[#f6e05e] hover:text-black text-black-700 font-semibold py-2 px-4 border border-black-[900] hover:border-transparent rounded">
                                Shop Now
                            </button>
                        </div>
                    </div>
                ))
            }
        </>

    )
};