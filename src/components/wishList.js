"use client"

import { Button } from "@material-tailwind/react";

export function WishList() {
    return (
        <>

            <div className="container mx-auto  ">
                <div className="bg-gray-50">
                    <hr className="mt-3"></hr>
                    <div className="flex w-full h-16 mt-5" >
                        <div className="text-xl text-left font-bold mt-2 ms-4">
                            WishList

                        </div>
                        <div className="">
                            <Button className="w-200 font-bold bg-blue-800 absolute right-20 mt-2">CREATE NEW WISHLIST</Button>

                        </div>

                    </div>
                    <hr className="mt-4"></hr>
                    <div className="flex w-full">
                        <div className="basis-1/3 ">
                            <div className=" p-1 bg-gray-200 mr-9 mt-4">
                                <div className="flex mt-4">
                                    <p className="font-bold">menna ismail</p>
                                    <button class="rounded-full bg-blue-700 ms-8 text-white w-24">Default</button>

                                </div>
                                <div className="flex mt-3">
                                    <p > 2 items</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" className="ms-4">
                                        <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
                                    </svg>


                                </div>
                            </div>
                        </div>
                        <div class="h-800 border-l border-gray-200"></div>
                        <div className="basis-2/3 ">
                            <div className="w-full">
                                <div className="flex mt-4 ms-4">
                                    <p className="font-bold">menna ismail</p>
                                    <button class="rounded-full bg-blue-700 ms-8 text-white w-24">Default</button>
                                    <button class="rounded-full  border-2   border-black-50 ms-8 text-black w-24 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="mt-1">
                                            <path d="M 36 5 C 32.151772 5 29 8.1517752 29 12 C 29 12.585766 29.198543 13.109464 29.335938 13.654297 L 17.345703 19.652344 C 16.059118 18.073938 14.181503 17 12 17 C 8.1517722 17 5 20.151775 5 24 C 5 27.848225 8.1517722 31 12 31 C 14.181503 31 16.059118 29.926062 17.345703 28.347656 L 29.335938 34.345703 C 29.198543 34.890536 29 35.414234 29 36 C 29 39.848225 32.151772 43 36 43 C 39.848228 43 43 39.848225 43 36 C 43 32.151775 39.848228 29 36 29 C 33.818497 29 31.940882 30.073938 30.654297 31.652344 L 18.664062 25.654297 C 18.801457 25.109464 19 24.585766 19 24 C 19 23.414234 18.801457 22.890536 18.664062 22.345703 L 30.654297 16.347656 C 31.940882 17.926062 33.818497 19 36 19 C 39.848228 19 43 15.848225 43 12 C 43 8.1517752 39.848228 5 36 5 z M 36 8 C 38.226909 8 40 9.7730927 40 12 C 40 14.226907 38.226909 16 36 16 C 33.773091 16 32 14.226907 32 12 C 32 9.7730927 33.773091 8 36 8 z M 12 20 C 14.226909 20 16 21.773093 16 24 C 16 26.226907 14.226909 28 12 28 C 9.7730915 28 8 26.226907 8 24 C 8 21.773093 9.7730915 20 12 20 z M 36 32 C 38.226909 32 40 33.773093 40 36 C 40 38.226907 38.226909 40 36 40 C 33.773091 40 32 38.226907 32 36 C 32 33.773093 33.773091 32 36 32 z"></path>
                                        </svg>
                                        <p className="mt-0 ms-2">Share</p>
                                    </button>
                                    <button class="rounded-full  border-2   border-black-50 ms-8 text-black w-24  ">

                                        ...More
                                    </button>

                                </div>
                            </div>
                            <hr className="mt-8"></hr>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}