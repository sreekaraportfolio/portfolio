"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Golden Hour in Val d'Orcia",
    category: "Wedding",
    year: "2024",
    description:
      "An intimate elopement at a private Tuscan estate, photographed entirely in natural light from golden hour through twilight.",
    src: "https://picsum.photos/seed/wedding-valdorcia/1920/1080",
  },
  {
    id: 2,
    title: "Amalfi Coast Vows",
    category: "Wedding",
    year: "2024",
    description:
      "A three-day celebration along the Amalfi coastline, blending Italian tradition with effortless coastal elegance.",
    src: "https://picsum.photos/seed/wedding-amalfi/1920/1080",
  },
  {
    id: 3,
    title: "Autumn in the Loire",
    category: "Wedding",
    year: "2023",
    description:
      "A Château wedding set among vineyards in full autumn color. Soft mist, candlelit receptions, and quiet moments between storms.",
    src: "https://picsum.photos/seed/wedding-loire/1920/1080",
  },
  {
    id: 4,
    title: "Lake Como Intimo",
    category: "Wedding",
    year: "2024",
    description:
      "An intimate ceremony on Lake Como with seventeen guests, a vintage wooden boat, and the mountains watching in silence.",
    src: "https://picsum.photos/seed/wedding-como/1920/1080",
  },
  {
    id: 5,
    title: "Provence Lavender Fields",
    category: "Wedding",
    year: "2023",
    description:
      "A editorial-style wedding set among blooming lavender fields in the South of France. Film, linen, and golden light.",
    src: "https://picsum.photos/seed/wedding-provence/1920/1080",
  },
  {
    id: 6,
    title: "Santorini Sunset",
    category: "Wedding",
    year: "2024",
    description:
      "A destination wedding in Santorini, where the ceremony unfolded as the sun dropped into the caldera. Pure magic.",
    src: "https://picsum.photos/seed/wedding-santorini/1920/1080",
  },
]

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(projects.length - 1) * 100}%`]
  )

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative h-[600vh] bg-background"
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {/* Header */}
        <div className="absolute left-6 top-8 z-30 md:left-12 md:top-12">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
            Featured Work
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tighter text-white md:text-4xl">
            Wedding Stories
          </h2>
        </div>

        {/* Progress */}
        <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 flex items-center gap-3 md:bottom-12">
          {projects.map((_, i) => (
            <div
              key={i}
              className="h-[2px] w-10 rounded-full bg-white/20 overflow-hidden"
            >
              <motion.div
                className="h-full bg-white/70"
                style={{
                  scaleX: useTransform(
                    scrollYProgress,
                    [i / projects.length, (i + 1) / projects.length],
                    [0, 1]
                  ),
                  transformOrigin: "left",
                }}
              />
            </div>
          ))}
        </div>

        <motion.div style={{ x }} className="flex h-full">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="relative flex h-[100dvh] w-screen flex-shrink-0 items-center justify-center overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.src})`,
                  backgroundColor: "#1A1A1A",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

              <div className="absolute right-8 top-8 z-20 text-[10px] font-medium tracking-[0.3em] text-white/35 md:right-12 md:top-12">
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </div>

              <div className="relative z-20 mx-auto w-full max-w-5xl px-6 text-center md:px-12 lg:px-20">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                >
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
                    {project.category} &mdash; {project.year}
                  </span>
                  <h3 className="mx-auto mt-3 max-w-[14ch] text-4xl font-bold leading-[1.05] tracking-tighter text-white md:text-6xl lg:text-7xl">
                    {project.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-[52ch] text-sm leading-relaxed text-white/55 md:text-base">
                    {project.description}
                  </p>
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px]">
                <motion.div
                  className="h-full bg-primary"
                  style={{
                    scaleX: useTransform(
                      scrollYProgress,
                      [i / projects.length, (i + 1) / projects.length],
                      [0, 1]
                    ),
                    transformOrigin: "left",
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
