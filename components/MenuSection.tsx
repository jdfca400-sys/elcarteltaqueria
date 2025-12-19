"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface MenuItem {
  icon: string
  title: string
  description: string
}

interface MenuSectionProps {
  id: string
  title: string
  items: MenuItem[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function MenuSection({ id, title, items }: MenuSectionProps) {
  return (
    <section id={id} className="my-16 scroll-mt-20">
      <motion.h2
        className="font-oswald text-4xl md:text-5xl text-orange-500 text-center mb-10 uppercase tracking-wider relative pb-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-oswald text-2xl text-orange-400 mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
