"use client"

import { motion } from "framer-motion"

const contacts = [
  {
    label: "WhatsApp",
    value: "+1 (312) 847-1928",
    href: "https://wa.me/13128471928",
  },
  {
    label: "Instagram",
    value: "@lumina_weddings",
    href: "https://instagram.com/lumina_weddings",
  },
  {
    label: "Email",
    value: "hello@lumina.com",
    href: "mailto:hello@lumina.com",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative bg-background py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
            Contact
          </span>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-6xl">
              Let&apos;s talk
              <br />
              <span className="text-primary">about your</span>
              <br />
              wedding
            </h2>
            <p className="mt-6 max-w-[40ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              Reach out directly. I typically reply within a few hours.
            </p>
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
            className="flex flex-col gap-8"
          >
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-b border-border pb-6 transition-colors duration-300 hover:border-primary/30"
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
                  {item.label}
                </span>
                <p className="mt-1.5 text-xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
                  {item.value}
                </p>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
