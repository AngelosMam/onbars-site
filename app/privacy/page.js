"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 relative overflow-hidden px-6 py-8">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium mb-12 w-fit group">
          <svg className="group-hover:-translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Home
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/30 border border-zinc-800/50 p-8 md:p-14 rounded-[2.5rem] backdrop-blur-md"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Privacy Policy
          </h1>
          
          <p className="text-cyan-500 font-bold text-xs tracking-[0.2em] uppercase mb-12">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="space-y-10 text-gray-300 leading-relaxed text-lg">
            <section>
              <p>
                OnBars respects your privacy and is committed to protecting your personal data.
                This privacy policy explains how we collect, use, and protect your information when you use the OnBars app and website. 
                Currently, at pre-launch / beta phase, the data controller is the individual publisher of OnBars.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                Information We Collect
              </h2>
              <p>
                When using OnBars, we collect:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Account Data:</strong> Email address, hashed passwords, or Google Identity.</li>
                <li><strong>Profile & Performance Data:</strong> Username, date of birth (for age verification), bodyweight, gender, and workout performance (e.g., max pull-ups, dips).</li>
                <li><strong>Content:</strong> Workouts, sessions, park check-ins, ratings, and posts.</li>
                <li><strong>Location Data:</strong> Used strictly with your device OS permission to display outdoor gyms and parks near you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                How We Use Your Information & Legal Basis
              </h2>
              <p>
                Your information is used to improve the OnBars platform, provide features such as workout tracking, scoring, leaderboards, and gym discovery. We process your personal data based on your <strong>consent</strong> (for location and optional profile data), the <strong>necessity to provide our services</strong> (contract), and our <strong>legitimate interest</strong> in securing and improving the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                Data Storage, Processors & Retention
              </h2>
              <p>
                Your data is securely stored using trusted third-party services such as <strong>Supabase</strong> (Database & Authentication) and map providers for location features. These providers process data on our behalf and comply with applicable data protection laws.
              </p>
              <p className="mt-4">
                <strong>Data Retention:</strong> We keep your account data until you decide to delete your account. Upon account deletion, your personal data is permanently erased (cascading database delete and storage purge).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal data directly through the app settings. You may also request data portability or withdraw your consent (e.g., location tracking) at any time through your device settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                Contact
              </h2>
              <p>
                If you have questions regarding this privacy policy or your data,
                please contact us at: <a href="mailto:contact@onbarsapp.com" className="text-cyan-400 hover:underline">contact@onbarsapp.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}