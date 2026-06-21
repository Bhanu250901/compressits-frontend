import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload Your File",
      desc: "Choose an image, PDF or supported file from your device.",
      icon: "📤",
    },
    {
      title: "Select Compression or Conversion",
      desc: "Pick the tool you want such as image compression, PDF compression or file conversion.",
      icon: "⚙️",
    },
    {
      title: "Process Instantly",
      desc: "CompressIts quickly processes your file using fast online tools.",
      icon: "⚡",
    },
    {
      title: "Download Result",
      desc: "Download the optimized or converted file immediately.",
      icon: "⬇️",
    },
    {
      title: "Earn Coins",
      desc: "If logged in, you can earn reward coins by using supported tools.",
      icon: "🪙",
    },
    {
      title: "Redeem Rewards",
      desc: "Use your earned coins to submit redeem or withdrawal requests.",
      icon: "🎁",
    },
  ];

  return (
    <>
      <Helmet>
        <title>How CompressIts Works | Compress, Convert & Earn</title>
        <meta
          name="description"
          content="Learn how CompressIts works. Upload files, compress or convert them instantly, download results, and earn coins for rewards."
        />
        <meta
          name="keywords"
          content="how compressits works, compress files online, convert files online, earn coins compressits"
        />
        <link rel="canonical" href="https://compressits.com/how-it-works" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm mb-6">
              <span className="text-3xl">🚀</span>
              <span className="font-medium">How CompressIts Works</span>
            </div>

            <h1 className="text-6xl font-bold mb-4">
              How It Works
            </h1>

            <p className="text-xl text-gray-600">
              Compress, convert and optimize files in just a few simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8"
              >
                <div className="text-5xl mb-5">{step.icon}</div>

                <h2 className="text-2xl font-bold mb-3">
                  Step {index + 1}: {step.title}
                </h2>

                <p className="text-gray-600 leading-7">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-indigo-600 text-white rounded-3xl p-10 text-center shadow-xl mt-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start?
            </h2>

            <p className="text-lg mb-6">
              Upload your file and start compressing or converting instantly.
            </p>

            <Link
              to="/tools"
              className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold"
            >
              Explore Tools
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}