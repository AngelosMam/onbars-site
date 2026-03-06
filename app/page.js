export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl font-bold mb-4">
        OnBars
      </h1>

      <p className="text-xl text-gray-300 text-center max-w-xl mb-8">
        Discover parks near you, track your workouts and spread your Aura.
        Join the OnBars beta and start training on bars around the world.
      </p>

      <div className="flex gap-4 mb-12">

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

      <div className="text-center max-w-lg">

        <h2 className="text-2xl font-semibold mb-4">
          Join the Beta
        </h2>

        <input
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black w-full mb-4"
        />

        <button className="bg-white text-black px-6 py-2 rounded font-semibold">
          Join Beta
        </button>

      </div>

    </main>
  )
}