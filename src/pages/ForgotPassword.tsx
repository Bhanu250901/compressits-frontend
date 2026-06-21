import { useState } from "react";

import {
  sendPasswordResetEmail
} from "firebase/auth";

import { auth } from "../firebase";

import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

export default function ForgotPassword() {

const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [success, setSuccess] = useState(false);

  const handleReset =
    async (
      e: React.FormEvent
    ) => {

    e.preventDefault();

    try {

  await sendPasswordResetEmail(auth, email);

  setMessage("Password reset link sent to your email.");
  setSuccess(true);

} catch (error: any) {

  console.log(error);

  if (error.code === "auth/user-not-found") {
    setMessage("No account found with this email.");
  }
  else if (error.code === "auth/invalid-email") {
    setMessage("Please enter a valid email address.");
  }
  else {
    setMessage("Failed to send reset email. Please try again.");
  }

  setSuccess(false);
}
  };

  return (
  <>
    <Helmet>
      <title>Forgot Password | CompressIts</title>

      <meta
        name="description"
        content="Reset your CompressIts account password securely and regain access to your file compression and conversion account."
      />

      <meta
        name="keywords"
        content="CompressIts forgot password, reset password, account recovery, password reset"
      />

      <meta
        property="og:title"
        content="Forgot Password | CompressIts"
      />

      <meta
        property="og:description"
        content="Reset your CompressIts password securely."
      />

      <meta
        property="og:url"
        content="https://compressits.com/forgot-password"
      />

      <link
        rel="canonical"
        href="https://compressits.com/forgot-password"
      />
    </Helmet>

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">

          Forgot Password

        </h1>

        <form
  onSubmit={handleReset}
  className="space-y-5"
>
  {message && (
    <div
      className={`text-center p-3 rounded-xl font-medium ${
        success
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {message}
    </div>
  )}

  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full border rounded-2xl px-5 py-4 outline-none"
  />

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold transition"
  >
    Send Reset Link
  </button>
</form>
        <p className="text-center mt-6">

          <Link
            to="/login"
            className="text-blue-600"
          >

            Back to Login

          </Link>

        </p>

      </div>

    </div>
    </>
  );
}