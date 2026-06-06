"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const thumbnails = [
  "https://picsum.photos/seed/hero-thumb1/400/500",
  "https://picsum.photos/seed/hero-thumb2/400/500",
  "https://picsum.photos/seed/hero-thumb3/400/500",
  "https://picsum.photos/seed/hero-thumb4/400/500",
]

const publications = [
  "Vogue Weddings",
  "Martha Stewart",
  "Style Me Pretty",
  "The Knot",
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full overflow-hidden bg-black"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://picsum.photos/seed/wedding-hero/2400/1600)",
            backgroundColor: "#1A1A1A",
          }}
        />
      </div>

      {/* Gradient overlays - richer multi-layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Decorative ring motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          className="opacity-[0.04]"
        >
          <circle cx="300" cy="300" r="280" stroke="white" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="240" stroke="white" strokeWidth="0.3" />
          <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="0.2" />
          <circle
            cx="300"
            cy="300"
            r="160"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[100dvh] w-full max-w-[1100px] flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-center"
        >
          {/* Eyebrow with decorative dividers */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-white/20" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
              Wedding Photography
            </span>
            <span className="h-px w-8 bg-white/20" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-5xl font-bold leading-[1.05] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[7rem]"
          >
            Every love story
            <br />
            <span className="relative">
              <span className="text-primary">deserves to be</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 400 12"
                fill="none"
              >
                <path
                  d="M2 6 C100 1, 200 11, 398 6"
                  stroke="white"
                  strokeOpacity="0.15"
                  strokeWidth="0.5"
                  fill="none"
                />
              </svg>
            </span>
            <br />
            remembered
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-[48ch] text-base leading-relaxed text-white/55 md:text-lg"
          >
            Intimate, timeless wedding photography for couples who want
            more than just pictures. Based in Tuscany, available worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#gallery"
              className="group inline-flex h-13 items-center gap-3 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-primary/90 active:scale-[0.97]"
            >
              View Gallery
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="text-primary-foreground"
                >
                  <path
                    d="M1 11L11 1M11 1H4M11 1V8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex h-13 items-center gap-2 rounded-full border border-white/15 px-8 text-sm font-medium text-white/80 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10 hover:text-white active:scale-[0.97]"
            >
              Inquire
            </a>
          </motion.div>

          {/* Trust bar - stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center divide-x divide-white/10"
          >
            {[
              { value: "200+", label: "Weddings" },
              { value: "18", label: "Countries" },
              { value: "7", label: "Years" },
            ].map((stat) => (
              <div key={stat.label} className="px-8 first:pl-0 last:pr-0">
                <p className="text-xl font-bold tracking-tight text-white md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[11px] text-white/35">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom zone: thumbnail strip + featured in */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-[1100px] px-6 pb-8 md:pb-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* Thumbnail strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex -space-x-3"
            >
              {thumbnails.map((src, i) => (
                <div
                  key={i}
                  className="relative h-16 w-12 overflow-hidden rounded-lg border-2 border-white/10 shadow-lg md:h-20 md:w-14"
                  style={{
                    zIndex: thumbnails.length - i,
                  }}
                >
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundColor: "#333",
                    }}
                  />
                </div>
              ))}
              <div className="flex items-center pl-5">
                <p className="text-[11px] leading-relaxed text-white/40">
                  Recent
                  <br />
                  weddings
                </p>
              </div>
            </motion.div>

            {/* Featured in */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.4,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/25">
                As seen in
              </span>
              <div className="mt-2 flex items-center gap-6">
                {publications.map((pub) => (
                  <span
                    key={pub}
                    className="text-xs font-medium tracking-tight text-white/40"
                  >
                    {pub}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="h-6 w-[1px] bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
