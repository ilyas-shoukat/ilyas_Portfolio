"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ExperienceCardProps {
    experience: {
        id: number
        company: string
        logo: string
        role: string
        period: string
        type: string
        description: string
        achievements: string[]
        tech: string[]
    }
    index: number
    isLast: boolean
}

export function ExperienceCard({ experience, index, isLast }: ExperienceCardProps) {
    const isEven = index % 2 === 0

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
        >
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
                {!isLast && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/50 to-transparent" />
                )}
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 -translate-x-1/2 md:-translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/50 z-10">
                <div className="absolute inset-1 rounded-full bg-background" />
                <div className="absolute inset-2 rounded-full bg-primary animate-pulse" />
            </div>

            {/* Card Container */}
            <div
                className={cn(
                    "ml-8 md:ml-0 md:w-1/2 pb-12",
                    isEven ? "md:pr-12" : "md:ml-auto md:pl-12"
                )}
            >
                <div className="p-6 rounded-xl bg-secondary/30 border hover:bg-secondary/50 transition-colors">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl">{experience.logo}</div>
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h3 className="font-semibold text-lg">{experience.company}</h3>
                                <Badge variant="outline" className="text-xs">
                                    {experience.type}
                                </Badge>
                            </div>
                            <p className="text-primary font-medium">{experience.role}</p>
                            <p className="text-sm text-muted-foreground">{experience.period}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                        {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                            {experience.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-primary mt-1">▹</span>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {experience.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
