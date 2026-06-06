import Nav from "@/components/portfolio/nav"
import Hero from "@/components/portfolio/hero"
import HorizontalScroll from "@/components/portfolio/horizontal-scroll"
import About from "@/components/portfolio/about"
import Contact from "@/components/portfolio/contact"
import Footer from "@/components/portfolio/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HorizontalScroll />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
