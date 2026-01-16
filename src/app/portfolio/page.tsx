"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = ["All", "Cinematic", "AI Solutions", "Branding"];

const projects = [
    { id: 1, title: "Future Motion", category: "Cinematic", size: "tall", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
    { id: 2, title: "Neural Predict", category: "AI Solutions", size: "wide", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop" },
    { id: 3, title: "E-Commerce Pro", category: "Branding", size: "square", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop" },
    { id: 4, title: "Studio X", category: "Cinematic", size: "square", img: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2564&auto=format&fit=crop" },
    { id: 5, title: "AI Voice Sync", category: "AI Solutions", size: "tall", img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2574&auto=format&fit=crop" },
    { id: 6, title: "Orange Identity", category: "Branding", size: "wide", img: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2574&auto=format&fit=crop" },
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <main className="bg-white min-h-screen">
            {/* 1. Hero Section: Refined with tighter leading */}
            <section className="relative h-[60vh] flex items-center justify-center bg-primary overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
                />
                <div className="relative z-10 text-center px-[5%]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                    >
                        Showcasing Excellence
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-6xl md:text-[110px] font-black uppercase leading-[0.8] tracking-tighter"
                    >
                        SELECTED <br />
                        <span className="italic font-light text-white/90">PROJECTS.</span>
                    </motion.h1>
                </div>
            </section>

            {/* 2. Glass Filter Bar: Sticky for better UX */}
            <section className="sticky top-[60px] z-40 py-8 px-[5%] bg-white/80 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-2 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${filter === cat
                                        ? "bg-primary text-white shadow-xl shadow-orange-200"
                                        : "bg-gray-50 text-gray-400 hover:text-black border border-gray-100"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        Showing <span className="text-primary">{filteredProjects.length}</span> Masterpieces
                    </div>
                </div>
            </section>

            {/* 3. Polished Masonry Grid */}
            <section className="py-20 px-[5%] max-w-[1400px] mx-auto">
                <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </main>
    );
}

function ProjectCard({ project }: { project: any }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-3xl bg-gray-50 border border-gray-100"
        >
            <div className={`w-full overflow-hidden transition-all duration-700 ${project.size === 'tall' ? 'h-[550px]' : project.size === 'wide' ? 'h-[350px]' : 'h-[450px]'
                }`}>
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
            </div>

            {/* 4. Elegant Card Info Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
                        {project.category}
                    </span>
                    <div className="flex justify-between items-end">
                        <h3 className="text-white text-3xl font-black uppercase tracking-tighter leading-none">
                            {project.title}
                        </h3>
                        <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}