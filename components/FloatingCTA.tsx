"use client"

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function FloatingCTA() {
    const pathname = usePathname()
    const { scrollY } = useScroll()
    const [scrolledPastHero, setScrolledPastHero] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Show after 300px of scroll (approximately 50% of the hero height)
        if (latest > 300) {
            setScrolledPastHero(true)
        } else {
            setScrolledPastHero(false)
        }
    })

    const isVisible = pathname
        ? !pathname.includes("/reservaciones") && !pathname.includes("/reservar") && scrolledPastHero
        : scrolledPastHero

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-6 right-6 z-50 px-4 sm:px-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/reservar">
                        <Button
                            className="bg-[#00ff88] hover:bg-[#00cc6a] text-black font-oswald text-sm md:text-base uppercase tracking-wider px-6 py-4 shadow-[0_4px_14px_0_rgba(0,255,136,0.39)] hover:shadow-[0_6px_20px_rgba(0,255,136,0.23)] transition-all hover:scale-105 font-bold rounded-lg whitespace-nowrap"
                        >
                            RESERVA YA 🌶️
                        </Button>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
