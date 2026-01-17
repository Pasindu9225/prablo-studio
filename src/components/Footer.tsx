"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Youtube, Linkedin, Music2 } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white pt-16  font-inter">
            {/* 1. The Call to Action Card */}
            <div className="bg-[url('/bg2.png')] bg-cover bg-center bg-no-repeat p-12 md:p-20 rounded-xl text-white text-center mb-20 shadow-lg max-w-[1400px] mx-auto relative overflow-hidden">

                <div className="relative z-10">
                    <h2 className="font-outfit text-4xl md:text-7xl font-black mb-4 uppercase leading-none">
                        READY TO UPGRADE <br /> YOUR <span className="italic font-medium mt-1 font-pt-serif">BRAND?</span>
                    </h2>
                    <p className="mb-8 text-sm md:text-base opacity-90 font-medium">
                        Step Into The Future Of Marketing With Prablo360.
                    </p>
                    <button className="bg-white text-primary px-10 py-4 rounded-md font-bold text-xs uppercase hover:bg-black hover:text-white transition-all shadow-md">
                        Experience The Future
                    </button>
                </div>
            </div>

            {/* 2. Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 px-[5%]">

                {/* Brand Info */}
                <div className="flex flex-col gap-6">
                    <Link href="/" className="flex flex-col">
                        <Image
                            src="/logo.png"
                            alt="PRABLO 360 Logo"
                            width={150}
                            height={50}
                            className="object-contain"
                        />
                    </Link>
                    <p className="text-gray-600 text-sm max-w-xs leading-relaxed font-medium">
                        <span className="text-primary">Prablo360</span> Isn't Just An Agency; It's A Digital Ecosystem. We Recognized That Traditional Marketing Is Dead.
                    </p>
                    {/* Social Icons matching design colors */}
                    <div className="flex gap-4">
                        <Facebook size={20} className="text-primary cursor-pointer hover:scale-110 transition-transform" />
                        <Music2 size={20} className="text-primary cursor-pointer hover:scale-110 transition-transform" />
                        <Youtube size={20} className="text-primary cursor-pointer hover:scale-110 transition-transform" />
                        <Linkedin size={20} className="text-primary cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                </div>

                {/* Company Links */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-primary font-bold uppercase text-xs">Company</h4>
                    <ul className="space-y-3">
                        {['Home', 'About', 'Service', 'Portfolio', 'Contact'].map(link => (
                            <li key={link} className="text-black font-medium text-sm cursor-pointer hover:text-primary transition-colors">{link}</li>
                        ))}
                    </ul>
                </div>

                {/* Service Links */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-primary font-bold uppercase text-xs">Service</h4>
                    <ul className="space-y-3">
                        {['Home', 'About', 'Service', 'Portfolio', 'Contact'].map(link => (
                            <li key={link} className="text-black font-medium text-sm cursor-pointer hover:text-primary transition-colors">{link}</li>
                        ))}
                    </ul>
                </div>

                {/* Address Info */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-primary font-bold uppercase text-xs">Address</h4>
                    <div className="flex flex-col gap-2 text-sm font-medium text-black">
                        <p>435, 15a Longdon Hill,<br />Colombo 00500</p>
                        <p>Ph: <span className="underline">+947 77 122 299</span></p>
                    </div>
                </div>

            </div>

            {/* 3. Copyright Bar */}
            <div className="pt-8 border-t border-gray-100 flex justify-center">
                <p className="text-white bg-primary w-full py-4 text-center rounded-sm font-medium text-xs uppercase">
                    Copyright: © 2026 Prablo 360. All Rights Reserved. <span className="mx-2">|</span> <Link href="https://webasi.co" target="_blank" className="hover:text-black transition-colors">Design by WEBASI</Link>
                </p>
            </div>
        </footer>
    );
}