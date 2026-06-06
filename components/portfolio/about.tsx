"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Wedding Coverage",
    description:
      "Full-day storytelling coverage, from quiet morning preparations through the final dance. Two photographers, no interruptions.",
  },
  {
    title: "Engagement Sessions",
    description:
      "A relaxed pre-wedding shoot in a location that means something to you. Golden hour, good wine, no pressure.",
  },
  {
    title: "Destination Weddings",
    description:
      "Experienced in remote ceremonies, multi-day celebrations, and cross-cultural weddings anywhere in the world.",
  },
  {
    title: "Fine Art Albums",
    description:
      "Hand-bound archival albums printed on Italian cotton paper. Heirloom-quality objects, not afterthoughts.",
  },
]

const achievements = [
  { value: "200+", label: "Weddings" },
  { value: "18", label: "Countries" },
  { value: "7", label: "Years" },
  { value: "3", label: "Books Published" },
]

export default function About() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
            About
          </span>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-6xl">
              Documenting love
              <br />
              <span className="text-primary">across borders</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I shoot weddings the way I would want my own documented &mdash;
              with restraint, with warmth, and without a single staged moment.
              My background is in documentary photography, and that instinct
              stays with me on every wedding day: wait for the real thing, then
              step out of its way.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Based in Tuscany and available worldwide. My work has been
              featured in <span className="font-medium text-foreground">Vogue Weddings</span>,{" "}
              <span className="font-medium text-foreground">Martha Stewart</span>, and{" "}
              <span className="font-medium text-foreground">Style Me Pretty</span>.
              Every wedding begins with a conversation &mdash; about what moves
              you, what feels true, and what kind of images you want to hold
              in forty years.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="rounded-[1.5rem] bg-card p-8 ring-1 ring-black/5 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-24 grid grid-cols-2 gap-6 border-t border-border pt-12 md:grid-cols-4"
        >
          {achievements.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
