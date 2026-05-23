import { motion, AnimatePresence } from "framer-motion"
import { Feather, Home, Settings, LayoutGrid, Briefcase, Mail } from "lucide-react"
import { useState, useEffect } from "react"

const links = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Skills", href: "#skills", icon: Settings },
  { label: "Projects", href: "#projects", icon: LayoutGrid },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Contact", href: "#contact", icon: Mail },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[60] pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-parchment shadow-sm"
          : "bg-cream/70 backdrop-blur-sm border-b border-parchment/50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 text-warm-brown group z-20">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-wood/20 shadow-sm">
            <img
              src="/dine.webp"
              alt="Dinesh"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="font-serif text-lg group-hover:text-moss transition-colors duration-300">
            Dinesh
          </span>
          <span className="text-moss/40 text-xs font-sans hidden sm:inline">✦ Portfolio</span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-warm-brown/70 hover:text-moss transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-moss/40 rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right side / Mobile Menu Toggle */}
        <div className="flex items-center gap-3 z-20">
          <Feather className="w-4 h-4 text-wood/40 hidden sm:block" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-warm-brown bg-parchment/50 rounded-full border border-wood/10 hover:bg-parchment transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-warm-brown transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-warm-brown transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-warm-brown transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, borderBottomWidth: 0 }}
            animate={{ opacity: 1, height: "auto", borderBottomWidth: 1 }}
            exit={{ opacity: 0, height: 0, borderBottomWidth: 0 }}
            className="sm:hidden bg-cream/95 backdrop-blur-xl border-parchment overflow-hidden shadow-lg absolute w-full left-0 right-0 top-full"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((link, i) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-warm-brown/80 hover:text-moss hover:bg-moss/5 transition-all duration-300 active:scale-[0.98]"
                  >
                    <div className="w-8 h-8 rounded-full bg-parchment border border-wood/15 flex items-center justify-center text-moss shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-sans font-semibold text-sm tracking-wide">
                      {link.label}
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
