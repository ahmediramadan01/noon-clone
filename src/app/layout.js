import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "noon: Online Shopping Egypt | Mobiles, Beauty, Appliances, Fashion",
	description:
		"noon.com is a leading e-commerce platform in the Middle East, offering a wide range of products across various categories.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
