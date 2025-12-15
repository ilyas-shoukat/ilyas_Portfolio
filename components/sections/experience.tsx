"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { ExperienceCard } from "@/components/shared/experience-card"
import { experience } from "@/data/portfolio-data"

export function Experience() {
    return (
        <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

            {/* Decorative Blurs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <SectionHeading
                    subtitle="Career Path"
                    title="Work Experience"
                    description="My professional journey from junior developer to creative freelancer"
                />

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {experience.map((exp, index) => (
                        <ExperienceCard
                            key={exp.id}
                            experience={exp}
                            index={index}
                            isLast={index === experience.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
