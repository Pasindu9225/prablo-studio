"use client";

import { motion } from 'framer-motion';

export default function Testimonials() {
    return (
        <section className="py-24 px-[5%] bg-gradient-to-b from-primary to-[#cc6600] text-white text-center">
            <motion.h2
                className="font-outfit text-5xl md:text-6xl mb-16 uppercase leading-none"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                What People Are Saying?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="bg-white text-black p-8 rounded-xl text-left shadow-2xl hover:-translate-y-2 transition-transform duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <p className="text-base italic mb-6 leading-relaxed text-gray-700">"The team at Prablo Studio completely transformed our brand. Their attention to detail and creative vision are unmatched."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                            <div>
                                <p className="font-bold text-sm">Client Name</p>
                                <p className="text-xs text-gray-500">CEO, Company</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
