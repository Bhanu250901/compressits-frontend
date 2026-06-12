import { useState } from "react";

import toast from "react-hot-toast";

import axios from "axios";

import {
  Download,
  FileText,
} from "lucide-react";

import {
  Helmet
} from "react-helmet-async";

import UploadBox from "../components/ui/UploadBox";

export default function PdfCompressor() {

  const [originalPdf,
    setOriginalPdf] =
    useState<File | null>(null);

  const [compressedPdf,
    setCompressedPdf] =
    useState<File | null>(null);

  const [loading,
    setLoading] =
    useState(false);

  const [targetSize,
    setTargetSize] =
    useState("500");

  const [showClaimButton,
  setShowClaimButton] =
  useState(false);

const [claimedToday,
  setClaimedToday] =
  useState(false);

const userEmail =
  localStorage.getItem(
    "userEmail"
  );  

  // HANDLE PDF
  const handleDrop =
    async (
      acceptedFiles: File[]
    ) => {

    const file =
      acceptedFiles[0];

    if (!file) return;

    // VALID PDF
    if (
      file.type !==
      "application/pdf"
    ) {

      toast.error(
        "Upload PDF only!"
      );

      return;
    }

    const originalSizeKB =
      file.size / 1024;

    const targetKB =
      Number(targetSize);

    // VALIDATIONS
    if (
      !targetKB ||
      targetKB <= 0
    ) {

      toast.error(
        "Enter valid target size!"
      );

      return;
    }

    // CANNOT INCREASE
    if (
      targetKB >=
      originalSizeKB
    ) {

      toast.error(
        "Target size cannot exceed original PDF size!"
      );

      return;
    }

    setLoading(true);

    try {

      // SIMULATE compressitON
      await new Promise(
        (resolve) =>
          setTimeout(
            resolve,
            2500
          )
      );

      setOriginalPdf(file);

      // DEMO ONLY
      setCompressedPdf(file);

      const userEmail =
        localStorage.getItem(
          "userEmail"
        );

      // LOGIN USER
      if (userEmail) {

       if (!claimedToday) {

  toast.success(
    "PDF compressed! Download file to earn rewards."
  );

} else {

  toast.success(
    "PDF compressed successfully!"
  );

}

      }

      // GUEST USER
      else {

        toast(
          "PDF compressed! Login to earn rewards after download."
        );

      }

    } catch (error) {

      console.log(error);

      toast.error(
        "PDF compression failed!"
      );

    } finally {

      setLoading(false);

    }
  };

  // SIZE CALCULATIONS
  const originalSize =
    originalPdf
      ? (
          originalPdf.size /
          1024 /
          1024
        ).toFixed(2)
      : 0;

  // HANDLE DOWNLOAD
  const handleDownload =
    async () => {

    if (!compressedPdf)
      return;

    // DOWNLOAD FILE
    const url =
      URL.createObjectURL(
        compressedPdf
      );

    const link =
      document.createElement(
        "a"
      );

    link.href = url;

    link.download =
      "compressed.pdf";

    document.body.appendChild(
      link
    );

    link.click();

    document.body.removeChild(
      link
    );

    // USER EMAIL
    const userEmail =
      localStorage.getItem(
        "userEmail"
      );

    // GUEST USER
    if (!userEmail) {

      toast(
        "Login to earn reward coins."
      );

      return;
    }

    

    try {

      // ADD REWARD
      
        const response =
  await axios.post(
    `http://localhost:8080/api/auth/pdf-compress/${userEmail}`
  );

if (
  response.data ===
  "CLAIM_AVAILABLE"
) {

  setShowClaimButton(true);

  toast.success(
    "🎉 5/5 Completed! Claim 50 Coins"
  );

}

else if (
  response.data ===
  "ALREADY_COMPLETED"
) {

  toast(
    "✅ Today's reward already claimed."
  );

}
else {

  toast.success(
    `🎁 Progress: ${response.data}`
  );
}
      // RESET PAGE
     if (
  response.data !==
  "CLAIM_AVAILABLE"
) {

  setOriginalPdf(null);

  setCompressedPdf(null);

  setTargetSize("500");

}

    } catch (error) {

      console.log(error);

      toast.error(
        "Reward failed!"
      );
    }
  };

  return (

<>
  <Helmet>

    <title>
      Free PDF Compressor | compressit
    </title>

    <meta
      name="description"
      content="Compress PDF files online for free with fast and secure processing."
    />

  </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 py-20 px-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm mb-6">

            <FileText className="text-red-600" />

            <span className="font-medium">

              Secure PDF compression

            </span>

          </div>

          <h1 className="text-5xl font-bold mb-4">

            PDF Compressor

          </h1>

          <p className="text-xl text-gray-600">

            Compress large PDF files instantly

          </p>

        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          {/* TARGET SIZE */}
          <div className="mb-8">

            <label className="block text-lg font-semibold mb-3">

              Target Size (KB)

            </label>

            <input
              type="number"
              value={targetSize}
              onChange={(e) =>
                setTargetSize(
                  e.target.value
                )
              }
              placeholder="Enter target size in KB"
              className="w-full border rounded-2xl px-5 py-4 outline-none"
            />

          </div>

          {/* UPLOAD */}
          <UploadBox
            onDrop={handleDrop}
          />

          {/* LOADING */}
          {loading && (

            <div className="text-center mt-8">

              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600 mx-auto"></div>

              <p className="mt-4 text-lg font-medium">

                compressing PDF...

              </p>

            </div>

          )}

          {/* RESULTS */}
          {compressedPdf &&
            !loading && (

            <div className="mt-12">

              {/* STATS */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">

                <div className="bg-gray-50 p-6 rounded-2xl text-center">

                  <h3 className="text-lg font-semibold mb-2">

                    Original Size

                  </h3>

                  <p className="text-3xl font-bold text-gray-800">

                    {originalSize} MB

                  </p>

                </div>

                <div className="bg-red-50 p-6 rounded-2xl text-center">

                  <h3 className="text-lg font-semibold mb-2">

                    Target Size

                  </h3>

                  <p className="text-3xl font-bold text-red-600">

                    {targetSize} KB

                  </p>

                </div>

              </div>
              {showClaimButton &&
 !claimedToday && (

  <div className="mb-6">

    <button
      onClick={async () => {

        const response =
          await axios.post(
            `http://localhost:8080/api/auth/claim-pdf-compress/${userEmail}`
          );

          console.log(response.data);

       toast.success(
  response.data
);

setClaimedToday(true);

setShowClaimButton(false);

// RESET PAGE AFTER CLAIM
setOriginalPdf(null);

setCompressedPdf(null);

setTargetSize("500");
      }}
      className="bg-green-600 text-white px-6 py-3 rounded-xl"
    >

      🎁 Claim 50 Coins

    </button>

  </div>

)}

              {/* DOWNLOAD */}
              <div className="text-center">

                <button
                  onClick={
                    handleDownload
                  }
                  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition shadow-lg"
                >

                  <Download size={24} />

                  Download Compressed PDF

                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
    </>
  );
}