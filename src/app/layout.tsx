import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import { Montserrat, Cormorant, Poppins } from "next/font/google";
import TabsNavigation from "@/components/TabsNavigation";
import Header from "@/components/Header";

const montFont = Montserrat({
	weight: ["200", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

const cormFont = Cormorant({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-cormorant",
});

const poppFont = Poppins({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "E-book by Satoru",
	description:
		"Discover a world of digital books - Your one-stop destination for curated e-book collections.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html
				lang="en"
				className={`${montFont.variable} ${cormFont.variable} ${poppFont.variable} font-sans`}>
				<body className="flex bg-backgroundSecondary">
					<Sidebar />
					<TabsNavigation />
					{/* ⚡ Sperator */}
					<div className="border-r-[1px] xl:pl-[100px] border-sepratorColor h-screen" />
					<div className="flex-1 overflow-hidden">
						<Header />
						{children}
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
