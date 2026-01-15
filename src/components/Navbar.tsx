"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();

    // Smooth spring physics for the progress bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-[100] transition-all duration-300 px-[5%] py-6 flex justify-between items-center",
            scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent text-white"
        )}>
            <div className={cn("font-outfit font-black text-2xl tracking-tighter", scrolled ? "text-black" : "text-white")}>
                PRABLO <span className="text-primary">STUDIO</span>
            </div>

            <div className={cn("hidden md:flex gap-8 font-bold text-[13px] uppercase tracking-widest", scrolled ? "text-black/70" : "text-white/80")}>
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                    <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">{item}</Link>
                ))}
            </div>

            <button className="bg-primary text-white px-7 py-2 rounded-md font-bold text-xs uppercase hover:bg-black transition-all">
                Contact
            </button>

            {/* Sticky Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary origin-[0%]"
                style={{ scaleX }}
            />
        </nav>
    );
}