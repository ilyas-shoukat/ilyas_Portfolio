"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
    testimonial: {
        id: number
        name: string
        role: string
        company: string
        content: string
        rating: number
        image: string
    }
    index: number
    isActive?: boolean
}

export function TestimonialCard({ testimonial, index, isActive = false }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <Card className={cn(
                "h-full border-0 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300",
                isActive && "ring-2 ring-primary"
            )}>
                <CardContent className="p-6 lg:p-8">
                    {/* Quote Icon */}
                    <div className="mb-6">
                        <Quote className="h-8 w-8 text-primary/30 fill-primary/30" />
                    </div>

                    {/* Content */}
                    <p className="text-foreground/90 mb-6 leading-relaxed">
                        "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    "h-4 w-4",
                                    i < testimonial.rating
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-muted-foreground"
                                )}
                            />
                        ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">
                                {testimonial.role}, {testimonial.company}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
