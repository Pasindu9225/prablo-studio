"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
    { question: "How long does a typical project take?", answer: "Timeline varies depending on complexity, but most brand projects take 4-6 weeks." },
    { question: "Do you offer ongoing support?", answer: "Yes, we offer retainer packages for continuous optimization and content creation." },
    { question: "What is your pricing model?", answer: "We value transparency. Our pricing is project-based or monthly retainer, tailored to your needs." },
    { question: "Can you handle international clients?", answer: "Absolutely. We work with brands globally and are accustomed to remote collaboration." }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-[5%] bg-gray-50 text-black" id="faq">
            <div className="max-w-[800px] mx-auto">
                <motion.h2
                    className="font-outfit text-4xl md:text-5xl text-primary mb-12 uppercase text-left leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Frequently<br />Asked<br />Questions
                </motion.h2>

                <div className="w-full">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-6 border-b border-gray-300">
                            <button
                                className="w-full text-left py-6 text-xl md:text-2xl font-semibold flex justify-between items-center cursor-pointer bg-transparent border-none text-black hover:text-primary transition-colors font-outfit"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <Plus className={`text-2xl text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="overflow-hidden text-gray-600 leading-relaxed"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        <div className="pb-6">{faq.answer}</div>
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
