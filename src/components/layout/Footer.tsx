import {
  Heart,
  Mail,
  Globe,
  MessageCircle,
  Image,
  FileText,
  RefreshCw,
} from "lucide-react";


import { Link } from "react-router-dom";

export default function Footer() {

  return (

    <footer className="bg-gray-950 text-gray-400 pt-20 pb-10 mt-auto border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-12 h-12  rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                ◢⚡◣
              </div>

              <span className="text-3xl font-bold text-white">
                CompressIts
              </span>

            </div>

            <p className="text-gray-400 leading-relaxed">
              Free online tools to compress, convert
              and optimize files quickly and securely.
            </p>

          </div>

          {/* Tools */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Tools
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/image-compress"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Image size={18} />
                Image Compressor
              </Link>

              <Link
                to="/pdf-compress"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FileText size={18} />
                PDF Compressor
              </Link>

              <Link
                to="/convert"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <RefreshCw size={18} />
                Image Converter
              </Link>

              <Link
  to="/document-convert"
  className="flex items-center gap-2 hover:text-white transition"
>
  <FileText size={18} />
  PDF Converter
</Link>

            </div>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Company
            </h3>

            <div className="flex flex-col gap-4">

              <Link
  to="/about"
  className="hover:text-white transition"
>
  About Us
</Link>

<Link
  to="/privacy-policy"
  className="hover:text-white transition"
>
  Privacy Policy
</Link>

<Link
  to="/terms"
  className="hover:text-white transition"
>
  Terms & Conditions
</Link>

<Link
  to="/disclaimer"
  className="hover:text-white transition"
>
  Disclaimer
</Link>

<Link
  to="/faq"
  className="hover:text-white transition"
>
  FAQ
</Link>

<Link
  to="/blog"
  className="hover:text-white transition"
>
  Blog
</Link>

<Link
  to="/contact"
  className="hover:text-white transition"
>
  Contact Us
</Link>
            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4 mb-6">

              <a
                href="https://compressits.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-gray-900 hover:bg-blue-600 rounded-2xl flex items-center justify-center transition"
              >
                <Globe size={22} />
              </a>

              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-gray-900 hover:bg-blue-600 rounded-2xl flex items-center justify-center transition"
              >
                <MessageCircle size={22} />
              </a>

              <a
                href="mailto:gandhambhanu2509@gmail.com"
                className="w-12 h-12 bg-gray-900 hover:bg-blue-600 rounded-2xl flex items-center justify-center transition"
              >
                <Mail size={22} />
              </a>

            </div>

            <p className="text-sm text-gray-500">
              Support available 24/7 for all users.
            </p>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-sm text-gray-500">

            © 2026 compressits.
            All rights reserved.

          </p>

          <p className="text-sm text-gray-500 flex items-center gap-2">

            Made with

            <Heart
              size={16}
              className="text-red-500"
            />

            Files are automatically deleted after processing

          </p>

        </div>

      </div>

    </footer>
  );
}