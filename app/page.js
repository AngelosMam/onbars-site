import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}

      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">

        <Image
          src="/logo.png"
          alt="OnBars Logo"
          width={90}
          height={90}
          className="mb-6"
        />

        <h1 className="text-5xl font-bold mb-6">
          OnBars
        </h1>

        <p className="text-gray-400 max-w-xl text-lg mb-8">
          Discover outdoor gyms near you, track your workouts
          and spread your aura on bars around the world.
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

      <section className="grid md:grid-cols-3 gap-8 px-10 py-16 max-w-6xl mx-auto">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
            Find Outdoor Gyms
          </h3>
          <p className="text-gray-400">
            Explore calisthenics parks around you with an interactive map.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
            Track Workouts
          </h3>
          <p className="text-gray-400">
            Log your sets, reps and exercises directly from the park.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
            Community
          </h3>
          <p className="text-gray-400">
            See other athletes training nearby and join challenges.
          </p>
        </div>

      </section>


      {/* SCREENSHOTS */}

      <section className="text-center px-6 pb-20">

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

        </div>

      </section>


      {/* BETA SIGNUP */}

      <section className="text-center pb-24 px-6">

        <h2 className="text-3xl font-bold mb-4">
          Join the Beta
        </h2>

        <p className="text-gray-400 mb-6">
          Be one of the first athletes testing OnBars.
        </p>

        <input
          placeholder="Enter your email"
          className="px-4 py-3 rounded text-black w-72 mr-2"
        />

        <button className="bg-white text-black px-6 py-3 rounded font-semibold">
          Join
        </button>

      </section>


      {/* FOOTER */}

      <footer className="text-center text-gray-500 pb-10">
        © {new Date().getFullYear()} OnBars
      </footer>

    </main>
  );
}