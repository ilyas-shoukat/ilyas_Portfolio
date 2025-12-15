"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared/section-heading"
import { ProjectCard } from "@/components/shared/project-card"
import { projects } from "@/data/portfolio-data"
import { cn } from "@/lib/utils"

const filters = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "ai-art", label: "AI Art" },
]

export function Projects() {
    const [activeFilter, setActiveFilter] = useState("all")

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.category === activeFilter)

    return (
        <section id="projects" className="py-20 lg:py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    subtitle="My Work"
                    title="Featured Projects"
                    description="A selection of projects showcasing my expertise in web development and AI art creation"
                />

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {filters.map((filter) => (
                        <Button
                            key={filter.value}
                            variant={activeFilter === filter.value ? "default" : "outline"}
                            size="lg"
                            onClick={() => setActiveFilter(filter.value)}
                            className={cn(
                                "transition-all duration-300",
                                activeFilter === filter.value && "bg-gradient-to-r from-purple-500 to-pink-500 border-0"
                            )}
                        >
                            {filter.label}
                        </Button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </motion.div>

                {/* View More CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Button size="lg" variant="outline">
                        View All Projects
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
