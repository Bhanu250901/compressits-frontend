import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function WebsiteSpeedMatters() {
  return (
    <>
      <Helmet>
        <title>
          Why Website Speed Matters | CompressIts Blog
        </title>

        <meta
          name="description"
          content="Learn why website speed matters for SEO, user experience, conversions, and business growth. Discover tips to optimize images, PDFs, hosting, and overall website performance."
        />

        <meta
          name="keywords"
          content="website speed, website performance, SEO speed optimization, improve website speed, page speed, compressits blog"
        />

        <meta
          property="og:title"
          content="Why Website Speed Matters | CompressIts Blog"
        />

        <meta
          property="og:description"
          content="Discover why fast-loading websites improve user experience, Google rankings, conversions, and overall business growth."
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:url"
          content="https://compressits.com/blog/website-speed-matters"
        />

        <link
          rel="canonical"
          href="https://compressits.com/blog/website-speed-matters"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50 py-20 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

            <div className="inline-flex items-center gap-3 bg-yellow-100 px-4 py-2 rounded-full mb-6">

              <span className="text-2xl">
                ⚡
              </span>

              <span className="font-semibold">
                Website Performance Guide
              </span>

            </div>

            <h1 className="text-5xl font-bold mb-6">
              Why Website Speed Matters
            </h1>

            <p className="text-xl text-gray-600">
              Discover why fast-loading websites improve user experience, SEO rankings, and business growth.
            </p>

          </div>

          <div className="space-y-8">

            <section className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-3xl font-bold mb-4">
                What is Website Speed?
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                Website speed refers to how quickly a web page loads and becomes usable for visitors. Modern users expect websites to load within a few seconds. Slow websites often result in frustration, lower engagement, and lost visitors.
              </p>

            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-3xl font-bold mb-4">
                Benefits of a Fast Website
              </h2>

              <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">
                <li>Better user experience</li>
                <li>Higher Google rankings</li>
                <li>Lower bounce rates</li>
                <li>Increased conversions and sales</li>
                <li>Improved mobile performance</li>
                <li>Stronger brand credibility</li>
              </ul>

            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-3xl font-bold mb-4">
                Impact on SEO
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                Search engines such as Google consider page speed as an important ranking factor. Faster websites provide a better experience and are more likely to appear higher in search results. Optimizing images, PDFs, and scripts can significantly improve page performance.
              </p>

            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-3xl font-bold mb-4">
                Common Causes of Slow Websites
              </h2>

              <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">
                <li>Large images and PDFs</li>
                <li>Too many plugins</li>
                <li>Poor hosting services</li>
                <li>Unoptimized code</li>
                <li>Heavy animations and scripts</li>
                <li>Large video files</li>
              </ul>

            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-3xl font-bold mb-4">
                How compressits Helps
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                compressits helps website owners optimize images and PDF files before uploading them. Smaller files improve loading speed, reduce bandwidth consumption, and create a smoother browsing experience for visitors.
              </p>

            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">

              <h2 className="text-3xl font-bold mb-4">
                Professional Speed Optimization Tips
              </h2>

              <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">
                <li>Compress images before uploading.</li>
                <li>Use modern image formats such as WEBP.</li>
                <li>Compress downloadable PDFs.</li>
                <li>Enable browser caching.</li>
                <li>Use a Content Delivery Network (CDN).</li>
                <li>Choose reliable web hosting.</li>
              </ul>

            </section>

            <div className="bg-yellow-500 text-white rounded-3xl p-10 text-center shadow-xl">

              <h2 className="text-3xl font-bold mb-4">
                Speed Up Your Website Today
              </h2>

              <p className="text-lg mb-6">
                Optimize images and PDFs instantly with compressits.
              </p>

              <Link
                to="/image-compress"
                className="bg-white text-yellow-600 px-8 py-4 rounded-2xl font-bold"
              >
                Start Optimizing
              </Link>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}