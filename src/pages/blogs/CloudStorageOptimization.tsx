import { Link } from "react-router-dom";

export default function CloudStorageOptimization() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-sky-50 py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <div className="inline-flex items-center gap-3 bg-sky-100 px-4 py-2 rounded-full mb-6">

            <span className="text-2xl">
              ☁️
            </span>

            <span className="font-semibold">
              Cloud Storage Guide
            </span>

          </div>

          <h1 className="text-5xl font-bold mb-6">

            Cloud Storage Optimization Guide

          </h1>

          <p className="text-xl text-gray-600">

            Learn how to save storage space, reduce costs, and manage files efficiently in the cloud.

          </p>

        </div>

        <div className="space-y-8">

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              What is Cloud Storage?

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              Cloud storage allows users to store files online instead of using only local devices. Popular services like Google Drive, OneDrive, Dropbox, and iCloud provide secure access to files from anywhere.

            </p>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Why Storage Optimization Matters

            </h2>

            <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">

              <li>Reduces cloud storage costs</li>

              <li>Improves file organization</li>

              <li>Speeds up synchronization</li>

              <li>Improves collaboration</li>

              <li>Prevents storage limits from being reached</li>

              <li>Enhances productivity</li>

            </ul>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Compress Files Before Uploading

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              One of the easiest ways to save cloud storage space is by compressing files before uploading them. Smaller files upload faster and consume less storage.

            </p>

            <ul className="list-disc ml-8 mt-4 text-lg space-y-2">

              <li>Compress images before backup</li>

              <li>Reduce PDF file sizes</li>

              <li>Remove duplicate files</li>

              <li>Archive old documents</li>

            </ul>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Organize Files Properly

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              Maintaining a clear folder structure makes file management easier and improves team collaboration.

            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mt-4">

              <p className="font-semibold mb-3">

                Example Folder Structure

              </p>

              <ul className="list-disc ml-8">

                <li>Documents</li>

                <li>Projects</li>

                <li>Images</li>

                <li>Invoices</li>

                <li>Backups</li>

              </ul>

            </div>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              Cloud Security Tips

            </h2>

            <ul className="list-disc ml-8 text-lg text-gray-700 space-y-3">

              <li>Enable two-factor authentication</li>

              <li>Use strong passwords</li>

              <li>Regularly review shared files</li>

              <li>Encrypt sensitive data</li>

              <li>Monitor account activity</li>

            </ul>

          </section>

          <section className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-4">

              How compressits Helps

            </h2>

            <p className="text-gray-700 text-lg leading-8">

              compressits helps users reduce image and PDF sizes before uploading to cloud storage. Smaller files save storage space, improve upload speed, and reduce bandwidth consumption.

            </p>

          </section>

          <div className="bg-sky-600 text-white rounded-3xl p-10 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-4">

              Optimize Your Storage Today

            </h2>

            <p className="text-lg mb-6">

              Compress files before uploading and maximize your cloud storage efficiency.

            </p>

            <Link
              to="/image-compress"
              className="bg-white text-sky-600 px-8 py-4 rounded-2xl font-bold"
            >
              Start Optimizing
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}