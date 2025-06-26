import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

// NEW – local, self-hosted fonts
import { Fira_Code, VT323 } from "next/font/google"

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-vt323",
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lotfi Elias - Portfolio BTS SIO SISR 2025",
  description:
    "Portfolio de Lotfi Elias, étudiant en BTS SIO option SISR - Spécialiste infrastructures réseau et cybersécurité",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${firaCode.variable} ${vt323.variable}`}>
      <body className="font-mono bg-[#0a0a0a] text-[#39ff14] antialiased">{children}</body>
    </html>
  )
}
