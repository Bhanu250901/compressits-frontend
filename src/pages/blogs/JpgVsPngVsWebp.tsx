import { Link } from "react-router-dom";

export default function JpgVsPngVsWebp() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <div className="inline-flex items-center gap-3 bg-purple-100 px-4 py-2 rounded-full mb-6">

            <span className="text-2xl">
              📸
            </span>

            <span className="font-semibold">
              Image Format Guide
            </span>

          </div>

          <h1 className="text-5xl font-bold mb-6">

            JPG vs PNG vs WEBP

          </h1>

          <p className="text-xl text-gray-600">

            Learn the differences between the most popular image formats and choose the best one for your needs.

          </p>

        </div>

        <div className="space-y-8">

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Understanding Image Formats

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              Different image formats serve different purposes. Choosing the correct format can improve website speed, image quality, SEO performance, and storage efficiency.

            </p>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              JPG Format

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              JPG (JPEG) is one of the most widely used image formats. It uses lossy compression to significantly reduce file size while maintaining good visual quality.

            </p>

            <ul className="list-disc ml-8 mt-4 text-lg space-y-2">

              <li>Best for photographs</li>

              <li>Small file size</li>

              <li>Supported everywhere</li>

              <li>No transparency support</li>

            </ul>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              PNG Format

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              PNG uses lossless compression and preserves image quality perfectly. It also supports transparent backgrounds.

            </p>

            <ul className="list-disc ml-8 mt-4 text-lg space-y-2">

              <li>Supports transparency</li>

              <li>High image quality</li>

              <li>Larger file sizes</li>

              <li>Perfect for logos and graphics</li>

            </ul>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              WEBP Format

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              WEBP is a modern image format developed by Google. It offers excellent compression while maintaining image quality.

            </p>

            <ul className="list-disc ml-8 mt-4 text-lg space-y-2">

              <li>Smaller than JPG and PNG</li>

              <li>Supports transparency</li>

              <li>Excellent quality</li>

              <li>Perfect for websites</li>

            </ul>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Comparison Table

            </h2>

            <div className="overflow-x-auto">

              <table className="w-full border">

                <thead className="bg-gray-100">

                  <tr>

                    <th className="p-4 border">
                      Feature
                    </th>

                    <th className="p-4 border">
                      JPG
                    </th>

                    <th className="p-4 border">
                      PNG
                    </th>

                    <th className="p-4 border">
                      WEBP
                    </th>

                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td className="p-4 border">Quality</td>
                    <td className="p-4 border">Good</td>
                    <td className="p-4 border">Excellent</td>
                    <td className="p-4 border">Excellent</td>
                  </tr>

                  <tr>
                    <td className="p-4 border">File Size</td>
                    <td className="p-4 border">Small</td>
                    <td className="p-4 border">Large</td>
                    <td className="p-4 border">Smallest</td>
                  </tr>

                  <tr>
                    <td className="p-4 border">Transparency</td>
                    <td className="p-4 border">No</td>
                    <td className="p-4 border">Yes</td>
                    <td className="p-4 border">Yes</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Which Format Should You Use?

            </h2>

            <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">

              <li>Use JPG for photographs.</li>

              <li>Use PNG for logos and transparent graphics.</li>

              <li>Use WEBP for websites and SEO optimization.</li>

              <li>Use compressits to convert between formats instantly.</li>

            </ul>

          </section>

          <div className="bg-purple-600 text-white rounded-3xl p-10 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-4">

              Convert Images Instantly

            </h2>

            <p className="text-lg mb-6">

              Convert JPG, PNG and WEBP files with compressits.

            </p>

            <Link
              to="/convert"
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold"
            >
              Start Converting
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}