"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Services from "@/components/Services";
import AgencyInfo from "@/components/AgencyInfo";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Services />
            <AgencyInfo />
            <Testimonials />
            <FAQ />
            <Footer />
        </main>
    );
}
