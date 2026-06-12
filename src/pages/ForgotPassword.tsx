import { useState } from "react";

import {
  sendPasswordResetEmail
} from "firebase/auth";

import { auth } from "../firebase";

import { Link } from "react-router-dom";

export default function ForgotPassword() {

  const [email, setEmail] =
    useState("");

  const handleReset =
    async (
      e: React.FormEvent
    ) => {

    e.preventDefault();

    try {

      await sendPasswordResetEmail(
        auth,
        email
      );

      alert(
        "Password reset email sent!"
      );

    } catch (error: any) {

      console.log(error);

      alert(error.message);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">

          Forgot Password

        </h1>

        <form
          onSubmit={handleReset}
          className="space-y-5"
        >

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
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
  );
}