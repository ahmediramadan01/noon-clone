"use client"
import Image from "next/image";

export function DealsCard() {
    return (
        <div className="container mx-auto ">
            <div className="mt-2 bg-red-100 w-full ">
                <img className="  w-full p-1" src="/title.avif" alt="img1" />
                <div className="flex columns-4 mt-3 ms-3 mr-3">
                    <img className="  w-1/4 p-0.5" src="/img1.avif" alt="img1" />
                    <img className=" w-1/4 p-0.5" src="/img2.avif" alt="img2" />
                    <img className=" w-1/4 p-0.5" src="/img3.avif" alt="img3" />
                    <img className=" w-1/4 p-0.5" src="/img1.avif" alt="img1" />
                </div>
                <div className="flex columns-4 mt-3 ms-3 mr-3">
                    <img className="  w-1/4 p-0.5" src="/img1.avif" alt="img1" />
                    <img className=" w-1/4 p-0.5" src="/img2.avif" alt="img2" />
                    <img className=" w-1/4 p-0.5" src="/img3.avif" alt="img3" />
                    <img className=" w-1/4 p-0.5" src="/img1.avif" alt="img1" />
                </div>
                <div className="flex columns-4 mt-3 ms-3 mr-3">
                    <img className="  w-1/4 p-0.5" src="/img1.avif" alt="img1" />
                    <img className=" w-1/4 p-0.5" src="/img2.avif" alt="img2" />
                    <img className=" w-1/4 p-0.5" src="/img3.avif" alt="img3" />
                    <img className=" w-1/4 p-0.5" src="/img1.avif" alt="img1" />
                </div>
                <div className="flex columns-4 mt-3 ms-3 mr-3">
                    <img className="  w-1/4 p-0.5" src="/img1.avif" alt="img1" />
                    <img className=" w-1/4 p-0.5" src="/img2.avif" alt="img2" />
                    <img className=" w-1/4 p-0.5" src="/img3.avif" alt="img3" />
                    <img className=" w-1/4 p-0.5" src="/img1.avif" alt="img1" />
                </div>
            </div>

            <div className="mt-2  w-full ">
                <div className="flex columns-3 mt-3">
                    <div className="bg-white w-1/3">
                        <img className="  w-full p-1" src="/reasons shop.avif" alt="img1" />

                        <div className="flex columns-2 mt-3 ms-3 mr-3">
                            <img className=" w-2/4  p-0.5" src="/clearance.avif" alt="img1" />
                            <img className=" w-2/4  p-0.5" src="/NewArr.avif" alt="img1" />
                        </div>
                        <div className="flex columns-2 mt-3 ms-3 mr-3">
                            <img className=" w-2/4  p-0.5" src="/BestSeller.avif" alt="img1" />
                            <img className=" w-2/4  p-0.5" src="/Topdeals.avif" alt="img1" />
                        </div>

                    </div>
                    <div className="bg-red-300 w-1/3 ms-2 ">
                        <img className="  w-full p-1" src="/Megadeals.avif" alt="img1" />

                        {/* <div className=""></div> */}
                        <div className="flex  columns-2 mt-3 ms-3 mr-3">
                            {/* <img className=" w-2/4  p-0.5" src="/clearance.avif" alt="img1" />
							
							<img className=" w-2/4  p-0.5" src="/NewArr.avif" alt="img1" /> */}
                            <div className="w-2/4  p-0.5 bg-white rounded-lg h-48">
                                <div className="flex justify-end px-0 pt-0 ">

                                    <img src="/fashion.png" alt="img1" />

                                </div>
                                <br />
                                <div className="flex flex-col items-center pb-10">
                                    <Image
                                        alt="Bonnie image"
                                        height="61"
                                        src="/fashion2.jpg"
                                        width="61"
                                        className="mb-3  shadow-lg"
                                    />
                                    <div className="bg-gray-200  w-full flex flex-col  ">
                                        <p> Modest Wear</p>
                                        <h2 className="font-bold flex">Up to 80% Off</h2>

                                    </div>

                                </div>
                            </div>
                            <div className="w-2/4  p-1 ms-2 bg-white rounded-lg h-48 p">
                                <div className="flex justify-end px-0 pt-0 ">

                                    <img src="/fashion.png" alt="img1" />

                                </div>
                                <br />
                                <div className="flex flex-col items-center pb-10">
                                    <Image
                                        alt="Bonnie image"
                                        height="61"
                                        src="/jeaulary.jpg"
                                        width="61"
                                        className="mb-3  shadow-lg"
                                    />
                                    <div className="bg-gray-200 w-full  ">
                                        <p> Modest Wear</p>
                                        <h2 className="font-bold">Up to 80% Off</h2>

                                    </div>

                                </div>
                            </div>



                        </div>
                        <div className="flex columns-2 mt-3 ms-3 mr-3">

                            <div className="w-2/4  p-0.5 bg-white rounded-lg h-48">
                                <div className="flex justify-end px-0 pt-0 ">

                                    <img src="/fashion.png" alt="img1" />

                                </div>
                                <br />
                                <div className="flex flex-col items-center pb-10">
                                    <Image
                                        alt="Bonnie image"
                                        height="61"
                                        src="/sport.jpg"
                                        width="61"
                                        className="mb-3  "
                                    />
                                    <div className="bg-gray-200 w-full  ">
                                        <p> Modest Wear</p>
                                        <h2 className="font-bold">Up to 80% Off</h2>

                                    </div>

                                </div>
                            </div>
                            <div className="w-2/4  p-1 ms-2 bg-white rounded-lg h-48 p">
                                <div className="flex justify-end px-0 pt-0 ">

                                    <img src="/fashion.png" alt="img1" />

                                </div>
                                <br />
                                <div className="flex flex-col items-center pb-10">
                                    <Image
                                        alt="Bonnie image"
                                        height="61"
                                        src="/homedeal.jpg"
                                        width="61"
                                        className="mb-3  "
                                    />
                                    <div className="bg-gray-200 w-full  ">
                                        <p> Modest Wear</p>
                                        <h2 className="font-bold">Up to 80% Off</h2>

                                    </div>

                                </div>
                            </div>



                        </div>

                    </div>
                    <div className="bg-white w-1/3">
                        <img className="  w-full p-1" src="/In Focus.avif" alt="img1" />
                        <div className="column-12 ">
                            <img className="  w-full p-1" src="/Baby feeding.avif" alt="img1" />

                        </div>
                        <div className="column-12 ">
                            <img className="  w-full p-1" src="/Videogame.avif" alt="img1" />

                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
}
