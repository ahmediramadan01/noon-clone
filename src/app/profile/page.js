"use client"
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    ArrowRightIcon
} from "@heroicons/react/24/solid";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Profile() {
    return (<>
        <div className="container mx-auto bg-blue-gray-50">
            <div className="flex ">
                <div className="lg:basis-1/6 md:basis-1/5  flex-col ">
                    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl rounded-none shadow-blue-gray-900/5">
                        <div className="mb-2 p-4">
                            <Typography variant="h5" color="blue-gray">
                                Hala Menna!
                                <br />
                                <span className="text-sm font-normal text-blue-gray-500">mennaismail70@gmail.com</span>
                            </Typography>
                            <hr className="mt-6"></hr>

                        </div>
                        <List>
                            <Link href={"#"}>
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="5" y="5" width="8" height="8" rx="1.5" fill="#FEEE00" stroke="#404553" strokeWidth="1.25" />
                                            <path d="M13 1H14.5C15.8807 1 17 2.11929 17 3.5V5M17 13V14.5C17 15.8807 15.8807 17 14.5 17H13M5 17H3.5C2.11929 17 1 15.8807 1 14.5V13M1 5V3.5C1 2.11929 2.11929 1 3.5 1H5" stroke="#404553" strokeWidth="1.25" />
                                        </svg>
                                    </ListItemPrefix>
                                    QR Code
                                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4 ms-20 visible hover:invisible" />

                                </ListItem>
                            </Link>
                            <Link href={"#"}>
                                <ListItem>

                                    <ListItemPrefix>
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.2295 11.8248C22.2295 17.4857 17.6404 22.0748 11.9795 22.0748C6.31857 22.0748 1.72949 17.4857 1.72949 11.8248C1.72949 9.27397 2.66033 6.94242 4.20181 5.14844C6.08276 2.95939 8.86903 1.57483 11.9795 1.57483C17.6404 1.57483 22.2295 6.16391 22.2295 11.8248Z" stroke="#404554" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17.0102 7.51375C16.3819 6.88311 15.55 6.53842 14.6621 6.53842C13.7743 6.53842 12.9398 6.88566 12.3115 7.51631L11.9833 7.84567L11.65 7.5112C11.0217 6.88055 10.1847 6.53076 9.29686 6.53076C8.41155 6.53076 7.57713 6.878 6.95131 7.50609C6.32294 8.13674 5.97696 8.9742 5.97951 9.86528C5.97951 10.7564 6.32803 11.5913 6.9564 12.2219L11.734 17.0169C11.8001 17.0833 11.8892 17.119 11.9757 17.119C12.0622 17.119 12.1512 17.0858 12.2174 17.0194L17.0051 12.2321C17.6335 11.6015 17.9795 10.764 17.9795 9.87294C17.982 8.98186 17.6386 8.1444 17.0102 7.51375Z" fill="#FEEE00" stroke="#404554" strokeWidth="1.5" />
                                        </svg>
                                    </ListItemPrefix>
                                    Wishlist
                                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4 ms-20 visible hover:invisible" />
                                </ListItem>
                            </Link>
                            <Link href={"#"}>
                                <ListItem>
                                    <ListItemPrefix>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.59998 4.9843C2.59874 3.66719 3.66612 2.5988 4.98324 2.5988H15.019C16.3354 2.5988 17.4025 3.66615 17.4022 4.9826L17.3999 15.022C17.3996 16.338 16.3327 17.4047 15.0167 17.4047H4.99269C3.67733 17.4047 2.61067 16.3391 2.60943 15.0237L2.59998 4.9843Z" stroke="#404553" strokeWidth="1.25849" />
                                            <path d="M5.64991 5.41625C5.64987 5.40625 5.65796 5.39814 5.66796 5.39814H8.18204C8.19202 5.39814 8.2001 5.40623 8.20009 5.4162L8.19767 8.62894C8.19766 8.6389 8.18958 8.64698 8.17962 8.64698H5.67805C5.6681 8.64698 5.66003 8.63893 5.65999 8.62898L5.64991 5.41625Z" fill="#FEEE00" stroke="#404553" strokeWidth="0.968066" />
                                            <path d="M5.64991 11.0388C5.64987 11.0288 5.65796 11.0207 5.66796 11.0207H8.18204C8.19202 11.0207 8.2001 11.0288 8.20009 11.0388L8.19767 14.2515C8.19766 14.2615 8.18958 14.2695 8.17962 14.2695H5.67805C5.6681 14.2695 5.66003 14.2615 5.65999 14.2515L5.64991 11.0388Z" fill="#FEEE00" stroke="#404553" strokeWidth="0.968066" />
                                            <mask id="path-4-inside-1_3553_16698" fill="white">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.38402 5.31553C9.38032 5.09463 9.55837 4.91357 9.7793 4.91357L14.6082 4.91357C14.8272 4.91357 15.0044 5.09154 15.0035 5.3105C15.0027 5.52822 14.8259 5.70424 14.6082 5.70424H9.7793C9.56354 5.70424 9.38763 5.53126 9.38402 5.31553Z" />
                                            </mask>
                                            <path d="M9.7793 6.84971H14.6082V2.97744H9.7793V6.84971ZM14.6082 3.76811H9.7793V7.64038H14.6082V3.76811ZM9.7793 3.76811C10.6202 3.76811 11.3058 4.44233 11.3199 5.28311L7.44816 5.34795C7.46947 6.62018 8.50688 7.64038 9.7793 7.64038V3.76811ZM13.0674 5.30271C13.0708 4.45418 13.7597 3.76811 14.6082 3.76811V7.64038C15.8922 7.64038 16.9345 6.60225 16.9396 5.3183L13.0674 5.30271ZM14.6082 6.84971C13.7548 6.84971 13.064 6.15608 13.0674 5.30271L16.9396 5.3183C16.9448 4.02701 15.8995 2.97744 14.6082 2.97744V6.84971ZM9.7793 2.97744C8.47639 2.97744 7.42634 4.04523 7.44816 5.34795L11.3199 5.28311C11.3343 6.14404 10.6403 6.84971 9.7793 6.84971V2.97744Z" fill="#404553" mask="url(#path-4-inside-1_3553_16698)" />
                                            <mask id="path-6-inside-2_3553_16698" fill="white">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.38402 10.9381C9.38032 10.7172 9.55837 10.5361 9.7793 10.5361L14.6082 10.5361C14.8272 10.5361 15.0044 10.7141 15.0035 10.9331C15.0027 11.1508 14.8259 11.3268 14.6082 11.3268H9.7793C9.56354 11.3268 9.38763 11.1538 9.38402 10.9381Z" />
                                            </mask>
                                            <path d="M9.7793 12.4723H14.6082V8.6H9.7793V12.4723ZM14.6082 9.39067H9.7793V13.2629H14.6082V9.39067ZM9.7793 9.39067C10.6202 9.39067 11.3058 10.0649 11.3199 10.9057L7.44816 10.9705C7.46947 12.2427 8.50688 13.2629 9.7793 13.2629V9.39067ZM13.0674 10.9253C13.0708 10.0767 13.7597 9.39067 14.6082 9.39067V13.2629C15.8922 13.2629 16.9345 12.2248 16.9396 10.9409L13.0674 10.9253ZM14.6082 12.4723C13.7548 12.4723 13.064 11.7786 13.0674 10.9253L16.9396 10.9409C16.9448 9.64956 15.8995 8.6 14.6082 8.6V12.4723ZM9.7793 8.6C8.47639 8.6 7.42634 9.66778 7.44816 10.9705L11.3199 10.9057C11.3343 11.7666 10.6403 12.4723 9.7793 12.4723V8.6Z" fill="#404553" mask="url(#path-6-inside-2_3553_16698)" />
                                        </svg>
                                    </ListItemPrefix>
                                    Orders
                                    {/* <ArrowRightIcon strokeWidth={2} className="h-4 w-4 ms-20 visible hover:invisible" /> */}

                                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4 ms-20 visible hover:invisible" />

                                </ListItem>
                            </Link>
                            <Link href={"#"}>
                                <ListItem>

                                    <ListItemPrefix>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_3246_15982)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.49414 14.9193C5.49414 13.0317 7.02438 11.5015 8.91202 11.5015C9.54151 11.5015 9.16313 11.5015 10.0534 11.5015C10.9436 11.5015 10.5501 11.5015 11.1796 11.5015C13.0756 11.5015 14.6126 13.0384 14.6126 14.9344V15.4908H10.0534H5.49414V14.9193Z" fill="#FEEE00" stroke="#404553" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.0001 9.72474C11.2591 9.72474 12.2797 8.70412 12.2797 7.44513C12.2797 6.18614 11.2591 5.16553 10.0001 5.16553C8.74107 5.16553 7.72046 6.18614 7.72046 7.44513C7.72046 8.70412 8.74107 9.72474 10.0001 9.72474Z" fill="#FEEE00" stroke="#404553" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18.5416 10.9987C18.5416 15.7161 14.7174 19.5404 9.99992 19.5404C5.28249 19.5404 1.45825 15.7161 1.45825 10.9987C1.45825 8.87298 2.23395 6.93003 3.51852 5.43504C5.08597 3.61083 7.40786 2.45703 9.99992 2.45703C14.7174 2.45703 18.5416 6.28127 18.5416 10.9987Z" stroke="#404553" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3246_15982">
                                                    <rect width="20" height="20" fill="white" transform="translate(0 0.998047)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </ListItemPrefix>
                                    <p className="underline"> Profile</p>
                                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4 ms-20 visible hover:invisible" />
                                </ListItem>
                            </Link>



                        </List>
                    </Card>


                </div>
                <div className="basis-5/6">
                    <div className="absolute top-8 right-20 text-sm text-blue-500">Need Help?</div>
                    <div className="flex-row  bg-white ms-5 h-28 mt-20 mr-5 col-span-10"></div>

                </div>

            </div>

        </div>


    </>);
}