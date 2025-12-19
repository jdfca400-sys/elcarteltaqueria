"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram } from "lucide-react"

export default function ContactSection({ id }: { id?: string }) {
  return (
    <motion.section
      id={id}
      className="relative bg-neutral-900 rounded-t-3xl p-12 md:p-16 my-16 text-center shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>

      <motion.h2
        className="font-oswald text-4xl md:text-5xl text-white mb-8 uppercase tracking-widest"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-orange-500">Contá</span>ctanos
      </motion.h2>

      <motion.p
        className="text-xl mb-12 text-gray-400 font-light max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Síguenos en nuestras redes sociales para enterarte de todas nuestras promociones y eventos especiales.
      </motion.p>

      <motion.div
        className="flex justify-center gap-8 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/3202487654"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="flex items-center gap-3 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full transition-all duration-300 group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]">
            <MessageCircle className="w-6 h-6 text-[#25D366] transition-colors duration-300 group-hover:text-white" />
            <span className="font-oswald text-lg uppercase tracking-wider text-[#25D366] transition-colors duration-300 group-hover:text-white">
              WhatsApp
            </span>
          </div>
        </a>

        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/elcarteltaqueria/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="relative flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(225,48,108,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <Instagram className="relative z-10 w-6 h-6 text-white group-hover:text-white" />
            <span className="relative z-10 font-oswald text-lg uppercase tracking-wider text-white">
              Instagram
            </span>
          </div>
        </a>
      </motion.div>
    </motion.section>
  )
}
