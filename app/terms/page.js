"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Terms() {
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
            Terms of Service
          </h1>
          
          <p className="text-cyan-500 font-bold text-xs tracking-[0.2em] uppercase mb-12">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="space-y-10 text-gray-300 leading-relaxed text-lg">
            <section>
              <p>
                By creating an account or using the OnBars application and website, you agree to the following terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                Account & Age Requirements
              </h2>
              <p>
                You must be <strong>at least 15 years old</strong> to use OnBars. You are responsible for providing accurate information and maintaining the security of your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                Acceptable Use
              </h2>
              <p>
                OnBars is designed to help users discover outdoor gyms, track workouts, and interact with the calisthenics community. You must not:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Provide false performance data or add fake parks.</li>
                <li>Harass others or post hateful/illegal content.</li>
                <li>Bypass security, automate access, or bulk-extract data (scraping).</li>
              </ul>
              <p className="mt-4">
                Violating these rules may result in immediate suspension or termination of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                Intellectual Property
              </h2>
              <p>
                The "OnBars" trademark, logo, visual identity, app structure, and scoring formula are our property and are protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                User Content
              </h2>
              <p>
                Users may upload content such as workouts, images, and posts. You retain ownership of your content, but grant OnBars a limited, non-exclusive license to host and display it strictly to operate the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                Beta Version & Health Disclaimer
              </h2>
              <p>
                <strong>Beta Version:</strong> The app may be provided as a beta version. Features may change, and bugs may occur during testing.
              </p>
              <p className="mt-4">
                <strong>Health Disclaimer:</strong> The content provided through OnBars is for informational purposes only. OnBars provides no medical advice. You are responsible for your physical condition and train entirely at your own risk. Consult a health professional before engaging in rigorous exercise. OnBars is not responsible for injuries or damages resulting from workouts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                Governing Law & Changes
              </h2>
              <p>
                These terms are governed by the laws of <strong>Greece</strong>. We may update these terms in the future as the platform evolves, and continued use constitutes acceptance of those changes.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </main>
  );
}