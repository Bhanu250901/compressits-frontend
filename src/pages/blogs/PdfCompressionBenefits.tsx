import { Link } from "react-router-dom";

export default function PdfcompressionBenefits() {

return (


<div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 py-20 px-6">

  <div className="max-w-5xl mx-auto">

    <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

      <div className="inline-flex items-center gap-3 bg-red-100 px-4 py-2 rounded-full mb-6">

        <span className="text-2xl">
          📄
        </span>

        <span className="font-semibold">
          PDF Optimization Guide
        </span>

      </div>

      <h1 className="text-5xl font-bold mb-6">

        Benefits of PDF compression

      </h1>

      <p className="text-xl text-gray-600">

        Learn how PDF compression improves storage efficiency, sharing speed, and productivity.

      </p>

    </div>

    <div className="space-y-8">

      <section className="bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-3xl font-bold mb-4">

          What is PDF compression?

        </h2>

        <p className="text-gray-700 text-lg leading-8">

          PDF compression reduces the file size of PDF documents without significantly affecting readability. Smaller PDF files are easier to store, upload, download and share across platforms.

        </p>

      </section>

      <section className="bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-3xl font-bold mb-4">

          Key Benefits

        </h2>

        <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">

          <li>Faster file uploads and downloads</li>

          <li>Reduced cloud storage usage</li>

          <li>Easy email sharing</li>

          <li>Improved website performance</li>

          <li>Better mobile accessibility</li>

          <li>Lower bandwidth consumption</li>

        </ul>

      </section>

      <section className="bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-3xl font-bold mb-4">

          When Should You Compress PDFs?

        </h2>

        <p className="text-gray-700 text-lg leading-8">

          PDF compression is ideal when submitting documents online, sharing reports through email, uploading resumes, managing cloud storage, or publishing downloadable content on websites.

        </p>

      </section>

      <section className="bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-3xl font-bold mb-4">

          How compressits Helps

        </h2>

        <p className="text-gray-700 text-lg leading-8">

          compressits allows users to reduce PDF file sizes quickly while maintaining document quality. Our tool is designed for students, professionals, businesses, and anyone needing smaller PDF files.

        </p>

      </section>

      <section className="bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-3xl font-bold mb-4">

          Professional Tips

        </h2>

        <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">

          <li>Compress PDFs before emailing them.</li>

          <li>Remove unnecessary images from documents.</li>

          <li>Use optimized PDFs for websites.</li>

          <li>Store compressed copies in cloud storage.</li>

          <li>Keep original backups of important documents.</li>

        </ul>

      </section>

      <div className="bg-red-600 text-white rounded-3xl p-10 text-center shadow-xl">

        <h2 className="text-3xl font-bold mb-4">

          Ready to Compress PDFs?

        </h2>

        <p className="text-lg mb-6">

          Reduce PDF file size instantly using compressits.

        </p>

        <Link
          to="/pdf-compress"
          className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold"
        >
          Compress PDF Now
        </Link>

      </div>

    </div>

  </div>

</div>


);
}
