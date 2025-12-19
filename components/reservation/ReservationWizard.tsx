"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import StepPartySize from "./StepPartySize"
import StepDate from "./StepDate"
import StepTime from "./StepTime"
import StepOccasion from "./StepOccasion"
import StepContact from "./StepContact"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReservationSummary from "./ReservationSummary"

export type ReservationData = {
    partySize: number
    date: Date | null
    time: string
    occasion: string
    name: string
    email: string
    phone: string
}

const steps = [
    { id: 1, component: StepPartySize, title: "¿Cuántas personas?" },
    { id: 2, component: StepDate, title: "Elige una fecha" },
    { id: 3, component: StepTime, title: "Selecciona la hora" },
    { id: 4, component: StepOccasion, title: "¿Cuál es la ocasión?" },
    { id: 5, component: StepContact, title: "Tus datos de contacto" },
]

export default function ReservationWizard() {
    const [currentStep, setCurrentStep] = useState(0)
    const [direction, setDirection] = useState(0)
    const [data, setData] = useState<ReservationData>({
        partySize: 2,
        date: null,
        time: "",
        occasion: "",
        name: "",
        email: "",
        phone: ""
    })

    const updateData = (fields: Partial<ReservationData>) => {
        setData(prev => ({ ...prev, ...fields }))
    }

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setDirection(1)
            setCurrentStep(curr => curr + 1)
        }
    }

    const prevStep = () => {
        if (currentStep > 0) {
            setDirection(-1)
            setCurrentStep(curr => curr - 1)
        }
    }

    const CurrentComponent = steps[currentStep].component

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    }

    return (
        <div className="w-full max-w-4xl px-4 md:px-0 flex flex-col items-center">

            <ReservationSummary
                data={data}
                onCorrect={() => setCurrentStep(0)}
                className="w-full max-w-2xl"
            />

            <div className="w-full max-w-2xl">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#00ff88]"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <p className="text-right text-[#00ff88] text-sm mt-2 font-oswald uppercase tracking-wider">
                        Paso {currentStep + 1} de {steps.length}
                    </p>
                </div>

                {/* Back Button */}
                {currentStep > 0 && (
                    <button
                        onClick={prevStep}
                        className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors group"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-oswald uppercase text-sm tracking-wider">Atrás</span>
                    </button>
                )}

                {/* Step Title */}
                <motion.h2
                    key={steps[currentStep].title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-black font-oswald text-white mb-8 md:mb-12 uppercase tracking-tight"
                >
                    {steps[currentStep].title}
                </motion.h2>

                {/* Content Area */}
                <div className="relative min-h-[300px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentStep}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "anticipate" }}
                            className="w-full"
                        >
                            <CurrentComponent
                                data={data}
                                updateData={updateData}
                                onNext={nextStep}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
