import { useState } from "react";

import toast from "react-hot-toast";

import axios from "axios";

import {
  Download,
  RefreshCw,
} from "lucide-react";

import UploadBox from "../components/ui/UploadBox";

import { Helmet } from "react-helmet-async";

export default function Convert() {

  const [originalImage, setOriginalImage] =
  useState<File | null>(null);

  const [convertedImage,
    setConvertedImage] =
    useState<string>("");

  const [loading,
    setLoading] =
    useState(false);

  const [convertType,
    setConvertType] =
    useState("image/png");

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

  // HANDLE CONVERSION
  const handleDrop =
    async (
      acceptedFiles: File[]
    ) => {

    const file =
      acceptedFiles[0];

    if (!file) return;

    setLoading(true);

    try {

      setOriginalImage(file);

      const image =
        new Image();

      image.src =
        URL.createObjectURL(file);

      image.onload = () => {

        const canvas =
          document.createElement(
            "canvas"
          );

        canvas.width =
          image.width;

        canvas.height =
          image.height;

        const ctx =
          canvas.getContext(
            "2d"
          );

        if (!ctx) return;

        ctx.drawImage(
          image,
          0,
          0
        );

        const converted =
          canvas.toDataURL(
            convertType
          );

        setConvertedImage(
          converted
        );

        const userEmail =
          localStorage.getItem(
            "userEmail"
          );

        // LOGIN USER
        if (userEmail) {

          toast.success(
            "Conversion successful! Download to earn rewards."
          );

        }

        // GUEST USER
        else {

          toast(
            "Conversion successful! Login to earn rewards after download."
          );

        }

        setLoading(false);
      };
      {originalImage && (
  <p>{originalImage.name}</p>
)}

    } catch (error) {

      console.log(error);

      toast.error(
        "Conversion failed!"
      );

      setLoading(false);
    }
  };

  // HANDLE DOWNLOAD
  const handleDownload =
    async () => {

    const link =
      document.createElement(
        "a"
      );

    link.href =
      convertedImage;

    // FILE EXTENSION
    const extension =
      convertType ===
      "image/png"
        ? "png"
        : convertType ===
          "image/jpeg"
        ? "jpg"
        : "webp";

    link.download =
      `converted-image.${extension}`;

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
    `https://compressits-backend-production.up.railway.app/api/auth/image-convert/${userEmail}`
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
  response.data !== "CLAIM_AVAILABLE"
) {

  setOriginalImage(null);
  setConvertedImage("");
  setConvertType("image/png");

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
        Image Converter Online Free | JPG, PNG, WEBP Converter - CompressIts
      </title>

      <meta
        name="description"
        content="Convert images online for free with CompressIts. Change JPG to PNG, PNG to JPG, JPG to WEBP, PNG to WEBP and more instantly."
      />

      <meta
        name="keywords"
        content="image converter, jpg to png, png to jpg, webp converter, jpg to webp, png to webp, free image converter online"
      />

      <meta
        property="og:title"
        content="Free Image Converter Online - CompressIts"
      />

      <meta
        property="og:description"
        content="Convert JPG, PNG and WEBP images instantly online for free."
      />

      <meta
        property="og:url"
        content="https://compressits.com/convert"
      />

      <link
        rel="canonical"
        href="https://compressits.com/convert"
      />
    </Helmet>

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-20 px-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm mb-6">

            <RefreshCw className="text-purple-600" />

            <span className="font-medium">

              Fast File Conversion

            </span>

          </div>

          <h1 className="text-5xl font-bold mb-4">

            File Converter

          </h1>

          <p className="text-xl text-gray-600">

            Convert images instantly

          </p>

        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-10">

          {/* FORMAT */}
          <div className="mb-8">

            <label className="block text-lg font-semibold mb-3">

              Convert To

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

              <option value="image/png">

                PNG

              </option>

              <option value="image/jpeg">

                JPG

              </option>

              <option value="image/webp">

                WEBP

              </option>

            </select>

          </div>

          {/* UPLOAD */}
          <UploadBox
            onDrop={handleDrop}
          />

          {/* LOADING */}
          {loading && (

            <div className="text-center mt-8">

              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto"></div>

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
            `https://compressits-backend-production.up.railway.app/api/auth/claim-image-convert/${userEmail}`
          );

        toast.success(
          response.data
        );

        setClaimedToday(true);

        setShowClaimButton(false);

        setOriginalImage(null);

        setConvertedImage("");

        setConvertType("image/png");

      }}
      className="bg-green-600 text-white px-6 py-3 rounded-xl"
    >

      🎁 Claim 50 Coins

    </button>

  </div>

)}

          {/* RESULT */}
          {convertedImage &&
            !loading && (

            <div className="mt-12 text-center">

              <img
                src={convertedImage}
                alt="Converted"
                className="rounded-3xl shadow-lg mx-auto mb-8 max-h-[500px]"
              />

              {/* DOWNLOAD */}
              <button
                onClick={
                  handleDownload
                }
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition shadow-lg"
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