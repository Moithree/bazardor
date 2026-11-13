"use client";

import React, { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";



export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signIn.email({
        email,
        password,
      });

      setLoading(false);

     if (res.error) {
        console.error("Error Message:", res.error.message);
        console.error("Error Status:", res.error.status);
        toast.error(res.error.message || "ইমেইল বা পাসওয়ার্ড ভুল হয়েছে!");
        return;
      }

      toast.success("সফলভাবে সাইন ইন হয়েছে!");
      router.push("/");
      router.refresh();
    } catch (err) {
      setLoading(false);
      console.error("Catch Error:", err);
      toast.error("সারვারে সমস্যা হয়েছে!");
    }
  };
  return (
    <div className="min-h-screen bg-[#f4f7f5] flex flex-col items-center justify-center py-12 px-4 sm:px-6">
      {/* উপরের হেডিং অংশ */}
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          সাইন ইন
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* মূল ফর্ম কার্ড */}
      <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
        <form onSubmit={handleEmailSignIn} className="space-y-4">
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
              className="w-full px-3.5 py-2.5 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#00875a] focus:ring-1 focus:ring-[#00875a]"
            />
          </div>

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
              className="w-full px-3.5 py-2.5 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#00875a] focus:ring-1 focus:ring-[#00875a]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00875a] hover:bg-[#007048] disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors cursor-pointer mt-2"
          >
            {loading ? "অপেক্ষা করুন..." : "সাইন ইন"}
          </button>
        </form>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-gray-100 w-full"></div>
          <span className="bg-white px-3 text-xs text-gray-400">অথবা</span>
          <div className="border-t border-gray-100 w-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleSocialSignIn("google")}
            className="flex items-center justify-center gap-2 px-3 py-2.5 border border-gray-200 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span>Google দিয়ে চালিয়ে যান</span>
          </button>

          <button
            type="button"
            onClick={() => handleSocialSignIn("github")}
            className="flex items-center justify-center gap-2 px-3 py-2.5 border border-gray-200 rounded-xl text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span>GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 pt-1">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/sign-up" className="text-[#00875a] font-semibold hover:underline">
            সাইন আপ করুন
          </Link>
        </p>
      </div>

      <div className="mt-6">
        <Link href="/" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}