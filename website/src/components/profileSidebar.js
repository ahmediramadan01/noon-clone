"use client"
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,


} from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";


import Link from "next/link";
export function ProfileSidebar() {
    return (<>
        <Card className=" h-full w-full max-w-[20rem] p-4 shadow-none rounded-none  hidden lg:flex flex-col">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Hala Menna!
                    <br />
                    <span className="text-sm font-normal text-blue-gray-500">mennaismail70@gmail.com</span>
                </Typography>
                <hr className="mt-6"></hr>
            </div>
            <List>
                <div className="relative">
                    <Link href={"#"}>
                        <ListItem className="flex items-center group">
                            <ListItemPrefix>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect
                                        x="5"
                                        y="5"
                                        width="8"
                                        height="8"
                                        rx="1.5"
                                        fill="#FEEE00"
                                        stroke="#404553"
                                        strokeWidth="1.25"
                                    />
                                    <path
                                        d="M13 1H14.5C15.8807 1 17 2.11929 17 3.5V5M17 13V14.5C17 15.8807 15.8807 17 14.5 17H13M5 17H3.5C2.11929 17 1 15.8807 1 14.5V13M1 5V3.5C1 2.11929 2.11929 1 3.5 1H5"
                                        stroke="#404553"
                                        strokeWidth="1.25"
                                    />
                                </svg>
                            </ListItemPrefix>
                            QR Code
                            <ArrowRightIcon
                                strokeWidth={2}
                                className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </ListItem>
                    </Link>
                </div>
                <div className="relative">
                    <Link href={"#"}>
                        <ListItem className="flex items-center group">
                            <ListItemPrefix>
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.2295 11.8248C22.2295 17.4857 17.6404 22.0748 11.9795 22.0748C6.31857 22.0748 1.72949 17.4857 1.72949 11.8248C1.72949 9.27397 2.66033 6.94242 4.20181 5.14844C6.08276 2.95939 8.86903 1.57483 11.9795 1.57483C17.6404 1.57483 22.2295 6.16391 22.2295 11.8248Z"
                                        stroke="#404554"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M17.0102 7.51375C16.3819 6.88311 15.55 6.53842 14.6621 6.53842C13.7743 6.53842 12.9398 6.88566 12.3115 7.51631L11.9833 7.84567L11.65 7.5112C11.0217 6.88055 10.1847 6.53076 9.29686 6.53076C8.41155 6.53076 7.57713 6.878 6.95131 7.50609C6.32294 8.13674 5.97696 8.9742 5.97951 9.86528C5.97951 10.7564 6.32803 11.5913 6.9564 12.2219L11.734 17.0169C11.8001 17.0833 11.8892 17.119 11.9757 17.119C12.0622 17.119 12.1512 17.0858 12.2174 17.0194L17.0051 12.2321C17.6335 11.6015 17.9795 10.764 17.9795 9.87294C17.982 8.98186 17.6386 8.1444 17.0102 7.51375Z"
                                        fill="#FEEE00"
                                        stroke="#404554"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </ListItemPrefix>
                            Wishlist
                            <ArrowRightIcon
                                strokeWidth={2}
                                className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </ListItem>
                    </Link>
                </div>

                <div className="relative">
                    <Link href={"#"}>
                        <ListItem className="flex items-center group">
                            <ListItemPrefix>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.59998 4.9843C2.59874 3.66719 3.66612 2.5988 4.98324 2.5988H15.019C16.3354 2.5988 17.4025 3.66615 17.4022 4.9826L17.3999 15.022C17.3996 16.338 16.3327 17.4047 15.0167 17.4047H4.99269C3.67733 17.4047 2.61067 16.3391 2.60943 15.0237L2.59998 4.9843Z"
                                        stroke="#404553"
                                        strokeWidth="1.25849"
                                    />
                                    <path
                                        d="M5.64991 5.41625C5.64987 5.40625 5.65796 5.39814 5.66796 5.39814H8.18204C8.19202 5.39814 8.2001 5.40623 8.20009 5.4162L8.19767 8.62894C8.19766 8.6389 8.18958 8.64698 8.17962 8.64698H5.67805C5.6681 8.64698 5.66003 8.63893 5.65999 8.62898L5.64991 5.41625Z"
                                        fill="#FEEE00"
                                        stroke="#404553"
                                        strokeWidth="0.968066"
                                    />
                                    <path
                                        d="M5.64991 11.0388C5.64987 11.0288 5.65796 11.0207 5.66796 11.0207H8.18204C8.19202 11.0207 8.2001 11.0288 8.20009 11.0388L8.19767 14.2515C8.19766 14.2615 8.18958 14.2695 8.17962 14.2695H5.67805C5.6681 14.2695 5.66003 14.2615 5.65999 14.2515L5.64991 11.0388Z"
                                        fill="#FEEE00"
                                        stroke="#404553"
                                        strokeWidth="0.968066"
                                    />
                                    <mask id="path-4-inside-1_3553_16698" fill="white">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.38402 5.31553C9.38032 5.09463 9.55837 4.91357 9.7793 4.91357L14.6082 4.91357C14.8272 4.91357 15.0044 5.09154 15.0035 5.3105C15.0027 5.52822 14.8259 5.70424 14.6082 5.70424H9.7793C9.56354 5.70424 9.38763 5.53126 9.38402 5.31553Z"
                                        />
                                    </mask>
                                    <path
                                        d="M9.7793 6.84971H14.6082V2.97744H9.7793V6.84971ZM14.6082 3.76811H9.7793V7.64038H14.6082V3.76811ZM9.7793 3.76811C10.6202 3.76811 11.3058 4.44233 11.3199 5.28311L7.44816 5.34795C7.46947 6.62018 8.50688 7.64038 9.7793 7.64038V3.76811ZM13.0674 5.30271C13.0708 4.45418 13.7597 3.76811 14.6082 3.76811V7.64038C15.8922 7.64038 16.9345 6.60225 16.9396 5.3183L13.0674 5.30271ZM14.6082 6.84971C13.7548 6.84971 13.064 6.15608 13.0674 5.30271L16.9396 5.3183C16.9448 4.02701 15.8995 2.97744 14.6082 2.97744V6.84971ZM9.7793 2.97744C8.47639 2.97744 7.42634 4.04523 7.44816 5.34795L11.3199 5.28311C11.3343 6.14404 10.6403 6.84971 9.7793 6.84971V2.97744Z"
                                        fill="#404553"
                                        mask="url(#path-4-inside-1_3553_16698)"
                                    />
                                    <mask id="path-6-inside-2_3553_16698" fill="white">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.38402 10.9381C9.38032 10.7172 9.55837 10.5361 9.7793 10.5361L14.6082 10.5361C14.8272 10.5361 15.0044 10.7141 15.0035 10.9331C15.0027 11.1508 14.8259 11.3268 14.6082 11.3268H9.7793C9.56354 11.3268 9.38763 11.1538 9.38402 10.9381Z"
                                        />
                                    </mask>
                                    <path
                                        d="M9.7793 12.4723H14.6082V8.6H9.7793V12.4723ZM14.6082 9.39067H9.7793V13.2629H14.6082V9.39067ZM9.7793 9.39067C10.6202 9.39067 11.3058 10.0649 11.3199 10.9057L7.44816 10.9705C7.46947 12.2427 8.50688 13.2629 9.7793 13.2629V9.39067ZM13.0674 10.9253C13.0708 10.0767 13.7597 9.39067 14.6082 9.39067V13.2629C15.8922 13.2629 16.9345 12.2248 16.9396 10.9409L13.0674 10.9253ZM14.6082 12.4723C13.7548 12.4723 13.064 11.7786 13.0674 10.9253L16.9396 10.9409C16.9448 9.64956 15.8995 8.6 14.6082 8.6V12.4723ZM9.7793 8.6C8.47639 8.6 7.42634 9.66778 7.44816 10.9705L11.3199 10.9057C11.3343 11.7666 10.6403 12.4723 9.7793 12.4723V8.6Z"
                                        fill="#404553"
                                        mask="url(#path-6-inside-2_3553_16698)"
                                    />
                                </svg>
                            </ListItemPrefix>
                            Orders
                            <ArrowRightIcon
                                strokeWidth={2}
                                className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </ListItem>
                    </Link>
                </div>
                <div className="relative">
                    <Link href={"#"}>
                        <ListItem className="flex items-center group">
                            <ListItemPrefix>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.28947 4.16965C2.28849 3.13343 3.12824 2.29288 4.16447 2.29288H15.8371C16.8728 2.29288 17.7123 3.13261 17.7121 4.16831L17.7095 15.835C17.7092 16.8703 16.8698 17.7096 15.8345 17.7096H4.17546C3.14062 17.7096 2.30144 16.8712 2.30046 15.8363L2.28947 4.16965Z"
                                        stroke="#404553"
                                        strokeWidth="1.25"
                                    />
                                    <mask id="path-2-inside-1_3553_16769" fill="white">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7.49084 13.2725C7.49254 13.2725 7.49424 13.2725 7.49594 13.2725H10.0039C12.3047 13.2725 14.1698 11.4073 14.1698 9.10657C14.1692 6.80372 12.3031 4.93823 10.0015 4.93823H7.5015"
                                        />
                                    </mask>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.49084 13.2725C7.49254 13.2725 7.49424 13.2725 7.49594 13.2725H10.0039C12.3047 13.2725 14.1698 11.4073 14.1698 9.10657C14.1692 6.80372 12.3031 4.93823 10.0015 4.93823H7.5015"
                                        fill="#FEEE00"
                                    />
                                    <path
                                        d="M10.0039 13.2725V12.0225V13.2725ZM14.1698 9.10657L15.4198 9.10621V9.10657H14.1698ZM7.49238 12.0225C7.49357 12.0225 7.49476 12.0225 7.49594 12.0225V14.5225C7.49373 14.5225 7.49152 14.5225 7.48931 14.5225L7.49238 12.0225ZM7.49594 12.0225H10.0039V14.5225H7.49594V12.0225ZM10.0039 12.0225C11.6143 12.0225 12.9198 10.717 12.9198 9.10657H15.4198C15.4198 12.0977 12.9951 14.5225 10.0039 14.5225V12.0225ZM12.9198 9.10694C12.9194 7.49406 11.6127 6.18823 10.0015 6.18823V3.68823C12.9936 3.68823 15.419 6.11337 15.4198 9.10621L12.9198 9.10694ZM10.0015 6.18823H7.5015V3.68823H10.0015V6.18823Z"
                                        fill="#404553"
                                        mask="url(#path-2-inside-1_3553_16769)"
                                    />
                                    <path d="M9.0083 10.2869L6.65128 12.644L9.0083 15.001" stroke="#404553" strokeWidth="1.25" />
                                </svg>
                            </ListItemPrefix>
                            Return
                            <ArrowRightIcon
                                strokeWidth={2}
                                className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </ListItem>
                    </Link>
                </div>
                <div className="relative">
                    <Link href={"#"}>
                        <ListItem className="flex items-center group">
                            <ListItemPrefix>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.18168 4.16965C2.1807 3.13343 3.02045 2.29288 4.05668 2.29288H17.6047L17.6017 15.835C17.6014 16.8703 16.762 17.7096 15.7267 17.7096H4.06767C3.03283 17.7096 2.19365 16.8712 2.19267 15.8363L2.18168 4.16965Z"
                                        stroke="#404553"
                                        strokeWidth="1.25"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.7859 12.3955C12.1627 12.0186 12.3958 11.4978 12.3958 10.9227C12.3958 9.7721 11.4631 8.83936 10.3125 8.83936C9.16187 8.83936 8.22913 9.7721 8.22913 10.9227C8.22913 11.4797 8.44774 11.9857 8.80385 12.3595L10.3102 14.1928L11.7859 12.3955Z"
                                        fill="#404553"
                                    />
                                    <path
                                        d="M11.7859 12.3955L11.3439 11.9537L11.3223 11.9753L11.3029 11.9989L11.7859 12.3955ZM8.80385 12.3595L9.28676 11.9627L9.27219 11.945L9.25637 11.9284L8.80385 12.3595ZM10.3102 14.1928L9.82725 14.5896L10.3103 15.1775L10.7932 14.5894L10.3102 14.1928ZM12.2279 12.8374C12.7171 12.348 13.0208 11.6702 13.0208 10.9227H11.7708C11.7708 11.3255 11.6083 11.6891 11.3439 11.9537L12.2279 12.8374ZM13.0208 10.9227C13.0208 9.42692 11.8082 8.21436 10.3125 8.21436V9.46436C11.1179 9.46436 11.7708 10.1173 11.7708 10.9227H13.0208ZM10.3125 8.21436C8.81669 8.21436 7.60413 9.42692 7.60413 10.9227H8.85413C8.85413 10.1173 9.50704 9.46436 10.3125 9.46436V8.21436ZM7.60413 10.9227C7.60413 11.6466 7.88894 12.3052 8.35134 12.7906L9.25637 11.9284C9.00655 11.6662 8.85413 11.3129 8.85413 10.9227H7.60413ZM10.7931 13.796L9.28676 11.9627L8.32095 12.7563L9.82725 14.5896L10.7931 13.796ZM11.3029 11.9989L9.82712 13.7962L10.7932 14.5894L12.2689 12.7922L11.3029 11.9989Z"
                                        fill="#404553"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.3124 12.1724C11.0027 12.1724 11.5624 11.6127 11.5624 10.9224C11.5624 10.232 11.0027 9.67236 10.3124 9.67236C9.62202 9.67236 9.06238 10.232 9.06238 10.9224C9.06238 11.6127 9.62202 12.1724 10.3124 12.1724Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M2.18937 4.79836C2.18503 3.41595 3.30449 2.29297 4.68691 2.29297H17.6046L17.6018 6.04297H3.4379C2.74989 6.04297 2.19154 5.48637 2.18937 4.79836Z"
                                        fill="#FEEE00"
                                        stroke="#404553"
                                        strokeWidth="1.25"
                                    />
                                </svg>
                            </ListItemPrefix>
                            Addresses
                            <ArrowRightIcon
                                strokeWidth={2}
                                className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </ListItem>
                    </Link>
                </div>
                <div className="relative">
                    <Link href={"#"}>
                        <ListItem className="flex items-center group">
                            <ListItemPrefix>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.28959 4.16965C2.28861 3.13343 3.12836 2.29288 4.16459 2.29288H15.8372C16.8729 2.29288 17.7125 3.13261 17.7122 4.16831L17.7096 15.835C17.7094 16.8703 16.87 17.7096 15.8346 17.7096H4.17558C3.14074 17.7096 2.30156 16.8712 2.30058 15.8363L2.28959 4.16965Z"
                                        stroke="#404553"
                                        strokeWidth="1.25"
                                    />
                                    <path
                                        d="M2.29523 8.13185C2.29207 7.20915 3.03918 6.45947 3.96189 6.45947H16.0444C16.9654 6.45947 17.7118 7.2065 17.711 8.12751C17.7103 9.04745 16.9643 9.79281 16.0444 9.79281H3.96189C3.04364 9.79281 2.29838 9.05009 2.29523 8.13185Z"
                                        fill="#FEEE00"
                                        stroke="#404553"
                                        strokeWidth="1.25"
                                    />
                                    <mask id="path-3-inside-1_3246_15983" fill="white">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.00368 13.9673C4.9993 13.6191 5.28038 13.3345 5.62863 13.3345L10.2111 13.3345C10.557 13.3345 10.8371 13.6154 10.8361 13.9614C10.835 14.3058 10.5555 14.5845 10.2111 14.5845H5.62863C5.28651 14.5845 5.00798 14.3094 5.00368 13.9673Z"
                                        />
                                    </mask>
                                    <path
                                        d="M5.62863 14.5845H10.2111V12.0845H5.62863V14.5845ZM10.2111 13.3345H5.62863V15.8345H10.2111V13.3345ZM5.62863 13.3345C5.97075 13.3345 6.24928 13.6095 6.25358 13.9516L3.75378 13.983C3.76667 15.0093 4.60228 15.8345 5.62863 15.8345V13.3345ZM9.58607 13.9576C9.58711 13.6131 9.86663 13.3345 10.2111 13.3345V15.8345C11.2444 15.8345 12.0829 14.9985 12.0861 13.9651L9.58607 13.9576ZM10.2111 14.5845C9.86515 14.5845 9.58503 14.3035 9.58607 13.9576L12.0861 13.9651C12.0892 12.9274 11.2488 12.0845 10.2111 12.0845V14.5845ZM5.62863 12.0845C4.58388 12.0845 3.74065 12.9384 3.75378 13.983L6.25358 13.9516C6.25796 14.2998 5.97688 14.5845 5.62863 14.5845V12.0845Z"
                                        fill="#404553"
                                        mask="url(#path-3-inside-1_3246_15983)"
                                    />
                                </svg>
                            </ListItemPrefix>
                            Payments
                            <ArrowRightIcon
                                strokeWidth={2}
                                className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </ListItem>
                    </Link>
                </div>
                <div className="relative">
                    <Link href={"#"}>
                        <ListItem className="flex items-center group">
                            <ListItemPrefix>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.7045 8.17338C17.7045 6.66042 17.1034 5.20942 16.0336 4.1396C14.9638 3.06977 13.5128 2.46875 11.9998 2.46875C10.4869 2.46875 9.03586 3.06977 7.96604 4.1396C6.89621 5.20942 6.29519 6.66042 6.29519 8.17338C6.29519 12.3292 5.18305 14.6314 4.34767 15.7745C4.11416 16.0941 4.36822 16.7303 4.76398 16.7303H19.2357C19.6314 16.7303 19.8855 16.0941 19.652 15.7745C18.8166 14.6314 17.7045 12.3292 17.7045 8.17338Z"
                                        stroke="#404553"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11.9999 20.1074C13.5962 20.1074 14.8903 18.5955 14.8903 16.7305H9.10938C9.10938 18.5955 10.4035 20.1074 11.9999 20.1074Z"
                                        fill="#FEEE00"
                                        stroke="#404553"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </ListItemPrefix>
                            Notification
                            <ArrowRightIcon
                                strokeWidth={2}
                                className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </ListItem>
                    </Link>
                </div>
                <div className="relative">
                    <Link href={"#"}>
                        <ListItem className="flex items-center group">
                            <ListItemPrefix>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="need help icon">
                                        <rect width="24" height="24" fill="white" />
                                        <path
                                            id="Icon"
                                            d="M1.59241 5.26324C1.59241 3.95265 1.59241 3.29735 1.84747 2.79677C2.07182 2.35645 2.42981 1.99846 2.87014 1.7741C3.37071 1.51904 4.02601 1.51904 5.3366 1.51904H13.8889C15.1995 1.51904 15.8548 1.51904 16.3554 1.7741C16.7957 1.99846 17.1537 2.35645 17.3781 2.79677C17.6331 3.29735 17.6331 3.95265 17.6331 5.26324V9.47545C17.6331 10.786 17.6331 11.4413 17.3781 11.9419C17.1537 12.3822 16.7957 12.7402 16.3554 12.9646C15.8548 13.2196 15.1967 13.2674 13.8861 13.2674H11.9254L8.55556 13.2252C8.27146 13.2217 7.99978 13.3388 7.80402 13.5447C7.33686 14.0361 6.42508 14.9698 5.72643 15.5287C5.40187 15.7884 5.23958 15.9182 5.10301 15.9183C4.98423 15.9185 4.87187 15.8645 4.79777 15.7716C4.71257 15.6649 4.71257 15.4571 4.71257 15.0414V13.2196C3.98715 13.2196 3.62445 13.2196 3.32686 13.1399C2.5193 12.9235 1.88853 12.2928 1.67214 11.4852C1.59241 11.1876 1.59241 10.8249 1.59241 10.0995V5.26324Z"
                                            fill="#FEEE00"
                                            stroke="#404553"
                                            strokeWidth="1.4"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            id="Icon_2"
                                            d="M22.6534 10.7629C22.6534 9.38321 22.6534 8.69336 22.3849 8.16639C22.1488 7.70285 21.7719 7.32598 21.3083 7.0898C20.7814 6.82129 20.0915 6.82129 18.7118 6.82129H11.814C10.4343 6.82129 9.74446 6.82129 9.21749 7.0898C8.75395 7.32598 8.37708 7.70285 8.1409 8.16639C7.87239 8.69336 7.87239 9.38321 7.87239 10.7629V15.1972C7.87239 16.5769 7.87239 17.2668 8.1409 17.7937C8.37708 18.2573 8.75395 18.6341 9.21749 18.8703C9.74446 19.1388 10.4198 19.1891 11.7995 19.1891H13.8933H15.3084C15.3084 19.1891 17.6034 20.9031 18.9609 21.9005C18.9609 21.9005 18.9609 21.3803 18.9609 21.0567V19.1388C19.7246 19.1388 20.5143 19.1388 20.8275 19.0549C21.6777 18.8271 22.3417 18.1631 22.5695 17.3129C22.6534 16.9996 22.6534 16.6178 22.6534 15.8542V10.7629Z"
                                            fill="white"
                                            stroke="#404553"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <g id="Group 1261154358">
                                            <path
                                                id="Icon_3"
                                                d="M13.3143 11.2381C13.4715 10.7914 13.7817 10.4146 14.19 10.1747C14.5983 9.93471 15.0783 9.847 15.5451 9.92706C16.0119 10.0071 16.4353 10.2498 16.7403 10.6121C17.0452 10.9744 17.2122 11.433 17.2115 11.9066C17.2115 13.2435 15.2061 13.912 15.2061 13.912V14.7257M15.2596 16.5858H15.2663"
                                                stroke="#404553"
                                                strokeWidth="1.4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </ListItemPrefix>
                            Need Help ?
                            <ArrowRightIcon
                                strokeWidth={2}
                                className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </ListItem>
                    </Link>
                </div>

                <div className="relative">
                    <Link href={"#"}>
                        <ListItem className="flex items-center group">
                            <ListItemPrefix>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_3246_15982)">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.49414 14.9193C5.49414 13.0317 7.02438 11.5015 8.91202 11.5015C9.54151 11.5015 9.16313 11.5015 10.0534 11.5015C10.9436 11.5015 10.5501 11.5015 11.1796 11.5015C13.0756 11.5015 14.6126 13.0384 14.6126 14.9344V15.4908H10.0534H5.49414V14.9193Z"
                                            fill="#FEEE00"
                                            stroke="#404553"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.0001 9.72474C11.2591 9.72474 12.2797 8.70412 12.2797 7.44513C12.2797 6.18614 11.2591 5.16553 10.0001 5.16553C8.74107 5.16553 7.72046 6.18614 7.72046 7.44513C7.72046 8.70412 8.74107 9.72474 10.0001 9.72474Z"
                                            fill="#FEEE00"
                                            stroke="#404553"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M18.5416 10.9987C18.5416 15.7161 14.7174 19.5404 9.99992 19.5404C5.28249 19.5404 1.45825 15.7161 1.45825 10.9987C1.45825 8.87298 2.23395 6.93003 3.51852 5.43504C5.08597 3.61083 7.40786 2.45703 9.99992 2.45703C14.7174 2.45703 18.5416 6.28127 18.5416 10.9987Z"
                                            stroke="#404553"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3246_15982">
                                            <rect width="20" height="20" fill="white" transform="translate(0 0.998047)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </ListItemPrefix>
                            <p className="underline"> Profile</p>
                            <ArrowRightIcon
                                strokeWidth={2}
                                className="h-4 w-4 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </ListItem>
                    </Link>
                </div>
            </List>
            <hr></hr>
            <Link href={"#"} className="ms-3">
                Sign out
            </Link>
        </Card>

    </>)
}