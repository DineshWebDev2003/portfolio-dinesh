import { motion } from "framer-motion"
import { ExternalLink, Heart, Sparkles, Star, ImagePlus } from "lucide-react"

const projects = [
  {
    title: "Sabari Events",
    subtitle: "Event Management",
    description:
      "A simple, elegant landing page for Sabari Events, featuring a fully integrated contact form powered by Web3Forms and built with React.js.",
    icon: Sparkles,
    color: "from-orange-100/60 to-orange-50/30",
    border: "border-orange-200/50",
    accent: "text-orange-500",
    badgeBg: "bg-orange-50",
    tag: "React.js",
    href: "https://sabarievents.in/",
    // Please save the image you shared as "sabari.png" inside the public folder!
    image: "/image (7).png",
  },
  {
    title: "90s Kalyanam",
    subtitle: "AI-Powered Matrimony",
    description:
      "An AI-powered matchmaking and matrimony mobile application built with Expo and React Native, featuring highly localized premium feature integration and seamless onboarding UX.",
    icon: Heart,
    color: "from-rose-100/60 to-rose-50/30",
    border: "border-rose-200/50",
    accent: "text-rose-400",
    badgeBg: "bg-rose-50",
    tag: "React Native / Expo",
    image: null,
  },
  {
    title: "Astro Palm Prediction",
    subtitle: "Astrology & Palmistry",
    description:
      "A unique astrology and palmistry platform featuring complex predictive backend calculations, custom astronomical formulas, and an interactive interface.",
    icon: Sparkles,
    color: "from-amber-100/60 to-amber-50/30",
    border: "border-amber-200/50",
    accent: "text-amber-500",
    badgeBg: "bg-amber-50",
    tag: "Laravel / React",
    image: null,
  },
  {
    title: "CHK",
    subtitle: "Chithode Happy Kids",
    description:
      "A vibrant, kid-friendly mobile application featuring cross-platform production-ready stability, successfully prepared and submitted to the Google Play Console for alpha release.",
    icon: Star,
    color: "from-sky-100/60 to-sky-50/30",
    border: "border-sky-200/50",
    accent: "text-sky-500",
    badgeBg: "bg-sky-50",
    tag: "React Native / Expo",
    image: "/image (6).png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 h-px bg-wood/20" />
            <Heart className="w-4 h-4 text-terracotta/40" />
            <span className="w-10 h-px bg-wood/20" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-warm-brown mb-3">
            Creative Chronicles
          </h2>
          <div className="flex items-center justify-center gap-2 text-wood/40">
            <span className="w-12 h-px bg-wood/20" />
            <LeafDivider />
            <span className="w-12 h-px bg-wood/20" />
          </div>
          <p className="text-warm-brown/60 text-sm mt-3 max-w-md mx-auto">
            A collection of stories told through code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className={`group rounded-3xl bg-gradient-to-br ${project.color} border ${project.border} shadow-sm hover:shadow-md transition-all duration-500 flex flex-col overflow-hidden`}
              >
                {/* Project Image Area */}
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-parchment/80 to-cream/60">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    /* ── Placeholder: replace `project.image` with your screenshot path ── */
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 border-b border-wood/10">
                      <img
                        src="/project-placeholder.png"
                        alt="Project placeholder"
                        className="w-full h-full object-cover opacity-30 absolute inset-0"
                      />
                      <div className="relative z-10 flex flex-col items-center gap-2 text-wood/50">
                        <ImagePlus className="w-8 h-8" />
                        <span className="text-xs font-sans font-semibold">
                          Add project image
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Tag overlay */}
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider text-wood/70 font-sans font-semibold px-2.5 py-1 rounded-full border border-wood/15 bg-white/70 backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>

                {/* Card content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${project.badgeBg} border ${project.border} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${project.accent}`} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-warm-brown leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-wood/60 font-sans font-semibold uppercase tracking-wider">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-warm-brown/70 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex gap-3 pt-2 border-t border-wood/10">
                    {project.href ? (
                      <motion.a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-moss text-cream text-xs font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-wood/10 text-wood/50 text-xs font-semibold cursor-not-allowed"
                      >
                        <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                        Coming Soon
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>


      </div>
    </section>
  )
}

function LeafDivider() {
  return (
    <svg className="w-5 h-5 text-moss/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M11 4C7 8 4 13 4 18c0 2 1 4 3 4 3 0 6-3 8-7s4-7 5-9c-2 1-5 3-9 4z" />
    </svg>
  )
}
