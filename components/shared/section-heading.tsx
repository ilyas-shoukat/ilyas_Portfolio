"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
    title: string
    subtitle?: string
    description?: string
    alignment?: "left" | "center"
    className?: string
}

export function SectionHeading({
    title,
    subtitle,
    description,
    alignment = "center",
    className,
}: SectionHeadingProps) {
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className={cn(
                "mb-12 lg:mb-16",
                alignment === "center" && "text-center",
                className
            )}
        >
            {subtitle && (
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">{title}</span>
            </h2>
            {description && (
                <p className={cn(
                    "text-muted-foreground text-lg max-w-2xl",
                    alignment === "center" && "mx-auto"
                )}>
                    {description}
                </p>
            )}
        </motion.div>
    )
}
