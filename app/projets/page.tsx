"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Server, Network, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

const projets = [
  {
    id: 1,
    title: "Création d'environnements virtualisés",
    contexte: "IPSSI – Projet pédagogique",
    objectif: "Simuler un réseau local sur VirtualBox",
    actions: [
      "Création VM Windows & Linux",
      "Réglage réseau (NAT, pont, interne)",
      "Test de connectivité",
      "Documentation technique",
    ],
    technologies: ["VirtualBox", "Windows Server", "Networking"],
    icon: Server,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Architecture réseau entreprise pharmaceutique",
    contexte: "Projet d'étude - Entreprise fictive",
    objectif: "Répondre aux besoins réseau/système d'une entreprise pharmaceutique",
    actions: ["Plan d'adressage IP", "Schéma réseau sous YED", "Rédaction de la conclusion technique"],
    technologies: ["Cisco Packet Tracer", "YED", "Networking", "Documentation"],
    icon: Network,
    color: "from-green-500 to-emerald-500",
  },
]

export default function Projets() {
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

          <h1 className="text-3xl font-bold text-green-400 neon-text mb-2">Projets Techniques</h1>
          <p className="text-green-300">Réalisations dans le cadre de la formation BTS SIO SISR</p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projets.map((projet) => (
            <Card
              key={projet.id}
              className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${projet.color}`}>
                    <projet.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-green-400 text-xl mb-2">
                      📌 Projet {projet.id}: {projet.title}
                    </CardTitle>
                    <div className="space-y-2">
                      <div>
                        <span className="text-green-300 font-semibold">Contexte:</span>
                        <span className="text-green-300/80 ml-2">{projet.contexte}</span>
                      </div>
                      <div>
                        <span className="text-green-300 font-semibold">Objectif:</span>
                        <span className="text-green-300/80 ml-2">{projet.objectif}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Actions */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Actions réalisées:</h4>
                  <ul className="space-y-1">
                    {projet.actions.map((action, index) => (
                      <li key={index} className="flex items-center gap-2 text-green-300/80">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Technologies utilisées:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projet.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        className="bg-green-500/20 text-green-400 border border-green-500/30"
                        variant="outline"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terminal Output */}
        <div className="mt-8 border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>lotfi@portfolio:~$ projects --status</div>
            <div className="text-green-300 mt-1">
              [✓] 2 projets techniques complétés
              <br />
              [✓] Virtualisation et réseaux maîtrisés
              <br />
              [✓] Documentation technique rédigée
              <br />
              [✓] Compétences SISR validées
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
