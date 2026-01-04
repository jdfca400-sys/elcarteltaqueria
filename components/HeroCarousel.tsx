"use client"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
    {
        id: 1,
        image: "/hero-gastronomy.png",
        title: "Gastronomía Auténtica",
        subtitle: "Sabores de México que conquistan corazones",
        description: "Cada platillo cuenta una historia de tradición y pasión culinaria.",
    },
    {
        id: 2,
        image: "/hero-ambience.png",
        title: "Ambiente Premium",
        subtitle: "Una experiencia vibrante y festiva",
        description: "Decoración única y atmósfera envolvente para tus mejores momentos.",
    },
    {
        id: 3,
        image: "/hero-mariachis.png",
        title: "Mariachis en Vivo",
        subtitle: "La música es el alma de la fiesta",
        description: "Disfruta de shows en vivo que te harán cantar y celebrar.",
    },
    {
        id: 4,
        image: "/hero-social.png",
        title: "Experiencia Inolvidable",
        subtitle: "Celebra la vida con amigos y familia",
        description: "El lugar perfecto para compartir risas, brindis y recuerdos.",
    }
]

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
        zIndex: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0
    })
}

// Strictly enforced transition settings for ALL interactions
const TRANSITION_SETTINGS = {
    x: { type: "tween", duration: 0.8, ease: "easeInOut" },
    opacity: { duration: 0.8, ease: "easeInOut" }
} as const

export default function HeroCarousel() {
    const [[page, direction], setPage] = useState([0, 0])

    // We only have N slides, so we wrap the index
    const slideIndex = ((page % slides.length) + slides.length) % slides.length

    const paginate = useCallback((newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }, [page])

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1)
        }, 5000)
        return () => clearInterval(timer)
    }, [paginate])

    // Swipe handling
    const swipeConfidenceThreshold = 10000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    return (
        <section className="relative w-full h-[95%] min-h-[460px] overflow-hidden group rounded-[2rem] md:rounded-[3rem] shadow-2xl">
            {/* Animated Contour Line Overlay */}
            <div className="absolute inset-0 z-30 pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none">
                    <motion.rect
                        x="1.5"
                        y="1.5"
                        width="calc(100% - 3px)"
                        height="calc(100% - 3px)"
                        rx="48"
                        ry="48"
                        fill="transparent"
                        stroke="#00ff88"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.1, 0.9, 1]
                        }}
                        style={{
                            filter: "drop-shadow(0 0 8px #00ff88)",
                        }}
                    />
                </svg>
            </div>

            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={TRANSITION_SETTINGS}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x)

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1)
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1)
                        }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={slides[slideIndex].image}
                        alt={slides[slideIndex].title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 pointer-events-none" />

                    <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16 lg:px-24 pointer-events-none">
                        <div className="max-w-xl text-center pointer-events-auto">
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-[#00ff88] text-xl md:text-xl font-oswald uppercase tracking-[0.2em] mb-2 font-bold"
                            >
                                {slides[slideIndex].title}
                            </motion.h2>
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="text-white text-4xl md:text-6xl font-black font-oswald uppercase leading-[1.1] mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                            >
                                {slides[slideIndex].subtitle}
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="text-gray-200 text-lg md:text-2xl font-light mb-10 max-w-lg mx-auto leading-relaxed"
                            >
                                {slides[slideIndex].description}
                            </motion.p>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.0, duration: 0.5 }}
                                className="flex justify-center"
                            >
                                <Link href="/reservar">
                                    <Button className="bg-[#00ff88] text-black hover:bg-white hover:text-black text-lg md:text-xl px-5 py-6 uppercase font-black font-oswald tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(0,255,136,0.3)]">
                                        Reserva ya 👈
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-[#00ff88] text-white hover:text-black rounded-full backdrop-blur-sm transition-all border border-white/10 hover:border-[#00ff88] z-20 opacity-0 group-hover:opacity-100 duration-300 transform hover:scale-110"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-[#00ff88] text-white hover:text-black rounded-full backdrop-blur-sm transition-all border border-white/10 hover:border-[#00ff88] z-20 opacity-0 group-hover:opacity-100 duration-300 transform hover:scale-110"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            const direction = index - slideIndex
                            setPage([page + direction, direction])
                        }}
                        className={`transition-all duration-500 rounded-full ${index === slideIndex
                            ? "bg-[#00ff88] w-10 h-3"
                            : "bg-white/40 hover:bg-white w-3 h-3"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}
