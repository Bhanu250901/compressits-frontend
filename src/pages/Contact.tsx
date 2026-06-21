import {
  Mail,
  Clock,
  Globe,
  MessageSquare,
} from "lucide-react";

import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>
          Contact CompressIts | Support, Feedback & Business Inquiries
        </title>

        <meta
          name="description"
          content="Contact CompressIts for support, feedback, file tool issues, business inquiries and general assistance. We’re here to help with image compression, PDF tools and file conversion."
        />

        <meta
          name="keywords"
          content="contact compressits, compressits support, image compressor support, pdf compressor support, file converter contact"
        />

        <meta
          property="og:title"
          content="Contact CompressIts"
        />

        <meta
          property="og:description"
          content="Get in touch with CompressIts for support, feedback and business inquiries."
        />

        <meta
          property="og:url"
          content="https://compressits.com/contact"
        />

        <link
          rel="canonical"
          href="https://compressits.com/contact"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">
            <h1 className="text-5xl font-bold mb-6">
              Contact CompressIts
            </h1>

            <p className="text-lg text-gray-700 leading-8">
              Need help with image compression, PDF compression,
              image conversion, rewards or account issues? We’re here
              to help. Reach out to CompressIts for support, feedback,
              suggestions or business inquiries.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <Mail
                size={42}
                className="text-blue-600 mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">
                Email Support
              </h3>
              <p className="text-gray-600 break-all">
                gandhambhanu2509@gmail.com
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <Clock
                size={42}
                className="text-green-600 mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">
                Support Hours
              </h3>
              <p className="text-gray-600">
                Monday - Sunday
                <br />
                24/7 Online Support
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <Globe
                size={42}
                className="text-purple-600 mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">
                Website
              </h3>
              <p className="text-gray-600">
                https://compressits.com
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <MessageSquare
                size={42}
                className="text-orange-500 mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">
                Response Time
              </h3>
              <p className="text-gray-600">
                Usually within 24–48 hours
              </p>
            </div>

          </div>

          {/* Contact Message */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h2 className="text-3xl font-bold mb-6">
              Need Assistance?
            </h2>

            <p className="text-lg text-gray-700 leading-8">
              If you face any issue while using CompressIts tools,
              such as image compression problems, PDF upload issues,
              image conversion errors, reward coin questions or login problems,
              please send us an email with the details. We’ll review your
              request and respond as quickly as possible.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}