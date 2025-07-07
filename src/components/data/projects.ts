export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Tofu POS System",
    description:
      "โปรเจ็กต์ “Tofu POS System” โดยเฮียปาล์มโกคีย์ คือระบบบริหารร้านน้ำเต้าหู้ที่ผสานเทคโนโลยี QR Code เพื่อให้ลูกค้าสั่งอาหารผ่านมือถือ พร้อมอัปเดตสถานะออร์เดอร์แบบเรียลไทม์ทั้งฝั่งครัวและพนักงานหน้าร้าน ช่วยจัดการโต๊ะ สต็อก และรายงานยอดขายได้อย่างมีประสิทธิภาพ ลดข้อผิดพลาด และยกระดับประสบการณ์ของทั้งลูกค้าและพนักงานอย่างครบวงจร.",
    techStack: ["NEXT.JS", "TYPESCRIPT", "FRAMER", "STRIPE", "NEST.JS"],
    image: "/img/logo1.jpg",
    liveUrl: "https://tofu-frontend-one.vercel.app/",
    repoUrl: "https://github.com/godK3Y/tofu_frontend",
    featured: true,
  },
  {
    id: "2",
    title: "ingkarat's portfolio",
    description:
      "AN EXPERIMENTAL ADMIN DASHBOARD WITH SCROLL-BASED STORYTELLING AND MICRO-INTERACTIONS THAT RESPOND TO USER BEHAVIOR.",
    techStack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND"],
    image: "/img/resume.png",
    liveUrl: "https://key-resume.vercel.app/",
    repoUrl: "https://github.com/johndoe/kinetic-dashboard",
    featured: true,
  },
  // {
  //   id: "3",
  //   title: "EXPERIMENTAL PORTFOLIO",
  //   description:
  //     "A PORTFOLIO SITE THAT PUSHES THE BOUNDARIES OF WEB DESIGN WITH WEBGL EFFECTS AND UNCONVENTIONAL NAVIGATION.",
  //   techStack: ["THREE.JS", "WEBGL", "REACT", "GLSL"],
  //   image: "/placeholder.svg?height=400&width=600",
  //   liveUrl: "https://example.com",
  //   repoUrl: "https://github.com/johndoe/experimental-portfolio",
  // },
  // {
  //   id: "4",
  //   title: "BRUTALIST BLOG",
  //   description:
  //     "A CONTENT PLATFORM THAT CHALLENGES TRADITIONAL BLOG LAYOUTS WITH ASYMMETRICAL GRIDS AND BOLD TYPOGRAPHY.",
  //   techStack: ["NEXT.JS", "MDX", "TAILWIND", "VERCEL"],
  //   image: "/placeholder.svg?height=400&width=600",
  //   liveUrl: "https://example.com",
  //   repoUrl: "https://github.com/johndoe/brutalist-blog",
  // },
];
