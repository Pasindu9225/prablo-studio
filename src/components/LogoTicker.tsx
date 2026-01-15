"use client";

import { cn } from '@/lib/utils';

// Duplicate logos for smooth infinite scroll
const logos = [
    "Google", "Amazon", "Netflix", "Spotify", "Meta", "Apple",
    "Google", "Amazon", "Netflix", "Spotify", "Meta", "Apple"
];

export default function LogoTicker() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto text-center px-4">
                <h3 className="font-outfit text-primary text-2xl mb-12 uppercase tracking-widest font-bold">
                    We're a Recognized Leader in Performance Marketing
                </h3>

                <div className="flex overflow-hidden relative w-full mask-gradient">
                    <div className="flex gap-16 animate-scroll whitespace-nowrap min-w-full">
                        {logos.map((logo, idx) => (
                            <div key={idx} className="text-3xl font-extrabold text-gray-300 flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:text-primary transition-all duration-300 cursor-pointer">
                                {/* Placeholder for SVG/Image */}
                                <div className="w-8 h-8 bg-current rounded-full opacity-50"></div>
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
