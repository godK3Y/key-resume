"use client";

import { Github, Mail, Instagram, Facebook } from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useEffect, useState } from "react";
import Image from "next/image";

const navigationItems = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

function Header() {
  const [activeTab, setActiveTab] = useState("about");

  // Handle smooth scrolling when tab is clicked
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveTab(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="p-8 lg:p-12 h-full flex items-center animate-slide-in-left">
      <Card className="w-full bg-card/90 backdrop-blur-xl border-0 shadow-2xl shadow-black/5 dark:shadow-white/5 p-10 lg:p-12 rounded-3xl transition-colors duration-300">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="w-35 h-auto p-3 bg-gradient-to-br from-muted to-muted/80 rounded-2xl flex items-center justify-start mb-6 transition-colors duration-300">
            <Image
              src="/img/pro1.jpg"
              alt="ingkarat"
              width={120}
              height={120}
              className="rounded-xl shadow-md"
            />
          </div>

          {/* Name */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl lg:text-4xl font-semibold text-primary dark:text-primary-foreground tracking-tight leading-tight mb-2 transition-colors duration-300">
              Ingkarat
              <br />
              <span className="font-semibold">Sittichokchai</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-light transition-colors duration-300">
              Frontend Developer
            </p>
            <div className="w-full h-auto p-4 mt-3 bg-gradient-to-br from-muted to-muted/80 rounded-2xl flex flex-col gap-1 mb-6 transition-colors duration-300">
              <h2 className="text-secondary text-lg font-semibold mb-1 transition-colors duration-300">
                Internship
                <span className="mx-2 text-muted-foreground font-normal">
                  ——
                </span>
              </h2>
              <p className="text-muted-foreground text-sm font-medium mb-0.5 transition-colors duration-300">
                SCG (Thungsong) · Nov 2024 – Mar 2025
              </p>
              <p className="text-muted-foreground text-sm font-light transition-colors duration-300">
                Front-end Developer / UX/UI
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="animate-fade-in-up animate-delay-100 mb-8">
            <p className="text-gray-600 dark:text-gray-300 text-base font-light leading-relaxed transition-colors duration-300"></p>
          </div>

          {/* Navigation */}
          <div className="animate-fade-in-up animate-delay-200">
            <Tabs
              value={activeTab}
              onValueChange={handleTabClick}
              orientation="vertical"
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-1 h-auto bg-transparent p-0 space-y-2">
                {navigationItems.map((item) => (
                  <TabsTrigger
                    key={item.id}
                    value={item.id}
                    className="w-full justify-start text-left px-4 py-3 bg-transparent border-0 shadow-none data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-all duration-300 rounded-xl font-light text-base tracking-wide group relative overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                    <div className="absolute inset-0 bg-accent/30 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-100 transition-opacity duration-300" />
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Contact */}
          <div className="space-y-6 animate-fade-in-up animate-delay-300">
            <div className="w-16 h-px bg-gradient-to-r from-gray-300 dark:from-gray-600 to-transparent transition-colors duration-300"></div>

            <div className="flex items-center gap-5">
              {[
                {
                  href: "https://github.com/godK3Y",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.instagram.com/key_ingg/",
                  icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "mailto:ingkarat.sitt@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
                {
                  href: "https://www.facebook.com/ingkarat.sittichokchai",
                  icon: Facebook,
                  label: "Facebook",
                },
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 hover:scale-110 hover:-translate-y-1 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <div className="space-y-2">
              <a
                href="tel:093-154-1499"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300 font-light block"
              >
                +66 93-154-1499
              </a>
              <p className="text-sm text-gray-400 dark:text-gray-500 font-light transition-colors duration-300">
                Thailand
              </p>
            </div>
          </div>
        </div>
      </Card>
    </header>
  );
}

export default Header;
