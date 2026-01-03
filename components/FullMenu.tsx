"use client"
import { motion } from "framer-motion"
import MenuFlipCard from "./MenuFlipCard"

export default function FullMenu() {
    return (
        <div className="flex flex-col gap-0 bg-[#0d2b2b] min-h-screen">
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
