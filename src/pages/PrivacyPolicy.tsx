import {
  Shield,
  Lock,
  Database,
  Eye,
} from "lucide-react";

import { Helmet } from "react-helmet-async";



  export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>
          Privacy Policy | CompressIts
        </title>

        <meta
          name="description"
          content="Read the CompressIts Privacy Policy to understand how we collect, use, protect and manage account information, uploaded files, cookies, analytics and third-party services."
        />

        <meta
          name="keywords"
          content="compressits privacy policy, file privacy, pdf compressor privacy, image compressor privacy, data protection"
        />

        <meta
          property="og:title"
          content="Privacy Policy | CompressIts"
        />

        <meta
          property="og:description"
          content="Learn how CompressIts handles uploaded files, account data, analytics and privacy protection."
        />

        <meta
          property="og:url"
          content="https://compressits.com/privacy-policy"
        />

        <link
          rel="canonical"
          href="https://compressits.com/privacy-policy"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h1 className="text-5xl font-bold mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-700 leading-8">
            At compressits, we value your privacy and are committed
            to protecting your personal information. This Privacy
            Policy explains how we collect, use and safeguard your data.
          </p>

        </div>

        {/* Privacy Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Shield
              size={42}
              className="text-green-600 mb-4"
            />

            <h3 className="text-2xl font-bold mb-3">
              Secure Processing
            </h3>

            <p className="text-gray-600 leading-7">
              Uploaded files are processed securely using
              industry-standard technologies.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Lock
              size={42}
              className="text-blue-600 mb-4"
            />

            <h3 className="text-2xl font-bold mb-3">
              File Deletion
            </h3>

            <p className="text-gray-600 leading-7">
              Files uploaded to compressits are automatically
              removed after processing whenever possible.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Database
              size={42}
              className="text-purple-600 mb-4"
            />

            <h3 className="text-2xl font-bold mb-3">
              Data Collection
            </h3>

            <p className="text-gray-600 leading-7">
              We may collect basic account information such
              as email addresses and usage statistics to
              improve our services.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Eye
              size={42}
              className="text-orange-500 mb-4"
            />

            <h3 className="text-2xl font-bold mb-3">
              Transparency
            </h3>

            <p className="text-gray-600 leading-7">
              We do not sell personal information and only
              use collected data for service improvement
              and security purposes.
            </p>

          </div>

        </div>

        {/* Information Usage */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            How We Use Information
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Information collected may be used to provide
            services, improve website performance, prevent
            abuse, enhance security and communicate important
            updates regarding compressits.
          </p>

        </div>

        {/* Cookies */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Cookies & Analytics
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            compressits may use cookies and analytics tools
            to improve user experience, measure website
            performance and understand how visitors interact
            with our platform.
          </p>

        </div>

        {/* Third Party */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Third-Party Services
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            We may use trusted third-party services such as
            Google Analytics, Google AdSense and cloud hosting
            providers to operate and improve compressits.
          </p>

        </div>

        {/* Contact */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            If you have questions regarding this Privacy Policy,
            please contact us at:
          </p>

          <p className="text-xl font-semibold text-blue-600 mt-4">
            gandhambhanu2509@gmail.com
          </p>

        </div>

      </div>

    </div>

    </>
  );
}

