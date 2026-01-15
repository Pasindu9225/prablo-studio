"use client";
import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, Float } from '@react-three/drei';

// Helper to load models
function Model({ path }: { path: string }) {
    const { scene } = useGLTF(path);
    return <primitive object={scene} scale={1} />;
}

export default function AgencyInfo() {
    const [activeId, setActiveId] = useState("01");

    return (
        <section className="py-24 px-[5%] bg-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
            <div className="flex-1">
                <h2 className="font-outfit text-5xl md:text-7xl font-black text-primary mb-12 uppercase leading-[0.9] tracking-tighter">
                    Not Your<br />Average<br />Agency
                </h2>

                {/* List items with focus/gray-out effect */}
                <div className="flex flex-col gap-10">
                    {[
                        { id: "01", title: "ARTIFICIAL INTELLIGENCE", desc: "We leverage AI to optimize campaigns.", path: "/models/ai.glb" },
                        { id: "02", title: "IN-HOUSE PRODUCTION", desc: "Full-scale studio capabilities.", path: "/models/prod.glb" },
                        { id: "03", title: "FUTURE-READY", desc: "Stay ahead of the curve.", path: "/models/future.glb" }
                    ].map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={`flex gap-6 items-start cursor-pointer transition-all duration-500 ${activeId === item.id ? 'opacity-100' : 'opacity-20 grayscale'}`}
                        >
                            <span className="font-outfit text-2xl font-light text-gray-300">{item.id}</span>
                            <div>
                                <h4 className="text-xl font-extrabold uppercase">{item.title}</h4>
                                <p className="text-gray-500 text-sm max-w-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 w-full flex justify-center relative min-h-[500px]">
                {/* Design circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[550px] md:h-[550px] bg-gray-50 rounded-full" />

                <div className="relative w-full h-[500px] z-10">
                    <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
                        <Suspense fallback={null}>
                            {/* Note: shadows={false} or shadows="contact" works here in v9 */}
                            <Stage environment="city" intensity={0.5} shadows={false}>
                                <PresentationControls global zoom={0.8} polar={[-0.1, Math.PI / 4]}>
                                    <Float speed={2} rotationIntensity={0.5}>
                                        <AnimatePresence mode="wait">
                                            {/* Model swaps based on activeId */}
                                            <Model key={activeId} path={`/models/${activeId === '01' ? 'ai' : activeId === '02' ? 'prod' : 'future'}.glb`} />
                                        </AnimatePresence>
                                    </Float>
                                </PresentationControls>
                            </Stage>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    );
}