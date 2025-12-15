"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/shared/section-heading"
import { ServiceCard } from "@/components/shared/service-card"
import { services } from "@/data/portfolio-data"

export function Services() {
    return (
        <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl translate-x-1/2" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <SectionHeading
                    subtitle="What I Do"
                    title="Services I Offer"
                    description="Specialized services combining cutting-edge development with AI-powered creativity"
                />

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground mb-6">
                        Have a unique project in mind? Let&apos;s discuss how I can help.
                    </p>
                    <Button
                        size="lg"
                        variant="outline"
                        className="gap-2"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Start a Project
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
