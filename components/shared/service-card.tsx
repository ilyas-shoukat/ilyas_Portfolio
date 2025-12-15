"use client"

import { motion } from "framer-motion"
import { Check, Code, Sparkles, Palette, Rocket, Zap, Layout } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const iconMap = {
    Code,
    Sparkles,
    Palette,
    Rocket,
    Zap,
    Layout,
}

interface ServiceCardProps {
    service: {
        id: number
        title: string
        subtitle: string
        description: string
        features: string[]
        icon: string
        gradient: string
    }
    index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
    const Icon = iconMap[service.icon as keyof typeof iconMap] || Code

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="h-full"
        >
            <Card className="relative h-full overflow-hidden group border-0 bg-secondary/30 hover:bg-secondary/50 transition-all duration-500">
                {/* Gradient Background */}
                <div
                    className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                        service.gradient
                    )}
                />

                {/* Floating Icon */}
                <div
                    className={cn(
                        "absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br",
                        service.gradient
                    )}
                />

                <CardHeader className="relative pb-2">
                    {/* Icon Container */}
                    <div className={cn(
                        "inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br",
                        service.gradient
                    )}>
                        <Icon className="h-6 w-6 text-white" />
                    </div>

                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base text-primary font-medium">
                        {service.subtitle}
                    </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                    <p className="text-muted-foreground mb-6">
                        {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <div className={cn(
                                    "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-br",
                                    service.gradient
                                )}>
                                    <Check className="h-3 w-3 text-white" />
                                </div>
                                <span className="text-sm">{feature}</span>
                            </motion.li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </motion.div>
    )
}
