"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
    project: {
        id: number
        title: string
        description: string
        image: string
        category: string
        tech: string[]
        liveUrl?: string
        githubUrl?: string
        featured?: boolean
    }
    index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className={cn(
                "group overflow-hidden border-0 bg-secondary/30 hover:bg-secondary/50 transition-all duration-500",
                project.featured && "md:col-span-2 lg:col-span-1"
            )}>
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Quick Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.liveUrl && (
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 shadow-lg">
                                    <ExternalLink className="h-5 w-5" />
                                </Button>
                            </Link>
                        )}
                        {project.githubUrl && (
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 shadow-lg">
                                    <Github className="h-5 w-5" />
                                </Button>
                            </Link>
                        )}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <Badge variant={project.category === "ai-art" ? "gradient" : "secondary"}>
                            {project.category === "ai-art" ? "AI Art" : "Web Dev"}
                        </Badge>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                        <div className="absolute top-4 right-4">
                            <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
                                Featured
                            </Badge>
                        </div>
                    )}
                </div>

                <CardContent className="p-6">
                    {/* Title */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 4 && (
                            <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                                +{project.tech.length - 4}
                            </span>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
