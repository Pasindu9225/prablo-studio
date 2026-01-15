"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        id: "01",
        q: "Placeholder Question Goes Here?",
        a: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is Simply Dummy Text."
    },
    { id: "02", q: "Placeholder Question Goes Here?", a: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry." },
    { id: "03", q: "Placeholder Question Goes Here?", a: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry." },
    { id: "04", q: "Placeholder Question Goes Here?", a: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry." },
    { id: "05", q: "Placeholder Question Goes Here?", a: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-[5%] bg-white relative overflow-hidden">

            {/* 1. The Middle Blurred Ball */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 relative z-10">

                {/* Left Side: Header */}
                <div className="flex flex-col justify-center">
                    <h2 className="font-outfit text-5xl md:text-7xl font-black text-primary leading-[0.9] uppercase tracking-tighter mb-8">
                        FREQUENTLY<br />ASKED<br />
                        <span className="italic font-light">QUESTIONS</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed">
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Is.
                    </p>
                </div>

                {/* Right Side: Accordion Cards */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="bg-[#FFF8F0] rounded-xl overflow-hidden transition-shadow hover:shadow-md border border-orange-50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left p-6 flex items-center gap-4 group"
                            >
                                {/* Number Badge */}
                                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                                    {faq.id}
                                </span>
                                <span className="font-bold text-sm md:text-base text-gray-800 flex-1">
                                    {faq.q}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-12 pb-8 text-xs md:text-sm text-gray-500 leading-relaxed font-medium ml-6">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}