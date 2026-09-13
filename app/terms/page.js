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
                By creating an account or using the OnBars application and website, you agree to be bound by these Terms of Service. If you do not agree, do not use the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                1. Account & Age Requirements
              </h2>
              <p>
                You must be <strong>at least 15 years old</strong> to use OnBars. You are responsible for providing accurate information, maintaining the security of your account credentials, and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                2. User-Generated Content (UGC) & Moderation
              </h2>
              <p>
                OnBars allows users to upload content, post in feeds, and interact with others. <strong>We have a zero-tolerance policy for objectionable content and abusive users.</strong> You must not:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Post defamatory, hateful, discriminatory, explicit, or illegal content.</li>
                <li>Harass, bully, or threaten other users.</li>
                <li>Provide false performance data or add fake/spam parks to the map.</li>
              </ul>
              <p className="mt-4">
                <strong>Reporting & Blocking:</strong> Users can flag inappropriate content and block abusive users directly within the app. OnBars reserves the right to review flagged content and suspend or permanently terminate accounts violating these terms, without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                3. Acceptable Use
              </h2>
              <p>
                You agree not to bypass our security measures, reverse engineer the app, automate access, or bulk-extract data (scraping). You retain ownership of your content, but grant OnBars a limited, non-exclusive, worldwide license to host and display it to operate the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                4. Intellectual Property
              </h2>
              <p>
                The "OnBars" trademark, logo, visual identity, app structure, Aura scoring formula, and original assets are our exclusive property and are protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                5. Health Disclaimer
              </h2>
              <p>
                The content provided through OnBars is for informational and tracking purposes only. <strong>OnBars provides no medical advice.</strong> You are entirely responsible for your physical condition and train at your own risk. Consult a health professional before engaging in rigorous exercise. OnBars is not responsible for any injuries, health complications, or damages resulting from workouts logged or parks visited through the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                6. Limitation of Liability & "As Is" Service
              </h2>
              <p>
                OnBars is provided on an "AS IS" and "AS AVAILABLE" basis. We do not warrant that the app will be uninterrupted, error-free, or completely secure. To the maximum extent permitted by law, OnBars and its creators shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                7. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of <strong>Greece</strong>. We reserve the right to update these terms at any time. Continued use of the app after updates constitutes your acceptance of the revised terms.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </main>
  );
}