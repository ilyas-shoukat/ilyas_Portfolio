"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navLinks, personalInfo } from "@/data/portfolio-data"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleLinkClick = (href: string) => {
        setIsOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#0a0a0f]/90 backdrop-blur-lg border-b border-white/5"
                    : "bg-transparent"
            )}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault()
                            handleLinkClick("#home")
                        }}
                        className="text-xl font-bold text-white hover:text-purple-400 transition-colors"
                    >
                        Ilyas
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault()
                                handleLinkClick("#about")
                            }}
                            className="text-white/70 hover:text-white transition-colors text-sm tracking-wide"
                        >
                            About Us
                        </Link>
                        <Link
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault()
                                handleLinkClick("#projects")
                            }}
                            className="text-white/70 hover:text-white transition-colors text-sm tracking-wide"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault()
                                handleLinkClick("#contact")
                            }}
                            className="text-white/70 hover:text-white transition-colors text-sm tracking-wide"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden text-white hover:bg-white/10"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-white/5"
                    >
                        <div className="py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleLinkClick(link.href)
                                    }}
                                    className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    )
}
