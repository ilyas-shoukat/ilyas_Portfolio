"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Dribbble, Heart, ArrowUp, Facebook, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { personalInfo, navLinks } from "@/data/portfolio-data"

const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    dribbble: Dribbble,
    instagram: Instagram,
    facebook: Facebook,
    messenger: MessageCircle,
}

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="relative bg-secondary/30 border-t">
            {/* Scroll to top button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
                <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollToTop}
                    className="rounded-full h-12 w-12 bg-background shadow-lg hover:shadow-xl transition-shadow"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-5 w-5" />
                </Button>
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="#home" className="inline-block mb-4">
                            <span className="text-2xl font-bold gradient-text">
                                {personalInfo.name.split(" ")[0]}
                            </span>
                            <span className="text-2xl font-light text-foreground">.dev</span>
                        </Link>
                        <p className="text-muted-foreground mb-6 max-w-md">
                            {personalInfo.tagline}. Available for freelance projects and collaborations.
                        </p>
                        <div className="flex gap-3">
                            {Object.entries(personalInfo.social).map(([platform, url]) => {
                                const Icon = socialIcons[platform as keyof typeof socialIcons]
                                return (
                                    <Link
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                                        aria-label={`Visit ${platform}`}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.slice(0, 5).map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Get in Touch</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li>
                                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                                    {personalInfo.email}
                                </a>
                            </li>
                            <li>{personalInfo.phone}</li>
                            <li>{personalInfo.location}</li>
                            <li className="text-sm text-green-500 font-medium">
                                ● {personalInfo.availability}
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p className="flex items-center gap-1">
                        © {new Date().getFullYear()} {personalInfo.name}. Made with
                        <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                        using Next.js
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
