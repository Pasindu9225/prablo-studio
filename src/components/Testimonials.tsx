"use client";
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "I've Tried Countless Tea Brands, But Nothing Compares To The Freshness And Aroma Of This One. Every Sip Feels Like A Warm Hug! My Mornings Are Incomplete Without It.",
        name: "Olivia Richardson",
        location: "New York, USA",
    },
    // Add 4-5 more objects to ensure the loop is seamless
];

export default function Testimonials() {
    return (
        /* 1. Reduced vertical padding from py-24 to py-12 */
        <section className="py-12 bg-primary relative overflow-hidden">

            {/* 2. Reduced header margin from mb-16 to mb-8 */}
            <div className="text-center mb-8 px-4">
                <h2 className="text-white text-4xl md:text-6xl font-black uppercase leading-none mb-2">
                    WHAT PEOPLE ARE <span className="italic font-light">SAYING?</span>
                </h2>
                <p className="text-white/80 text-[10px] md:text-xs max-w-lg mx-auto leading-relaxed">
                    Don't Just Take Our Word For It—See What Our Customers Have To Say About Their Experience!
                </p>
            </div>

            {/* 3. Compact Floating Cards Container */}
            <div className="flex flex-col gap-4">

                {/* Row 1: Moving Left */}
                <div className="flex overflow-hidden relative">
                    <div className="flex gap-4 animate-scroll whitespace-nowrap py-2">
                        {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
                            <TestimonialCard key={idx} item={item} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Moving Right */}
                <div className="flex overflow-hidden relative">
                    <div className="flex gap-4 animate-scroll whitespace-nowrap py-2 [animation-direction:reverse]">
                        {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
                            <TestimonialCard key={idx} item={item} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function TestimonialCard({ item }: { item: any }) {
    return (
        /* 4. Reduced card width and padding for a sleeker look */
        <div className="inline-block w-[280px] md:w-[350px] bg-white p-6 rounded-xl shadow-lg whitespace-normal">
            <p className="text-gray-700 text-xs md:text-sm font-medium leading-relaxed mb-6">
                "{item.quote}"
            </p>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center font-bold text-primary text-xs">
                    {item.name[0]}
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-xs text-black">{item.name}</span>
                    <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">{item.location}</span>
                </div>
            </div>
        </div>
    );
}