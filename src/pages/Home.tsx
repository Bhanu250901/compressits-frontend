import ToolCard from "../components/ui/ToolCard";

import {
  Image,
  FileText,
  RefreshCw
} from "lucide-react";

import {
  Helmet
} from "react-helmet-async";

export default function Home() {
  return (
    <>
  <Helmet>

    <title>
      compressits - Free Image & PDF Compressor
    </title>

    <meta
      name="description"
      content="Compress images, PDFs and convert files online for free. Earn reward coins while using compressit."
    />

    <meta
      property="og:title"
      content="compressits - Free File Tools"
    />

    <meta
      property="og:description"
      content="Compress and convert files instantly online."
    />

  </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">

      {/* Hero Section */}
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-medium">
              Free • Fast • Secure
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Compress, Convert
            <br />
            <span className="text-blue-600">
              & Earn Coins
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Best free online file tools. Reduce file size,
            convert formats, and earn reward coins with
            every action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="/image-compress"
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-3xl transition-all shadow-lg shadow-blue-200"
            >
              Compress Image Now
            </a>

            <a
              href="/convert"
              className="px-10 py-5 border-2 border-gray-800 hover:bg-gray-900 hover:text-white text-xl font-semibold rounded-3xl transition-all"
            >
              Image Convert to JPG-PNG-WEBP
            </a>

          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          Trusted by thousands • No signup needed for basic use
        </div>
      </div>

      {/* Features */}
      <div className="py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Users Love compressits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition">
              <div className="text-4xl mb-4">⚡</div>

              <h3 className="text-2xl font-semibold mb-3">
                Lightning Fast
              </h3>

              <p className="text-gray-600">
                Compress large images and PDFs in seconds
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition">
              <div className="text-4xl mb-4">🔒</div>

              <h3 className="text-2xl font-semibold mb-3">
                100% Secure
              </h3>

              <p className="text-gray-600">
                Your files are deleted automatically after processing
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl hover:shadow-xl transition">
              <div className="text-4xl mb-4">🪙</div>

              <h3 className="text-2xl font-semibold mb-3">
                Earn While Using
              </h3>

              <p className="text-gray-600">
                Get coins for every compression & conversion
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Popular Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <ToolCard
              icon={<Image size={40} />}
              title="Image Compressor"
              description="Compress JPG, PNG, WEBP images instantly without losing quality."
              link="/image-compress"
            />

            <ToolCard
              icon={<FileText size={40} />}
              title="PDF Compressor"
              description="Reduce PDF file size quickly and securely online."
              link="/pdf-compress"
            />

            <ToolCard
              icon={<RefreshCw size={40} />}
              title="Image Converter"
              description="Convert images between JPG, PNG and WEBP formats."
              link="/convert"
            />

            <ToolCard
  icon={<FileText size={40} />}
  title="PDF Converter"
  description="Convert Word, Excel, PPT and Images to PDF instantly."
  link="/document-convert"
/>

          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-20 px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Ready to Compress & Earn?
        </h2>

        <p className="text-xl mb-8">
          Join thousands of users saving space and earning rewards
        </p>

        <a
          href="/image-compress"
          className="inline-block px-12 py-5 bg-white text-blue-600 text-xl font-semibold rounded-3xl hover:bg-gray-100 transition"
        >
          Start compressing Now →
        </a>

      </div>

    </div>
    </>
  );
}