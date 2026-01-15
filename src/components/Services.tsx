"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const expertiseData = [
    {
        id: "01",
        title: "Paid Advertising",
        video: "/placeholder-video-1.mp4",
    },
    {
        id: "02",
        title: "SEO & Content Marketing",
        video: "/placeholder-video-2.mp4",
    },
    {
        id: "03",
        title: "Website Design & Optimization",
        video: "/placeholder-video-3.mp4",
    },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-primary">
            <div className="sticky top-0 h-screen flex flex-col justify-center px-[5%] overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-[1400px] mx-auto items-center">

                    {/* Left Side: Header */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white text-5xl md:text-[80px] font-black leading-[0.85] uppercase tracking-tighter">
                            OUR EXPERTISE<br />
                            <span className="italic font-light opacity-90">IN ACTION</span>
                        </h2>
                        <p className="text-white/80 font-medium text-xs md:text-sm max-w-xs mt-4">
                            Blending AI Technology With Creative Brilliance.
                        </p>
                    </div>

                    {/* Right Side: Stepper and 3 Video Cards */}
                    <div className="flex flex-col gap-10">

                        {/* Stepper Header with Horizontal Line */}
                        <div className="relative flex items-center mt-12">
                            {/* 1. Improved Line Positioning: Centered vertically */}
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 z-0 -translate-y-1/2" />

                            <div className="flex justify-between items-start w-full relative z-10">
                                {expertiseData.map((item, index) => {
                                    const stepRange = [index * 0.33, (index + 1) * 0.33];

                                    const stepOpacity = useTransform(smoothProgress,
                                        [stepRange[0] - 0.1, stepRange[0], stepRange[1], stepRange[1] + 0.1],
                                        [0.3, 1, 1, 0.3]
                                    );

                                    return (
                                        <motion.div
                                            key={item.id}
                                            style={{ opacity: stepOpacity }}
                                            className="flex flex-col gap-4 w-1/3 items-start"
                                        >
                                            {/* 2. Added bg-primary to hide the line behind the number */}
                                            <div className="w-16 h-14 md:w-24 md:h-16 border border-white/40 rounded-[4px] flex items-center justify-center bg-primary z-10">
                                                <span className="text-white text-3xl md:text-4xl font-light font-outfit">
                                                    {item.id}
                                                </span>
                                            </div>
                                            <h3 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest max-w-[100px] leading-tight">
                                                {item.title}
                                            </h3>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 3 Video Sections */}
                        <div className="grid grid-cols-3 gap-4 h-[350px] md:h-[450px]">
                            {expertiseData.map((item, index) => {
                                const stepRange = [index * 0.33, (index + 1) * 0.33];

                                const cardOpacity = useTransform(smoothProgress,
                                    [stepRange[0] - 0.1, stepRange[0], stepRange[1], stepRange[1] + 0.1],
                                    [0.4, 1, 1, 0.4]
                                );
                                const cardGrayscale = useTransform(smoothProgress,
                                    [stepRange[0] - 0.1, stepRange[0], stepRange[1], stepRange[1] + 0.1],
                                    ["grayscale(100%)", "grayscale(0%)", "grayscale(0%)", "grayscale(100%)"]
                                );
                                const cardScale = useTransform(smoothProgress,
                                    [stepRange[0] - 0.1, stepRange[0], stepRange[1], stepRange[1] + 0.1],
                                    [0.95, 1, 1, 0.95]
                                );

                                return (
                                    <motion.div
                                        key={item.id}
                                        className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black/20 border border-white/10"
                                        style={{
                                            opacity: cardOpacity,
                                            filter: cardGrayscale,
                                            scale: cardScale
                                        }}
                                    >
                                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                                            <span className="text-white/20 font-black text-6xl uppercase">{item.id}</span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}