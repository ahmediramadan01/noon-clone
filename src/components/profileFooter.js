"use client"
import Link from "next/link";
export function ProfileFooter() {
    return (<>

        <div className="flex h-12 w-full bg-white">
            <div className="mx-auto flex">
                <p className="text-sm mt-2 text-gray-500 ms-2 w-3/6">© 2024 noon. All rights reserved</p>
                <Link href={"#"} className="mt-2 ms-32 text-gray-700 text-xs hover:underline w-1/6 ">
                    Help Center Articles
                </Link>
                <Link href={"#"} className="mt-2 text-gray-700 text-xs hover:underline w-1/6">
                    Warranty policy
                </Link>
                <Link href={"#"} className="mt-2  text-gray-700 text-xs hover:underline w-1/6">
                    Return policy
                </Link>
                <Link href={"#"} className="mt-2  text-gray-700 text-xs hover:underline w-1/6">
                    Terms of use
                </Link>
                <Link href={"#"} className="mt-2  text-gray-700 text-xs hover:underline w-1/6">
                    Terms of sale
                </Link>
                <Link href={"#"} className="mt-2  text-gray-700 text-xs hover:underline w-1/6">
                    Privacy policy
                </Link>
            </div>

        </div>
    </>);
}