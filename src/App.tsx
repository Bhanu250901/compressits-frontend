import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Redeem from "./pages/Redeem";
import AdminWithdraws from "./pages/AdminWithdraws";
import Leaderboard from "./pages/Leaderboard";
import Convert from "./pages/Convert";
import Withdraw from "./pages/Withdraw";
import History from "./pages/History";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import ImagecompressionGuide from "./pages/blogs/ImageCompressionGuide";
import PdfcompressionBenefits from "./pages/blogs/PdfCompressionBenefits";
import WebsiteSpeedMatters from "./pages/blogs/WebsiteSpeedMatters";
import JpgVsPngVsWebp from "./pages/blogs/JpgVsPngVsWebp";
import FileConversionGuide from "./pages/blogs/FileConversionGuide";
import FileSecurityGuide from "./pages/blogs/FileSecurityGuide";
import SeoImageOptimization from "./pages/blogs/SeoImageOptimization";
import PdfSharingTips from "./pages/blogs/PdfSharingTips";
import CloudStorageOptimization from "./pages/blogs/CloudStorageOptimization";
import WebsitePerformanceGuide from "./pages/blogs/WebsitePerformanceGuide";



import Disclaimer from "./pages/Disclaimer";
import FAQ from "./pages/Faq";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";


import PrivacyPolicy from "./pages/PrivacyPolicy";

import Terms from "./pages/Terms";

import ImageCompressor from "./pages/ImageCompressor";
import PdfCompressor from "./pages/PdfCompressor";
import DocumentConverter from "./pages/DocumentConverter";



function App() {
  return (
    <Router>

  <ScrollToTop />

  <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">

          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* Auth */}
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/dashboard"
  element={<Dashboard />}
/>

<Route
  path="/admin"
  element={<AdminDashboard />}
/>

<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route
  path="/redeem"
  element={<Redeem />}
/>

<Route
  path="/admin-withdraws"
  element={<AdminWithdraws />}
/>

<Route
  path="/leaderboard"
  element={<Leaderboard />}
/>

<Route
  path="/withdraw"
  element={<Withdraw />}
/>

<Route
  path="/history"
  element={<History />}
/>

<Route
  path="/about"
  element={<About />}
/>

<Route
  path="/contact"
  element={<Contact />}
/>

<Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>

<Route
  path="/terms"
  element={<Terms />}
/>

<Route path="/disclaimer" element={<Disclaimer />} />
<Route path="/faq" element={<FAQ />} />

<Route path="/blog" element={<Blog />} />

<Route
  path="/blog/image-compression-guide"
  element={<ImagecompressionGuide />}
/>

<Route path="/blog/pdf-compression-benefits" element={<PdfcompressionBenefits />} />
<Route path="/blog/website-speed-matters" element={<WebsiteSpeedMatters />} />
<Route path="/blog/jpg-vs-png-vs-webp" element={<JpgVsPngVsWebp />} />
<Route path="/blog/file-conversion-guide" element={<FileConversionGuide />} />
<Route path="/blog/file-security-guide" element={<FileSecurityGuide />} />
<Route path="/blog/seo-image-optimization" element={<SeoImageOptimization />} />
<Route path="/blog/pdf-sharing-tips" element={<PdfSharingTips />} />
<Route path="/blog/cloud-storage-optimization" element={<CloudStorageOptimization />} />
<Route path="/blog/website-performance-guide" element={<WebsitePerformanceGuide />} />



            {/* Compressors */}
            <Route
              path="/image-compress"
              element={<ImageCompressor />}
            />

            <Route
              path="/pdf-compress"
              element={<PdfCompressor />}
            />

            {/* Converters */}
            <Route
  path="/convert"
  element={<Convert />}
/>

<Route
  path="/document-convert"
  element={<DocumentConverter />}
/>
           
           
            {/* 404 Page */}
            <Route
  path="*"
  element={
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-8xl font-bold text-blue-600 mb-4">
        404
      </h1>

      <p className="text-2xl text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700"
      >
        Go Back Home
      </Link>

    </div>
   
  }
/>
 </Routes>

        </main>

        {/* Footer */}
        <Footer />

      </div>

    </Router>
  );
}

export default App;