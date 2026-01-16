import type { Metadata } from "next";
import { Outfit, DM_Sans, PT_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const ptSerif = PT_Serif({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-pt-serif"
});

export const metadata: Metadata = {
    title: "Prablo Studio | Beyond Marketing",
    description: "We are the future of digital impact.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} ${dmSans.variable} ${ptSerif.variable} font-dm-sans`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}