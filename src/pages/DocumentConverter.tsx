import { useState } from "react";

import jsPDF from "jspdf";

import toast from "react-hot-toast";

import axios from "axios";

import {
  Helmet
} from "react-helmet-async";

import {
  Download,
  FileText,
} from "lucide-react";

import UploadBox from "../components/ui/UploadBox";

export default function DocumentConverter() {

  const [file,
    setFile] =
    useState<File | null>(null);

  const [pdfBlob,
    setPdfBlob] =
    useState<Blob | null>(null);

  const [loading,
    setLoading] =
    useState(false);

  const [convertType,
    setConvertType] =
    useState("image-to-pdf");

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

  // HANDLE FILE
  const handleDrop =
    async (
      acceptedFiles: File[]
    ) => {

    const selectedFile =
      acceptedFiles[0];

    if (!selectedFile)
      return;

    setLoading(true);

    try {

      setFile(selectedFile);

      // IMAGE → PDF
      if (
        convertType ===
        "image-to-pdf"
      ) {

        const image =
          new Image();

        image.src =
          URL.createObjectURL(
            selectedFile
          );

        image.onload =
          async () => {

          const pdf =
            new jsPDF();

          pdf.addImage(
            image,
            "JPEG",
            10,
            10,
            180,
            160
          );

          const blob =
            pdf.output("blob");

          setPdfBlob(blob);

          setLoading(false);

          const userEmail =
            localStorage.getItem(
              "userEmail"
            );

          if (userEmail) {

            toast.success(
              "Conversion successful! Download to earn rewards."
            );

          } else {

            toast(
              "Conversion successful! Login to earn rewards."
            );

          }
        };

      }

      // OTHER TYPES
      else {

  // FORM DATA
  const formData =
    new FormData();

  formData.append(
    "file",
    selectedFile
  );

  // API CALL
  const response =
    await axios.post(
      "https://compressits-backend-production.up.railway.app/api/document/convert-to-pdf",
      formData,
      {
        responseType: "blob",
      }
    );

  // SAVE PDF
  setPdfBlob(
    response.data
  );

  setLoading(false);

  const userEmail =
    localStorage.getItem(
      "userEmail"
    );

  if (userEmail) {

   if (!claimedToday) {

  toast.success(
    "Conversion successful! Download to earn rewards."
  );

} else {

  toast.success(
    "Conversion successful!"
  );

}

  } else {

    toast(
      "Conversion successful! Login to earn rewards."
    );

  }
}
    } catch (error: any) {

  console.log("FULL ERROR:", error);

  console.log(
    "BACKEND RESPONSE:",
    error.response?.data
  );

  console.log(
    "STATUS:",
    error.response?.status
  );

  toast.error(
    error.response?.data ||
    "Conversion failed!"
  );

  setLoading(false);
}
  };

  // HANDLE DOWNLOAD
  const handleDownload =
    async () => {

    if (!pdfBlob)
      return;

    // DOWNLOAD
    const url =
      URL.createObjectURL(
        pdfBlob
      );

    const link =
      document.createElement(
        "a"
      );

    link.href = url;

    link.download =
      "converted.pdf";

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

    // GUEST
    if (!userEmail) {

      toast(
        "Login to earn reward coins."
      );

      return;
    }

    

    try {

      // REWARD
      
       const response =
  await axios.post(
    `https://compressits-backend-production.up.railway.app/api/auth/pdf-convert/${userEmail}`
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
    `🎁 PDF Convert Progress: ${response.data}`
  );

}

      // RESET
      if (
  response.data !==
  "CLAIM_AVAILABLE"
) {

  setFile(null);

  setPdfBlob(null);

  setConvertType(
    "image-to-pdf"
  );

}

    } catch (error: any) {

  console.log(error);

  console.log(
    error.response?.data
  );

  toast.error(
    "Reward failed!"
  );
}
  };

  return (

<>
  <Helmet>

    <title>
      Free PDF Converter | compressits
    </title>

    <meta
      name="description"
      content="Convert images, PDFs and documents online instantly for free."
    />

  </Helmet>

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-20 px-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm mb-6">

            <FileText className="text-indigo-600" />

            <span className="font-medium">

              Smart Document Conversion

            </span>

          </div>

          <h1 className="text-6xl font-bold mb-6">
  PDF Converter
</h1>

<p className="text-gray-600 text-2xl">
  Convert Word, Excel, PPT and Images to PDF
</p>

        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          {/* CONVERT TYPE */}
          <div className="mb-8">

            <label className="block text-lg font-semibold mb-3">

              Convert Type

            </label>

            <select
              value={convertType}
              onChange={(e) =>
                setConvertType(
                  e.target.value
                )
              }
              className="w-full border rounded-2xl px-5 py-4 outline-none"
            >

              <option value="image-to-pdf">

                Image → PDF

              </option>

              <option value="excel-to-pdf">

                Excel → PDF

              </option>

              <option value="word-to-pdf">

                Word → PDF

              </option>

              <option value="ppt-to-pdf">

                PPT → PDF

              </option>

            </select>

          </div>

          {/* UPLOAD */}
          <UploadBox
            onDrop={handleDrop}
          />

          {/* FILE NAME */}
          {file && (

            <p className="text-center text-gray-500 mt-4">

              Selected File:
              {" "}
              {file.name}

            </p>

          )}

          {/* LOADING */}
          {loading && (

            <div className="text-center mt-8">

              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto"></div>

              <p className="mt-4 text-lg font-medium">

                Converting File...

              </p>

            </div>

          )}

          {showClaimButton &&
 !claimedToday && (

  <div className="mb-6">

    <button
      onClick={async () => {

        const response =
          await axios.post(
            `https://compressits-backend-production.up.railway.app/api/auth/claim-pdf-convert/${userEmail}`
          );

        toast.success(
          response.data
        );

        setClaimedToday(true);

        setShowClaimButton(false);

        setFile(null);

        setPdfBlob(null);

        setConvertType(
          "image-to-pdf"
        );

      }}
      className="bg-green-600 text-white px-6 py-3 rounded-xl"
    >

      🎁 Claim 50 Coins

    </button>

  </div>

)}

          {/* DOWNLOAD */}
          {pdfBlob &&
            !loading && (

            <div className="text-center mt-12">

              <button
                onClick={
                  handleDownload
                }
                className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition shadow-lg"
              >

                <Download size={24} />

                Download Converted File

              </button>

            </div>

          )}

        </div>

      </div>

    </div>
    </>
  );
}