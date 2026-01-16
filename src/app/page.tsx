import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Services from "@/components/Services";
import AgencyInfo from "@/components/AgencyInfo";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <LogoTicker />
            <AgencyInfo />
            <Testimonials />
            <FAQ />
        </main>
    );
}