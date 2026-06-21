import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ReferralProgramGuide() {
  return (
    <>
      <Helmet>
        <title>CompressIts Referral Program Guide | Invite Friends & Grow Faster</title>

        <meta
          name="description"
          content="Learn how a referral system works on CompressIts, why referral programs matter, and how they help grow file utility platforms through user engagement."
        />

        <meta
          name="keywords"
          content="compressits referral program, referral guide, invite friends, referral rewards"
        />

        <meta
          property="og:title"
          content="CompressIts Referral Program Guide | Invite Friends & Grow Faster"
        />

        <meta
          property="og:description"
          content="Discover how referral programs help platforms grow and how CompressIts uses referral engagement for user expansion."
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:url"
          content="https://compressits.com/blog/referral-program"
        />

        <link
          rel="canonical"
          href="https://compressits.com/blog/referral-program"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">
            <div className="inline-flex items-center gap-3 bg-pink-100 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🎉</span>
              <span className="font-semibold">
                Referral Program Guide
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              CompressIts Referral Program Guide
            </h1>

            <p className="text-xl text-gray-600">
              Learn why referral programs are valuable for online platforms and how they help users and websites grow together.
            </p>
          </div>

          <div className="space-y-8">

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                What is a Referral Program?
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                A referral program allows users to invite friends or new visitors to a platform using a unique referral code or link. Referral systems are commonly used by digital products, apps and online tools to increase growth and user engagement.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Why Referral Programs Matter
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                Referral programs help platforms grow more organically because users themselves become promoters. Instead of relying only on ads or search traffic, referral systems allow a product to spread through direct user recommendations.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Benefits of a Referral Model
              </h2>

              <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">
                <li>Encourages word-of-mouth growth</li>
                <li>Increases user engagement and retention</li>
                <li>Creates a stronger platform community</li>
                <li>Helps new users discover useful tools faster</li>
                <li>Supports long-term brand growth</li>
              </ul>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Referral Programs for Utility Websites
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                For a file utility platform like CompressIts, referral systems can help bring more users to image compression, PDF optimization and file conversion tools. It creates a growth loop where satisfied users help expand the platform.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Building Trust Through Referrals
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                Referral programs work best when users already trust the product. This means a platform must offer useful tools, a smooth experience, secure file handling and a clear value proposition before users feel comfortable recommending it.
              </p>
            </section>

            <div className="bg-pink-600 text-white rounded-3xl p-10 text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">
                Explore CompressIts
              </h2>

              <p className="text-lg mb-6">
                Discover file compression and conversion tools built for speed, productivity and growth.
              </p>

              <Link
                to="/"
                className="bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold"
              >
                Visit CompressIts
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}