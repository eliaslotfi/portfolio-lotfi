"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Eye, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react"
import { Footer } from "@/components/footer"

const veilleData = {
  sujet: "L'essor des EDR (Endpoint Detection and Response) en PME",
  contexte: "Cybersécurité post-infection et détection avancée des menaces",
  sources: [
    "ZDNet - Actualités cybersécurité",
    "ANSSI - Recommandations officielles",
    "LeMagIT - Technologies entreprise",
    "ThreatPost - Veille menaces",
  ],
}

const sections = [
  {
    title: "Définition des EDR",
    icon: Shield,
    content: [
      "Endpoint Detection and Response : solution de cybersécurité avancée",
      "Surveillance en temps réel des endpoints (postes de travail, serveurs)",
      "Détection comportementale et analyse des anomalies",
      "Réponse automatisée aux incidents de sécurité",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Fonctionnement",
    icon: Eye,
    content: [
      "Collecte de données en continu sur les endpoints",
      "Analyse comportementale par intelligence artificielle",
      "Corrélation avec des bases de données de menaces",
      "Alertes en temps réel et réponse automatique",
      "Forensic et investigation post-incident",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Avantages pour les PME",
    icon: TrendingUp,
    content: [
      "Protection avancée sans équipe SOC dédiée",
      "Détection des menaces zero-day et APT",
      "Réduction du temps de réponse aux incidents",
      "Visibilité complète sur le parc informatique",
      "Conformité réglementaire renforcée (RGPD, NIS2)",
    ],
    color: "from-purple-500 to-pink-500",
  },
]

const solutions = [
  {
    nom: "CrowdStrike Falcon",
    description: "Leader du marché, protection cloud-native",
    avantages: ["IA avancée", "Déploiement rapide", "Faible impact performance"],
    type: "Premium",
  },
  {
    nom: "SentinelOne",
    description: "Réponse automatisée et rollback automatique",
    avantages: ["Réponse autonome", "Interface intuitive", "Prix compétitif"],
    type: "Recommandé PME",
  },
  {
    nom: "Microsoft Defender for Endpoint",
    description: "Intégration native écosystème Microsoft",
    avantages: ["Intégration Office 365", "Coût attractif", "Facilité déploiement"],
    type: "Économique",
  },
]

export default function Veille() {
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

          <h1 className="text-3xl font-bold text-green-400 neon-text mb-2">Veille Technologique</h1>
          <p className="text-green-300 mb-4">{veilleData.sujet}</p>

          <div className="flex flex-wrap gap-2">
            {veilleData.sources.map((source, index) => (
              <Badge key={index} className="bg-blue-500/20 text-blue-400 border border-blue-500/30" variant="outline">
                {source}
              </Badge>
            ))}
          </div>
        </div>

        {/* Contexte */}
        <Card className="mb-8 bg-gray-900/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Contexte
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-300">
              {veilleData.contexte}. Face à l'évolution des cybermenaces et à l'insuffisance des antivirus
              traditionnels, les PME se tournent vers des solutions EDR pour renforcer leur posture de sécurité.
            </p>
          </CardContent>
        </Card>

        {/* Sections principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${section.color}`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-green-400">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-green-300/80">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solutions EDR */}
        <Card className="mb-8 bg-gray-900/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-400 text-xl">Solutions EDR du marché</CardTitle>
            <CardDescription className="text-green-300/80">Principales solutions adaptées aux PME</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="border border-green-500/30 rounded-lg p-4 hover:border-green-400 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-green-400 font-semibold">{solution.nom}</h4>
                    <Badge
                      className={`text-xs ${
                        solution.type === "Premium"
                          ? "bg-purple-500/20 text-purple-400"
                          : solution.type === "Recommandé PME"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {solution.type}
                    </Badge>
                  </div>
                  <p className="text-green-300/80 text-sm mb-3">{solution.description}</p>
                  <ul className="space-y-1">
                    {solution.avantages.map((avantage, avIndex) => (
                      <li key={avIndex} className="text-green-300 text-xs flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {avantage}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="mb-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-xl">Conclusion et avis personnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-green-300">
              <p>
                Les solutions EDR représentent une évolution majeure dans la cybersécurité des PME. Contrairement aux
                antivirus traditionnels qui se contentent de bloquer les menaces connues, les EDR offrent une approche
                proactive basée sur l'analyse comportementale.
              </p>
              <p>
                <strong className="text-green-400">Mon analyse :</strong> Pour une PME comme BraveStar, l'implémentation
                d'une solution EDR comme Microsoft Defender for Endpoint serait pertinente car elle s'intègre
                naturellement dans l'écosystème Microsoft existant tout en offrant un excellent rapport qualité-prix.
              </p>
              <p>
                L'avenir de la cybersécurité en PME passe incontestablement par ces technologies intelligentes qui
                compensent le manque d'expertise technique interne.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Terminal Output */}
        <div className="border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>lotfi@portfolio:~$ veille --edr --status</div>
            <div className="text-green-300 mt-1">
              [✓] Sujet analysé: EDR en PME
              <br />
              [✓] 4 sources consultées
              <br />
              [✓] 3 solutions évaluées
              <br />
              [✓] Recommandation formulée
              <br />
              [i] Dernière mise à jour: Janvier 2025
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
