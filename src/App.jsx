import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const [siteRevealed, setSiteRevealed] = useState(false)

  // Handle body scroll locking while intro is playing
  useEffect(() => {
    if (!siteRevealed) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [siteRevealed])

  return (
    <div className="min-h-screen bg-cream font-sans text-warm-brown relative">
      <AnimatePresence>
        {siteRevealed && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero manages the intro video and triggers the reveal */}
        <Hero siteRevealed={siteRevealed} onReveal={() => setSiteRevealed(true)} />
        
        {/* Rest of the site only renders after the intro video completes */}
        {siteRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </motion.div>
        )}
      </main>
      
      {siteRevealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Footer />
          
          {/* Floating WhatsApp Button */}
          <motion.a
            href="https://wa.me/919361229641?text=Hi%20Dinesh!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you."
            target="_blank"
            rel="noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[60] w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg border-2 border-white overflow-hidden bg-cream hover:shadow-xl transition-all cursor-pointer group"
            aria-label="Chat on WhatsApp"
          >
            <div className="absolute inset-0 bg-moss/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
            <img 
              src="/whatsapp_ghibli.png" 
              alt="WhatsApp" 
              className="w-full h-full object-cover relative z-10" 
            />
            {/* Ping effect behind */}
            <span className="absolute -inset-1 rounded-full border-2 border-moss/40 animate-ping z-0" style={{ animationDuration: '3s' }} />
          </motion.a>
        </motion.div>
      )}
    </div>
  )
}
