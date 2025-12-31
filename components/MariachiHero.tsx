"use client"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

import MenuFlipCard from "./MenuFlipCard"

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
} as const

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

    const menuData = {
        entradas: [
            { icon: "🥗", title: "Guacamole", description: "Aguacate fresco con cebolla, cilantro y limón" },
            { icon: "🧀", title: "Queso Fundido", description: "Queso derretido con chorizo y chiles" },
            { icon: "🥑", title: "Nachos", description: "Totopos con queso, jalapeños y crema" },
        ],
    }

    // Optimization for mobile images: priority on the first one, sizes prop
    return (
        <div className="flex flex-col gap-0">
            {/* HERO SECTION */}
            <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden group rounded-[2rem] md:rounded-[3rem] shadow-2xl mb-16">
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
                            className="object-cover"
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
                                        <Button className="bg-[#00ff88] text-black hover:bg-white hover:text-black text-lg md:text-xl px-10 py-6 uppercase font-bold font-oswald tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,255,136,0.3)]">
                                            👉 {slides[slideIndex].cta}
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

            {/* SECCIONES DE COMIDA CONSOLIDADAS */}

            {/* 1. ENTRADAS */}
            {/* 1. ENTRADAS */}
            <motion.section
                id="entradas"
                className="py-20 md:py-32 relative scroll-mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-16 px-4">
                    <h2 className="text-red-500 text-lg md:text-xl font-oswald uppercase tracking-[0.3em] mb-4 font-bold flex items-center justify-center gap-4">
                        <span className="w-12 h-[2px] bg-red-500/60"></span>
                        Para Empezar
                        <span className="w-12 h-[2px] bg-red-500/60"></span>
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black font-oswald text-white uppercase tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                        Entradas
                    </h3>
                    <div className="h-2 w-24 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                    <MenuFlipCard
                        frontIcon="🥗"
                        frontTitle="Guacamole"
                        frontDesc="Aguacate fresco con cebolla, cilantro y limón. Hecho al momento."
                        backTitle="Ingredientes"
                        backItems={[
                            "Aguacate Hass",
                            "Cebolla Blanca",
                            "Cilantro Fresco",
                            "Limón y Sal",
                            "Jitomate"
                        ]}
                    />
                    <MenuFlipCard
                        frontIcon="🧀"
                        frontTitle="Queso Fundido"
                        frontDesc="Queso derretido con chorizo y chiles. Se sirve caliente."
                        backTitle="Contenido"
                        backItems={[
                            "Queso Chihuahua",
                            "Chorizo Artesanal",
                            "Chiles Jalapeños",
                            "Tortillas de Harina"
                        ]}
                    />
                    <MenuFlipCard
                        frontIcon="🥑"
                        frontTitle="Nachos"
                        frontDesc="Totopos con queso, jalapeños y crema. Ideal para compartir."
                        backTitle="Toppings"
                        backItems={[
                            "Totopos Crujientes",
                            "Queso Derretido",
                            "Jalapeños en Vinagre",
                            "Crema y Aguacate"
                        ]}
                    />
                </div>
            </motion.section>

            {/* 2. TACOS */}
            <motion.section
                id="tacos"
                className="py-20 md:py-32 relative scroll-mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-16">
                    <motion.h2 className="text-5xl md:text-7xl font-black font-oswald text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600 inline-block uppercase tracking-tighter drop-shadow-2xl">
                        Nuestros Tacos
                    </motion.h2>
                    <div className="h-1.5 w-32 bg-emerald-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
                    <MenuFlipCard
                        frontImage="/TACOS.png"
                        frontTitle="Sabor Auténtico"
                        frontDesc="La verdadera esencia del taco mexicano. Tortilla hecha a mano, carne jugosa y salsas caseras."
                        backTitle="Lo Esencial"
                        backItems={[
                            "Tortillas de Maíz Artesanal",
                            "Proteínas (Asada, Adobada)",
                            "Salsas Molcajeteadas",
                            "Cilantro y Cebolla Frescos"
                        ]}
                    />

                    <MenuFlipCard
                        frontImage="/TACOS 2.png"
                        frontTitle="Calidad Premium"
                        frontDesc="Cortes finos seleccionados y preparación gourmet para los paladares más exigentes."
                        backTitle="Especialidades"
                        backItems={[
                            "Variedad (Birria, Pastor)",
                            "Costras de Queso Doble Crema",
                            "Guarniciones (Frijoles, Nopales)",
                            "Opción Vegetariana Disponible"
                        ]}
                    />
                </div>
            </motion.section>

            {/* 3. BURROS */}
            <motion.section
                id="burros"
                className="py-16 md:py-24 relative bg-black/20 scroll-mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-oswald text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 inline-block uppercase tracking-tighter drop-shadow-sm">
                        Nuestros Burros
                    </motion.h2>
                    <div className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto px-4">
                    <MenuFlipCard
                        frontImage="/BURROS 1.png"
                        frontTitle="Burros Gigantes"
                        frontDesc="Grandes, sabrosos y llenos de sabor auténtico para satisfacer el hambre voraz."
                        backTitle="Ingredientes"
                        backItems={[
                            "Tortilla de Harina Gigante",
                            "Carne al Gusto (Asada, Pastor)",
                            "Arroz y Frijoles Refritos",
                            "Queso, Crema y Guacamole"
                        ]}
                    />
                    <MenuFlipCard
                        frontImage="/BURROS 2 .png"
                        frontTitle="Especialidad"
                        frontDesc="Nuestra receta secreta que combina lo mejor de dos mundos en un solo burro."
                        backTitle="La Receta"
                        backItems={[
                            "Mezcla de Carnes Premium",
                            "Salsa Secreta de la Casa",
                            "Queso Fundido Extra",
                            "Chile Toreado (Opcional)"
                        ]}
                    />
                </div>
            </motion.section>

            {/* 4. INFANTIL */}
            <motion.section
                id="infantil"
                className="py-16 md:py-24 relative scroll-mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-oswald text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 inline-block uppercase tracking-tighter drop-shadow-sm animate-pulse">
                        🧸 Menú Infantil
                    </motion.h2>
                    <div className="h-2 w-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4">
                    <MenuFlipCard
                        frontImage="/MENU INFANTIL.png"
                        frontTitle="¡Para los Pequeños!"
                        frontDesc="Comida deliciosa, divertida y en porciones perfectas para los niños."
                        backTitle="Incluye"
                        backItems={[
                            "Mini Quesadillas o Tacos",
                            "Porción de Arroz o Frijoles",
                            "Bebida Pequeña",
                            "Sorpresa o Dulce"
                        ]}
                    />
                </div>
            </motion.section>

            {/* 5. SHOWS */}
            <motion.section
                id="shows"
                className="py-16 md:py-24 relative bg-black/30 scroll-mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-oswald text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-green-500 inline-block uppercase tracking-tighter drop-shadow-sm">
                        🎺 Shows de Mariachis
                    </motion.h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-red-500 via-white to-green-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4">
                    <MenuFlipCard
                        frontImage="/SHOWS.png"
                        frontTitle="¡Música en Vivo!"
                        frontDesc="Disfruta del mejor ambiente con nuestros mariachis. ¡Agenda tu mesa hoy!"
                        backTitle="Detalles"
                        backItems={[
                            "Música Tradicional en Vivo",
                            "Ambiente 100% Familiar",
                            "Petición de Canciones",
                            "Fines de Semana y Eventos"
                        ]}
                    />
                </div>
            </motion.section>

            {/* 6. ESPECIALIDADES */}
            <motion.section
                id="especialidades"
                className="py-16 md:py-24 relative scroll-mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-oswald text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 inline-block uppercase tracking-tighter drop-shadow-sm">
                        Más Especialidades
                    </motion.h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
                    <MenuFlipCard
                        frontImage="/MOLCAJETE.png"
                        frontTitle="Molcajete"
                        frontDesc="Tradicional mezcla de carnes, nopal, queso y salsa en piedra volcánica."
                        backTitle="Contenido"
                        backItems={[
                            "Carne Asada / Chorizo",
                            "Nopales y Queso Panela",
                            "Salsa Borracha Caliente",
                            "Cebollitas Cambray"
                        ]}
                    />
                    <MenuFlipCard
                        frontImage="/CEVICHE.png"
                        frontTitle="Ceviche"
                        frontDesc="Fresco pescado marinado en limón con el toque especial de la casa."
                        backTitle="Preparación"
                        backItems={[
                            "Pescado Fresco del Día",
                            "Marinado en Limón y Sal",
                            "Pico de Gallo Fresco",
                            "Tostadas Crujientes"
                        ]}
                    />
                    <MenuFlipCard
                        frontImage="/ZOPA AZTECA.png"
                        frontTitle="Sopa Azteca"
                        frontDesc="El sabor de México en un plato caliente y reconfortante."
                        backTitle="Ingredientes"
                        backItems={[
                            "Caldillo de Tomate",
                            "Tiras de Tortilla Frita",
                            "Queso, Crema y Aguacate",
                            "Chile Pasilla"
                        ]}
                    />
                    <MenuFlipCard
                        frontImage="/TOTOPOS.png"
                        frontTitle="Totopos"
                        frontDesc="Ideales para compartir y empezar tu experiencia gastronómica."
                        backTitle="Acompañamientos"
                        backItems={[
                            "Totopos Caseros",
                            "Frijoles Refritos",
                            "Salsa Roja y Verde",
                            "Queso Fundido (Opcional)"
                        ]}
                    />
                </div>
            </motion.section>

            {/* 7. BEBIDAS */}
            <motion.section
                id="bebidas"
                className="py-16 md:py-24 relative scroll-mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-oswald text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 inline-block uppercase tracking-tighter drop-shadow-sm">
                        Bebidas & Cervezas
                    </motion.h2>
                    <div className="h-1 w-24 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-300 mt-4 text-lg">Refrescantes y auténticas para acompañar.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto px-4">
                    <MenuFlipCard
                        frontImage="/BEBIDAS 1.png"
                        frontTitle="Cervezas"
                        frontDesc="La mejor selección nacional e importada, siempre bien helada."
                        backTitle="Selección"
                        backItems={["Corona, Victoria, Modelo", "Micheladas Clásicas", "Cerveza Artesanal", "Cubeta de 10"]}
                    />
                    <MenuFlipCard
                        frontImage="/BEBIDAS 2.png"
                        frontTitle="Margaritas"
                        frontDesc="Clásicas y de sabores frutales, preparadas al momento."
                        backTitle="Sabores"
                        backItems={["Limón (Clásica)", "Fresa", "Mango", "Tamarindo"]}
                    />
                    <MenuFlipCard
                        frontImage="/BEBIDAS 3.png"
                        frontTitle="Micheladas"
                        frontDesc="Preparadas con nuestro mix secreto de salsas y especias."
                        backTitle="Variedades"
                        backItems={["Clásica con Limón y Sal", "Cubana (Salsas Negras)", "Con Camarón", "Ojo Rojo"]}
                    />
                    <MenuFlipCard
                        frontImage="/BEBIDAS 4.png"
                        frontTitle="Cócteles"
                        frontDesc="Creaciones únicas y refrescantes de nuestros mixólogos."
                        backTitle="Especiales"
                        backItems={["Paloma Tradicional", "Vampiro", "Tequila Sunrise", "Mojito Cubano"]}
                    />
                    <MenuFlipCard
                        frontImage="/BEBIDAS 5.png"
                        frontTitle="Tequilas"
                        frontDesc="La mejor selección de agaves para degustar."
                        backTitle="Cata"
                        backItems={["Blanco (Plata)", "Reposado", "Añejo", "Cristalino"]}
                    />
                    <MenuFlipCard
                        frontImage="/BEBIDAS 6.png"
                        frontTitle="Vinos"
                        frontDesc="Vinos seleccionados para maridar perfectamente."
                        backTitle="Bodega"
                        backItems={["Tinto de la Casa", "Blanco Chardonnay", "Rosado Fresco", "Champagne"]}
                    />
                </div>
            </motion.section>
        </div>
    )
}
