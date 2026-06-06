"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6"
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
          scrolled
            ? "max-w-5xl rounded-full bg-white/95 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-white/30 px-4 py-2"
            : "max-w-7xl rounded-full bg-black/30 backdrop-blur-md border border-white/10 px-6 py-2.5"
        )}
      >
        <a
          href="#home"
          className={cn(
            "text-sm font-semibold tracking-tight transition-colors duration-300",
            scrolled ? "text-foreground" : "text-white"
          )}
        >
          LUMINA
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors duration-300",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/60 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative md:hidden w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block w-5 h-px absolute transition-all duration-300",
              mobileOpen ? "rotate-45 bg-foreground" : "-translate-y-1.5",
              !mobileOpen && (scrolled ? "bg-foreground" : "bg-white")
            )}
          />
          <span
            className={cn(
              "block w-5 h-px absolute transition-all duration-300",
              mobileOpen ? "opacity-0" : "opacity-100",
              !mobileOpen && (scrolled ? "bg-foreground" : "bg-white")
            )}
          />
          <span
            className={cn(
              "block w-5 h-px absolute transition-all duration-300",
              mobileOpen ? "-rotate-45 bg-foreground" : "translate-y-1.5",
              !mobileOpen && (scrolled ? "bg-foreground" : "bg-white")
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="md:hidden mt-2 mx-auto max-w-sm rounded-2xl bg-white/90 backdrop-blur-3xl border border-white/20 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-3 gap-1">
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
