import { useState } from "react";

import axios from "axios";

import { Eye, EyeOff } from "lucide-react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { auth } from "../firebase";

export default function Register() {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [showPassword,
  setShowPassword] =
  useState(false);

const [showConfirmPassword,
  setShowConfirmPassword] =
  useState(false);  

  const [referredBy,
  setReferredBy] =
  useState(""); 
  
  const [message, setMessage] =
  useState("");

const [success, setSuccess] =
  useState(false);

const [loading, setLoading] =
  useState(false);  

  // EMAIL REGISTER
  const handleRegister = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    // Password match validation
    if (
      password !==
      confirmPassword
    ) {

     setMessage(
  "Passwords do not match!"
);

setSuccess(false);

      return;
    }

    try {

      // FIREBASE REGISTER
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      // SEND EMAIL VERIFICATION
      await sendEmailVerification(
        userCredential.user
      );

      // SAVE USER IN BACKEND
      await axios.post(
  "https://compressits-backend-production.up.railway.app/api/auth/register",
  {
    name,
    email,
    password,
    referredBy
  }
);

      setMessage(
  "Verification email sent! Please verify your email."
);

setSuccess(true);

      navigate("/login");

    } catch (error: any) {

      console.log(error);

      setMessage(
  error.message
);

setSuccess(false);
    }
  };

  // GOOGLE SIGNUP
  const handleGoogleSignup =
  async () => {

    if (loading) return;

    setLoading(true);

    try {

      const provider =
        new GoogleAuthProvider();

      const result =
        await signInWithPopup(
          auth,
          provider
        );

      const user =
        result.user;

      console.log(
        "Sending user to backend"
      );

      // SAVE USER IN BACKEND
      await axios.post(
        "https://compressits-backend-production.up.railway.app/api/auth/register",
        {
          name:
            user.displayName,

          email:
            user.email,

          password:
            "google-auth-user",

          referredBy
        }
      );

      console.log(
        "User saved in backend"
      );

      localStorage.setItem(
        "userEmail",
        user.email || ""
      );

      setMessage(
        "Google Signup Successful!"
      );

      setSuccess(true);

      setTimeout(() => {

        window.location.href =
          "/dashboard";

      }, 1000);

    } catch (error: any) {

      console.log(error);

      if (
        error.code ===
        "auth/cancelled-popup-request"
      ) {

        setMessage(
          "Google sign-in cancelled."
        );

      } else {

        setMessage(
          "Google Signup Failed!"
        );

      }

      setSuccess(false);

    } finally {

      setLoading(false);

    }
};
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">
          Register
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >
          {message && (

  <div
    className={`text-center p-3 rounded-xl mb-4 ${
      success
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >

    {message}

  </div>

)}

          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="w-full border rounded-2xl px-5 py-4 outline-none"
          />

          {/* Email */}
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

          {/* Password */}
          <div className="relative">

  <input
    type={
      showPassword
        ? "text"
        : "password"
    }
    placeholder="Enter password"
    value={password}
    onChange={(e) =>
      setPassword(e.target.value)
    }
    className="w-full border rounded-2xl px-5 py-4 pr-12 outline-none"
  />

  <button
    type="button"
    onClick={() =>
      setShowPassword(!showPassword)
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
  >

    {showPassword
      ? <EyeOff size={20} />
      : <Eye size={20} />
    }

  </button>

</div>
          {/* Confirm Password */}
          <div className="relative">

  <input
    type={
      showConfirmPassword
        ? "text"
        : "password"
    }
    placeholder="Confirm password"
    value={confirmPassword}
    onChange={(e) =>
      setConfirmPassword(
        e.target.value
      )
    }
    className="w-full border rounded-2xl px-5 py-4 pr-12 outline-none"
  />

  <button
    type="button"
    onClick={() =>
      setShowConfirmPassword(
        !showConfirmPassword
      )
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
  >

    {showConfirmPassword
      ? <EyeOff size={20} />
      : <Eye size={20} />
    }

  </button>

</div>

          <input
  type="text"
  placeholder="Referral Code (Optional)"
  value={referredBy}
  onChange={(e) =>
    setReferredBy(
      e.target.value
    )
  }
  className="w-full border rounded-2xl px-5 py-4 outline-none"
/>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold transition"
          >

            Create Account

          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">

          <div className="flex-1 h-[1px] bg-gray-300" />

          <span className="text-gray-500">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-gray-300" />

        </div>

        {/* Google Signup */}
       <button
  disabled={loading}
  onClick={handleGoogleSignup}
  className="w-full border py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
>

  {loading
    ? "Please wait..."
    : "Continue with Google"}

</button>

        {/* Login Link */}
        <p className="text-center mt-6 text-gray-600">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-2"
          >

            Login

          </Link>

        </p>

      </div>

    </div>
  );
}