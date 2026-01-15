"use client";

import { motion } from 'framer-motion';

export default function AgencyInfo() {
    return (
        <section className="py-24 px-[5%] bg-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
            <div className="flex-1">
                <motion.h2
                    className="font-outfit text-5xl md:text-7xl leading-[1.1] text-primary mb-12 uppercase text-center lg:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Not Your<br />Average<br />Agency
                </motion.h2>

                <div className="flex flex-col gap-10">
                    {[
                        { id: "01", title: "Artificial Intelligence", desc: "We leverage AI to optimize campaigns and generate insights that humans miss." },
                        { id: "02", title: "In-House Production", desc: "From video shoots to 3D rendering, our studio handles everything under one roof." },
                        { id: "03", title: "Future-Ready", desc: "We don't just follow trends; we set them. Stay ahead of the curve with Prablo." }
                    ].map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="flex gap-6 items-start max-w-xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <span className="font-outfit text-3xl font-light text-gray-300 min-w-[50px]">{item.id}</span>
                            <div>
                                <h4 className="text-2xl font-bold text-black mb-2">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="flex-1 w-full flex justify-center relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Placeholder for Robot Image */}
                    <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-400 shadow-2xl animate-[float_6s_ease-in-out_infinite]">
                        <div className="text-center">
                            <span className="block text-6xl mb-4">🤖</span>
                            [3D Robot Illustration]
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
