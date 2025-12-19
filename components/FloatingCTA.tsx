"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function FloatingCTA() {
    const pathname = usePathname()
    const isVisible = pathname ? !pathname.includes("/reservaciones") && !pathname.includes("/reservar") : true

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-6 right-6 z-50"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <Link href="/reservaciones">
                        <Button
                            className="bg-[#00ff88] hover:bg-[#00cc6a] text-black font-oswald text-sm md:text-base uppercase tracking-wider px-6 py-4 shadow-[0_4px_14px_0_rgba(0,255,136,0.39)] hover:shadow-[0_6px_20px_rgba(0,255,136,0.23)] transition-all hover:scale-105 font-bold rounded-lg"
                        >
                            RESERVA AHORA 🌶️
                        </Button>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
