import { motion } from "framer-motion"

const skills = [
  {
    label: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    group: "Frontend & Mobile",
    color: "#61DAFB",
    bg: "from-sky-50/80 to-blue-50/60",
    border: "border-sky-200/60",
    glow: "rgba(97,218,251,0.25)",
  },
  {
    label: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    group: "Frontend & Mobile",
    color: "#61DAFB",
    bg: "from-sky-50/80 to-cyan-50/60",
    border: "border-sky-200/60",
    glow: "rgba(97,218,251,0.20)",
  },
  {
    label: "Expo",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
    group: "Frontend & Mobile",
    color: "#000020",
    bg: "from-slate-50/80 to-gray-50/60",
    border: "border-slate-200/60",
    glow: "rgba(100,100,120,0.15)",
  },
  {
    label: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    group: "Backend & Database",
    color: "#FF2D20",
    bg: "from-rose-50/80 to-red-50/60",
    border: "border-rose-200/60",
    glow: "rgba(255,45,32,0.20)",
  },
  {
    label: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    group: "Backend & Database",
    color: "#FFCA28",
    bg: "from-amber-50/80 to-yellow-50/60",
    border: "border-amber-200/60",
    glow: "rgba(255,202,40,0.25)",
  },
  {
    label: "Google AdMob",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    group: "Monetization & Tools",
    color: "#4285F4",
    bg: "from-blue-50/80 to-indigo-50/60",
    border: "border-blue-200/60",
    glow: "rgba(66,133,244,0.20)",
  },
  {
    label: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    group: "Monetization & Tools",
    color: "#F05032",
    bg: "from-orange-50/80 to-red-50/60",
    border: "border-orange-200/60",
    glow: "rgba(240,80,50,0.20)",
  },
  {
    label: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    group: "Monetization & Tools",
    color: "#181717",
    bg: "from-slate-50/80 to-gray-50/60",
    border: "border-slate-200/60",
    glow: "rgba(24,23,23,0.12)",
  },
]

const groups = ["Frontend & Mobile", "Backend & Database", "Monetization & Tools"]

const groupMeta = {
  "Frontend & Mobile":   { emoji: "🌿", label: "Frontend & Mobile",   desc: "Interfaces & apps" },
  "Backend & Database":  { emoji: "🍄", label: "Backend & Database",   desc: "Servers & storage"  },
  "Monetization & Tools":{ emoji: "✨", label: "Monetization & Tools", desc: "Growth & workflow"  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Ghibli watercolor background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/skills-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />
      {/* Soft overlay so cards stay readable */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-cream/80 via-cream/60 to-cream/90" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-warm-brown mb-3">
            The Toolkit
          </h2>
          <div className="flex items-center justify-center gap-2 text-wood/40">
            <span className="w-12 h-px bg-wood/20" />
            <span className="text-xs">✦</span>
            <span className="w-12 h-px bg-wood/20" />
          </div>
          <p className="text-warm-brown/60 text-sm mt-3 max-w-md mx-auto">
            Tools I reach for every day — forged through real projects
          </p>
        </motion.div>

        {/* Groups */}
        <div className="space-y-12">
          {groups.map((group, gi) => {
            const meta = groupMeta[group]
            const groupSkills = skills.filter((s) => s.group === group)

            return (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
              >
                {/* Group label */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xl">{meta.emoji}</span>
                  <div>
                    <h3 className="font-serif text-lg text-warm-brown leading-tight">{meta.label}</h3>
                    <p className="text-xs text-wood/50 font-sans">{meta.desc}</p>
                  </div>
                  <div className="flex-1 h-px bg-wood/10 ml-2" />
                </div>

                {/* Skill cards grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {groupSkills.map((skill, si) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, scale: 0.85, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: si * 0.08 + gi * 0.05 }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      className={`group relative bg-gradient-to-br ${skill.bg} border ${skill.border} rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-lg transition-all duration-400 cursor-default overflow-hidden`}
                      style={{
                        boxShadow: `0 2px 16px 0 ${skill.glow}`,
                      }}
                    >
                      {/* Ghibli shimmer on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/20 via-transparent to-white/10 rounded-2xl pointer-events-none" />

                      {/* Watercolor ring behind logo */}
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center relative"
                        style={{ background: `radial-gradient(circle, ${skill.glow} 0%, transparent 70%)` }}
                      >
                        {/* Rotating dashed ring — Ghibli decorative accent */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 64 64" fill="none">
                          <motion.circle
                            cx="32" cy="32" r="28"
                            stroke={skill.color}
                            strokeWidth="1"
                            strokeDasharray="5 4"
                            opacity="0.3"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20 + si * 3, repeat: Infinity, ease: "linear" }}
                            style={{ transformOrigin: "32px 32px" }}
                          />
                        </svg>

                        {/* Logo image */}
                        <img
                          src={skill.logo}
                          alt={skill.label}
                          className="w-9 h-9 object-contain relative z-10 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => { e.target.style.display = "none" }}
                        />
                      </div>

                      {/* Label */}
                      <span className="font-sans text-xs font-bold text-warm-brown/80 text-center leading-tight">
                        {skill.label}
                      </span>

                      {/* Tiny Ghibli leaf accent */}
                      <span className="absolute top-2 right-2.5 text-[10px] opacity-30 group-hover:opacity-60 transition-opacity">🍃</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
