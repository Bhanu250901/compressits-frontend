import { useDropzone } from "react-dropzone";

import {
  UploadCloud,
  Image as ImageIcon
} from "lucide-react";

type UploadBoxProps = {
  onDrop: (acceptedFiles: File[]) => void;
};

export default function UploadBox({
  onDrop,
}: UploadBoxProps) {

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: {

  "image/*": [],

  "application/pdf": [],

  "application/msword": [],

  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],

  "application/vnd.ms-powerpoint": [],

  "application/vnd.openxmlformats-officedocument.presentationml.presentation": [],

  "application/vnd.ms-excel": [],

  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],

},
    multiple: false,
  });

  return (

    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-[32px] p-14 text-center cursor-pointer transition-all duration-300 shadow-sm

      ${
        isDragActive
          ? "border-blue-600 bg-blue-50 scale-[1.02]"
          : "border-gray-300 bg-white hover:bg-blue-50 hover:border-blue-500"
      }`}
    >

      <input {...getInputProps()} />

      {/* Icon */}
      <div className="flex justify-center mb-5">

        <div className="w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center">

          {isDragActive ? (
            <UploadCloud
              size={50}
              className="text-blue-600"
            />
          ) : (
            <ImageIcon
              size={50}
              className="text-blue-600"
            />
          )}

        </div>

      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-3">

        {isDragActive
          ? "Drop Image Here"
          : "Upload Your File"}

      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-lg mb-6">
        Drag & drop files or click to browse
      </p>

      {/* Formats */}
      <div className="flex justify-center gap-3 flex-wrap">

        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
          JPG
        </span>

        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
          PNG
        </span>

        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
          WEBP
        </span>

        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
  PDF
</span>

<span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
  DOCX
</span>

<span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
  PPT
</span>

<span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
  XLSX
</span>

      </div>

    </div>
  );
}