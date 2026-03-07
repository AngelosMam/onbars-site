export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Privacy Policy
      </h1>

      <p className="text-gray-400 mb-6">
        Last updated: {new Date().getFullYear()}
      </p>

      <p className="text-gray-400 mb-6">
        OnBars respects your privacy and is committed to protecting your personal data.
        This privacy policy explains how we collect, use, and protect your information when you use the OnBars app and website.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Information We Collect
      </h2>

      <p className="text-gray-400 mb-6">
        When using OnBars we may collect information such as your email address,
        workout data, and location data used to display outdoor gyms near you.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        How We Use Your Information
      </h2>

      <p className="text-gray-400 mb-6">
        Your information is used to improve the OnBars platform,
        provide features such as workout tracking and gym discovery,
        and enhance the user experience.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Data Protection
      </h2>

      <p className="text-gray-400 mb-6">
        We take reasonable measures to protect your information
        and prevent unauthorized access or disclosure.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Contact
      </h2>

      <p className="text-gray-400">
        If you have questions regarding this privacy policy,
        please contact us at: onbars.app@gmail.com
      </p>

    </main>
  )
}