export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  image: string
  liveUrl: string
  repoUrl: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "1",
    title: "BRUTALIST ECOMMERCE",
    description:
      "A BOLD E-COMMERCE PLATFORM THAT BREAKS ALL CONVENTIONAL DESIGN RULES. FEATURES EXPERIMENTAL LAYOUTS AND KINETIC INTERACTIONS.",
    techStack: ["NEXT.JS", "TYPESCRIPT", "FRAMER", "STRIPE"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/johndoe/brutalist-ecommerce",
    featured: true,
  },
  {
    id: "2",
    title: "KINETIC DASHBOARD",
    description:
      "AN EXPERIMENTAL ADMIN DASHBOARD WITH SCROLL-BASED STORYTELLING AND MICRO-INTERACTIONS THAT RESPOND TO USER BEHAVIOR.",
    techStack: ["REACT", "GSAP", "D3.JS", "NODE.JS"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/johndoe/kinetic-dashboard",
    featured: true,
  },
  {
    id: "3",
    title: "EXPERIMENTAL PORTFOLIO",
    description:
      "A PORTFOLIO SITE THAT PUSHES THE BOUNDARIES OF WEB DESIGN WITH WEBGL EFFECTS AND UNCONVENTIONAL NAVIGATION.",
    techStack: ["THREE.JS", "WEBGL", "REACT", "GLSL"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/johndoe/experimental-portfolio",
  },
  {
    id: "4",
    title: "BRUTALIST BLOG",
    description:
      "A CONTENT PLATFORM THAT CHALLENGES TRADITIONAL BLOG LAYOUTS WITH ASYMMETRICAL GRIDS AND BOLD TYPOGRAPHY.",
    techStack: ["NEXT.JS", "MDX", "TAILWIND", "VERCEL"],
    image: "/placeholder.svg?height=400&width=600",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/johndoe/brutalist-blog",
  },
]
