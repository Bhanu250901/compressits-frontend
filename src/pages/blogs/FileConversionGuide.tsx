import { Link } from "react-router-dom";

export default function FileConversionGuide() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <div className="inline-flex items-center gap-3 bg-green-100 px-4 py-2 rounded-full mb-6">

            <span className="text-2xl">
              🔄
            </span>

            <span className="font-semibold">
              File Conversion Guide
            </span>

          </div>

          <h1 className="text-5xl font-bold mb-6">

            How File Conversion Simplifies Work

          </h1>

          <p className="text-xl text-gray-600">

            Learn how converting files improves compatibility, productivity, and workflow efficiency.

          </p>

        </div>

        <div className="space-y-8">

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              What is File Conversion?

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              File conversion is the process of changing a file from one format to another. Different devices, software applications, and platforms support different file formats. Converting files ensures compatibility and easier sharing.

            </p>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Why File Conversion is Important

            </h2>

            <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">

              <li>Improves compatibility between devices.</li>

              <li>Makes files easier to share.</li>

              <li>Reduces storage requirements.</li>

              <li>Improves document accessibility.</li>

              <li>Supports professional workflows.</li>

              <li>Enhances website performance.</li>

            </ul>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Common File Conversions

            </h2>

            <div className="space-y-5">

              <div>

                <h3 className="font-bold text-xl">
                  JPG → PNG
                </h3>

                <p className="text-gray-700">
                  Useful when transparency support is needed.
                </p>

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  PNG → WEBP
                </h3>

                <p className="text-gray-700">
                  Ideal for websites that require smaller file sizes.
                </p>

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Image → PDF
                </h3>

                <p className="text-gray-700">
                  Perfect for reports, assignments, and document sharing.
                </p>

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Word → PDF
                </h3>

                <p className="text-gray-700">
                  Preserves formatting across all devices.
                </p>

              </div>

            </div>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Benefits for Businesses

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              Businesses regularly convert files to improve communication, ensure document consistency, and streamline workflows. PDF files, for example, maintain formatting regardless of the device being used.

            </p>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              How compressit Helps

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              compressits provides fast and secure conversion tools for images and documents. Users can convert files within seconds while maintaining quality and compatibility.

            </p>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Professional Tips

            </h2>

            <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">

              <li>Choose the correct format for your purpose.</li>

              <li>Compress files before converting when possible.</li>

              <li>Keep original backups.</li>

              <li>Use PDF for document sharing.</li>

              <li>Use WEBP for modern websites.</li>

            </ul>

          </section>

          <div className="bg-green-600 text-white rounded-3xl p-10 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-4">

              Start Converting Files Today

            </h2>

            <p className="text-lg mb-6">

              Use compressits to convert images and documents instantly.

            </p>

            <Link
              to="/convert"
              className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold"
            >
              Convert Files Now
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}

