import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function RewardsGuide() {
  return (
    <>
      <Helmet>
        <title>CompressIts Rewards Guide | Earn Coins While Using Tools</title>

        <meta
          name="description"
          content="Learn how the CompressIts rewards system works. Discover how to earn coins through file compression and conversion activities and understand reward features."
        />

        <meta
          name="keywords"
          content="compressits rewards, earn coins online, file compression rewards, compressits coins system"
        />

        <meta
          property="og:title"
          content="CompressIts Rewards Guide | Earn Coins While Using Tools"
        />

        <meta
          property="og:description"
          content="Understand how the CompressIts rewards and coins system works while using compression and conversion tools."
        />

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:url"
          content="https://compressits.com/blog/rewards-guide"
        />

        <link
          rel="canonical"
          href="https://compressits.com/blog/rewards-guide"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">
            <div className="inline-flex items-center gap-3 bg-yellow-100 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🪙</span>
              <span className="font-semibold">
                Rewards Guide
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              CompressIts Rewards Guide
            </h1>

            <p className="text-xl text-gray-600">
              Learn how CompressIts rewards work and how users can benefit while using compression and conversion tools.
            </p>
          </div>

          <div className="space-y-8">

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                What is the CompressIts Rewards System?
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                CompressIts includes a rewards system designed to encourage users to explore file compression and conversion tools. By using supported tools regularly, users can unlock progress milestones and interact more actively with the platform.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                How Rewards Help User Engagement
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                Reward systems improve user engagement by creating a more interactive experience. Instead of simply processing files, users also have a reason to return to the platform, complete tasks and stay active over time.
              </p>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Why a Rewards Model Matters
              </h2>

              <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">
                <li>Encourages repeat usage of the platform</li>
                <li>Improves user retention</li>
                <li>Makes file tools more engaging</li>
                <li>Supports referral and community growth</li>
                <li>Creates a more gamified user experience</li>
              </ul>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                Rewards and File Utility Platforms
              </h2>

              <p className="text-gray-700 text-lg leading-8">
                Most compression tools focus only on file processing. CompressIts combines productivity with user engagement by introducing rewards, progress and a more interactive workflow for people who regularly compress or convert files.
              </p>
            </section>

            <div className="bg-yellow-500 text-white rounded-3xl p-10 text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">
                Explore CompressIts Tools
              </h2>

              <p className="text-lg mb-6">
                Use CompressIts for image compression, PDF optimization and modern file conversion tools.
              </p>

              <Link
                to="/"
                className="bg-white text-yellow-600 px-8 py-4 rounded-2xl font-bold"
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