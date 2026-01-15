"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary to-secondary relative overflow-hidden px-[5%]">
            {/* Abstract Background Elements could go here */}

            <div className="relative z-10 max-w-[900px]">
                <motion.h1
                    className="font-outfit text-5xl md:text-7xl font-extrabold leading-[1.1] text-white mb-6 uppercase"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    BEYOND MARKETING.<br />
                    WE ARE THE <span className="italic font-light">FUTURE</span><br />
                    OF DIGITAL IMPACT.
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-white/90 max-w-[600px] mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    We don't just create campaigns; we create experiences. Join 200+ brands
                    transforming their digital presence with Prablo Studio.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link
                        href="#contact"
                        className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-200"
                    >
                        Start Your Journey
                    </Link>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-white py-8 px-[5%] flex flex-wrap gap-8 justify-around z-10">
                {[
                    { num: "05+", label: "Years of Experience" },
                    { num: "200+", label: "Projects Delivered" },
                    { num: "120K+", label: "Happy Clients" },
                    { num: "20+", label: "Creative Awards" }
                ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                        <span className="block text-4xl font-bold text-black">{stat.num}</span>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
