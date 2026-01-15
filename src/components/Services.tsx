"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Share2, Lightbulb } from 'lucide-react';

const services = [
    {
        id: "01",
        title: "Brand Advertising",
        desc: "We build brands that resonate. From identity design to full-scale advertising campaigns, we ensure your message cuts through the noise.",
        icon: <Share2 size={24} />
    },
    {
        id: "02",
        title: "Social Content & Marketing",
        desc: "Engage your audience with compelling social content. We craft strategies that grow your community and drive real conversions.",
        icon: <Monitor size={24} />
    },
    {
        id: "03",
        title: "Creative Design & Development",
        desc: "Merging aesthetics with functionality. Our web and graphic design services creating stunning visual experiences.",
        icon: <Lightbulb size={24} />
    }
];

export default function Services() {
    return (
        <section className="py-24 px-[5%] bg-background relative" id="services">
            <div className="mb-16 max-w-[600px]">
                <motion.h2
                    className="font-outfit text-5xl md:text-6xl text-primary mb-4 uppercase leading-none"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our Expertise<br />In Action
                </motion.h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    We combine data-driven strategies with top-tier creative talent to deliver results that matter.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="bg-white/5 border border-white/5 p-10 rounded-2xl relative overflow-hidden group hover:-translate-y-2 hover:bg-white/10 hover:border-primary transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <span className="absolute top-6 right-6 text-5xl font-extrabold text-white/5 font-outfit select-none">{service.id}</span>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg">
                            {service.icon}
                        </div>
                        <h3 className="font-outfit text-2xl text-white mb-4">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-8">{service.desc}</p>
                        <a href="#" className="text-primary font-semibold flex items-center gap-2 transition-all group-hover:gap-4">
                            Learn More <ArrowRight size={16} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
