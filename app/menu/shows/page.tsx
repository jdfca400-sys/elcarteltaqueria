"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Decorations from "@/components/Decorations"
import MenuDrawer from "@/components/MenuDrawer"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const menuData = {
    entradas: [
        { icon: "🥗", title: "Guacamole", description: "Aguacate fresco con cebolla, cilantro y limón" },
        { icon: "🧀", title: "Queso Fundido", description: "Queso derretido con chorizo y chiles" },
        { icon: "🥑", title: "Nachos", description: "Totopos con queso, jalapeños y crema" },
    ],
}

export default function ShowsPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="relative z-10 max-w-7xl mx-auto px-5 min-h-screen">
            <Navbar onMenuClick={() => setIsMenuOpen(true)} />

            <MenuDrawer
                menuData={menuData}
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

            <Decorations />

            {/* Spacer for fixed navbar */}
            <div className="h-24 md:h-28 lg:h-32"></div>

            {/* Volver al inicio Button */}
            <div className="flex justify-start mb-8 animate-fade-in-up">
                <Link href="/">
                    <Button variant="outline" className="text-[#00ff88] border-[#00ff88] hover:bg-[#00ff88]/10 font-oswald uppercase tracking-wider">
                        ← Volver al Inicio
                    </Button>
                </Link>
            </div>

            {/* Page Title */}
            <div className="text-center mb-16 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-black font-oswald text-white mb-4 uppercase tracking-tighter drop-shadow-lg">
                    Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00cc6a]">Menú</span>
                </h1>
                <div className="h-1 w-24 bg-[#00ff88] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Mariachis Show Section */}
            <motion.section
                id="menu-shows"
                className="py-16 md:py-24 relative bg-black/30"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-oswald text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-green-500 inline-block uppercase tracking-tighter drop-shadow-sm"
                    >
                        🎺 Shows de Mariachis
                    </motion.h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-red-500 via-white to-green-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4">
                    <div className="group relative border border-red-500/40 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300 hover:border-red-500/70 hover:shadow-[0_0_50px_rgba(239,68,68,0.6)]">
                        <div className="relative aspect-video w-full overflow-hidden">
                            <Image
                                src="/SHOWS.png"
                                alt="Shows de Mariachis en Vivo"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-3xl font-oswald text-red-500 uppercase tracking-wide mb-3">¡Música en Vivo!</h3>
                            <p className="text-gray-200 text-lg font-light">Disfruta del mejor ambiente con nuestros shows de mariachis. ¡Agenda tu mesa y vive la experiencia!</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </div>
    )
}
