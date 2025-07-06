"use client";

import { Github, Mail, Linkedin } from "lucide-react";
import { Card } from "./ui/card";

function Header() {
  return (
    <header className="p-8 lg:p-12 h-full flex items-center animate-slide-in-left">
      <Card className="w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-0 shadow-2xl shadow-black/5 dark:shadow-white/5 p-10 lg:p-12 rounded-3xl transition-colors duration-300">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="w-50 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
            <span className="text-2xl font-light text-gray-600 dark:text-gray-300">
              key ingkarat
            </span>
            <div className="flex justify-end animate-fade-in-up"></div>
          </div>

          {/* Name */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-2 transition-colors duration-300">
              Ingkarat
              <br />
              <span className="font-normal">Sittichokchai</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-light transition-colors duration-300">
              Software Engineer
            </p>
          </div>

          {/* Bio */}
          <div className="animate-fade-in-up animate-delay-100">
            <p className="text-gray-600 dark:text-gray-300 text-base font-light leading-relaxed transition-colors duration-300">
              Passionate about creating beautiful, functional digital
              experiences. I specialize in full-stack development with a focus
              on modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <nav className="animate-fade-in-up animate-delay-200">
            <ul className="space-y-4">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 text-base font-light tracking-wide hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 mr-2">
                      →
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

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
                  href: "https://linkedin.com/in/ingkarat",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:ingkarat.sitt@gmail.com",
                  icon: Mail,
                  label: "Email",
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
                Bangkok, Thailand
              </p>
            </div>
          </div>
        </div>
      </Card>
    </header>
  );
}

export default Header;
