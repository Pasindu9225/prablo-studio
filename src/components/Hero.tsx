"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";

// Helper Counter Component
function Counter({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) animate(motionValue, value, { duration: 2 });
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) ref.current.textContent = Math.floor(latest).toString();
        });
    }, [springValue]);

    return <span ref={ref}>0</span>;
}

export default function Hero() {
    const stats = [
        { num: 5, suffix: "+", label: "Years of Experience" },
        { num: 200, suffix: "+", label: "Projects Completed" },
        { num: 120, suffix: "K+", label: "Happy Clients" },
        { num: 20, suffix: "+", label: "Creative Peoples" }
    ];

    return (
        <section className="w-full">
            {/* Hero Section */}
            <div className="h-[70vh] bg-primary flex flex-col items-center justify-center text-center px-[5%] relative">
                <div className="z-10">
                    <span className="bg-white text-primary text-[10px] font-bold px-4 py-2 uppercase tracking-[0.2em] rounded-sm mb-8 inline-block">
                        Experience the Future
                    </span>
                    <h1 className="text-white text-5xl md:text-8xl font-black leading-[0.9] mb-8">
                        BEYOND MARKETING.
                    </h1>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-white py-20 px-[5%] flex flex-wrap justify-around items-center border-b border-gray-50">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center min-w-[200px] mb-8 lg:mb-0">
                        <span className="block text-6xl font-light text-black mb-2 tracking-tighter">
                            <Counter value={stat.num} />{stat.suffix}
                        </span>
                        <span className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.2em]">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* Branding Section */}
            <div className="py-24 px-[5%] flex flex-col lg:flex-row items-center justify-center bg-white">
                <div className="text-center lg:text-right flex-1">
                    <h2 className="text-7xl md:text-[100px] font-black leading-[0.8] text-black">PRABLO</h2>
                    <h2 className="text-7xl md:text-[100px] font-black leading-[0.8] text-primary">360</h2>
                </div>

                <div className="vertical-line" />

                <div className="text-center lg:text-left flex-1 mt-12 lg:mt-0">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                        {/* Simple SVG icon to mimic the aperture logo */}
                        <div className="w-16 h-16 rounded-full border-[6px] border-black border-r-transparent rotate-45" />
                        <h2 className="text-6xl md:text-8xl font-black text-black leading-none">PRABLO</h2>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-primary leading-none ml-2">STUDIOS</h2>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-4">- Cinematography by 4K Films -</p>
                </div>
            </div>
        </section>
    );
}