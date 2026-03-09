"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 relative flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* BACK BUTTON */}
      <div className="absolute top-8 left-6 md:left-12">
        <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group">
          <svg className="group-hover:-translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Home
        </Link>
      </div>

      {/* CONTACT CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900/40 border border-zinc-800 p-10 md:p-14 rounded-[2.5rem] text-center max-w-lg w-full backdrop-blur-md group hover:border-cyan-500/50 transition-colors duration-500"
      >
        <div className="w-16 h-16 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-500">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 tracking-tighter">Get in Touch</h1>
        
        <p className="text-gray-400 mb-10 leading-relaxed text-lg">
          For questions, feedback, or closed beta access inquiries, reach out to us.
        </p>
        
        <a 
          href="mailto:onbars.app@gmail.com" 
          className="inline-block w-full sm:w-auto text-lg font-semibold text-white bg-black border border-zinc-700 px-8 py-4 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,234,0.2)] transition-all transform hover:scale-105 active:scale-95"
        >
          onbars.app@gmail.com
        </a>
      </motion.div>

    </main>
  );
}