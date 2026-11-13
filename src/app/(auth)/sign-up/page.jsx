// import React from 'react';

// const SignUpPage = () => {
//   return (
//     <div>
//       <form>
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
//           <legend className="fieldset-legend">Login</legend>

//           <label className="label">Email</label>
//           <input type="email" className="input" placeholder="Email" />

//           <label className="label">Password</label>
//           <input type="password" className="input" placeholder="Password" />

//           <button className="btn btn-neutral mt-4">Login</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;







"use client";

import React, { useState } from "react";
import { signUp, signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি মেলেনি!");
      return;
    }

    setLoading(true);

    const { error } = await signUp.email({
      name,
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "অ্যাকাউন্ট তৈরি করতে সমস্যা হয়েছে!");
      return;
    }

    toast.success("অ্যাকাউন্ট তৈরি সফল হয়েছে! এখন সাইন ইন করুন।");
    router.push("/sign-in");
  };

  const handleSocialSignIn = async (provider) => {
    try {
      await signIn.social({
        provider,
        callbackURL: "/",
      });
    } catch (err) {
      toast.error(`${provider} দিয়ে লগইন ব্যর্থ হয়েছে!`);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f5] flex flex-col items-center justify-center py-12 px-4 sm:px-6">
      {/* উপরের হেডিং অংশ */}
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      {/* মূল ফর্ম কার্ড */}
      <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
        <form onSubmit={handleSignUp} className="space-y-4">
          {/* নাম ইনপুট */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-700">
              নাম
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="যেমন: রাকিব উদ্দিন"
              className="w-full px-3.5 py-2.5 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#00875a] focus:ring-1 focus:ring-[#00875a] transition-colors"
            />
          </div>

          {/* ইমেইল ইনপুট */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-700">
              ইমেইল
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3.5 py-2.5 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#00875a] focus:ring-1 focus:ring-[#00875a] transition-colors"
            />
          </div>

          {/* পাসওয়ার্ড ইনপুট */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-700">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full px-3.5 py-2.5 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#00875a] focus:ring-1 focus:ring-[#00875a] transition-colors"
            />
          </div>

          {/* পাসওয়ার্ড নিশ্চিত করুন */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-700">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="আবার লিখুন"
              className="w-full px-3.5 py-2.5 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#00875a] focus:ring-1 focus:ring-[#00875a] transition-colors"
            />
          </div>

          {/* সাবমিট বাটন */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00875a] hover:bg-[#007048] disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors cursor-pointer mt-2"
          >
            {loading ? "অপেক্ষা করুন..." : "অ্যাকাউন্ট তৈরি করুন"}
          </button>
        </form>

        {/* ডিভাইডার */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-gray-100 w-full"></div>
          <span className="bg-white px-3 text-xs text-gray-400">অথবা</span>
          <div className="border-t border-gray-100 w-full"></div>
        </div>

        {/* সোশ্যাল বাটনগুলো */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleSocialSignIn("google")}
            className="flex items-center justify-center gap-2 px-3 py-2.5 border border-gray-200 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z" />
              <path fill="#FBBC05" d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z" />
            </svg>
            <span>Google দিয়ে চালিয়ে যান</span>
          </button>

          <button
            type="button"
            onClick={() => handleSocialSignIn("github")}
            className="flex items-center justify-center gap-2 px-3 py-2.5 border border-gray-200 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 fill-gray-900" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        {/* নিচের সাইন ইন লিংক */}
        <p className="text-center text-xs text-gray-500 pt-1">
          অ্যাকাউন্ট আছে?{" "}
          <Link href="/sign-in" className="text-[#00875a] font-semibold hover:underline">
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      {/* হোম পেজে ফিরে যাওয়ার লিংক */}
      <div className="mt-6">
        <Link href="/" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}