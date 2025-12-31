"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function MenuFlipCard({
    frontImage,
    frontIcon,
    frontTitle,
    frontDesc,
    backTitle,
    backItems
}: {
    frontImage?: string,
    frontIcon?: string,
    frontTitle: string,
    frontDesc: string,
    backTitle: string,
    backItems: string[]
}) {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div className="h-[500px] w-full perspective-1000 group">
            <motion.div
                className="relative w-full h-full transition-all duration-700"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {/* FRONT FACE */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden bg-[#121212] rounded-3xl border border-white/5 overflow-hidden flex flex-col"
                    style={{
                        backfaceVisibility: "hidden",
                        zIndex: isFlipped ? 0 : 10,
                        pointerEvents: isFlipped ? "none" : "auto"
                    }}
                >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Image Container */}
                    <div className="relative h-64 w-full bg-[#0a0a0a] p-8 flex items-center justify-center flex-shrink-0">
                        {frontImage ? (
                            <>
                                <Image
                                    src={frontImage}
                                    alt={frontTitle}
                                    fill
                                    className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </>
                        ) : (
                            <div className="relative z-10 flex items-center justify-center w-full h-full">
                                <span className="text-8xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-110 cursor-default">
                                    {frontIcon}
                                </span>
                                <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col items-center text-center relative z-10">
                        <h3 className="text-3xl font-oswald font-bold text-white uppercase tracking-wide mb-3 group-hover:text-emerald-400 transition-colors">
                            {frontTitle}
                        </h3>
                        <div className="w-12 h-1 bg-emerald-500/30 rounded-full mb-4 group-hover:w-24 group-hover:bg-emerald-500 transition-all duration-500"></div>
                        <p className="text-gray-400 text-lg font-light leading-relaxed mb-4 line-clamp-2">
                            {frontDesc}
                        </p>

                        <div className="mt-auto">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log("Flipping to BACK");
                                    setIsFlipped(true);
                                }}
                                className="px-6 py-2 rounded-full border border-emerald-500/30 text-emerald-400 font-oswald tracking-widest text-sm uppercase transition-all duration-300 hover:bg-emerald-500 hover:text-black hover:font-bold shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer relative z-20"
                            >
                                Saber más de esto
                            </button>
                        </div>
                    </div>
                </div>

                {/* BACK FACE */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden bg-[#121212] rounded-3xl border border-emerald-500/30 overflow-hidden flex flex-col p-10 items-center text-center"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        boxShadow: "0 0 30px rgba(16,185,129,0.15)",
                        zIndex: isFlipped ? 10 : 0,
                        pointerEvents: isFlipped ? "auto" : "none"
                    }}
                >
                    <h3 className="text-3xl font-oswald font-bold text-emerald-400 uppercase tracking-widest mb-6 relative z-10 animate-fade-in-up">
                        {backTitle}
                    </h3>
                    <div className="w-16 h-1 bg-emerald-500 rounded-full mb-8 relative z-10"></div>

                    <ul className="space-y-4 relative z-10 w-full">
                        {backItems.map((item, idx) => (
                            <li key={idx} className="flex items-center justify-center gap-3 text-gray-300 text-lg font-light border-b border-white/5 pb-2 last:border-0">
                                <span className="text-emerald-500 text-xl">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto relative z-10">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                console.log("Flipping to FRONT");
                                setIsFlipped(false);
                            }}
                            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 font-oswald uppercase tracking-widest transition-colors duration-300 px-6 py-3 rounded-full hover:bg-emerald-500/10 cursor-pointer relative z-20"
                        >
                            <span className="text-xl">↺</span> Volver al menú
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
