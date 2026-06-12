import {
  Mail,
  Clock,
  Globe,
  MessageSquare,
} from "lucide-react";

export default function Contact() {

  return (

    <div className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h1 className="text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-lg text-gray-700 leading-8">
            We're here to help. If you have questions,
            suggestions, feedback or business inquiries,
            feel free to contact us anytime.
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

            <p className="text-gray-600">
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
              compressits
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
              Usually within 24-48 hours
            </p>

          </div>

        </div>

        {/* Contact Message */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Need Assistance?
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            If you encounter any issues while using
            compressits tools, please send us an email
            with details of your problem. Our team will
            review your request and respond as soon as possible.
          </p>

        </div>

      </div>

    </div>
  );
}

