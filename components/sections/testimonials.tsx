"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared/section-heading"
import { TestimonialCard } from "@/components/shared/testimonial-card"
import { testimonials } from "@/data/portfolio-data"
import { cn } from "@/lib/utils"

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const goToPrevious = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    // Auto-rotate
    useEffect(() => {
        const timer = setInterval(() => {
            goToNext()
        }, 5000)
        return () => clearInterval(timer)
    }, [currentIndex])

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 200 : -200,
            opacity: 0,
        }),
    }

    return (
        <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <SectionHeading
                    subtitle="Testimonials"
                    title="What Clients Say"
                    description="Feedback from amazing clients I've had the pleasure to work with"
                />

                {/* Desktop View - Grid */}
                <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>

                {/* Mobile/Tablet View - Carousel */}
                <div className="lg:hidden relative">
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                            >
                                <TestimonialCard
                                    testimonial={testimonials[currentIndex]}
                                    index={0}
                                    isActive
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={goToPrevious}
                            className="rounded-full"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1)
                                        setCurrentIndex(index)
                                    }}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all duration-300",
                                        index === currentIndex
                                            ? "w-8 bg-primary"
                                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    )}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={goToNext}
                            className="rounded-full"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
