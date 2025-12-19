"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Instagram, MapPin, Clock, ArrowRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-black text-white pt-20 pb-8 border-t border-[#00ff88]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <h2 className="font-oswald text-3xl font-bold tracking-tighter text-white">
                EL CARTEL
                <span className="block text-[#00ff88]">TAQUERIA</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Auténtico sabor mexicano, experiencia única y la mejor música.
              Creamos momentos inolvidables en cada visita.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-oswald text-lg uppercase tracking-widest mb-6 text-white border-b border-[#00ff88]/30 pb-2 inline-block">
              Navegación
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Inicio", href: "/" },
                { name: "Menú Completo", href: "/menu" },
                { name: "Reservar Mesa", href: "/reservar" },
                { name: "Shows & Eventos", href: "/menu/shows" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span className="text-sm font-medium uppercase tracking-wide">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-oswald text-lg uppercase tracking-widest mb-6 text-[#00ff88] drop-shadow-[0_0_5px_rgba(0,255,136,0.8)] border-b border-[#00ff88]/30 pb-2 inline-block">
              Contáctanos
            </h3>
            <ul className="space-y-6">
              <li>
                <a
                  href="https://wa.me/3202487654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group"
                >
                  <MessageCircle className="w-5 h-5 text-gray-500 group-hover:text-[#00ff88] mt-1 mr-3 transition-colors" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold mb-1">WhatsApp</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">+57 320 248 7654</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/elcarteltaqueria/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group"
                >
                  <Instagram className="w-5 h-5 text-gray-500 group-hover:text-[#E1306C] mt-1 mr-3 transition-colors" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Síguenos</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">@elcarteltaqueria</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Ubicación</span>
                  <span className="text-gray-300">Sede Principal, Zona Rosa</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h3 className="font-oswald text-lg uppercase tracking-widest mb-6 text-white border-b border-[#00ff88]/30 pb-2 inline-block">
              Horarios
            </h3>
            <div className="flex items-start space-x-3 mb-4">
              <Clock className="w-5 h-5 text-gray-500 mt-1" />
              <div className="space-y-2">
                <div>
                  <span className="block text-sm font-bold text-white uppercase">Lun - Jue</span>
                  <span className="text-sm text-gray-400">12:00 PM - 10:00 PM</span>
                </div>
                <div>
                  <span className="block text-sm font-bold text-white uppercase">Vie - Sáb</span>
                  <span className="text-sm text-gray-400">12:00 PM - 12:00 AM</span>
                </div>
                <div>
                  <span className="block text-sm font-bold text-white uppercase">Dom</span>
                  <span className="text-sm text-gray-400">12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left">
            © {currentYear} El Cartel Taquería. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-xs text-gray-600 hover:text-white transition-colors uppercase font-bold">Privacidad</Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-white transition-colors uppercase font-bold">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
