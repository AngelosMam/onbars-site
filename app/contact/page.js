"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "contact@onbarsapp.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        className="bg-zinc-900/40 border border-zinc-800 p-8 md:p-14 rounded-[2.5rem] text-center max-w-lg w-full backdrop-blur-md hover:border-cyan-500/50 transition-colors duration-500 shadow-2xl"
      >
        <div className="w-16 h-16 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-500/20 transition-transform duration-500 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 tracking-tighter">Get in Touch</h1>
        
        <p className="text-gray-400 mb-8 leading-relaxed text-base md:text-lg">
          For questions, support, or beta feedback, drop us a line anytime.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          {/* Direct Mailto link */}
          <a 
            href={`mailto:${email}`} 
            className="flex-1 w-full inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-zinc-950 border border-zinc-700 px-6 py-3.5 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,234,0.2)] transition-all active:scale-95"
          >
            <span>{email}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            title="Copy email to clipboard"
            className="w-full sm:w-auto px-4 py-3.5 rounded-2xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700/60 transition-all active:scale-95 flex items-center justify-center gap-2 text-sm font-medium"
          >
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-cyan-400">Copied!</span>
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

    </main>
  );
}