"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import ReservationWizard from "./reservation/ReservationWizard"

interface ReservationModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto pointer-events-none"
                    >
                        {/* Modal Content - Enable pointer events here */}
                        <div className="relative w-full max-w-5xl bg-[#0d2b2b] border border-[#00ff88]/20 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 bg-black/20 hover:bg-[#00ff88] text-gray-400 hover:text-black rounded-full transition-all duration-300 group"
                            >
                                <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform" />
                            </button>

                            {/* Scrollable Content Wrapper */}
                            <div className="max-h-[90vh] overflow-y-auto p-6 md:p-12 flex flex-col items-center">
                                <ReservationWizard />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
