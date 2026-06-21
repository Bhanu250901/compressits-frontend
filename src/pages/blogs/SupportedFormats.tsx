import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function SupportedFormats() {
  return (
    <>
      <Helmet>
        <title>Supported File Formats on CompressIts | JPG, PNG, WEBP & PDF</title>

        <meta
          name="description"
          content="Learn which file formats are supported on CompressIts including JPG, PNG, WEBP, PDF compression and image to PDF conversion tools."
        />

        <meta
          name="keywords"
          content="supported file formats compressits, jpg png webp pdf, file conversion formats"
        />

        <meta
          property="og:title"
          content="Supported File Formats on CompressIts | JPG, PNG, WEBP & PDF"
        />

        <meta
          property="og:description"
          content="See all file types and conversion options currently supported on CompressIts."
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:url"
          content="https://compressits.com/blog/supported-formats"
        />

        <link
          rel="canonical"
          href="https://compressits.com/blog/supported-formats"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">
            <div className="inline-flex items-center gap-3 bg-cyan-100 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">📂</span>
              <span className="font-semibold">
                Supported Formats Guide
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              Supported File Formats on CompressIts
            </h1>

            <p className="text-xl text-gray-600">
              Understand which file formats CompressIts supports for compression, conversion and PDF optimization.
            </p>
          </div>

          <div className="space-y-8">

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Image Compression Formats
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                CompressIts currently supports popular image formats such as JPG, PNG and WEBP for image compression. These formats are widely used across websites, mobile apps, design work and digital marketing.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Image Conversion Formats
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                Users can convert between modern image formats depending on their needs. For example, JPG to PNG can help with editing workflows, while PNG to WEBP is ideal for website optimization and smaller file sizes.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                PDF Compression Support
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                CompressIts also supports PDF compression, allowing users to reduce the size of large documents for email sharing, online submission, cloud storage and professional use.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Image to PDF Conversion
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                In addition to image optimization, CompressIts supports image to PDF conversion. This is useful for reports, assignments, scanned files, presentations and professional documentation.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Why Format Support Matters
              </h2>

              <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">
                <li>Improves compatibility across devices and browsers</li>
                <li>Helps users choose the right file type for the right purpose</li>
                <li>Supports SEO, speed and storage optimization</li>
                <li>Reduces friction in file sharing and productivity</li>
              </ul>
            </section>

            <div className="bg-cyan-600 text-white rounded-3xl p-10 text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">
                Try Supported Formats on CompressIts
              </h2>

              <p className="text-lg mb-6">
                Compress and convert your files using modern formats today.
              </p>

              <Link
                to="/"
                className="bg-white text-cyan-600 px-8 py-4 rounded-2xl font-bold"
              >
                Start Using CompressIts
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}