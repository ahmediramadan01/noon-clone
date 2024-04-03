"use client";
import Image from "next/image";
import orderImg from "../../public/ps5-1.png";
import React from "react";
import { ArrowPathIcon, BanknotesIcon, CalendarDaysIcon, CheckIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

function OrderCard() {
	return (
		<div className="w-full h-full p-2 flex flex-col-reverse items-center justify-center gap-2">
			<div className="w-full h-1/3 font-bold text-base flex items-center">
				Status: 
				<span className="mx-2 font-normal flex items-center text-red-500">
                    <ArrowPathIcon className="w-5 h-5 mx-1"/>
                    Pending</span>
                    <span className="mx-2 font-normal flex items-center text-green-500">
                    <CheckIcon className="w-5 h-5 mx-1"/>
                    Completed</span>
			</div>
			<div className="flex w-full h-2/3">
				<div className="hidden">ID</div>
				<div className="border h-full w-1/4 flex items-center justify-center p-2">
					<span className="font-bold text-md flex items-center flex-col lg:flex-row">
						<CalendarDaysIcon className="w-7 h-7 mr-2" />
						Order Date:
						<span className="text-sm mx-2">12/12/2021</span>
					</span>
				</div>

				<div className="border h-full w-1/4 flex items-center justify-center">
					<span className="font-bold text-md flex items-center p-2 flex-col lg:flex-row">
						<BanknotesIcon className="w-7 h-7 mr-2" />
						Total Price:
						<span className="text-sm mx-2">
							3200
							<span>EGP</span>
						</span>
					</span>
				</div>

				<div className="border h-full w-2/4 flex items-center flex-col lg:flex-row">
					<span className="font-bold text-md flex items-center p-2">
						<ShoppingBagIcon className="w-7 h-7 mr-2" />
						Products:
					</span>

					<div className="h-full w-full flex flex-col items-center justify-evenly overflow-x-auto whitespace-nowrap">
						<div className="h-1/5 w-full flex items-center justify-center p-1 bg-yellow-200 rounded my-1 py-2">
							Product one one one
						</div>
						<div className="h-1/5 w-full flex items-center justify-center p-1 bg-yellow-200 rounded my-1 py-2">
							Product 2
						</div>
						<div className="h-1/5 w-full flex items-center justify-center p-1 bg-yellow-200 rounded my-1 py-2">
							Product 3
						</div>
						<div className="h-1/5 w-full flex items-center justify-center p-1 bg-yellow-200 rounded my-1 py-2">
							Product 4
						</div>
						<div className="h-1/5 w-full flex items-center justify-center p-1 bg-yellow-200 rounded my-1 py-2">
							Product 5
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderCard;
