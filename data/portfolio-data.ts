export const personalInfo = {
    name: "Ilyas Hanjra",
    title: "Creative Developer & AI Artist",
    tagline: "Building stunning websites with vibe coding and creating AI-powered visuals",
    bio: `I'm a passionate freelance developer and AI artist with 5+ years of experience crafting digital experiences. I specialize in building modern, high-performance websites using cutting-edge AI-assisted development tools.

My unique approach combines traditional coding expertise with the power of AI to deliver projects faster without compromising quality. Whether you need a sleek landing page, a full-stack web application, or custom AI-generated imagery for your brand, I bring creativity and technical excellence to every project.`,
    email: "ilyasshoukat4444@gmail.com",
    phone: "+92 345 2904025",
    location: "Sargodha, Pakistan",
    availability: "Available for freelance projects",
    resumeUrl: "/resume.pdf",
    social: {
        github: "https://github.com/ilyas-shoukat",
        linkedin: "https://linkedin.com/in/alexmorgan",
        twitter: "https://twitter.com/alexmorgan",
        dribbble: "https://dribbble.com/alexmorgan",
        instagram: "https://instagram.com/ilyas.hanjra",
    },
}

export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
]

export const services = [
    {
        id: 1,
        title: "Website Development",
        subtitle: "With Vibe Coding Tools",
        description:
            "Modern, responsive websites built using AI-assisted development tools. I leverage the latest vibe coding technologies to ship beautiful, performant websites in record time without sacrificing quality.",
        features: [
            "Next.js & React Applications",
            "AI-Powered Development Workflow",
            "Rapid Prototyping & Iteration",
            "SEO Optimized Architecture",
            "Performance-First Approach",
            "Clean, Maintainable Code",
        ],
        icon: "Code",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        title: "AI Image Generation",
        subtitle: "Custom Visual Content",
        description:
            "Unique AI-generated images tailored to your brand. From marketing materials to product mockups, I create stunning visuals that capture attention and tell your story.",
        features: [
            "Brand Identity Assets",
            "Marketing & Social Media Graphics",
            "Product Mockups & Visualizations",
            "Custom Illustrations",
            "Background & Texture Creation",
            "Concept Art & Ideation",
        ],
        icon: "Sparkles",
        gradient: "from-purple-500 to-pink-500",
    },
]

export const projects = [
    {
        id: 1,
        title: "NeoCommerce",
        description:
            "A full-stack e-commerce platform with AI-powered product recommendations, real-time inventory management, and seamless checkout experience.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        category: "web",
        tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
        liveUrl: "https://neocommerce.demo",
        githubUrl: "https://github.com/demo/neocommerce",
        featured: true,
    },
    {
        id: 2,
        title: "Dreamscape Gallery",
        description:
            "A curated collection of AI-generated artwork showcasing surreal landscapes, abstract compositions, and futuristic cityscapes.",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=600&fit=crop",
        category: "ai-art",
        tech: ["Midjourney", "DALL-E", "Stable Diffusion", "Photoshop"],
        liveUrl: "https://dreamscape.gallery",
        featured: true,
    },
    {
        id: 3,
        title: "TaskFlow Pro",
        description:
            "A minimalist project management tool with kanban boards, time tracking, and team collaboration features built with modern React.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        category: "web",
        tech: ["React", "Node.js", "MongoDB", "Socket.io"],
        liveUrl: "https://taskflow.demo",
        githubUrl: "https://github.com/demo/taskflow",
    },
    {
        id: 4,
        title: "Brand Vision AI",
        description:
            "Complete visual identity package for a tech startup, including logo variations, color palettes, and marketing collateral generated with AI.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
        category: "ai-art",
        tech: ["Midjourney", "Figma", "Illustrator"],
        liveUrl: "https://brandvision.demo",
    },
    {
        id: 5,
        title: "CryptoTracker",
        description:
            "Real-time cryptocurrency portfolio tracker with advanced charting, price alerts, and market analysis powered by multiple APIs.",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
        category: "web",
        tech: ["Next.js", "Chart.js", "CoinGecko API", "Firebase"],
        liveUrl: "https://cryptotracker.demo",
        githubUrl: "https://github.com/demo/cryptotracker",
    },
    {
        id: 6,
        title: "Ethereal Portraits",
        description:
            "A series of AI-generated portrait artwork blending classical art styles with modern digital aesthetics for a luxury fashion brand.",
        image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=800&h=600&fit=crop",
        category: "ai-art",
        tech: ["Midjourney", "DALL-E 3", "Photoshop"],
        liveUrl: "https://ethereal.demo",
    },
]

export const experience = [
    {
        id: 1,
        company: "Freelance",
        logo: "💼",
        role: "Creative Developer & AI Artist",
        period: "2023 - Present",
        type: "Self-Employed",
        description:
            "Running my own creative studio, delivering high-quality websites and AI-generated visuals to clients worldwide. Specializing in vibe coding development and custom AI art creation.",
        achievements: [
            "Delivered 30+ successful projects across various industries",
            "Maintained 100% client satisfaction rating",
            "Reduced average project delivery time by 50% using AI tools",
            "Built a network of recurring clients and referrals",
        ],
        tech: ["Next.js", "React", "TypeScript", "Midjourney", "DALL-E"],
    },
    {
        id: 2,
        company: "TechVentures Inc.",
        logo: "🚀",
        role: "Senior Frontend Developer",
        period: "2021 - 2023",
        type: "Full-Time",
        description:
            "Led frontend development for multiple high-traffic web applications. Mentored junior developers and established best practices for the engineering team.",
        achievements: [
            "Improved Core Web Vitals by 60% across all products",
            "Led migration from legacy codebase to modern React architecture",
            "Mentored team of 4 junior developers",
            "Implemented design system reducing development time by 35%",
        ],
        tech: ["React", "TypeScript", "GraphQL", "AWS", "Docker"],
    },
    {
        id: 3,
        company: "DigitalCraft Agency",
        logo: "🎨",
        role: "Full Stack Developer",
        period: "2019 - 2021",
        type: "Full-Time",
        description:
            "Developed custom web solutions for clients ranging from startups to enterprise companies. Worked closely with designers to implement pixel-perfect interfaces.",
        achievements: [
            "Built 20+ client websites with modern tech stack",
            "Introduced automated testing, achieving 80% code coverage",
            "Optimized database queries reducing load times by 40%",
            "Won 'Developer of the Year' award in 2020",
        ],
        tech: ["Vue.js", "Node.js", "PostgreSQL", "AWS", "SASS"],
    },
    {
        id: 4,
        company: "StartupHub",
        logo: "💡",
        role: "Junior Developer",
        period: "2018 - 2019",
        type: "Full-Time",
        description:
            "Started my professional journey building MVPs for early-stage startups. Gained hands-on experience with agile development and rapid prototyping.",
        achievements: [
            "Contributed to 5 successful product launches",
            "Learned full-stack development through hands-on projects",
            "Collaborated with cross-functional teams",
            "Received promotion within 8 months",
        ],
        tech: ["JavaScript", "React", "Node.js", "MongoDB", "CSS"],
    },
]

export const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO",
        company: "NovaTech Solutions",
        content:
            "Alex delivered our company website in record time and the quality exceeded all expectations. The AI-powered development approach meant we got to market 3x faster than with traditional agencies. Highly recommend!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Marketing Director",
        company: "GrowthLabs",
        content:
            "The AI-generated visuals Alex created for our campaign were stunning and unique. We saw a 45% increase in engagement compared to stock imagery. A true creative professional.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Founder",
        company: "Artistry Collective",
        content:
            "Working with Alex was a fantastic experience. They understood our vision perfectly and transformed it into a beautiful website. The attention to detail and technical expertise is unmatched.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
        id: 4,
        name: "David Park",
        role: "CTO",
        company: "InnovateCorp",
        content:
            "Alex's combination of traditional development skills and AI tools is impressive. Our e-commerce platform handles thousands of daily visitors flawlessly. Great communication throughout the project.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
]

export const skills = [
    { name: "React / Next.js", level: 95, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "PostgreSQL", level: 80, category: "backend" },
    { name: "AI Tools (Midjourney/DALL-E)", level: 90, category: "ai" },
    { name: "Vibe Coding", level: 95, category: "ai" },
    { name: "Git & DevOps", level: 85, category: "tools" },
    { name: "Figma / Design", level: 75, category: "design" },
    { name: "SEO Optimization", level: 80, category: "marketing" },
]

export const stats = [
    { label: "Projects Completed", value: "50+", icon: "Briefcase" },
    { label: "Happy Clients", value: "35+", icon: "Users" },
    { label: "Years Experience", value: "5+", icon: "Calendar" },
    { label: "AI Images Generated", value: "1000+", icon: "Image" },
]
