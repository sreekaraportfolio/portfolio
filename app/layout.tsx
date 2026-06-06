import type { Metadata } from "next"
import { Geist, Geist_Mono, Figtree } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Lumina | Wedding Photography",
  description:
    "Intimate, timeless wedding photography for couples who want more than just pictures. Based in Tuscany, available worldwide.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        figtree.variable,
        "font-sans"
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
