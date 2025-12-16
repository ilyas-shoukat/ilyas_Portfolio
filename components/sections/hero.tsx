"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Github, Dribbble, Twitter, Download, Instagram, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/portfolio-data"

export function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
        >
            {/* Purple Glow Effects */}
            <div className="absolute inset-0">
                {/* Top center glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/30 rounded-full blur-[120px]" />
                {/* Bottom center glow behind image */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-700/40 rounded-full blur-[100px]" />
                {/* Left accent */}
                <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-800/20 rounded-full blur-[80px]" />
                {/* Right accent */}
                <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-purple-800/20 rounded-full blur-[80px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

                    {/* Left Side - Name */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <p className="text-purple-400 text-lg mb-2 font-medium">Hello, I&apos;m</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Ilyas
                            <br />
                            Hanjra
                        </h1>
                    </motion.div>

                    {/* Center - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-2"
                    >
                        {/* Glowing ring behind image */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-purple-500/50 to-transparent blur-2xl scale-110" />

                        {/* Profile Image Container */}
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-purple-500/30">
                            <Image
                                src="/images/profile.jpg"
                                alt="Ilyas Hanjra"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            {/* Bottom fade effect */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                        </div>
                    </motion.div>

                    {/* Right Side - Title */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-right order-3"
                    >
                        <p className="text-white/70 text-lg mb-2">Creative</p>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Developer
                            <br />
                            <span className="text-purple-400">&</span>{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                                Designer
                            </span>
                        </h2>
                    </motion.div>
                </div>

                {/* Social Links - Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50"
                >
                    <Link
                        href={personalInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/5 hover:bg-purple-500/20 text-white/60 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                        href={personalInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/5 hover:bg-purple-500/20 text-white/60 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link
                        href={personalInfo.social.dribbble || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/5 hover:bg-purple-500/20 text-white/60 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
                        aria-label="Dribbble"
                    >
                        <Dribbble className="h-5 w-5" />
                    </Link>
                    <Link
                        href={personalInfo.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/5 hover:bg-purple-500/20 text-white/60 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
                        aria-label="Twitter"
                    >
                        <Twitter className="h-5 w-5" />
                    </Link>
                    {personalInfo.social.instagram && (
                        <Link
                            href={personalInfo.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-white/5 hover:bg-purple-500/20 text-white/60 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-5 w-5" />
                        </Link>
                    )}
                    {personalInfo.social.facebook && (
                        <Link
                            href={personalInfo.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-white/5 hover:bg-purple-500/20 text-white/60 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-5 w-5" />
                        </Link>
                    )}
                    {personalInfo.social.messenger && (
                        <Link
                            href={personalInfo.social.messenger}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-white/5 hover:bg-purple-500/20 text-white/60 hover:text-purple-400 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
                            aria-label="Messenger"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </Link>
                    )}
                </motion.div>

                {/* Resume Button - Bottom Right */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="fixed bottom-8 right-8 hidden lg:block z-50"
                >
                    <Button
                        variant="ghost"
                        className="text-white/60 hover:text-purple-400 hover:bg-transparent gap-2 text-sm tracking-widest uppercase"
                    >
                        Resume
                        <Download className="h-4 w-4" />
                    </Button>
                </motion.div>

                {/* Mobile Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex lg:hidden justify-center gap-4 mt-8"
                >
                    <Link
                        href={personalInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/5 text-white/60 hover:text-purple-400 transition-colors border border-white/10"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                        href={personalInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/5 text-white/60 hover:text-purple-400 transition-colors border border-white/10"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link
                        href={personalInfo.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/5 text-white/60 hover:text-purple-400 transition-colors border border-white/10"
                        aria-label="Twitter"
                    >
                        <Twitter className="h-5 w-5" />
                    </Link>
                    {personalInfo.social.instagram && (
                        <Link
                            href={personalInfo.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-white/5 text-white/60 hover:text-purple-400 transition-colors border border-white/10"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-5 w-5" />
                        </Link>
                    )}
                    {personalInfo.social.facebook && (
                        <Link
                            href={personalInfo.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-white/5 text-white/60 hover:text-purple-400 transition-colors border border-white/10"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-5 w-5" />
                        </Link>
                    )}
                    {personalInfo.social.messenger && (
                        <Link
                            href={personalInfo.social.messenger}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-white/5 text-white/60 hover:text-purple-400 transition-colors border border-white/10"
                            aria-label="Messenger"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </Link>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
