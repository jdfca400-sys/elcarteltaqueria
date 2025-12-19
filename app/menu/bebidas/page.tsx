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

export default function BebidasPage() {
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
                    Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Bar</span>
                </h1>
                <div className="h-1 w-24 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Bebidas Menu Gallery Section */}
            <motion.section
                id="menu-bebidas"
                className="py-16 md:py-24 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-oswald text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-block uppercase tracking-tighter drop-shadow-sm"
                    >
                        Bebidas & Cervezas
                    </motion.h2>
                    <div className="h-1 w-24 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-300 mt-4 text-lg">Refrescantes y auténticas para acompañar.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto px-4">
                    {/* Item 1 */}
                    <div className="group relative border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/BEBIDAS 1.png"
                                alt="Cervezas Nacionales e Importadas"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 text-center bg-black/40 backdrop-blur-sm absolute bottom-0 w-full border-t border-cyan-500/20">
                            <h3 className="text-2xl font-oswald text-cyan-400 uppercase tracking-wide mb-1">Cervezas Heladas</h3>
                            <p className="text-gray-300 text-sm font-light">La mejor selección nacional e importada.</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="group relative border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/BEBIDAS 2.png"
                                alt="Margaritas de Sabores"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 text-center bg-black/40 backdrop-blur-sm absolute bottom-0 w-full border-t border-cyan-500/20">
                            <h3 className="text-2xl font-oswald text-cyan-400 uppercase tracking-wide mb-1">Margaritas</h3>
                            <p className="text-gray-300 text-sm font-light">Clásicas y de sabores frutales.</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="group relative border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/BEBIDAS 3.png"
                                alt="Micheladas Preparadas"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 text-center bg-black/40 backdrop-blur-sm absolute bottom-0 w-full border-t border-cyan-500/20">
                            <h3 className="text-2xl font-oswald text-cyan-400 uppercase tracking-wide mb-1">Micheladas</h3>
                            <p className="text-gray-300 text-sm font-light">Con nuestro mix secreto de salsas.</p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="group relative border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/BEBIDAS 4.png"
                                alt="Cócteles de la Casa"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 text-center bg-black/40 backdrop-blur-sm absolute bottom-0 w-full border-t border-cyan-500/20">
                            <h3 className="text-2xl font-oswald text-cyan-400 uppercase tracking-wide mb-1">Cócteles</h3>
                            <p className="text-gray-300 text-sm font-light">Creaciones únicas de nuestros mixólogos.</p>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div className="group relative border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/BEBIDAS 5.png"
                                alt="Tequilas y Mezcales"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 text-center bg-black/40 backdrop-blur-sm absolute bottom-0 w-full border-t border-cyan-500/20">
                            <h3 className="text-2xl font-oswald text-cyan-400 uppercase tracking-wide mb-1">Tequilas & Mezcales</h3>
                            <p className="text-gray-300 text-sm font-light">La mejor selección de agaves.</p>
                        </div>
                    </div>

                    {/* Item 6 */}
                    <div className="group relative border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/BEBIDAS 6.png"
                                alt="Vinos y Champagne"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 text-center bg-black/40 backdrop-blur-sm absolute bottom-0 w-full border-t border-cyan-500/20">
                            <h3 className="text-2xl font-oswald text-cyan-400 uppercase tracking-wide mb-1">Vinos & Champagne</h3>
                            <p className="text-gray-300 text-sm font-light">Para celebraciones especiales.</p>
                        </div>
                    </div>

                </div>
            </motion.section>

            <Footer />
        </div>
    )
}
