"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Decorations from "@/components/Decorations"
import Footer from "@/components/Footer"
import { ArrowLeft, MapPin, Phone, Clock, Calendar } from "lucide-react"

export default function ReservationsPage() {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        date: "",
        time: "",
        people: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here (e.g., API call)
        console.log("Reservation submitted:", formData)
        alert("¡Gracias! Tu solicitud de reserva ha sido recibida.")
    }

    return (
        <div className="relative z-10 min-h-screen flex flex-col">
            <Decorations />

            {/* Header / Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-20 flex items-center px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                    <Link href="/">
                        <Button variant="ghost" className="text-white hover:text-[#00ff88] flex items-center gap-2 font-oswald text-lg uppercase tracking-wider">
                            <ArrowLeft className="w-5 h-5" />
                            Volver al Menú Principal
                        </Button>
                    </Link>
                    <div className="hidden md:block font-oswald text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00cc6a] font-bold">
                        EL CARTEL TAQUERIA
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-24 pb-16 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Page Title */}
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-black font-oswald text-white mb-4 uppercase tracking-tighter drop-shadow-lg">
                            Agenda tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00cc6a]">Experiencia</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-yellow-400 font-serif italic max-w-3xl mx-auto drop-shadow-md animate-pulse leading-relaxed">
                            Reserva tu mesa y déjanos consentirte con los mejores sabores de México.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Contact Info Side */}
                        <div className="space-y-12 animate-fade-in-left">

                            {/* Info Cards */}
                            <div className="space-y-6">
                                <div className="bg-[#0f1f1f]/80 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex items-start gap-4 hover:border-[#00ff88]/50 transition-colors">
                                    <div className="bg-[#00ff88]/10 p-3 rounded-full text-[#00ff88]">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-oswald text-white uppercase tracking-wide mb-2">Ubicación</h3>
                                        <p className="text-gray-300">Cl. 8 Sur # 38-90, Puente Aranda</p>
                                        <p className="text-gray-400 text-sm mt-1">Bogotá, Cundinamarca</p>
                                    </div>
                                </div>

                                <div className="bg-[#0f1f1f]/80 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex items-start gap-4 hover:border-[#00ff88]/50 transition-colors">
                                    <div className="bg-[#00ff88]/10 p-3 rounded-full text-[#00ff88]">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-oswald text-white uppercase tracking-wide mb-2">Reservas y Pedidos</h3>
                                        <p className="text-gray-300">3202487654</p>
                                        <p className="text-gray-400 text-sm mt-1">Llamadas y WhatsApp disponibles</p>
                                    </div>
                                </div>

                                <div className="bg-[#0f1f1f]/80 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex items-start gap-4 hover:border-[#00ff88]/50 transition-colors">
                                    <div className="bg-[#00ff88]/10 p-3 rounded-full text-[#00ff88]">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-oswald text-white uppercase tracking-wide mb-2">Horarios</h3>
                                        <ul className="text-gray-300 space-y-1">
                                            <li className="flex justify-between w-60"><span className="text-red-400">Lunes:</span> <span className="text-red-400">Cerrado</span></li>
                                            <li className="flex justify-between w-60"><span>Mar - Sáb:</span> <span>5:00 PM - 10:30 PM</span></li>
                                            <li className="flex justify-between w-60"><span>Domingos:</span> <span>1:00 PM - 9:30 PM</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Map Integration */}
                            <div className="bg-gray-800 rounded-xl overflow-hidden h-64 border border-white/10 relative group shadow-lg transition-all hover:border-[#00ff88]/50">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3976.9961314532657!2d-74.1132504!3d4.6043642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9957deb50299%3A0xab313d8675740316!2sEl%20cartel%20taqueria!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full border-0"
                                ></iframe>
                                <a
                                    href="https://www.google.com/maps/place/El+cartel+taqueria/@4.6043642,-74.1132504,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9957deb50299:0xab313d8675740316!8m2!3d4.6043642!4d-74.1132504!16s%2Fg%2F11mwkz072h?ent"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-10"
                                    aria-label="Ver en Google Maps"
                                ></a>
                            </div>

                        </div>

                        {/* Form Side */}
                        <div className="animate-fade-in-right">
                            <div className="bg-[#0f1f1f]/90 backdrop-blur-md border border-[#00ff88]/20 p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                                <h2 className="text-3xl font-oswald text-white uppercase tracking-wide mb-8 border-b border-white/10 pb-4">
                                    Haz tu Reserva
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">

                                    <div className="space-y-2">
                                        <label className="text-sm font-oswald uppercase text-gray-400 tracking-wider">Nombre Completo</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all placeholder:text-gray-700"
                                            placeholder="Ej. Juan Pérez"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-oswald uppercase text-gray-400 tracking-wider">Teléfono / Email</label>
                                        <input
                                            type="text"
                                            name="contact"
                                            required
                                            value={formData.contact}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all placeholder:text-gray-700"
                                            placeholder="Ej. 55 1234 5678"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-oswald uppercase text-gray-400 tracking-wider">Fecha</label>
                                            <div className="relative">
                                                <input
                                                    type="date"
                                                    name="date"
                                                    required
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all [color-scheme:dark]"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-oswald uppercase text-gray-400 tracking-wider">Hora</label>
                                            <div className="relative">
                                                <input
                                                    type="time"
                                                    name="time"
                                                    required
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all [color-scheme:dark]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-oswald uppercase text-gray-400 tracking-wider">Número de Personas</label>
                                        <select
                                            name="people"
                                            value={formData.people}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all"
                                        >
                                            <option value="" className="bg-gray-900">Seleccionar...</option>
                                            <option value="1" className="bg-gray-900">1 Persona</option>
                                            <option value="2" className="bg-gray-900">2 Personas</option>
                                            <option value="3" className="bg-gray-900">3 Personas</option>
                                            <option value="4" className="bg-gray-900">4 Personas</option>
                                            <option value="5+" className="bg-gray-900">5+ Personas</option>
                                            <option value="Grupo Grande" className="bg-gray-900">Grupo Grande (10+)</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-oswald uppercase text-gray-400 tracking-wider">Mensaje (Opcional)</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all placeholder:text-gray-700"
                                            placeholder="Alguna preferencia especial..."
                                        ></textarea>
                                    </div>

                                    <Button type="submit" className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] hover:from-[#00cc6a] hover:to-[#00b359] text-black font-oswald text-xl uppercase tracking-widest py-6 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all mt-4">
                                        Confirmar Reserva
                                    </Button>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
