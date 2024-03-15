"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Collapse,
    Switch,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,


    Checkbox

} from "@material-tailwind/react";
import React from "react";
import Image from "next/image";
import ProductImage from "/public/images/product.jpg";
import Script from "next/script";


export function WishList() {
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => setOpen((cur) => !cur);
    const [openn, setOpenn] = React.useState(false);

    const handleOpen = () => setOpenn(!openn);
    const [openshare, setOpenshare] = React.useState(false);

    const handleOpenshare = () => setOpenshare(!openshare);


    return (
        <>

            <div className="container mx-auto px-4 ms:max-width: 640px ">
                <div className="bg-gray-50 w-full">
                    <hr className="mt-3"></hr>
                    <div className="w-full">
                        <div className="flex w-full h-16 mt-5" >
                            <div className="text-xl text-left font-bold mt-2 ms-4">
                                WishList

                            </div>
                            <div className="ms-auto">
                                <Button className="w-200 font-bold bg-blue-800 absolute right-20 mt-2" onClick={handleOpen}>CREATE NEW WISHLIST</Button>
                                <Dialog open={openn} className="opacity-100" size="sm" handler={handleOpen}>
                                    <div className="flex items-center justify-between">
                                        <DialogHeader className="flex flex-col items-start">
                                            {" "}
                                            <Typography className="mb-1" variant="h4">
                                                Create New Wishlist
                                            </Typography>
                                        </DialogHeader>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="mr-3 h-5 w-5"
                                            onClick={handleOpen}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <DialogBody>
                                        <hr></hr>
                                        <div className="w-full mt-3">
                                            <Input label="enter wish list name" />
                                        </div>
                                        <Checkbox label="Use this as default wishlist" />
                                    </DialogBody>
                                    <DialogFooter className="space-x-2">

                                        <Button className="w-full" color="blue" onClick={handleOpen}>Create</Button>

                                    </DialogFooter>
                                </Dialog>
                            </div>

                        </div>
                        <hr className="mt-4"></hr>
                        <div className="flex w-full">
                            <div className="basis-1/3 ">
                                <div className=" p-1 bg-gray-200 mr-9 mt-4">
                                    <div className="flex mt-4">
                                        <p className="font-bold">menna ismail</p>
                                        <button className="rounded-full bg-blue-700 ms-8 text-white w-24">Default</button>

                                    </div>
                                    <div className="flex mt-3">
                                        <p > 2 items</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" className="ms-4">
                                            <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
                                        </svg>


                                    </div>
                                </div>
                            </div>
                            <div className="h-800 border-l border-gray-200"></div>
                            <div className="basis-2/3   ">
                                <div className="w-full ">
                                    <div className="flex mt-4 ms-4">
                                        <div className="w-48">
                                            <p className="font-bold w-32 mt-2">menna ismail</p>
                                        </div>
                                        <div className="w-28">
                                            <button className="rounded-full bg-blue-700 ms-2 mt-2 text-white w-24">Default</button>
                                        </div>


                                        <div className="w-28 ms-auto">
                                            <button className="rounded-full ms-40  border-2 mt-2  border-black-50  text-black w-24 flex" onClick={handleOpenshare}>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="mt-1">
                                                    <path d="M 36 5 C 32.151772 5 29 8.1517752 29 12 C 29 12.585766 29.198543 13.109464 29.335938 13.654297 L 17.345703 19.652344 C 16.059118 18.073938 14.181503 17 12 17 C 8.1517722 17 5 20.151775 5 24 C 5 27.848225 8.1517722 31 12 31 C 14.181503 31 16.059118 29.926062 17.345703 28.347656 L 29.335938 34.345703 C 29.198543 34.890536 29 35.414234 29 36 C 29 39.848225 32.151772 43 36 43 C 39.848228 43 43 39.848225 43 36 C 43 32.151775 39.848228 29 36 29 C 33.818497 29 31.940882 30.073938 30.654297 31.652344 L 18.664062 25.654297 C 18.801457 25.109464 19 24.585766 19 24 C 19 23.414234 18.801457 22.890536 18.664062 22.345703 L 30.654297 16.347656 C 31.940882 17.926062 33.818497 19 36 19 C 39.848228 19 43 15.848225 43 12 C 43 8.1517752 39.848228 5 36 5 z M 36 8 C 38.226909 8 40 9.7730927 40 12 C 40 14.226907 38.226909 16 36 16 C 33.773091 16 32 14.226907 32 12 C 32 9.7730927 33.773091 8 36 8 z M 12 20 C 14.226909 20 16 21.773093 16 24 C 16 26.226907 14.226909 28 12 28 C 9.7730915 28 8 26.226907 8 24 C 8 21.773093 9.7730915 20 12 20 z M 36 32 C 38.226909 32 40 33.773093 40 36 C 40 38.226907 38.226909 40 36 40 C 33.773091 40 32 38.226907 32 36 C 32 33.773093 33.773091 32 36 32 z"></path>
                                                </svg>
                                                <p className=" ms-2 ">Share</p>
                                            </button>
                                            <Dialog open={openshare} className="opacity-100" size="sm" handler={handleOpenshare}>
                                                <div className="flex items-center justify-between">
                                                    <DialogHeader className="flex flex-col items-start">
                                                        {" "}
                                                        <Typography className="mb-1" variant="h4">
                                                            Want others to see your wishlist?
                                                        </Typography>

                                                    </DialogHeader>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="mr-3 h-5 w-5"
                                                        onClick={handleOpenshare}
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>

                                                </div>


                                                <DialogBody className=" overflow-scroll">
                                                    <p className="mt-0 text-sm">Your list privacy will be changed to "Public"</p>
                                                    <hr></hr>
                                                    <div className="w-full mt-3">
                                                        {/* <Textarea label="Message" /> */}
                                                        <div className="border-2 border-gray-500 h-24 rounded-lg">
                                                            <div className="flex mt-4">
                                                                <p className="text-black">menna ismail</p>
                                                                <button className="rounded-full bg-blue-700 ms-8 text-white w-24">Default</button>

                                                            </div>
                                                            <div className="flex mt-3">
                                                                <p > 2 items</p>
                                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" className="ms-4">
                                                                    <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z"></path>
                                                                </svg>


                                                            </div>


                                                        </div>

                                                    </div>
                                                    <br />

                                                    <hr></hr>
                                                    <div className="flex">

                                                        <svg className="mt-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.91638 4.80921L10.7199 3.0057C11.1146 2.61096 11.5832 2.29784 12.099 2.08421C12.6147 1.87059 13.1675 1.76063 13.7257 1.76063C14.284 1.76063 14.8367 1.87059 15.3525 2.08421C15.8682 2.29784 16.3369 2.61096 16.7316 3.0057C17.1263 3.40043 17.4394 3.86905 17.6531 4.38479C17.8667 4.90054 17.9767 5.45331 17.9767 6.01155C17.9767 6.56978 17.8667 7.12256 17.6531 7.6383C17.4394 8.15405 17.1263 8.62266 16.7316 9.0174L14.9281 10.8209M11.3211 14.4279L9.51755 16.2314C9.12282 16.6262 8.6542 16.9393 8.13845 17.1529C7.62271 17.3665 7.06994 17.4765 6.5117 17.4765C5.38429 17.4765 4.30305 17.0286 3.50585 16.2314C2.70865 15.4342 2.26079 14.353 2.26079 13.2256C2.26079 12.0982 2.70865 11.0169 3.50585 10.2197L5.30936 8.41623" stroke="#3866DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M7.71484 12.0225L12.5242 7.2131" stroke="#3866DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                        <p className="mt-4 ms-3">Copy link</p>

                                                    </div>
                                                    <div className="flex">

                                                        <svg className="mt-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.59209 4.59277H19.4069C20.4254 4.59277 21.2588 5.42611 21.2588 6.44463V17.5557C21.2588 18.5743 20.4254 19.4076 19.4069 19.4076H4.59209C3.57357 19.4076 2.74023 18.5743 2.74023 17.5557V6.44463C2.74023 5.42611 3.57357 4.59277 4.59209 4.59277Z" stroke="#3866DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M21.2588 6.44434L11.9995 12.9258L2.74023 6.44434" stroke="#3866DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>

                                                        <p className="mt-4 ms-3">Email</p>

                                                    </div>

                                                </DialogBody>

                                            </Dialog>
                                        </div>

                                        <div className=" h-28 ms-auto">
                                            <button className="rounded-full mt-2  border-2 bg-gray-100  absolute right-20   border-black-50  text-black w-24" onClick={toggleOpen}>...More</button>
                                            <Collapse open={open}>
                                                <Card className="my-4 mx-auto w-52">
                                                    <CardBody>
                                                        <Typography >
                                                            <div className="flex">
                                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                                                                    <path d="M 14.925781 2 C 14.813054 1.9991672 14.748047 2.0058594 14.748047 2.0058594 A 0.50005 0.50005 0 0 0 14.378906 2.2207031 L 4.2558594 16.998047 A 0.50005 0.50005 0 0 0 4.1699219 17.253906 L 4 20.474609 A 0.50005 0.50005 0 0 0 4.7128906 20.953125 L 7.6328125 19.585938 A 0.50005 0.50005 0 0 0 7.8320312 19.416016 L 17.955078 4.6386719 A 0.50005 0.50005 0 0 0 18.021484 4.2109375 C 18.021484 4.2109375 17.722643 3.2071312 16.755859 2.5566406 C 16.031006 2.0689324 15.263963 2.0024984 14.925781 2 z M 15.019531 3.0546875 C 15.173987 3.0505575 15.632727 3.0068745 16.197266 3.3867188 C 16.759177 3.7647948 16.88795 4.2002352 16.943359 4.3476562 L 15.902344 5.8652344 L 13.980469 4.5703125 L 15.019531 3.0546875 z M 13.416016 5.3964844 L 15.337891 6.6914062 L 7.0859375 18.736328 L 5.0429688 19.693359 L 5.1601562 17.447266 L 13.416016 5.3964844 z M 11.5 20 A 0.5 0.5 0 0 0 11.5 21 A 0.5 0.5 0 0 0 11.5 20 z M 14.5 20 A 0.5 0.5 0 0 0 14.5 21 A 0.5 0.5 0 0 0 14.5 20 z M 17.5 20 A 0.5 0.5 0 0 0 17.5 21 A 0.5 0.5 0 0 0 17.5 20 z"></path>
                                                                </svg>


                                                                <p>Edit</p>
                                                            </div>
                                                            <hr></hr>
                                                            <div className="flex">
                                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className="mt-1">
                                                                    <path d="M 36 5 C 32.151772 5 29 8.1517752 29 12 C 29 12.585766 29.198543 13.109464 29.335938 13.654297 L 17.345703 19.652344 C 16.059118 18.073938 14.181503 17 12 17 C 8.1517722 17 5 20.151775 5 24 C 5 27.848225 8.1517722 31 12 31 C 14.181503 31 16.059118 29.926062 17.345703 28.347656 L 29.335938 34.345703 C 29.198543 34.890536 29 35.414234 29 36 C 29 39.848225 32.151772 43 36 43 C 39.848228 43 43 39.848225 43 36 C 43 32.151775 39.848228 29 36 29 C 33.818497 29 31.940882 30.073938 30.654297 31.652344 L 18.664062 25.654297 C 18.801457 25.109464 19 24.585766 19 24 C 19 23.414234 18.801457 22.890536 18.664062 22.345703 L 30.654297 16.347656 C 31.940882 17.926062 33.818497 19 36 19 C 39.848228 19 43 15.848225 43 12 C 43 8.1517752 39.848228 5 36 5 z M 36 8 C 38.226909 8 40 9.7730927 40 12 C 40 14.226907 38.226909 16 36 16 C 33.773091 16 32 14.226907 32 12 C 32 9.7730927 33.773091 8 36 8 z M 12 20 C 14.226909 20 16 21.773093 16 24 C 16 26.226907 14.226909 28 12 28 C 9.7730915 28 8 26.226907 8 24 C 8 21.773093 9.7730915 20 12 20 z M 36 32 C 38.226909 32 40 33.773093 40 36 C 40 38.226907 38.226909 40 36 40 C 33.773091 40 32 38.226907 32 36 C 32 33.773093 33.773091 32 36 32 z"></path>
                                                                </svg>
                                                                <p className="text-sm">Enable/Disable Public Sharing</p>
                                                                <Switch />
                                                            </div>
                                                        </Typography>
                                                    </CardBody>
                                                </Card>
                                            </Collapse>
                                        </div>




                                    </div>
                                </div>
                                <hr className="mt-2"></hr>
                                <div className="flex w-full ">
                                    <div className="basis-1/4">
                                        <Card className="lg:w-60 md:w-40 sm:w-20 max-w-[26rem] shadow-lg ms-3 mt-2 ">
                                            <CardHeader floated={false} color="transparent" className="flex justify-center">
                                                <Image src={ProductImage} width="200" height="200" alt="Product Image" className="m-10" />
                                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-black/5 " />


                                                <Typography color="black" className="!absolute bottom-4 left-4 flex items-center gap-1.5 font-normal">
                                                    4.2
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="-mt-0.5 h-5 w-5 text-green-500"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <p className="text-gray-400">(70)</p>
                                                </Typography>
                                            </CardHeader>
                                            <CardBody>
                                                <div className="mb-3 flex items-center justify-between">
                                                    <Typography variant="h5" color="blue-gray" className=" text-sm font-medium">
                                                        Sony PlayStation 5 Console (Disc Version) With Controller
                                                    </Typography>
                                                </div>
                                                <p>
                                                    EGP <span className="font-bold text-xl">38,700</span> <span className="line-through">40,999</span>{" "}
                                                    <span className="text-xs">Only 2 days left In stock</span>
                                                </p>

                                            </CardBody>
                                            <CardFooter className="pt-1">
                                                <svg width="82" height="22" viewBox="0 0 82 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M82 0C81.6986 1.14758 78.4111 13.3232 77.4248 16.2901C76.603 18.8372 73.9729 21.4682 69.2608 22C68.8498 21.972 11.9447 22 11.1228 22H10.7667C10.6023 22 10.4379 22 10.2736 22C4.54776 21.7481 0 16.9338 0 11.028C0 7.9771 1.20543 5.2341 3.15056 3.24682C5.09569 1.23155 7.80791 0 10.7667 0H82Z"
                                                        fill="#FEEE00"
                                                    />
                                                    <path
                                                        d="M12.1576 15.1428C13.2913 15.1428 14.5007 14.8037 15.3888 14.2009L14.6518 12.5245C14.085 12.9577 13.1591 13.1838 12.3465 13.1838C10.6459 13.1838 9.83338 12.1478 9.83338 11.3755C9.83338 11.319 9.83338 11.2059 9.83338 11.1494H16.617C16.6926 10.8669 16.806 10.1888 16.806 9.6425C16.806 7.09957 15.0487 5.59265 12.7056 5.59265C9.66331 5.59265 7.43359 8.09791 7.43359 11.0552C7.43359 13.5982 9.28539 15.1428 12.1576 15.1428ZM14.6329 9.49181H10.0979C10.2869 8.49348 11.2506 7.55165 12.5544 7.55165C13.9905 7.55165 14.6707 8.38046 14.6707 9.30345C14.6707 9.34112 14.6707 9.45414 14.6518 9.49181H14.6329Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M25.8521 14.9167L23.6224 10.2453L27.6661 5.81869H24.9073L22.3941 8.6065L21.147 5.81869H18.5394L20.599 10.2453L16.3286 14.9167H19.0685L21.8462 11.8464L23.2634 14.9167H25.8521Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M32.6151 15.1428C35.714 15.1428 37.4146 12.0913 37.4146 9.35996C37.4146 6.94888 36.0163 5.59265 33.9567 5.59265C32.8607 5.59265 31.9726 6.04473 31.1979 6.94888L31.4624 5.81869H29.0626L26.266 18.3827H28.6658L29.7051 13.7112C30.3098 14.6153 31.3868 15.1428 32.6151 15.1428ZM32.2183 13.0142C31.2546 13.0142 30.4798 12.581 30.083 11.9594L30.8011 8.8137C31.2924 8.19209 32.0482 7.72118 32.8796 7.72118C34.0512 7.72118 34.9015 8.54999 34.9015 9.84971C34.9015 11.5262 33.8055 13.0142 32.2183 13.0142Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M40.457 14.9167L41.7797 8.94555C42.3088 8.34278 43.1592 7.85303 44.0473 7.85303C44.4252 7.85303 44.7653 7.92838 44.9165 7.96605L45.4456 5.59265C43.9906 5.59265 43.008 6.13891 42.2144 7.00539L42.4789 5.81869H40.0791L38.0573 14.9167H40.457Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M49.9494 15.1428C51.0832 15.1428 52.2925 14.8037 53.1806 14.2009L52.4437 12.5245C51.8768 12.9577 50.9509 13.1838 50.1384 13.1838C48.4378 13.1838 47.6252 12.1478 47.6252 11.3755C47.6252 11.319 47.6252 11.2059 47.6252 11.1494H54.4089C54.4845 10.8669 54.5978 10.1888 54.5978 9.6425C54.5978 7.09957 52.8405 5.59265 50.4974 5.59265C47.4552 5.59265 45.2254 8.09791 45.2254 11.0552C45.2254 13.5982 47.0773 15.1428 49.9494 15.1428ZM52.4248 9.49181H47.8898C48.0787 8.49348 49.0424 7.55165 50.3462 7.55165C51.7823 7.55165 52.4626 8.38046 52.4626 9.30345C52.4626 9.34112 52.4626 9.45414 52.4437 9.49181H52.4248Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M59.279 15.1428C61.7733 15.1428 63.2283 13.6924 63.2283 11.9594C63.2283 9.19043 58.5799 9.4353 58.5799 8.32395C58.5799 7.85303 59.0523 7.4763 59.9026 7.4763C61.0174 7.4763 62.1512 8.09791 62.5858 8.663L63.8329 7.0619C62.9637 6.17658 61.5087 5.59265 59.9593 5.59265C57.5217 5.59265 56.199 7.08074 56.199 8.663C56.199 11.3943 60.8474 11.0929 60.8474 12.3173C60.8474 12.8259 60.3372 13.2591 59.5247 13.2591C58.2019 13.2591 56.8792 12.468 56.3312 11.8275L54.9896 13.504C56.01 14.5777 57.6162 15.1428 59.279 15.1428Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M68.2841 15.1428C70.7784 15.1428 72.2333 13.6924 72.2333 11.9594C72.2333 9.19043 67.5849 9.4353 67.5849 8.32395C67.5849 7.85303 68.0573 7.4763 68.9077 7.4763C70.0225 7.4763 71.1563 8.09791 71.5909 8.663L72.838 7.0619C71.9688 6.17658 70.5138 5.59265 68.9643 5.59265C66.5268 5.59265 65.2041 7.08074 65.2041 8.663C65.2041 11.3943 69.8525 11.0929 69.8525 12.3173C69.8525 12.8259 69.3423 13.2591 68.5297 13.2591C67.207 13.2591 65.8843 12.468 65.3363 11.8275L63.9947 13.504C65.0151 14.5777 66.6213 15.1428 68.2841 15.1428Z"
                                                        fill="#404553"
                                                    />
                                                </svg>
                                                <div className="pt-3">
                                                    <button
                                                        className="select-none rounded bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                        type="button"
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                    <button className="ms-3 w-10 py-1 px-3 text-center align-middle text-blue-600 rounded border-2 border-blue-500">...</button>
                                                </div>
                                            </CardFooter>

                                        </Card>
                                    </div>
                                    <div className="basis-3/4">
                                        <Card className="lg:w-60 md:w-40 sm:w-20 max-w-[26rem] shadow-lg ms-3 mt-2 ">
                                            <CardHeader floated={false} color="transparent" className="flex justify-center">
                                                <Image src={ProductImage} width="200" height="200" alt="Product Image" className="m-10" />
                                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-black/5 " />


                                                <Typography color="black" className="!absolute bottom-4 left-4 flex items-center gap-1.5 font-normal">
                                                    4.2
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="-mt-0.5 h-5 w-5 text-green-500"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <p className="text-gray-400">(70)</p>
                                                </Typography>
                                            </CardHeader>
                                            <CardBody>
                                                <div className="mb-3 flex items-center justify-between">
                                                    <Typography variant="h5" color="blue-gray" className=" text-sm font-medium">
                                                        Sony PlayStation 5 Console (Disc Version) With Controller
                                                    </Typography>
                                                </div>
                                                <p>
                                                    EGP <span className="font-bold text-xl">38,700</span> <span className="line-through">40,999</span>{" "}
                                                    <span className="text-xs">Only 2 days left In stock</span>
                                                </p>

                                            </CardBody>
                                            <CardFooter className="pt-1">
                                                <svg width="82" height="22" viewBox="0 0 82 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M82 0C81.6986 1.14758 78.4111 13.3232 77.4248 16.2901C76.603 18.8372 73.9729 21.4682 69.2608 22C68.8498 21.972 11.9447 22 11.1228 22H10.7667C10.6023 22 10.4379 22 10.2736 22C4.54776 21.7481 0 16.9338 0 11.028C0 7.9771 1.20543 5.2341 3.15056 3.24682C5.09569 1.23155 7.80791 0 10.7667 0H82Z"
                                                        fill="#FEEE00"
                                                    />
                                                    <path
                                                        d="M12.1576 15.1428C13.2913 15.1428 14.5007 14.8037 15.3888 14.2009L14.6518 12.5245C14.085 12.9577 13.1591 13.1838 12.3465 13.1838C10.6459 13.1838 9.83338 12.1478 9.83338 11.3755C9.83338 11.319 9.83338 11.2059 9.83338 11.1494H16.617C16.6926 10.8669 16.806 10.1888 16.806 9.6425C16.806 7.09957 15.0487 5.59265 12.7056 5.59265C9.66331 5.59265 7.43359 8.09791 7.43359 11.0552C7.43359 13.5982 9.28539 15.1428 12.1576 15.1428ZM14.6329 9.49181H10.0979C10.2869 8.49348 11.2506 7.55165 12.5544 7.55165C13.9905 7.55165 14.6707 8.38046 14.6707 9.30345C14.6707 9.34112 14.6707 9.45414 14.6518 9.49181H14.6329Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M25.8521 14.9167L23.6224 10.2453L27.6661 5.81869H24.9073L22.3941 8.6065L21.147 5.81869H18.5394L20.599 10.2453L16.3286 14.9167H19.0685L21.8462 11.8464L23.2634 14.9167H25.8521Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M32.6151 15.1428C35.714 15.1428 37.4146 12.0913 37.4146 9.35996C37.4146 6.94888 36.0163 5.59265 33.9567 5.59265C32.8607 5.59265 31.9726 6.04473 31.1979 6.94888L31.4624 5.81869H29.0626L26.266 18.3827H28.6658L29.7051 13.7112C30.3098 14.6153 31.3868 15.1428 32.6151 15.1428ZM32.2183 13.0142C31.2546 13.0142 30.4798 12.581 30.083 11.9594L30.8011 8.8137C31.2924 8.19209 32.0482 7.72118 32.8796 7.72118C34.0512 7.72118 34.9015 8.54999 34.9015 9.84971C34.9015 11.5262 33.8055 13.0142 32.2183 13.0142Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M40.457 14.9167L41.7797 8.94555C42.3088 8.34278 43.1592 7.85303 44.0473 7.85303C44.4252 7.85303 44.7653 7.92838 44.9165 7.96605L45.4456 5.59265C43.9906 5.59265 43.008 6.13891 42.2144 7.00539L42.4789 5.81869H40.0791L38.0573 14.9167H40.457Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M49.9494 15.1428C51.0832 15.1428 52.2925 14.8037 53.1806 14.2009L52.4437 12.5245C51.8768 12.9577 50.9509 13.1838 50.1384 13.1838C48.4378 13.1838 47.6252 12.1478 47.6252 11.3755C47.6252 11.319 47.6252 11.2059 47.6252 11.1494H54.4089C54.4845 10.8669 54.5978 10.1888 54.5978 9.6425C54.5978 7.09957 52.8405 5.59265 50.4974 5.59265C47.4552 5.59265 45.2254 8.09791 45.2254 11.0552C45.2254 13.5982 47.0773 15.1428 49.9494 15.1428ZM52.4248 9.49181H47.8898C48.0787 8.49348 49.0424 7.55165 50.3462 7.55165C51.7823 7.55165 52.4626 8.38046 52.4626 9.30345C52.4626 9.34112 52.4626 9.45414 52.4437 9.49181H52.4248Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M59.279 15.1428C61.7733 15.1428 63.2283 13.6924 63.2283 11.9594C63.2283 9.19043 58.5799 9.4353 58.5799 8.32395C58.5799 7.85303 59.0523 7.4763 59.9026 7.4763C61.0174 7.4763 62.1512 8.09791 62.5858 8.663L63.8329 7.0619C62.9637 6.17658 61.5087 5.59265 59.9593 5.59265C57.5217 5.59265 56.199 7.08074 56.199 8.663C56.199 11.3943 60.8474 11.0929 60.8474 12.3173C60.8474 12.8259 60.3372 13.2591 59.5247 13.2591C58.2019 13.2591 56.8792 12.468 56.3312 11.8275L54.9896 13.504C56.01 14.5777 57.6162 15.1428 59.279 15.1428Z"
                                                        fill="#404553"
                                                    />
                                                    <path
                                                        d="M68.2841 15.1428C70.7784 15.1428 72.2333 13.6924 72.2333 11.9594C72.2333 9.19043 67.5849 9.4353 67.5849 8.32395C67.5849 7.85303 68.0573 7.4763 68.9077 7.4763C70.0225 7.4763 71.1563 8.09791 71.5909 8.663L72.838 7.0619C71.9688 6.17658 70.5138 5.59265 68.9643 5.59265C66.5268 5.59265 65.2041 7.08074 65.2041 8.663C65.2041 11.3943 69.8525 11.0929 69.8525 12.3173C69.8525 12.8259 69.3423 13.2591 68.5297 13.2591C67.207 13.2591 65.8843 12.468 65.3363 11.8275L63.9947 13.504C65.0151 14.5777 66.6213 15.1428 68.2841 15.1428Z"
                                                        fill="#404553"
                                                    />
                                                </svg>
                                                <div className="pt-3">
                                                    <button
                                                        className="select-none rounded bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                        type="button"
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                    <button className="ms-3 w-10 py-1 px-3 text-center align-middle text-blue-600 rounded border-2 border-blue-500">...</button>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>

    );

}