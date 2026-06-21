import {
  Shield,
  AlertTriangle,
  Scale,
  FileText,
} from "lucide-react";

import { Helmet } from "react-helmet-async";

export default function Terms() {

  return (
  <>
    <Helmet>
      <title>
        Terms & Conditions | CompressIts
      </title>

      <meta
        name="description"
        content="Read the Terms and Conditions of CompressIts for using file compression, file conversion and reward services."
      />

      <meta
        name="keywords"
        content="CompressIts terms, terms and conditions, file converter terms, image compressor terms, PDF compressor terms"
      />

      <meta
        property="og:title"
        content="Terms & Conditions | CompressIts"
      />

      <meta
        property="og:description"
        content="Review the Terms and Conditions for using CompressIts tools and reward features."
      />

      <meta
        property="og:url"
        content="https://compressits.com/terms"
      />

      <link
        rel="canonical"
        href="https://compressits.com/terms"
      />
    </Helmet>

    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h1 className="text-5xl font-bold mb-6">
            Terms & Conditions
          </h1>

          <p className="text-lg text-gray-700 leading-8">
            By accessing and using compressits, you agree to comply
            with these Terms & Conditions. Please read them carefully
            before using our services.
          </p>

        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Shield
              size={42}
              className="text-green-600 mb-4"
            />

            <h3 className="text-2xl font-bold mb-3">
              Acceptable Use
            </h3>

            <p className="text-gray-600 leading-7">
              Users must use compressits responsibly and legally.
              Uploading malicious, illegal or harmful files is
              strictly prohibited.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <AlertTriangle
              size={42}
              className="text-orange-500 mb-4"
            />

            <h3 className="text-2xl font-bold mb-3">
              Prohibited Activities
            </h3>

            <p className="text-gray-600 leading-7">
              Users may not attempt to disrupt services,
              upload malware, exploit vulnerabilities,
              or misuse platform resources.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <FileText
              size={42}
              className="text-blue-600 mb-4"
            />

            <h3 className="text-2xl font-bold mb-3">
              Rewards & Coins
            </h3>

            <p className="text-gray-600 leading-7">
              Coins earned on compressits are platform rewards
              only and may be subject to eligibility rules,
              limits and future changes.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Scale
              size={42}
              className="text-purple-600 mb-4"
            />

            <h3 className="text-2xl font-bold mb-3">
              Account Suspension
            </h3>

            <p className="text-gray-600 leading-7">
              compressits reserves the right to suspend or
              terminate accounts that violate these terms
              or abuse platform features.
            </p>

          </div>

        </div>

        {/* Legal Section */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Limitation of Liability
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            compressits is provided on an "as is" and
            "as available" basis. While we strive to
            provide reliable services, we do not guarantee
            uninterrupted operation and are not responsible
            for any loss of data, profits or business
            interruption arising from the use of our platform.
          </p>

        </div>

        {/* Changes */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Changes to Terms
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            We may update these Terms & Conditions from
            time to time. Continued use of compressits
            after updates constitutes acceptance of the
            revised terms.
          </p>

          <p className="text-lg font-semibold text-blue-600 mt-6">
            Contact: gandhambhanu2509@gmail.com
          </p>

        </div>

      </div>

    </div>
    </>
  );
}

