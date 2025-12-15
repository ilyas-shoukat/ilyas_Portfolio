import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ilyas Hanjra | Creative Developer & AI Artist',
    description: 'Freelance developer specializing in modern web development with vibe coding tools and AI image generation services. Building stunning, high-performance websites.',
    keywords: ['web developer', 'freelancer', 'AI art', 'Next.js', 'React', 'portfolio'],
    authors: [{ name: 'Ilyas Hanjra' }],
    openGraph: {
        title: 'Ilyas Hanjra | Creative Developer & AI Artist',
        description: 'Freelance developer specializing in modern web development with vibe coding tools and AI image generation services.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="relative min-h-screen flex flex-col">
                        <Navbar />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                    </div>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    )
}
