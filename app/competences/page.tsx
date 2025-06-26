"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Award, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

const competences = [
  {
    name: "Cisco",
    description: "Configuration routeurs et switches, CCNA",
    logo: "🔧",
    level: "Avancé",
    color: "bg-blue-500",
  },
  {
    name: "Linux",
    description: "Administration système, scripting bash",
    logo: "🐧",
    level: "Avancé",
    color: "bg-orange-500",
  },
  {
    name: "Microsoft",
    description: "Windows Server, Active Directory",
    logo: "🪟",
    level: "Intermédiaire",
    color: "bg-blue-600",
  },
  {
    name: "PowerShell",
    description: "Automatisation et scripting Windows",
    logo: "💻",
    level: "Intermédiaire",
    color: "bg-indigo-500",
  },
  {
    name: "VirtualBox",
    description: "Virtualisation et environnements de test",
    logo: "📦",
    level: "Avancé",
    color: "bg-purple-500",
  },
  {
    name: "VMware",
    description: "Infrastructure virtualisée entreprise",
    logo: "☁️",
    level: "Intermédiaire",
    color: "bg-gray-600",
  },
]

export default function Competences() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black p-4 scan-lines">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au dashboard
          </Link>

          <h1 className="text-3xl font-bold text-green-400 neon-text mb-2">Compétences Techniques</h1>
          <p className="text-green-300">Technologies maîtrisées et certifications obtenues</p>
        </div>

        {/* Competences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {competences.map((comp, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300 group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{comp.logo}</div>
                  <div>
                    <CardTitle className="text-green-400 group-hover:text-green-300 transition-colors">
                      {comp.name}
                    </CardTitle>
                    <Badge className={`${comp.color} text-white mt-1`} variant="secondary">
                      {comp.level}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-300/80">{comp.description}</CardDescription>
                {hoveredCard === index && (
                  <div className="mt-3 text-green-400 text-sm animate-fade-in">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    Compétence validée
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Section */}
        <div className="border border-green-500/30 rounded-lg p-6 bg-gray-900/20">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-green-400 neon-text">Certification</h2>
          </div>

          <Card className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-500/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-yellow-400 text-xl">Cisco Introduction to Cybersecurity</CardTitle>
                  <CardDescription className="text-yellow-300/80 mt-2">
                    Organisme: Cisco Networking Academy
                  </CardDescription>
                </div>
                <Badge className="bg-yellow-500 text-black font-bold">01/2025</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-green-300">
                Certification couvrant les fondamentaux de la cybersécurité, les menaces actuelles et les bonnes
                pratiques de sécurité informatique.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Terminal Output */}
        <div className="mt-8 border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>lotfi@portfolio:~$ skills --list --certified</div>
            <div className="text-green-300 mt-1">
              [✓] 6 compétences techniques validées
              <br />
              [✓] 1 certification active
              <br />
              [✓] Niveau: Technicien SISR confirmé
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
