import type { Metadata } from "next"
import { Oswald, Roboto } from "next/font/google"
import "./globals.css"
import FloatingCTA from "@/components/FloatingCTA"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "El Cartel Taquería",
  description: "Auténtico Sabor Mexicano",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark h-full">
      <body className={`${oswald.variable} ${roboto.variable} font-roboto h-full`}>
        {children}
        <FloatingCTA />
      </body>
    </html>
  )
}
