import { Link } from "react-router-dom";

export default function SeoImageOptimization() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <div className="inline-flex items-center gap-3 bg-orange-100 px-4 py-2 rounded-full mb-6">

            <span className="text-2xl">
              🚀
            </span>

            <span className="font-semibold">
              SEO Optimization Guide
            </span>

          </div>

          <h1 className="text-5xl font-bold mb-6">

            SEO Image Optimization Guide

          </h1>

          <p className="text-xl text-gray-600">

            Learn how optimized images can improve website speed, search rankings, and user experience.

          </p>

        </div>

        <div className="space-y-8">

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              What is Image SEO?

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              Image SEO is the process of optimizing images so that search engines can understand and rank them properly. Optimized images help websites load faster and improve overall search engine visibility.

            </p>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Why Image Optimization Matters

            </h2>

            <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">

              <li>Improves page loading speed</li>

              <li>Boosts Google rankings</li>

              <li>Enhances user experience</li>

              <li>Reduces server bandwidth usage</li>

              <li>Improves Core Web Vitals scores</li>

              <li>Increases mobile performance</li>

            </ul>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Best Image Formats for SEO

            </h2>

            <div className="space-y-4">

              <div>

                <h3 className="text-xl font-bold">

                  JPG

                </h3>

                <p className="text-gray-700">

                  Best for photographs and general website images.

                </p>

              </div>

              <div>

                <h3 className="text-xl font-bold">

                  PNG

                </h3>

                <p className="text-gray-700">

                  Ideal for logos and transparent graphics.

                </p>

              </div>

              <div>

                <h3 className="text-xl font-bold">

                  WEBP

                </h3>

                <p className="text-gray-700">

                  Modern format recommended by Google for faster websites.

                </p>

              </div>

            </div>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Essential SEO Tips

            </h2>

            <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">

              <li>Compress images before uploading.</li>

              <li>Use descriptive file names.</li>

              <li>Add meaningful alt text.</li>

              <li>Choose the correct image format.</li>

              <li>Resize images appropriately.</li>

              <li>Use responsive images for mobile devices.</li>

            </ul>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              How compressits Helps

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              compressits helps website owners optimize images quickly and efficiently. Smaller image sizes improve loading times, reduce bandwidth usage, and create a better experience for visitors.

            </p>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Professional Recommendations

            </h2>

            <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">

              <li>Convert PNG images to WEBP when possible.</li>

              <li>Use lazy loading for large image galleries.</li>

              <li>Compress images without noticeable quality loss.</li>

              <li>Regularly audit website image performance.</li>

              <li>Monitor Core Web Vitals in Google Search Console.</li>

            </ul>

          </section>

          <div className="bg-orange-600 text-white rounded-3xl p-10 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-4">

              Optimize Your Images Today

            </h2>

            <p className="text-lg mb-6">

              Improve SEO and website speed with compressits.

            </p>

            <Link
              to="/image-compress"
              className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold"
            >
              Optimize Images Now
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}

