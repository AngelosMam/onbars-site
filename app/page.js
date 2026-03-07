import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}

      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur border-b border-zinc-800 z-50">

  <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

    <div className="flex items-center gap-3 font-semibold text-lg">
      <img src="/logo.png" width="28" />
      OnBars
    </div>

    <div className="flex gap-6 text-gray-400">

      <a href="#features" className="hover:text-white">
        How it works
      </a>

      <a href="#preview" className="hover:text-white">
        App
      </a>

      <a href="#beta" className="hover:text-white">
        Beta
      </a>

    </div>

  </div>

</nav>

      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-4">

        <Image
          src="/logo.png"
          alt="OnBars Logo"
          width={300}
          height={300}
          className="mb-6 drop-shadow-xl"
        />

        <h1 className="text-6xl font-bold mb-2 tracking-tight">
          OnBars
        </h1>
        <p className="text-cyan-600 text-sm mb-8">
  Closed Beta
</p>

        <p className="text-gray-400 max-w-xl text-lg mb-8">
          Discover calisthenics parks near you, track your workouts
          and compete with other athletes by spreading your Aura across the map.
        </p>

        <div className="flex gap-4">

          <a
            href="#"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
          >
            Download Android
          </a>

          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            Download iOS
          </a>

        </div>

      </section>


      {/* FEATURES */}
      

      <section id="features" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-16 max-w-6xl mx-auto">
        

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
            1. Find Calisthenics Parks
          </h3>
          <p className="text-gray-400">
            Explore calisthenics parks around you with an interactive map.
See each park’s aura, discover its community vibe, and check who currently leads the park.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
            2. Train & Track Workouts
          </h3>
          <p className="text-gray-400">
            Log your sets, reps, and exercises while staying within the park’s active range.
A high‑performance logging system for specialized skills like Front Lever, Planche, and Muscle‑ups.
          </p>
        </div>
        

 <div className="bg-zinc-900 p-6 rounded-xl">
  <h3 className="text-xl font-semibold mb-3">
    3. Aura & Gamification
  </h3>
  <p className="text-gray-400">
    Level up your Aura, claim calisthenics parks and earn special rewards. 
    Leaders can change the color of park pins with their Aura color, dominate the map and unlock features.
  </p>
</div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
            4. Community
          </h3>
          <p className="text-gray-400">
            See what's happening nearby in the bars world, discover local athletes, posts and game events through the Bars Feed.
          </p>
        </div>

       

        

      </section>


      {/* SCREENSHOTS */}

      <section id="preview" className="text-center px-6 pb-20">

        <h2 className="text-3xl font-bold mb-10">
          App Preview
        </h2>

        <div className="flex flex-wrap justify-center gap-8">

          <Image
            src="/screen1.png"
            alt="Map Screen"
            width={250}
            height={500}
            className="rounded-xl"
          />

          <Image
            src="/screen2.png"
            alt="Workout Screen"
            width={250}
            height={500}
            className="rounded-xl"
          />
          

          <Image
            src="/screen3.png"
            alt="Park Screen"
            width={250}
            height={500}
            className="rounded-xl"
          />

          <Image
            src="/screen4.png"
            alt="Park Screen"
            width={250}
            height={500}
            className="rounded-xl"
          />

        </div>

      </section>


      {/* BETA SIGNUP */}

      <section id="beta" className="text-center pb-24 px-6">

        <h2 className="text-3xl font-bold mb-4">
          Join the Beta
        </h2>

        <p className="text-gray-400 mb-6">
          Limited spots available for early athletes.
        </p>

       <input
  placeholder="Enter your email"
  className="px-4 py-3 rounded bg-zinc-800 text-white w-72 mr-2 outline-none border border-zinc-700 focus:border-white"
/>

        <button className="bg-white text-black px-6 py-3 rounded font-semibold">
          Join
        </button>

      </section>
     <section className="max-w-3xl mx-auto px-6 pb-24 text-center">

  <h2 className="text-3xl font-bold mb-3">
    About OnBars
  </h2>

  <p className="text-gray-500 leading-relaxed text-md italic">
    <strong className="text-white">OnBars</strong> started with a simple goal: build the ultimate calisthenics app for athletes training on bars around the world. 
    We wanted more than just a workout tracker — we wanted a platform where athletes can discover calisthenics parks, track their progress and connect with the global calisthenics community. 
    OnBars is also designed to feel like a game. Level up your Aura and compete with other athletes by claiming calisthenics parks and spreading your Aura across the map. 
    We’ve poured our passion, time and soul into building this project, and during the beta your feedback will help shape the future of <strong className="text-white">OnBars</strong>.
  </p>

</section>


      {/* FOOTER */}

      <footer className="text-center text-gray-500 pb-10 space-x-6">

  <a href="/privacy" className="hover:text-white">
    Privacy
  </a>

  <a href="/terms" className="hover:text-white">
    Terms
  </a>

  <a href="/contact" className="hover:text-white">
    Contact
  </a>

</footer>

      <footer className="text-center text-gray-500 pb-10">
        © {new Date().getFullYear()} OnBars
      </footer>
      
      

    </main>
  );
}