import { Link } from "react-router-dom";

export default function Blog() {

    

  const blogs = [
    

    {
  title: "How to Compress Images Without Losing Quality",
  link: "/blog/image-compression-guide",
  icon: "🖼️",
  content:
    "Image compression reduces file size while maintaining visual quality. Smaller images improve website speed, SEO rankings and user experience. compressit allows users to optimize JPG, PNG and WEBP files quickly."
},
   {
  title: "Benefits of PDF compression",
  link: "/blog/pdf-compression-benefits",
  icon: "📄",
  content:
    "PDF compression reduces document size without affecting readability. Smaller PDF files are easier to upload, share and store. It improves productivity and saves storage space."

},
{
  title: "Why Website Speed Matters",
  link: "/blog/website-speed-matters",
  icon: "⚡",
   content:
    "Website speed directly impacts user experience, SEO rankings and conversion rates. Faster websites retain more visitors and perform better in search engines."

},
{
  title: "Image Formats Explained: JPG vs PNG vs WEBP",
  link: "/blog/jpg-vs-png-vs-webp",
  icon: "📸",
   content:
    "Learn the differences between JPG, PNG and WEBP image formats. Discover which format offers the best quality, transparency support and compression efficiency."

},
{
  title: "How File Conversion Simplifies Work",
  link: "/blog/file-conversion-guide",
  icon: "🔄",
   content:
    "File conversion helps improve compatibility between devices and software. Learn when and why to convert images, documents and PDFs for better productivity."

},
{
  title: "Online File Security Best Practices",
  link: "/blog/file-security-guide",
  icon: "🔒",
  content:
    "Protect your files with secure upload practices and privacy-focused tools. Learn how to keep personal and business documents safe online."

},
{
  title: "SEO Image Optimization Guide",
  link: "/blog/seo-image-optimization",
  icon: "🚀",
  content:
    "Optimized images improve page speed and search rankings. Discover best practices for image sizing, compression and modern file formats."

},
{
  title: "Best Practices for Sharing PDFs",
  link: "/blog/pdf-sharing-tips",
  icon: "📑",
   content:
    "Make PDF documents easier to share through email, cloud storage and messaging platforms. Reduce file sizes while preserving document quality."

},
{
  title: "Optimize Cloud Storage with compression",
  link: "/blog/cloud-storage-optimization",
  icon: "☁️",
  content:
    "Learn how compression and file management can reduce storage costs. Optimize documents and images for Google Drive, OneDrive and Dropbox."

},
{
  title: "Website Performance Optimization Guide",
  link: "/blog/website-performance-guide",
  icon: "🌐",
   content:
    "Improve website performance through image optimization, caching and efficient file delivery. Faster websites create better user experiences and higher SEO rankings."

}
  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm mb-6">

            <span className="text-3xl">
              📝
            </span>

            <span className="font-medium">
              compressits Blog
            </span>

          </div>

          <h1 className="text-6xl font-bold mb-4">

            Blog

          </h1>

          <p className="text-xl text-gray-600">

            Tips, guides and resources about file compression and conversion.

          </p>

        </div>

        <div className="space-y-8">

          {blogs.map((blog, index) => (

            <section
              key={index}
              className="bg-white rounded-3xl shadow-xl p-10"
            >

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">

                  {blog.icon}

                </div>

                <Link
  to={blog.link}
  className="text-3xl font-bold hover:text-blue-600 transition"
>
  {blog.title}
</Link>

              </div>

              <p className="text-gray-700 text-lg leading-8">

                {blog.content}

              </p>

              <Link
  to={blog.link}
  className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
>
  Read Full Article →
</Link>

            </section>

          ))}

          <div className="bg-blue-600 text-white rounded-3xl p-10 text-center shadow-xl">

            <h2 className="text-3xl font-bold mb-4">

              More Articles Coming Soon

            </h2>

            <p className="text-lg">

              We regularly publish guides about file optimization,
              compression, conversion and digital productivity.

            </p>

          </div>

        </div>

      </div>

    </div>

  );
}