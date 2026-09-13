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
                OnBars respects your privacy and is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR). This privacy policy explains how we collect, use, and protect your information when you use the OnBars mobile application and website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Account Data:</strong> Email address, hashed passwords, or third-party authentication data (e.g., Apple/Google Identity).</li>
                <li><strong>Profile & Performance Data:</strong> Username, date of birth (strictly for age verification), bodyweight, gender, and workout performance metrics.</li>
                <li><strong>User-Generated Content:</strong> Workouts, sessions, park check-ins, ratings, and social feed posts.</li>
              </ul>
            </section>

          <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                2. Device Permissions
              </h2>
              <p>To provide core features, OnBars may request the following device permissions with your explicit consent:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Location Services:</strong> Used to display outdoor gyms near you, verify park check-ins, and update the interactive map. Location data is not continuously tracked in the background.</li>
                <li><strong>Camera & Photo Library:</strong> Used strictly to allow you to upload profile avatars, capture and post workout images or video stories to the feed, and submit photos or videos of new calisthenics parks.</li>
                {/* Remove the Microphone line if you don't actually request mic access! */}
                <li><strong>Microphone:</strong> Used exclusively when recording audio alongside your video stories. We do not listen to or record audio in the background.</li>
                <li><strong>Push Notifications:</strong> Used to alert you about community interactions, new followers, updates to your Aura, and activity at your claimed parks. You can manage or disable these at any time in your device settings.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                3. How We Use Your Information
              </h2>
              <p>
                We process your personal data based on your <strong>consent</strong> (e.g., location and optional profile data), the <strong>necessity to fulfill our contract</strong> (providing app functionality like scoring and leaderboards), and our <strong>legitimate interest</strong> in securing and improving the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                4. Data Storage & Processors
              </h2>
              <p>
                Your data is securely stored using trusted third-party service providers acting as data processors, including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Supabase:</strong> For secure database hosting, user authentication, and media storage.</li>
                <li><strong>Map Providers (e.g., Mapbox):</strong> To render maps and process geographical coordinates for park discovery.</li>
              </ul>
              <p className="mt-4">These providers comply with stringent data protection laws and do not use your personal data for their own marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                5. Data Retention & Account Deletion
              </h2>
              <p>
                We retain your account data for as long as your account is active. You have the right to delete your account and all associated data at any time <strong>directly inside the app settings</strong>. Upon deletion, your personal data, media, and workout history are permanently erased from our databases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                6. Children's Privacy
              </h2>
              <p>
                OnBars is not intended for individuals under the age of 15. We do not knowingly collect personal data from children under 15. If we become aware that a user under 15 has provided us with personal information, we will take steps to delete such information immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                7. Your GDPR Rights
              </h2>
              <p>
                If you reside in the European Economic Area (EEA), you have the right to access, rectify, or erase your personal data. You may also object to processing, request data portability, or withdraw your device permission consents at any time via your device settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-zinc-800 pb-2">
                8. Contact
              </h2>
              <p>
                If you have questions regarding this privacy policy, wish to exercise your rights, or have concerns about your data, please contact us at: <a href="mailto:contact@onbarsapp.com" className="text-cyan-400 hover:underline">contact@onbarsapp.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}