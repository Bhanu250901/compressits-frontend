import { useState } from "react";

import imageCompression from "browser-image-compression";

import toast from "react-hot-toast";

import axios from "axios";

import {
  Download,
  Image as ImageIcon,
} from "lucide-react";

import {
  Helmet
} from "react-helmet-async";

import UploadBox from "../components/ui/UploadBox";

function ImageCompressor() {

  const [originalImage, setOriginalImage] =
    useState<File | null>(null);

  const [compressedImage, setCompressedImage] =
    useState<File | null>(null);

  const [preview, setPreview] =
    useState<string>("");

  const [compressedPreview, setCompressedPreview] =
    useState<string>("");

  const [loading, setLoading] =
    useState(false);

  
  // TARGET SIZE KB
  const [targetSize,
    setTargetSize] =
    useState("200");

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

  // HANDLE DROP
  const handleDrop = async (
    acceptedFiles: File[]
  ) => {

    const file =
      acceptedFiles[0];

    if (!file) return;

    // ORIGINAL SIZE KB
    const originalSizeKB =
      file.size / 1024;

    // USER TARGET
    const targetKB =
      Number(targetSize);

    // VALIDATIONS
    if (!targetKB || targetKB <= 0) {

      toast.error(
        "Enter valid target size!"
      );

      return;
    }

    // CANNOT INCREASE SIZE
    if (
      targetKB >= originalSizeKB
    ) {

      toast.error(
        "Target size cannot be larger than original image size!"
      );

      return;
    }

    setOriginalImage(file);

    const imageUrl =
      URL.createObjectURL(file);

    setPreview(imageUrl);

    setLoading(true);

    // CONVERT KB → MB
    const targetMB =
      targetKB / 1024;

    const options = {
      maxSizeMB: targetMB,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
    };

    try {

      const compressedFile =
        await imageCompression(
          file,
          options
        );

      const compressedUrl =
        URL.createObjectURL(
          compressedFile
        );

      setCompressedImage(
        compressedFile
      );

      setCompressedPreview(
        compressedUrl
      );



// LOGIN USER
if (userEmail) {

  if (!claimedToday) {

    toast.success(
      "compression successful! Download file to earn rewards."
    );

  } else {

    toast.success(
      "compression successful!"
    );

  }

}

// GUEST USER
else {

  toast(
    "compression successful! Login to earn rewards after download."
  );

}

    } catch (error) {

      console.log(error);

      toast.error(
        "compression failed!"
      );

    } finally {

      setLoading(false);

    }
  };

  // SIZE CALCULATIONS
  const originalSize =
    originalImage
      ? (
          originalImage.size /
          1024 /
          1024
        ).toFixed(2)
      : 0;

  const compressedSize =
    compressedImage
      ? (
          compressedImage.size /
          1024 /
          1024
        ).toFixed(2)
      : 0;

  const savedPercentage =
    originalImage &&
    compressedImage
      ? (
          (
            (
              originalImage.size -
              compressedImage.size
            ) /
            originalImage.size
          ) * 100
        ).toFixed(0)
      : 0;

    // HANDLE DOWNLOAD
const handleDownload =
  async () => {

  // DOWNLOAD FILE
  const link =
    document.createElement("a");

  link.href =
    compressedPreview;

  link.download =
    "compressed-image.jpg";

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
    `https://compressits-backend-production.up.railway.app/api/auth/image-compress/${userEmail}`
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

  setOriginalImage(null);

  setCompressedImage(null);

  setPreview("");

  setCompressedPreview("");

  setTargetSize("200");
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
      Free Image Compressor | compressit
    </title>

    <meta
      name="description"
      content="Compress JPG, PNG and WEBP images online for free without losing quality."
    />

  </Helmet>

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm mb-6">

            <ImageIcon className="text-blue-600" />

            <span className="font-medium">

              Fast & Secure compression

            </span>

          </div>

          <h1 className="text-5xl font-bold mb-4">

            Image Compressor

          </h1>

          <p className="text-xl text-gray-600">

            Compress JPG, PNG & WEBP images instantly

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
          {originalImage && (

  <p className="text-gray-500 mt-4 text-center">

    Selected File:
    {" "}
    {originalImage.name}

  </p>

)}

          {/* LOADING */}
          {loading && (

            <div className="text-center mt-8">

              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>

              <p className="mt-4 text-lg font-medium">

                compressing Image...

              </p>

            </div>

          )}

          {/* RESULTS */}
          {compressedPreview &&
            !loading && (

            <div className="mt-12">

              {/* STATS */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">

                <div className="bg-gray-50 p-6 rounded-2xl text-center">

                  <h3 className="text-lg font-semibold mb-2">

                    Original Size

                  </h3>

                  <p className="text-3xl font-bold text-gray-800">

                    {originalSize} MB

                  </p>

                </div>

                <div className="bg-blue-50 p-6 rounded-2xl text-center">

                  <h3 className="text-lg font-semibold mb-2">

                    Compressed Size

                  </h3>

                  <p className="text-3xl font-bold text-blue-600">

                    {compressedSize} MB

                  </p>

                </div>

                <div className="bg-green-50 p-6 rounded-2xl text-center">

                  <h3 className="text-lg font-semibold mb-2">

                    Saved

                  </h3>

                  <p className="text-3xl font-bold text-green-600">

                    {savedPercentage}%

                  </p>

                </div>

              </div>

              {/* PREVIEW */}
              <div className="grid md:grid-cols-2 gap-8">

                {/* ORIGINAL */}
                <div>

                  <h2 className="text-2xl font-semibold mb-4">

                    Original

                  </h2>

                  <img
                    src={preview}
                    alt="Original"
                    className="rounded-3xl shadow-lg"
                  />

                </div>

                {/* COMPRESSED */}
                <div>

                  <h2 className="text-2xl font-semibold mb-4">

                    Compressed

                  </h2>

                  <img
                    src={compressedPreview}
                    alt="Compressed"
                    className="rounded-3xl shadow-lg"
                  />

                </div>

              </div>

              {/* DOWNLOAD */}
              <div className="text-center mt-10">

             {showClaimButton && !claimedToday && (

  <div className="text-center mb-6">

    <button
      onClick={async () => {

        const response =
          await axios.post(
            `https://compressits-backend-production.up.railway.app/api/auth/claim-image-compress/${userEmail}`
          );

        toast.success(
  response.data
);

setClaimedToday(true);

setShowClaimButton(false);

setOriginalImage(null);

setCompressedImage(null);

setPreview("");

setCompressedPreview("");

setTargetSize("200");
      }}
      className="bg-green-600 text-white px-6 py-3 rounded-xl"
    >

      🎁 Claim 50 Coins

    </button>

  </div>

)}

                <button
  onClick={handleDownload}
  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition shadow-lg"
>

  <Download size={24} />

  Download Compressed Image

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

export default ImageCompressor;