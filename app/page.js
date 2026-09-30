"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [androidFormStatus, setAndroidFormStatus] = useState("");
  const [iosFormStatus, setIosFormStatus] = useState("");

  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/soundtrack.mp3");
    audioRef.current.loop = true; 
    audioRef.current.volume = 0;  

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const playAudioWithFadeIn = () => {
    if (!audioRef.current) return;
    
    audioRef.current.play().then(() => {
      setIsAudioPlaying(true);
      
      let volume = 0;
      const targetVolume = 0.4; 
      
      const fadeInterval = setInterval(() => {
        if (volume < targetVolume) {
          volume += 0.05;
          audioRef.current.volume = Math.min(volume, targetVolume);
        } else {
          clearInterval(fadeInterval);
        }
      }, 250); 
    }).catch((error) => {
      console.log("Το Autoplay μπλοκαρίστηκε από τον browser:", error);
    });
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
      setIsAudioPlaying(true);
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        playAudioWithFadeIn();
      }
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("scroll", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [hasInteracted]);

  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault(); 
    setIsMobileMenuOpen(false); 

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

  const handleFormSubmit = async (e, platform) => {
    e.preventDefault();
    
    const setStatus = platform === 'Android' ? setAndroidFormStatus : setIosFormStatus;
    setStatus("submitting");

    const form = e.target;
    const email = form.email.value;

    try {
      const response = await fetch("/api/beta-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, platform }),
      });

      if (!response.ok) {
        throw new Error("Αποτυχία εγγραφής");
      }

      setStatus("success");
      form.reset();
      
    } catch (error) {
      console.error("Σφάλμα κατά την υποβολή:", error);
      setStatus("error");
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
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-white transition-colors cursor-pointer">How it works</a>
              <a href="#preview" onClick={(e) => scrollToSection(e, 'preview')} className="hover:text-white transition-colors cursor-pointer">App</a>
              <a href="#auras" onClick={(e) => scrollToSection(e, 'auras')} className="hover:text-white transition-colors cursor-pointer">Auras</a>
              <a href="#download" onClick={(e) => scrollToSection(e, 'download')} className="hover:text-white transition-colors cursor-pointer">Download</a>
              
              <a 
                href="https://instagram.com/onbarsapp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer border-l border-zinc-800 pl-8 ml-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
            </div>

            <button 
              onClick={toggleAudio}
              className="text-cyan-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-800/50"
              title={isAudioPlaying ? "Mute soundtrack" : "Play soundtrack"}
            >
              {isAudioPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              )}
            </button>

            <button 
              className="md:hidden text-gray-400 hover:text-white p-2"
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
        </div>

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
                <a href="#auras" onClick={(e) => scrollToSection(e, 'auras')} className="hover:text-white py-2 cursor-pointer">Auras</a>
                <a href="#download" onClick={(e) => scrollToSection(e, 'download')} className="hover:text-white py-2 cursor-pointer">Download</a>
                
                <a 
                  href="https://instagram.com/onbarsapp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-white py-2 cursor-pointer border-t border-zinc-800/50 mt-2 pt-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-12">
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
          Available Now
        </motion.div>

        <motion.p 
          className="text-gray-400 max-w-2xl text-lg md:text-xl mb-10 leading-relaxed"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Discover calisthenics parks near you, track your workouts
          and compete with other athletes by spreading your <span className="text-white font-semibold italic">Aura</span> across the map.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          {...fadeIn}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#download"
            onClick={(e) => scrollToSection(e, 'download')}
            className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-green-400 hover:shadow-[0_0_25px_rgba(34,211,0,0.6)] transition-all transform hover:scale-105 active:scale-95"
          >
            Get it on Android
          </a>
          <a 
            href="#download"
            onClick={(e) => scrollToSection(e, 'download')}
            className="bg-zinc-900 border border-zinc-700 text-white px-8 py-4 rounded-2xl font-bold hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(34,211,234,0.6)] transition-all transform hover:scale-105 active:scale-95"
          >
            Get it on iOS
          </a>
        </motion.div>
      </section>

      {/* METRIC STRIP */}
      <motion.div 
        className="border-y border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm py-10 my-6"
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
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
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

      {/* APP PREVIEW */}
<section id="preview" className="px-6 py-20 bg-zinc-900/20">
  <motion.h2 className="text-4xl font-bold text-center mb-10 md:mb-16" {...fadeIn}>
    App Preview
  </motion.h2>

  {/* Added p-6 -m-6 so glow and scale don't get clipped by the container edges */}
  <div className="flex overflow-x-auto p-6 -m-6 snap-x snap-mandatory gap-6 md:gap-12 md:flex-wrap md:justify-center max-w-7xl mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    {[
      { src: "/screen1.png", color: "from-blue-500 to-cyan-400" },
      { src: "/screen2.png", color: "from-green-500 to-green-400" },
      { src: "/screen3.png", color: "from-purple-500 to-purple-400" },
      { src: "/screen4.png", color: "from-pink-500 to-pink-400" },
      { src: "/screen5.png", color: "from-blue-500 to-cyan-400" },
      { src: "/screen6.png", color: "from-green-500 to-green-400" },
      { src: "/screen7.png", color: "from-purple-500 to-purple-400" },
      { src: "/screen8.png", color: "from-pink-500 to-pink-400" }
    ].map((item, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ y: -15 }}
        whileTap={{ scale: 0.96, y: -5 }}
        onContextMenu={(e) => e.preventDefault()}
        className="relative group cursor-pointer shrink-0 snap-center first:ml-4 last:mr-4 md:first:ml-0 md:last:mr-0 select-none [webkit-tap-highlight-color:transparent] [webkit-touch-callout:none]"
      >
        <div className={`absolute -inset-1 bg-gradient-to-b ${item.color} rounded-[2.5rem] blur opacity-0 group-hover:opacity-40 group-active:opacity-60 transition duration-300`}></div>
        
        <Image
          src={item.src}
          alt={`Preview ${i+1}`}
          width={260}
          height={520}
          draggable={false}
          className="relative rounded-[2rem] border-[6px] border-zinc-900 shadow-2xl transition-all duration-300 group-hover:border-zinc-800 group-active:border-zinc-700 pointer-events-none"
        />
      </motion.div>
    ))}
  </div>
</section>

      {/* AURA TYPES */}
<section id="auras" className="px-6 py-20 bg-transparent">
  <motion.h2 className="text-4xl font-bold text-center mb-10 md:mb-16" {...fadeIn}>
    Aura Types
  </motion.h2>

  <div className="flex overflow-x-auto p-6 -m-6 snap-x snap-mandatory gap-6 md:gap-10 md:flex-wrap md:justify-center max-w-7xl mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    {[
      { src: "/PHOENIX.png", color: "from-pink-500 to-pink-400" },
      { src: "/POSEIDON.png", color: "from-blue-500 to-cyan-400" },
      { src: "/PHANTOM.png", color: "from-purple-500 to-purple-400" },
      { src: "/PRIMAL.png", color: "from-green-500 to-green-400" }
    ].map((item, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ y: -15 }}
        whileTap={{ scale: 0.96, y: -5 }}
        onContextMenu={(e) => e.preventDefault()}
        className="relative group cursor-pointer shrink-0 snap-center first:ml-4 last:mr-4 md:first:ml-0 md:last:mr-0 select-none [webkit-tap-highlight-color:transparent] [webkit-touch-callout:none]"
      >
        <div className={`absolute -inset-1 bg-gradient-to-b ${item.color} rounded-[2.5rem] blur opacity-0 group-hover:opacity-40 group-active:opacity-60 transition duration-300`}></div>
        
        <Image
          src={item.src}
          alt={`Aura Preview ${i+1}`}
          width={260}
          height={520}
          draggable={false}
          className="relative rounded-[2rem] border-[6px] border-zinc-900 shadow-2xl transition-all duration-300 group-hover:border-zinc-800 group-active:border-zinc-700 pointer-events-none"
        />
      </motion.div>
    ))}
  </div>
</section>

      {/* DOWNLOAD SECTION */}
<section id="download" className="max-w-5xl mx-auto px-6 py-24 text-center">
  <motion.div 
    className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 p-8 md:p-12 rounded-[3rem] relative overflow-hidden"
    {...fadeIn}
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/20 blur-[80px] -z-10"></div>
    
    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
      Download OnBars Today
    </h2>
    <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
      Find local calisthenics spots, track your workouts, level up your Aura, and claim your local bars. Available now on iOS & Android.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      
      {/* ANDROID BLOCK */}
      <div className="bg-zinc-950/60 border border-zinc-800 p-8 rounded-3xl flex flex-col justify-between backdrop-blur-sm hover:border-green-500/50 transition-all">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider">
              Android
            </span>
            <span className="text-xs text-green-400 font-medium flex items-center gap-1">
              ● Live on Google Play
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 text-left">Google Play</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed text-left">
            Get OnBars for Android devices and start mapping your spots.
          </p>
        </div>

        <a 
          href="https://play.google.com/store/apps/details?id=com.people.on.bars"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-white text-black px-6 py-4 rounded-xl font-bold hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,211,0,0.4)] transition-all text-sm transform active:scale-95 block"
        >
          Download on Google Play
        </a>
      </div>

      {/* IOS BLOCK */}
      <div className="bg-zinc-950/60 border border-zinc-800 p-8 rounded-3xl flex flex-col justify-between backdrop-blur-sm hover:border-cyan-500/50 transition-all">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              iOS
            </span>
            <span className="text-xs text-green-400 font-medium flex items-center gap-1">
              ● Live on App Store
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 text-left">App Store</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed text-left">
            Get OnBars for iPhone and join the global street workout movement.
          </p>
        </div>

        <a 
          href="https://apps.apple.com/app/onbars/id6772950325"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-bold hover:shadow-[0_0_25px_rgba(34,211,234,0.4)] transition-all text-sm transform active:scale-95 block"
        >
          Download on App Store
        </a>
      </div>

    </div>
  </motion.div>
</section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-3xl mx-auto px-6 pb-24 text-center opacity-80">
        <h2 className="text-2xl font-bold mb-6">About OnBars</h2>
        <p className="text-gray-500 leading-relaxed italic">
          <strong className="text-white">OnBars</strong> started with a simple goal: build the ultimate calisthenics app for athletes training on bars around the world. 
          We wanted more than just a workout tracker — we wanted a platform where athletes can discover calisthenics parks, track their progress and connect with the global calisthenics community. 
          OnBars is also designed to feel like a game. Level up your Aura and compete with other athletes by claiming calisthenics parks and spreading your Aura across the map. 
          We’ve poured our passion, time and soul into building this project, and your continuous feedback helps shape the future of <strong className="text-white">OnBars</strong>.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 pt-16 pb-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-500 text-sm">
             © {new Date().getFullYear()} OnBars. Spread your Aura.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-gray-500">
            <a 
              href="https://instagram.com/onbarsapp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}