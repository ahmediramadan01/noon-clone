import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "noon: Online Shopping Egypt | Mobiles, Beauty, Appliances, Fashion",
	description:
		"noon.com is a leading e-commerce platform in the Middle East, offering a wide range of products across various categories.",
};

export default async function RootLayout({ children }) {
	const session = await getServerSession();
	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider session={session}>
					<Header></Header>
					{children}
					<Footer></Footer>
				</SessionProvider>
			</body>
		</html>
	);
}
