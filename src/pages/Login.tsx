import { useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";

import { Eye, EyeOff } from "lucide-react";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

export default function Login() {

  const handleGoogleLogin = async () => {

  try {

    const provider =
      new GoogleAuthProvider();

    const result =
      await signInWithPopup(
        auth,
        provider
      );

    // SAVE USER IN MYSQL
    await axios.post(
      "https://compressits-backend-production.up.railway.app/api/auth/google-login",
      {
        email: result.user.email,
        name: result.user.displayName
      }
    );

    localStorage.setItem(
      "userEmail",
      result.user.email || ""
    );
    setMessage("Google Login Successful!");
setSuccess(true);

    window.location.href =
      "/dashboard";

  } catch (error) {

    console.log(error);

  }

};

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
  useState(false);  

  const [message, setMessage] =
  useState("");

const [success, setSuccess] =
  useState(false);  

 const handleLogin = async (
  e: React.FormEvent
) => {

  e.preventDefault();

  try {

    // FIREBASE LOGIN
    
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    // CHECK EMAIL VERIFIED
//     if (
//       !userCredential.user
//         .emailVerified
//     ) {

//       setMessage(
//   "Please verify your email before login!"
// );

// setSuccess(false);
//       return;
//     }

    // YOUR EXISTING BACKEND LOGIN
   
      await axios.post(
        "https://compressits-backend-production.up.railway.app/api/auth/login",
        {
          email,
          password,
        }
      );

   setMessage(
  "Login Successful!"
);

setSuccess(true);

    // SAVE LOGGED IN USER
    localStorage.setItem(
      "userEmail",
      email
    );

    // REDIRECT
   setTimeout(() => {

  window.location.href =
    "/dashboard";

}, 1000);
 } catch (error: any) {

  console.log(error);

  setMessage(
    error.message
  );

  setSuccess(false);
}
};

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-8">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          {message && (

  <div
    className={`text-center p-3 rounded-xl mb-4 font-medium ${
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
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border rounded-2xl px-5 py-4 outline-none"
          />

          <div className="relative">

  <input
    type={
      showPassword
        ? "text"
        : "password"
    }
    placeholder="Enter your password"
    value={password}
    onChange={(e) =>
      setPassword(e.target.value)
    }
    className="w-full border rounded-2xl px-5 py-4 pr-12 outline-none"
  />

  <button
    type="button"
    onClick={() =>
      setShowPassword(
        !showPassword
      )
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
  >

    {showPassword
      ? <EyeOff size={20} />
      : <Eye size={20} />
    }

  </button>

</div>
          <div className="text-right">

  <Link
    to="/forgot-password"
    className="text-blue-600 text-sm hover:underline"
  >

    Forgot Password?

  </Link>

</div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold transition"
          >

            Login

          </button>

          <button
  type="button"
  onClick={handleGoogleLogin}
  className="w-full bg-red-500 text-white py-4 rounded-2xl"
>
  Login with Google
</button>

        </form>

        <p className="text-center mt-6 text-gray-600">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-2"
          >

            Register

          </Link>

        </p>

      </div>

    </div>
  );
}