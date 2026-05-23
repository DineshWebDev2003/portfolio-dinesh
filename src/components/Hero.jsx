import { motion, AnimatePresence } from "framer-motion"
import { Cloud, Leaf, Sparkles, Volume2 } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export default function Hero({ siteRevealed, onReveal }) {
  const videoRef = useRef(null)
  const [blocked, setBlocked] = useState(false)

  // Ensure the video plays immediately on mount
  useEffect(() => {
    if (videoRef.current && !siteRevealed) {
      // Start unmuted during the intro
      videoRef.current.muted = false
      videoRef.current.play().catch(() => {
        setBlocked(true)
      })
    }
  }, [siteRevealed])

  const handleTapPlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.muted = false
      videoRef.current.play()
      setBlocked(false)
    }
  }

  const handleVideoEnded = () => {
    if (!siteRevealed) {
      onReveal()
      // After revealing the site, mute the video and loop it forever
      if (videoRef.current) {
        videoRef.current.muted = true
        videoRef.current.loop = true
        videoRef.current.play().catch(console.error)
      }
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 relative overflow-hidden"
    >
      {/* Floating decorative elements (only visible after reveal to keep intro clean) */}
      <AnimatePresence>
        {siteRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-32 left-8 sm:left-16 text-sky-light/30"
            >
              <Cloud className="w-16 h-16" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-40 right-10 sm:right-20 text-moss/20"
            >
              <Leaf className="w-10 h-10" />
            </motion.div>
            <motion.div
              animate={{ x: [-6, 6, -6], y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-60 right-8 sm:right-16 text-terracotta/15"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-48 left-1/3 text-amber-300/30"
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`max-w-6xl mx-auto w-full transition-all duration-1000 ease-in-out ${
          siteRevealed ? "grid md:grid-cols-2 gap-12 items-center" : "flex flex-col items-center justify-center"
        }`}
      >
        {/* Left Column / Center Intro Column - Avatar & Name */}
        <motion.div
          layout
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className={`flex flex-col items-center ${
            siteRevealed ? "md:items-end text-center md:text-right" : "text-center"
          }`}
        >
          <motion.div layout className="relative mb-6">
            {/* Watercolor frame rings */}
            <div className="absolute inset-0 rounded-full border-2 border-moss/20 scale-110" />
            <div className="absolute inset-0 rounded-full border border-terracotta/15 scale-105" />

            {/* Circular video frame */}
            <div
              className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-wood/20 shadow-lg relative avatar-glow bg-parchment cursor-pointer"
              onClick={blocked ? handleTapPlay : undefined}
            >
              <video
                ref={videoRef}
                src="/smile.mp4"
                className="absolute inset-0 w-full h-full object-cover object-top"
                playsInline
                onEnded={handleVideoEnded}
              />
              {/* Tap-to-play overlay */}
              {blocked && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-full gap-2 z-10"
                >
                  <Volume2 className="w-8 h-8 text-white/90" />
                  <span className="text-white/90 text-xs font-sans font-bold">Tap to play</span>
                </motion.div>
              )}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-moss/5 via-transparent to-sky/5 pointer-events-none" />
            </div>

            {/* Hand-drawn circle accent */}
            <svg
              className="absolute -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
            >
              <motion.circle
                cx="100"
                cy="100"
                r="92"
                stroke="#5B7B5A"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                fill="none"
                opacity="0.3"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Floating badge */}
            <motion.div
              layout
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 bg-moss text-cream text-[10px] font-sans font-bold px-3 py-1.5 rounded-full shadow-md border border-moss-dark/20"
            >
              ✦ Open to work
            </motion.div>
          </motion.div>

          {/* Name badge */}
          <motion.div
            layout
            className="bg-parchment/80 backdrop-blur-sm border border-wood/15 rounded-2xl px-5 py-2.5 shadow-sm mb-2"
          >
            <p className="font-serif text-2xl text-warm-brown">Dinesh</p>
          </motion.div>
          <motion.p layout className="text-wood font-serif text-lg italic">
            Full-Stack Web &amp; Mobile Developer
          </motion.p>

          {/* Small hint to click if video gets stuck or user is impatient */}
          <AnimatePresence>
            {!siteRevealed && !blocked && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{ delay: 4 }}
                onClick={handleVideoEnded}
                className="mt-6 text-sm font-sans text-wood/50 hover:text-moss transition-colors border-b border-transparent hover:border-moss"
              >
                Skip intro
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Column - Intro (Only visible after site reveal) */}
        <AnimatePresence>
          {siteRevealed && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 md:mt-0"
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-brown leading-tight mb-6">
                Welcome to
                <br />
                <span className="text-moss">my little corner</span>
                <br />
                of the web.
              </h1>
              <p className="text-warm-brown/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                I'm a passionate full-stack developer who builds seamless digital
                experiences across web and mobile ecosystems — from React web apps
                to React Native mobile experiences, all crafted with care and
                attention to detail.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block px-8 py-3 bg-moss text-cream rounded-full font-sans text-sm font-semibold shadow-md hover:shadow-lg hover:bg-moss-dark transition-all duration-300"
                >
                  See my work
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block px-8 py-3 border border-wood/25 text-warm-brown/80 rounded-full font-sans text-sm font-semibold hover:bg-parchment/80 transition-all duration-300"
                >
                  Hire me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
