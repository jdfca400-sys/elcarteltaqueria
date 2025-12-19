"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, RotateCcw } from "lucide-react"

interface MenuItem {
  icon: string
  title: string
  description: string
}

// Información detallada para cada item
const itemDetails: Record<string, {
  ingredients: string[]
  price?: string
  preparation?: string
  tips?: string
}> = {
  "Guacamole": {
    ingredients: ["Aguacate Hass", "Cebolla blanca", "Cilantro fresco", "Limón", "Sal", "Jitomate"],
    price: "$120 MXN",
    preparation: "Hecho al momento con aguacates frescos seleccionados",
    tips: "Perfecto para acompañar con totopos o como guarnición"
  },
  "Queso Fundido": {
    ingredients: ["Queso Chihuahua", "Chorizo", "Chiles jalapeños", "Cebolla", "Tortillas"],
    price: "$150 MXN",
    preparation: "Queso derretido al momento con chorizo y chiles",
    tips: "Se sirve caliente con tortillas recién hechas"
  },
  "Nachos": {
    ingredients: ["Totopos crujientes", "Queso derretido", "Jalapeños", "Crema", "Aguacate"],
    price: "$130 MXN",
    preparation: "Totopos artesanales cubiertos con queso y toppings",
    tips: "Ideal para compartir. Disponible en tamaño individual o para compartir"
  }
}

const itemThemes: Record<string, {
  borderColor: string
  shadowColor: string
  titleColor: string
  buttonColor: string
  buttonBorder: string
}> = {
  "Guacamole": {
    borderColor: "border-lime-500/50 hover:border-lime-400",
    shadowColor: "shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:shadow-[0_0_30px_rgba(132,204,22,0.6)]",
    titleColor: "text-lime-500",
    buttonColor: "text-lime-400 hover:text-lime-300",
    buttonBorder: "border-lime-500/30"
  },
  "Queso Fundido": {
    borderColor: "border-amber-500/50 hover:border-amber-400",
    shadowColor: "shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]",
    titleColor: "text-amber-500",
    buttonColor: "text-amber-400 hover:text-amber-300",
    buttonBorder: "border-amber-500/30"
  },
  "Nachos": {
    borderColor: "border-red-500/50 hover:border-red-400",
    shadowColor: "shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]",
    titleColor: "text-red-500",
    buttonColor: "text-red-400 hover:text-red-300",
    buttonBorder: "border-red-500/30"
  }
}

interface NotebookPageFlipProps {
  id: string
  items: MenuItem[]
  sectionTitle: string
}

export default function NotebookPageFlip({ id, items, sectionTitle }: NotebookPageFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item)
    setIsFlipped(true)
  }

  const handleBackClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFlipped(false)
    // Limpiar el item seleccionado después de un delay para la animación
    setTimeout(() => {
      setSelectedItem(null)
    }, 400)
  }

  return (
    <section id={id} className="my-16 scroll-mt-20">
      <motion.h2
        className="font-oswald text-4xl md:text-5xl text-orange-500 text-center mb-10 uppercase tracking-wider relative pb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {sectionTitle}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></span>
      </motion.h2>

      <div className="flex flex-col items-center gap-6">
        {/* Contenedor del cuaderno */}
        <div className="perspective-1000 w-full max-w-4xl">
          <div className="relative w-full h-[600px] md:h-[700px]">
            {/* Página del cuaderno con efecto de volteo */}
            <motion.div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY: isFlipped ? 180 : 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              {/* Cara frontal de la página */}
              <div
                className={`absolute inset-0 w-full h-full backface-hidden ${isFlipped ? "pointer-events-none" : "pointer-events-auto"}`}
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div
                  className="relative w-full h-full rounded-lg shadow-2xl border-4 border-amber-200 p-8 md:p-12 overflow-hidden"
                  style={{
                    backgroundImage: "url('/rejilla parrila.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  {/* Overlay eliminado para máxima visibilidad */}
                  {/* Líneas del cuaderno */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-16 right-8 h-px bg-blue-200/30"
                        style={{ top: `${(i + 1) * 8}%` }}
                      />
                    ))}
                    {/* Margen izquierdo */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-red-200/20 border-r-2 border-red-300/40" />
                  </div>

                  {/* Contenido de la página frontal */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex-1 flex flex-col gap-4 md:gap-6 justify-center">
                      {items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 }}
                          onClick={() => handleItemClick(item)}
                        >
                          <Card className={`border-2 transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${itemThemes[item.title]?.borderColor || "border-orange-500/50"} ${itemThemes[item.title]?.shadowColor || ""}`}>
                            <CardContent className="p-6 flex items-center gap-6">
                              <div className="text-6xl md:text-7xl flex-shrink-0">{item.icon}</div>
                              <div className="flex-1">
                                <h3 className={`font-oswald text-2xl md:text-3xl mb-2 uppercase tracking-wide ${itemThemes[item.title]?.titleColor || "text-orange-400"}`}>
                                  {item.title}
                                </h3>
                                <p className="text-gray-100 text-base md:text-lg leading-relaxed font-sans tracking-wide">
                                  {item.description}
                                </p>
                                <p className={`text-sm mt-2 font-semibold ${itemThemes[item.title]?.buttonColor || "text-orange-300"}`}>
                                  Haz clic para ver más información →
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cara trasera de la página */}
              <div
                className={`absolute inset-0 w-full h-full backface-hidden ${isFlipped ? "pointer-events-auto" : "pointer-events-none"}`}
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div
                  className="relative w-full h-full rounded-lg shadow-2xl border-4 border-amber-200 p-8 md:p-12 overflow-hidden"
                  style={{
                    backgroundImage: "url('/rejilla parrila.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  {/* Overlay eliminado para máxima visibilidad */}
                  {/* Líneas del cuaderno */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-16 right-8 h-px bg-blue-200/30"
                        style={{ top: `${(i + 1) * 8}%` }}
                      />
                    ))}
                    {/* Margen izquierdo */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-red-200/20 border-r-2 border-red-300/40" />
                  </div>

                  {/* Contenido de la página trasera - Información detallada */}
                  <div className="relative z-10 h-full flex flex-col overflow-hidden">
                    {selectedItem && itemDetails[selectedItem.title] ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 p-4 md:p-6 flex flex-col justify-between"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-5xl md:text-6xl">{selectedItem.icon}</div>
                          <div>
                            <h3 className={`font-oswald text-3xl md:text-4xl mb-1 uppercase tracking-wide ${itemThemes[selectedItem.title]?.titleColor || "text-orange-400"}`}>
                              {selectedItem.title}
                            </h3>
                            <p className="text-gray-100 text-lg md:text-xl font-sans leading-relaxed tracking-wide">
                              {selectedItem.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 flex-1">
                          <div>
                            <h4 className={`font-oswald text-xl mb-2 uppercase border-b pb-1 ${itemThemes[selectedItem.title]?.titleColor || "text-orange-400"} ${itemThemes[selectedItem.title]?.buttonBorder || "border-orange-500/30"}`}>
                              Ingredientes
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-100 text-base md:text-lg font-sans leading-relaxed">
                              {itemDetails[selectedItem.title].ingredients.map((ingredient, idx) => (
                                <li key={idx} className="ml-2">{ingredient}</li>
                              ))}
                            </ul>
                          </div>

                          {itemDetails[selectedItem.title].preparation && (
                            <div>
                              <h4 className={`font-oswald text-xl mb-2 uppercase border-b pb-1 ${itemThemes[selectedItem.title]?.titleColor || "text-orange-400"} ${itemThemes[selectedItem.title]?.buttonBorder || "border-orange-500/30"}`}>
                                Preparación
                              </h4>
                              <p className="text-gray-100 text-base md:text-lg font-sans leading-relaxed">
                                {itemDetails[selectedItem.title].preparation}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Botón de Regreso Minimalista con Tema */}
                        <div className="mt-4 flex justify-center">
                          <Button
                            onClick={handleBackClick}
                            variant="ghost"
                            className={`bg-black/40 text-white font-oswald text-base uppercase px-6 py-1 rounded-full border transition-all group gap-2 ${itemThemes[selectedItem.title]?.buttonBorder || "border-orange-500/30"} ${itemThemes[selectedItem.title]?.buttonColor || "hover:text-orange-400 hover:bg-orange-500/20"}`}
                          >
                            <RotateCcw className="w-4 h-4 transition-transform group-hover:-rotate-180 duration-500" />
                            Volver
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-orange-300 text-xl font-oswald tracking-wide">Selecciona un platillo para ver su información</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
