import {
  Zap,
  ShieldCheck,
  Smartphone,
  Trophy,
  FileText,
  Globe,
} from "lucide-react";

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          About CompressIts | Free Image Compression & PDF Tools
        </title>

        <meta
          name="description"
          content="Learn about CompressIts, a free online platform for image compression, PDF compression, image conversion and image to PDF tools. Fast, secure and mobile friendly."
        />

        <meta
          name="keywords"
          content="about compressits, image compressor, pdf compressor, image converter, image to pdf, free file tools"
        />

        <meta
          property="og:title"
          content="About CompressIts"
        />

        <meta
          property="og:description"
          content="CompressIts helps users compress images, compress PDFs, convert image formats and turn images into PDFs quickly and securely."
        />

        <meta
          property="og:url"
          content="https://compressits.com/about"
        />

        <link
          rel="canonical"
          href="https://compressits.com/about"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About compressits
          </h1>

          <p className="text-lg text-gray-700 leading-8">
            compressits is a modern online platform that helps users
            compress, convert and optimize files quickly and securely.
            Our mission is to provide simple and powerful tools that
            save time while maintaining file quality and security.
          </p>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Zap
              size={42}
              className="text-orange-500 mb-4"
            />
            <h3 className="text-2xl font-bold mb-3">
              Lightning Fast
            </h3>
            <p className="text-gray-600">
              Compress large images and PDFs in seconds.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <ShieldCheck
              size={42}
              className="text-green-500 mb-4"
            />
            <h3 className="text-2xl font-bold mb-3">
              100% Secure
            </h3>
            <p className="text-gray-600">
              Files are automatically deleted after processing.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Smartphone
              size={42}
              className="text-blue-500 mb-4"
            />
            <h3 className="text-2xl font-bold mb-3">
              Mobile Friendly
            </h3>
            <p className="text-gray-600">
              Works perfectly on mobile, tablet and desktop.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Trophy
              size={42}
              className="text-yellow-500 mb-4"
            />
            <h3 className="text-2xl font-bold mb-3">
              Reward System
            </h3>
            <p className="text-gray-600">
              Earn coins while using compressits tools.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <FileText
              size={42}
              className="text-purple-500 mb-4"
            />
            <h3 className="text-2xl font-bold mb-3">
              PDF Converter
            </h3>
            <p className="text-gray-600">
              Convert Word, Excel, PPT and images into PDF files.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <Globe
              size={42}
              className="text-cyan-500 mb-4"
            />
            <h3 className="text-2xl font-bold mb-3">
              Free To Use
            </h3>
            <p className="text-gray-600">
              Most tools are available completely free.
            </p>
          </div>

        </div>

        {/* Mission */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            We believe file compression and conversion should be
            simple, secure and accessible to everyone. compressits
            provides powerful online tools without requiring users
            to install software or create complicated accounts.
          </p>

        </div>

        {/* Contact */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            For support, suggestions or business inquiries:
          </p>

          <p className="text-xl font-semibold text-blue-600">
            gandhambhanu2509@gmail.com
          </p>

        </div>

      </div>

    </div>
    </>
  );
}

