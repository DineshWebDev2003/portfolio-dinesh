import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Feather, Mail } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [focused, setFocused] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)
    formData.append("access_key", "857dc414-c856-4d01-aa2e-54cb0b743f99")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setForm({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        console.error("Web3Forms Error:", data)
        alert("Something went wrong. Please try again or use the WhatsApp button!")
      }
    } catch (error) {
      console.error("Submit Error:", error)
      alert("There was an error sending your message.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-warm-brown mb-3">
            The Mailbox
          </h2>
          <div className="flex items-center justify-center gap-2 text-wood/40">
            <span className="w-12 h-px bg-wood/20" />
            <Mail className="w-4 h-4" />
            <span className="w-12 h-px bg-wood/20" />
          </div>
          <p className="text-warm-brown/60 text-sm mt-3 max-w-md mx-auto">
            Drop a letter — I'd love to hear from you
          </p>
        </motion.div>

        {/* Envelope-style form container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          {/* Decorative top flap */}
          <div className="absolute -top-3 left-8 right-8 h-6 bg-parchment/60 rounded-t-2xl border border-wood/10 border-b-0" />

          <div className="bg-gradient-to-br from-parchment/60 via-cream to-parchment/40 rounded-3xl border border-wood/15 p-8 sm:p-10 shadow-md relative">
            {/* Corner decorations */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-wood/10 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-wood/10 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-wood/10 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-wood/10 rounded-br-lg" />

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label className="block text-xs font-sans font-semibold text-wood/60 uppercase tracking-wider mb-1.5 ml-1">
                  Your Name
                </label>
                <motion.div
                  animate={focused === "name" ? { scale: 1.01 } : { scale: 1 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="e.g. Howl Jenkins"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/60 border border-wood/15 text-warm-brown placeholder-wood/30 text-sm font-sans outline-none transition-all duration-300 focus:bg-white/80 focus:border-moss/30 focus:shadow-[0_0_0_4px_rgba(91,123,90,0.08)]"
                  />
                </motion.div>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-wood/60 uppercase tracking-wider mb-1.5 ml-1">
                  Your Email
                </label>
                <motion.div
                  animate={focused === "email" ? { scale: 1.01 } : { scale: 1 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="e.g. dinesh.mahi.dev@gmail.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/60 border border-wood/15 text-warm-brown placeholder-wood/30 text-sm font-sans outline-none transition-all duration-300 focus:bg-white/80 focus:border-moss/30 focus:shadow-[0_0_0_4px_rgba(91,123,90,0.08)]"
                  />
                </motion.div>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-wood/60 uppercase tracking-wider mb-1.5 ml-1">
                  Your Message
                </label>
                <motion.div
                  animate={focused === "message" ? { scale: 1.01 } : { scale: 1 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/60 border border-wood/15 text-warm-brown placeholder-wood/30 text-sm font-sans outline-none transition-all duration-300 focus:bg-white/80 focus:border-moss/30 focus:shadow-[0_0_0_4px_rgba(91,123,90,0.08)] resize-none"
                  />
                </motion.div>
              </div>

              <div className="flex justify-center pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.93 }}
                  animate={submitted ? { scale: [1, 0.92, 1.04, 1] } : {}}
                  transition={{ duration: 0.4 }}
                  className={`flex items-center gap-2.5 px-8 py-3.5 rounded-full text-cream text-sm font-sans font-semibold shadow-md transition-all duration-300 cursor-pointer ${
                    isSubmitting ? "bg-wood/50 cursor-wait" : "bg-terracotta hover:shadow-lg hover:bg-terracotta-dark"
                  }`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : submitted ? (
                    <>
                      <Feather className="w-4 h-4" />
                      Letter Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Letter
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
