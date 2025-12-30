"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const featuredItems = [
    {
        id: 1,
        name: "Tacos al Pastor",
        image: "/hero-gastronomy.png",
        ingredients: "Cerdo marinado con especias tradicionales, piña asada, cebolla fresca, cilantro y tortilla de maíz artesanal.",
    },
    {
        id: 2,
        name: "Burrito Supremo",
        image: "/burrito_supremo_premium.png",
        ingredients: "Corte de res premium a la parrilla, frijoles refritos, arroz mexicano, queso fundido cremoso y guacamole fresco.",
    },
    {
        id: 3,
        name: "Margarita Cartel",
        image: "/mexican_cocktail_premium.png",
        ingredients: "Tequila reposado de la casa, licor de naranja, jugo de lima fresca y borde artesanal de sal con chile.",
    },
]

export default function MenuFeaturedSection() {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="relative group h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border-2 border-[#00ff88]/30 shadow-[0_0_20px_rgba(0,255,136,0.1)] transition-all duration-500"
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{
                            borderColor: "rgba(0, 255, 136, 0.8)",
                            boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)",
                            scale: 1.02
                        }}
                    >
                        {/* Imagen de fondo */}
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                        {/* Nombre del plato (Visto inicialmente) */}
                        <div className="absolute bottom-8 left-0 right-0 text-center z-20 transition-all duration-500 group-hover:opacity-0">
                            <h3 className="text-white font-oswald text-2xl md:text-3xl uppercase tracking-wider drop-shadow-lg">
                                {item.name}
                            </h3>
                        </div>

                        {/* Círculo expansible de ingredientes */}
                        <AnimatePresence>
                            {hoveredId === item.id && (
                                <motion.div
                                    initial={{ clipPath: "circle(0% at 50% 100%)" }}
                                    animate={{ clipPath: "circle(150% at 50% 100%)" }}
                                    exit={{ clipPath: "circle(0% at 50% 100%)" }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-[#00ff88] z-30 flex items-center justify-center p-8 flex-col text-center"
                                >
                                    {/* Título del plato en el hover */}
                                    <motion.h3
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-black font-oswald text-2xl md:text-3xl uppercase font-black mb-2 tracking-wider"
                                    >
                                        {item.name}
                                    </motion.h3>

                                    <div className="w-16 h-0.5 bg-black/30 mb-6" />

                                    <h4 className="text-black font-oswald text-sm uppercase font-bold mb-2 tracking-[0.2em] opacity-70">
                                        Ingredientes
                                    </h4>
                                    <p className="text-black font-bold text-lg md:text-xl leading-relaxed max-w-xs">
                                        {item.ingredients}
                                    </p>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="mt-6 w-12 h-1 bg-black/20 rounded-full"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
