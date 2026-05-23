import { motion } from "framer-motion"
import { Heart, GitFork, Link2, Mail } from "lucide-react"

const socials = [
  { icon: GitFork, label: "GitHub", href: "https://github.com/dineshmahidev" },
  { icon: Link2, label: "LinkedIn", href: "https://linkedin.com/in/" },
  { icon: Mail, label: "Email", href: "mailto:dinesh.mahi.dev@gmail.com" },
]

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-parchment bg-gradient-to-b from-cream to-parchment/30">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Mini avatar + name */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-wood/20 shadow-sm">
            <img src="/dine.webp" alt="Dinesh" className="w-full h-full object-cover object-top" />
          </div>
          <span className="font-serif text-lg text-warm-brown/70 group-hover:text-moss transition-colors duration-300">
            Dinesh
          </span>
        </a>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full bg-parchment/70 border border-wood/15 flex items-center justify-center text-wood/50 hover:text-moss hover:border-moss/30 transition-all duration-300 shadow-sm"
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-wood/40 font-sans">
          <span>&copy; {new Date().getFullYear()} Dinesh. All rights reserved.</span>
          <span className="hidden sm:inline text-wood/20">·</span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-1.5"
          >
            Crafted with
            <Heart className="w-3 h-3 text-terracotta/40" />
            and a cup of tea
          </motion.span>
        </div>
      </div>
    </footer>
  )
}
