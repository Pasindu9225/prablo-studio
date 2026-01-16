"use client";
import { motion } from "framer-motion";

const logos = ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W"];

export default function LogoTicker() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-20">
                {/* Updated Typography to match image_970eee.png */}
                <h2 className="font-outfit text-primary text-4xl md:text-6xl font-black uppercase leading-[1] tracking-tighter flex flex-col items-center">
                    <span>WE'RE A RECOGNIZED</span>
                    <span>LEADER IN PERFORMANCE</span>
                    <span className="italic font-medium mt-1 font-pt-serif">MARKETING</span>
                </h2>
            </div>

            {/* Logo Scroll Section */}
            <div className="flex relative w-full mask-gradient">
                <div className="flex gap-16 md:gap-24 animate-scroll whitespace-nowrap">
                    {[...logos, ...logos].map((logo, idx) => (
                        <div key={idx} className="flex flex-col items-center group">
                            <div className="text-5xl md:text-7xl font-black text-gray-200 group-hover:text-blue-500 transition-colors duration-500 cursor-default flex flex-col items-center">
                                {/* The "W" Logo Style */}
                                <span className="relative">
                                    {logo}
                                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-current opacity-20" />
                                </span>
                                <span className="text-[10px] tracking-[0.3em] mt-2 opacity-40">WEBASI</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}