"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 w-full px-[5%] py-6 z-50 flex justify-between items-center transition-all duration-300 text-white bg-transparent",
                scrolled && "bg-background/85 backdrop-blur-md py-4 border-b border-white/5"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="font-outfit font-extrabold text-2xl tracking-tighter flex items-center gap-2">
                PRABLO <span className="text-primary">STUDIO</span>
            </div>

            <div className="hidden md:flex gap-10 font-medium text-base">
                {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="relative opacity-80 hover:opacity-100 transition-opacity group"
                    >
                        {item}
                        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            <Link
                href="#contact"
                className="hidden md:block px-7 py-3 bg-white text-black rounded-full font-semibold text-sm transition-transform duration-200 hover:scale-105 hover:bg-secondary"
            >
                GET IN TOUCH
            </Link>
        </motion.nav>
    );
}
