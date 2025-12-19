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
        image: "/mariachi-group.png",
        title: "Shows en Vivo",
        subtitle: "La Mejor Música Mexicana",
        description: "Nuestros mariachis tocan las canciones que llegan al corazón.",
        cta: "Reservar Ahora"
    },
    {
        id: 2,
        image: "/mariachi-trumpet.png",
        title: "Ambiente de Fiesta",
        subtitle: "Celebra con Nosotros",
        description: "El acompañamiento perfecto para tu celebración.",
        cta: "Reservar Ahora"
    },
    {
        id: 3,
        image: "/hero-mariachis.png",
        title: "Tradición y Alegría",
        subtitle: "Voces que Enamoran",
        description: "Tardes y noches llenas de música y sentimiento.",
        cta: "Reservar Ahora"
    },
    {
        id: 4,
        image: "/SHOWS.png",
        title: "¡Reserva Tu Mesa!",
        subtitle: "Vive la Experiencia",
        description: "No te quedes sin lugar en nuestro próximo show.",
        cta: "Reservar Ahora"
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

const TRANSITION_SETTINGS = {
    x: { type: "tween", duration: 0.8, ease: "easeInOut" },
    opacity: { duration: 0.8, ease: "easeInOut" }
}

export default function MariachiHero() {
    const [[page, direction], setPage] = useState([0, 0])
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

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    // Optimization for mobile images: priority on the first one, sizes prop
    return (
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-[#0d0d0d] group border-t border-[#00ff88]/20">
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
                        if (swipe < -swipeConfidenceThreshold) paginate(1)
                        else if (swipe > swipeConfidenceThreshold) paginate(-1)
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={slides[slideIndex].image}
                        alt={slides[slideIndex].title}
                        fill
                        className="object-cover opacity-80"
                        sizes="(max-width: 768px) 100vw, 100vw"
                        priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 pointer-events-none" />

                    <div className="absolute inset-0 flex items-center justify-center text-center px-4 pointer-events-none">
                        <div className="max-w-4xl pointer-events-auto">

                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-red-500 text-xl md:text-3xl font-oswald uppercase tracking-[0.2em] mb-2 font-bold drop-shadow-md"
                            >
                                {slides[slideIndex].title}
                            </motion.h2>
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="text-white text-4xl md:text-7xl font-black font-oswald uppercase leading-none mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                            >
                                {slides[slideIndex].subtitle}
                            </motion.h1>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <Link href="/reservar">
                                    <Button className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl px-10 py-6 uppercase font-bold font-oswald tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.4)] border border-red-400/30">
                                        {slides[slideIndex].cta}
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button onClick={() => paginate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-red-500 text-white rounded-full backdrop-blur-sm transition-all z-20 opacity-0 group-hover:opacity-100 duration-300 border border-white/10 hover:border-red-400">
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={() => paginate(1)} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-red-500 text-white rounded-full backdrop-blur-sm transition-all z-20 opacity-0 group-hover:opacity-100 duration-300 border border-white/10 hover:border-red-400">
                <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setPage([page + (index - slideIndex), index - slideIndex])}
                        className={`transition-all duration-500 rounded-full ${index === slideIndex ? "bg-red-500 w-10 h-3" : "bg-white/40 hover:bg-white w-3 h-3"}`}
                    />
                ))}
            </div>
        </section>
    )
}
