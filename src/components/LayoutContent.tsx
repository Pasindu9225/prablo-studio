"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Check if we are in the studio
    const isStudio = pathname.startsWith("/sanitystudio");

    return (
        <>
            {!isStudio && <Navbar />}
            {children}
            {!isStudio && <Footer />}
        </>
    );
}