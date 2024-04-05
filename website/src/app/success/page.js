import Link from "next/link";

export default function SuccessfulOrder() {
	return (
		<>
			<main className="flex flex-col items-center min-h-[75vh] justify-center ">
				<p className="mb-[4px] text-[#404553] font-sans text-3xl font-bold">Thank you! You order has been placed</p>
				<p className="text-[#404553] text-base">You order is now pending and awaiting approval :D</p>
				<Link href="/" className="mt-[20px] text-white bg-[#3866df] py-[12px] px-[20px] rounded font-bold">
					BACK TO HOMEPAGE
				</Link>
			</main>
		</>
	);
}
