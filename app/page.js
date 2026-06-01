"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // State για το Mobile Menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State για να δείξουμε ένα μήνυμα επιτυχίας στη φόρμα
  const [formStatus, setFormStatus] = useState("");

  // Συνάρτηση για ομαλό scroll στα sections (Διορθωμένη για mobile)
  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault(); 
    
    // 1. Κλείνουμε το burger menu
    setIsMobileMenuOpen(false); 

    // 2. Δίνουμε 150ms χρόνο στο React να κλείσει το μενού ΠΡΙΝ ξεκινήσει το scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Στέλνει τα δεδομένα στο Formspree χωρίς να αλλάξει σελίδα
      await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      // Αλλάζουμε το status σε success για να εμφανιστούν τα κουμπιά
      setFormStatus("success");
      form.reset();
      
    } catch (error) {
      console.error("Σφάλμα κατά την υποβολή:", error);
      setFormStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* NAV BAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-xl border-b border-zinc-800/50 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 font-bold text-xl tracking-tighter">
            <img src="/logo.png" width="32" alt="OnBars" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
            OnBars
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-white transition-colors cursor-pointer">How it works</a>
            <a href="#preview" onClick={(e) => scrollToSection(e, 'preview')} className="hover:text-white transition-colors cursor-pointer">App</a>
            <a href="#beta" onClick={(e) => scrollToSection(e, 'beta')} className="hover:text-white transition-colors cursor-pointer">Beta</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-zinc-800/50 bg-black/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-gray-400">
                <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-white py-2 cursor-pointer">How it works</a>
                <a href="#preview" onClick={(e) => scrollToSection(e, 'preview')} className="hover:text-white py-2 cursor-pointer">App</a>
                <a href="#beta" onClick={(e) => scrollToSection(e, 'beta')} className="hover:text-white py-2 cursor-pointer">Beta</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-20">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.25, 
            rotate: [0, -2, 2, 0],
            filter: "drop-shadow(0 0 30px rgba(59, 131, 246, 0.84))"
          }}
          className="cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="OnBars Logo"
            width={220}
            height={220}
            className="mb-10 transition-all duration-300"
          />
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
          {...fadeIn}
        >
          OnBars
        </motion.h1>

        <motion.div 
          className="px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8"
          {...fadeIn}
        >
          Closed Beta Now Live
        </motion.div>

        <motion.p 
          className="text-gray-400 max-w-2xl text-lg md:text-xl mb-10 leading-relaxed"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Discover calisthenics parks near you, track your workouts
          and compete with other athletes by spreading your <span className="text-white font-semibold italic">Aura</span> across the map.
        </motion.p>

        {/* HERO BUTTONS */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          {...fadeIn}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#beta"
            onClick={(e) => scrollToSection(e, 'beta')}
            className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-green-400 hover:shadow-[0_0_25px_rgba(34,211,0,0.6)] transition-all transform hover:scale-105 active:scale-95"
          >
            Get Android Beta
          </a>
          <a 
            href="#beta"
            onClick={(e) => scrollToSection(e, 'beta')}
            className="bg-zinc-900 border border-zinc-700 text-white px-8 py-4 rounded-2xl font-bold hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,234,0.6)] transition-all transform hover:scale-105 active:scale-95"
          >
            Get iOS Beta
          </a>
        </motion.div>
      </section>

      {/* STATS STRIP */}
      <motion.div 
        className="border-y border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm py-12 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
          <span className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-2">
            65,000+
          </span>
          <p className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs">
            Calisthenics Parks Registered
          </p>
        </div>
      </motion.div>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "1. Find Parks", 
              desc: "Explore parks with an interactive map. See each park’s aura and who currently leads it.",
              color: "hover:border-blue-500/50"
            },
            { 
              title: "2. Track Progress", 
              desc: "Log your sets, reps, and exercises while staying within the park’s active range.",
              color: "hover:border-green-500/50"
            },
            { 
              title: "3. Aura System", 
              desc: "Level up your Aura, claim parks, and change the pin colors to dominate the map.",
              color: "hover:border-purple-500/50"
            },
            { 
              title: "4. Global Feed", 
              desc: "Stay updated with local athletes, posts, and community events through the Bars Feed.",
              color: "hover:border-pink-500/50"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className={`bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl transition-all duration-300 ${feature.color} group`}
              whileHover={{ y: -10 }}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SCREENSHOTS / PREVIEW */}
      <section id="preview" className="px-6 py-24 bg-zinc-900/20">
        <motion.h2 className="text-4xl font-bold text-center mb-16" {...fadeIn}>
          App Preview
        </motion.h2>

        <div className="flex overflow-x-auto pb-12 pt-4 snap-x snap-mandatory gap-6 md:gap-12 md:flex-wrap md:justify-center max-w-7xl mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {[
            { src: "/screen1.png", color: "from-blue-500 to-cyan-400" },
            { src: "/screen2.png", color: "from-green-500 to-green-400" },
            { src: "/screen3.png", color: "from-purple-500 to-purple-400" },
            { src: "/screen4.png", color: "from-pink-500 to-pink-400" },
            { src: "/screen5.png", color: "from-blue-500 to-cyan-400" },
            { src: "/screen6.png", color: "from-green-500 to-green-400" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="relative group cursor-pointer shrink-0 snap-center first:ml-4 last:mr-4 md:first:ml-0 md:last:mr-0"
            >
              <div className={`absolute -inset-1 bg-gradient-to-b ${item.color} rounded-[2.5rem] blur opacity-0 group-hover:opacity-40 transition duration-500`}></div>
              
              <Image
                src={item.src}
                alt={`Preview ${i+1}`}
                width={260}
                height={520}
                className="relative rounded-[2rem] border-[6px] border-zinc-900 shadow-2xl transition-all duration-500 group-hover:border-zinc-800"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* BETA SIGNUP SECTION */}
      <section id="beta" className="max-w-5xl mx-auto px-6 py-32 text-center">
        <motion.div 
          className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 p-8 md:p-12 rounded-[3rem] relative overflow-hidden"
          {...fadeIn}
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/20 blur-[80px] -z-10"></div>
          
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Join the Beta</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-sm md:text-base">
            Select your platform below to get instant access, install the app, and start spreading your Aura.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-stretch">
            
            {/* ANDROID BLOCK (GOOGLE GROUPS) */}
            <div className="bg-zinc-950/50 border border-zinc-800/80 p-8 rounded-3xl flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider">
                    Android
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Google Play Beta</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Due to Google Play's closed testing rules, follow these two simple steps to automatically whitelist your email for direct access.
                </p>

                {/* Android Steps */}
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 text-xs font-bold text-gray-300 mt-0.5">1</div>
                    <p className="text-gray-300 text-sm">
                      Join our Google Group using your Android phone's primary Google account.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 text-xs font-bold text-gray-300 mt-0.5">2</div>
                    <p className="text-gray-300 text-sm">
                      Click the "Become a Tester" web invite link below to unlock the direct Play Store download.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Android */}
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href="https://groups.google.com/g/onbars-testers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-zinc-900 border border-zinc-700 text-white px-6 py-3.5 rounded-xl font-bold hover:border-cyan-500 hover:text-cyan-400 transition-all text-sm"
                >
                  1. Join Google Group
                </a>
                <a
                  href="https://play.google.com/apps/testing/com.onbars.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-white text-black px-6 py-3.5 rounded-xl font-bold hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,211,0,0.4)] transition-all text-sm transform active:scale-95"
                >
                  2. Become a Tester & Download
                </a>
              </div>
            </div>

            {/* IOS BLOCK (FORMSPREE FUNNEL) */}
            <div className="bg-zinc-950/50 border border-zinc-800/80 p-8 rounded-3xl flex flex-col justify-between backdrop-blur-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">
                    iOS
                  </span>
                  <span className="text-xs text-gray-500 font-medium">10,000 spots open</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Apple TestFlight</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Enter your email below to unlock immediate access to our global TestFlight track and receive early feature notifications.
                </p>
              </div>

              {/* Form Status Content */}
              <div className="mt-auto">
                {formStatus === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-center">
                      <p className="text-cyan-400 text-sm font-semibold">Welcome to OnBars! ⚡</p>
                    </div>
                    <a 
                      href="https://testflight.apple.com/join/f4DafGEU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-bold hover:shadow-[0_0_25px_rgba(34,211,234,0.4)] transition-all text-sm transform active:scale-95"
                    >
                      Download via TestFlight
                    </a>
                  </motion.div>
                ) : (
                  <form
                    action="https://formspree.io/f/mqeyebjq"
                    method="POST"
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-3"
                  >
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your Apple ID email"
                      className="w-full px-5 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white outline-none focus:border-cyan-500 transition-all text-sm"
                    />
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full bg-zinc-800 border border-zinc-700 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all disabled:opacity-50 text-sm"
                    >
                      {formStatus === "submitting" ? "Processing..." : "Unlock iOS Access"}
                    </button>
                    {formStatus === "error" && (
                      <p className="text-red-400 text-xs mt-1 text-center font-medium">
                        Oops! Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto px-6 pb-32 text-center opacity-80">
        <h2 className="text-2xl font-bold mb-6">About OnBars</h2>
        <p className="text-gray-500 leading-relaxed italic">
          <strong className="text-white">OnBars</strong> started with a simple goal: build the ultimate calisthenics app for athletes training on bars around the world. 
          We wanted more than just a workout tracker — we wanted a platform where athletes can discover calisthenics parks, track their progress and connect with the global calisthenics community. 
          OnBars is also designed to feel like a game. Level up your Aura and compete with other athletes by claiming calisthenics parks and spreading your Aura across the map. 
          We’ve poured our passion, time and soul into building this project, and during the beta your feedback will help shape the future of <strong className="text-white">OnBars</strong>.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 pt-16 pb-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-500 text-sm">
             © {new Date().getFullYear()} OnBars. Spread your Aura.
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}