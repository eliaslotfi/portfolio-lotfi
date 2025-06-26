"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronRight, Terminal } from "lucide-react"
import { Typewriter } from "@/components/typewriter"

export default function HomePage() {
  const [currentLine, setCurrentLine] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const router = useRouter()

  const terminalLines = [
    "root@elias-terminal:~# ./start_portfolio.sh",
    "[✓] Authentification réussie",
    "[✓] Chargement de l'environnement BTS SIO SISR 2025",
    "[✓] Ouverture du portfolio de Lotfi Elias...",
    "",
    "Système prêt. Accès autorisé.",
  ]

  const handleLineComplete = () => {
    if (currentLine < terminalLines.length - 1) {
      setCurrentLine((prev) => prev + 1)
    } else {
      setShowButton(true)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 scan-lines">
      <div className="w-full max-w-4xl">
        {/* Terminal Header */}
        <div className="bg-gray-900 border border-green-500/30 rounded-t-lg p-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-mono">elias-terminal</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="bg-black border-x border-b border-green-500/30 rounded-b-lg p-6 min-h-[400px] font-mono">
          {/* Terminal Lines with Typewriter Effect */}
          {terminalLines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className="mb-2">
              {index === currentLine ? (
                <>
                  <Typewriter text={line} delay={15} className="text-green-400" onComplete={handleLineComplete} />
                  <span className="terminal-cursor text-green-400">_</span>
                </>
              ) : (
                <span className="text-green-400">{line}</span>
              )}
            </div>
          ))}

          {showButton && (
            <div className="mt-8">
              <Button
                onClick={() => router.push("/dashboard")}
                className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105 hover:neon-glow font-mono text-lg px-8 py-3"
              >
                Accéder au Dashboard
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Personal Introduction */}
        {showButton && (
          <div className="mt-12 animate-fade-in delay-500">
            <div className="border border-green-500/30 rounded-lg p-6 bg-gray-900/20">
              <h2 className="text-green-400 text-xl font-bold mb-4 neon-text">&gt; whoami</h2>
              <p className="text-green-300 leading-relaxed">
                Je m'appelle <span className="text-green-400 font-bold">Lotfi Elias</span>, étudiant en{" "}
                <span className="text-green-400">BTS SIO option SISR</span> à IPSSI. Passionné par les infrastructures
                réseau et la cybersécurité, j'ai effectué mon stage chez{" "}
                <span className="text-green-400">BraveStar</span>, entreprise d'import-export, où j'ai contribué à
                l'administration et à la sécurisation du système informatique.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
