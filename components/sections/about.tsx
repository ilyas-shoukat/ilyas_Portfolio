"use client"

import { motion } from "framer-motion"
import { Download, Briefcase, Users, Calendar, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/shared/section-heading"
import { personalInfo, skills, stats } from "@/data/portfolio-data"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { cn } from "@/lib/utils"

const iconMap = {
    Briefcase,
    Users,
    Calendar,
    Image: ImageIcon,
}

export function About() {
    return (
        <section id="about" className="py-20 lg:py-32 relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <SectionHeading
                    subtitle="About Me"
                    title="Passionate Developer & Creative"
                    description="Combining technical expertise with creative vision to deliver exceptional digital experiences"
                />

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Bio & Stats */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {/* Bio */}
                        <motion.div variants={staggerItem} className="mb-8">
                            <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                                {personalInfo.bio}
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            variants={staggerItem}
                            className="grid grid-cols-2 gap-4 mb-8"
                        >
                            {stats.map((stat) => {
                                const Icon = iconMap[stat.icon as keyof typeof iconMap]
                                return (
                                    <div
                                        key={stat.label}
                                        className="p-4 rounded-xl bg-secondary/30 border hover:bg-secondary/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-primary/10">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    </div>
                                )
                            })}
                        </motion.div>

                        {/* Resume Button */}
                        <motion.div variants={staggerItem}>
                            <Button size="lg" variant="gradient" className="gap-2">
                                <Download className="h-4 w-4" />
                                Download Resume
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-semibold mb-6">Skills & Expertise</h3>

                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-muted-foreground">{skill.level}%</span>
                                </div>
                                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                        className={cn(
                                            "h-full rounded-full",
                                            skill.category === "ai"
                                                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                                : skill.category === "frontend"
                                                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                                                    : skill.category === "backend"
                                                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                                                        : "bg-gradient-to-r from-orange-500 to-yellow-500"
                                        )}
                                    />
                                </div>
                            </motion.div>
                        ))}

                        {/* Skill Categories */}
                        <div className="flex flex-wrap gap-2 pt-4">
                            <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                                Frontend
                            </Badge>
                            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                                Backend
                            </Badge>
                            <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                                AI Tools
                            </Badge>
                            <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                                Design & Others
                            </Badge>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
