import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>How CompressIts Works | Compress, Convert & Download Files</title>

        <meta
          name="description"
          content="Learn how CompressIts works. Upload files, compress or convert them instantly, download results, and optimize your workflow online."
        />

        <meta
          name="keywords"
          content="how compressits works, compress files online, convert files online, file optimization guide"
        />

        <meta
          property="og:title"
          content="How CompressIts Works | Compress, Convert & Download Files"
        />

        <meta
          property="og:description"
          content="Step-by-step guide to using CompressIts for image compression, PDF compression and file conversion."
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:url"
          content="https://compressits.com/blog/how-it-works"
        />

        <link
          rel="canonical"
          href="https://compressits.com/blog/how-it-works"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">
            <div className="inline-flex items-center gap-3 bg-indigo-100 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🚀</span>
              <span className="font-semibold">
                CompressIts User Guide
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              How CompressIts Works
            </h1>

            <p className="text-xl text-gray-600">
              Learn how to use CompressIts to compress, convert and optimize files online in just a few simple steps.
            </p>
          </div>

          <div className="space-y-8">

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Step 1: Choose the Right Tool
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                CompressIts provides multiple tools such as image compression, PDF compression, JPG to PNG conversion, PNG to WEBP conversion and image to PDF conversion. Select the tool that matches your file task.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Step 2: Upload Your File
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                Upload your image, PDF or supported file from your device. CompressIts is designed to process files quickly and simply without unnecessary steps.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Step 3: Compress or Convert Instantly
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                Once your file is uploaded, CompressIts processes it based on the selected tool. Images can be compressed, PDFs can be optimized and files can be converted into supported formats.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Step 4: Preview and Download
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                After processing, download the optimized file instantly. This makes it easy to use the file for websites, email, cloud storage, business documents or assignments.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Why Use CompressIts?
              </h2>

              <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">
                <li>Fast and simple workflow</li>
                <li>Supports multiple file tools in one place</li>
                <li>Improves website speed and storage efficiency</li>
                <li>Useful for students, professionals and businesses</li>
                <li>No complex software installation required</li>
              </ul>
            </section>

            <div className="bg-indigo-600 text-white rounded-3xl p-10 text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">
                Try CompressIts Today
              </h2>

              <p className="text-lg mb-6">
                Upload a file and experience fast compression and conversion online.
              </p>

              <Link
                to="/"
                className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold"
              >
                Start Now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}