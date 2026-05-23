import { motion } from "framer-motion"
import { Briefcase, Code, Smartphone, Globe, Sparkles, Users, ArrowRight } from "lucide-react"

const experiences = [
  {
    period: "Nov 2025 – Present",
    duration: "Current",
    company: "Freelance & Personal Projects",
    role: "Independent Full-Stack Developer",
    description:
      "Operating independently as a freelance developer, delivering 10+ projects across web and mobile for various clients. Continuing to build personal products with a focus on cutting-edge mobile technologies.",
    highlights: [
      { label: "10+ Projects", icon: Sparkles },
      { label: "React Native / Expo", icon: Smartphone },
      { label: "React.js", icon: Globe },
      { label: "Laravel", icon: Code },
    ],
    customIcon: "/freelance_icon.png",
    bg: "from-amber-50/60 to-orange-50/30",
    border: "border-amber-200/50",
    iconBg: "bg-amber-100/50",
    iconColor: "text-amber-700",
    badge: "Freelance",
    badgeColor: "bg-amber-100/50 text-amber-700 border-amber-200",
  },
  {
    period: "Sept 2024 – Oct 2025",
    duration: "1 Year",
    company: "Maas Group of Companies",
    role: "Mobile & Web Developer",
    description:
      "Worked as a full-time developer building production-ready mobile applications and web platforms. Collaborated closely with cross-functional teams to deliver high-quality digital products for real-world clients.",
    highlights: [
      { label: "Mobile Apps", icon: Smartphone },
      { label: "Laravel Backend", icon: Code },
      { label: "React.js", icon: Globe },
    ],
    customIcon: "/job_icon.png",
    bg: "from-sky-50/60 to-blue-50/30",
    border: "border-sky-200/50",
    iconBg: "bg-sky-100/50",
    iconColor: "text-sky-700",
    badge: "Full-Time",
    badgeColor: "bg-sky-100/50 text-sky-700 border-sky-200",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Decorative background vines */}
      <div className="absolute -left-32 top-40 w-96 h-96 bg-moss/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-20 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-10 h-px bg-wood/20" />
            <Briefcase className="w-4 h-4 text-moss/40" />
            <span className="w-10 h-px bg-wood/20" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-warm-brown mb-3">
            The Journey
          </h2>
          <div className="flex items-center justify-center gap-2 text-wood/40">
            <span className="w-12 h-px bg-wood/20" />
            <span className="text-xs">✦</span>
            <span className="w-12 h-px bg-wood/20" />
          </div>
          <p className="text-warm-brown/60 text-sm mt-3 max-w-md mx-auto">
            Where every line of code tells a story
          </p>
        </motion.div>

        {/* Storybook Cards Layout */}
        <div className="space-y-8 relative">
          {/* Subtle dotted line connecting the cards vertically on desktop */}
          <div className="hidden md:block absolute left-12 top-10 bottom-10 w-px border-l-2 border-dashed border-wood/15 z-0" />

          {experiences.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative z-10"
              >
                <div className={`bg-gradient-to-br ${item.bg} border ${item.border} rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden`}>
                  
                  {/* Card hover shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-white/30 via-transparent to-white/10 pointer-events-none" />

                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
                    
                    {/* Left Icon Badge (acts as the timeline node on desktop) */}
                    <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-white/50 shadow-sm relative group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <div className={`absolute inset-0 opacity-20 ${item.iconBg}`} />
                      {item.customIcon ? (
                        <img src={item.customIcon} alt="Role Icon" className="w-full h-full object-cover z-10" />
                      ) : (
                        <Icon className={`w-7 h-7 ${item.iconColor} z-10`} />
                      )}
                      
                      {/* Current active ping dot */}
                      {item.duration === "Current" && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 border-2 border-white" />
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                            <span className="text-xs font-sans font-semibold text-wood/50 bg-white/50 px-2 py-1 rounded-full border border-wood/10">
                              {item.period}
                            </span>
                          </div>
                          <h3 className="font-serif text-2xl text-warm-brown leading-tight">
                            {item.company}
                          </h3>
                          <p className="text-sm text-wood/70 font-sans font-semibold uppercase tracking-wider mt-1 flex items-center gap-1.5">
                            <ArrowRight className="w-3 h-3" />
                            {item.role}
                          </p>
                        </div>
                        <div className="hidden sm:block shrink-0 text-right">
                          <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/60 bg-white/40 text-xs font-sans font-bold shadow-sm ${item.iconColor}`}>
                            {item.duration}
                          </span>
                        </div>
                      </div>

                      <p className="text-warm-brown/75 text-[15px] leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Tech Stack Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((h) => {
                          const HIcon = h.icon
                          return (
                            <span
                              key={h.label}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/60 border border-white/40 text-xs text-warm-brown/80 font-sans font-semibold shadow-sm hover:bg-white hover:scale-105 transition-all duration-300"
                            >
                              <HIcon className={`w-3.5 h-3.5 ${item.iconColor} opacity-80`} />
                              {h.label}
                            </span>
                          )
                        })}
                      </div>
                    </div>

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
