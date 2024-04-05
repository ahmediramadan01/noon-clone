import Link from "next/link";

export default function CanceledOrder() {
	return (
		<>
			<main className="flex flex-col items-center min-h-[75vh] justify-center ">
				<p className="mb-[4px] text-[#404553] font-sans text-3xl font-bold">Order was canceled!</p>
				<p className="text-[#404553] text-base">{`You can re-order it again if you change your mind :)`}</p>
				<Link href="/cart" className="mt-[20px] text-white bg-[#3866df] py-[12px] px-[20px] rounded font-bold">
					BACK TO CART PAGE
				</Link>
			</main>
		</>
	);
}
