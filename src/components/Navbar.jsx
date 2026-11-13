"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();
  const router = useRouter();

  // বাংলা তারিখ বের করার ফাংশন
  const [banglaDate, setBanglaDate] = useState("");
  useEffect(() => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', calendar: 'bengali' };
    try {
      const bDate = new Intl.DateTimeFormat('bn-BD', options).format(new Date());
      setBanglaDate(bDate);
    } catch (e) {
      setBanglaDate("আজকের বাজার");
    }
  }, []);

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সফলভাবে লগআউট হয়েছে!");
          router.push("/");
        },
      },
    });
  };

  const categories = [
    { name: "চাল ও ডাল", href: "/category/rice-lentil" },
    { name: "সবজি", href: "/category/vegetables" },
    { name: "মাছ ও মাংস", href: "/category/fish-meat" },
    { name: "মসলা", href: "/category/spices" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* লোগো */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="flex flex-col">
              <span className="font-bold text-xl text-emerald-600 flex items-center gap-1">
                🛒 বাজার দর
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {banglaDate || "আজকের বাজার দর"}
              </span>
            </div>
          </Link>

          {/* ডেস্কটপ মেনু */}
          <div className="hidden md:flex items-center gap-8">
            {categories.map((cat, index) => (
              <Link key={index} href={cat.href} className="text-gray-600 hover:text-emerald-600 font-medium text-sm transition-colors">
                {cat.name}
              </Link>
            ))}
          </div>

          {/* অথ বাটন */}
          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <span className="text-xs text-gray-400">লোড হচ্ছে...</span>
            ) : session ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">
                  👤 {session.user?.name}
                </span>
                <button
                  onClick={handleSignOut}
                  className="px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors"
                >
                  লগআউট
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/sign-in"
                  className="px-4 py-2 text-xs font-semibold text-emerald-600 border border-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
                >
                  সাইন ইন
                </Link>
                <Link
                  href="/sign-up"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#00875a] hover:bg-emerald-700 rounded-xl transition-colors shadow-sm"
                >
                  সাইন আপ
                </Link>
              </div>
            )}
          </div>

          {/* মোবাইল টগল */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* মোবাইল ড্রপডাউন */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3">
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={cat.href}
                className="block text-base text-gray-700 hover:text-emerald-600 font-medium py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            {!session && (
              <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
                <Link
                  href="/sign-in"
                  className="w-full text-center py-2 text-emerald-600 border border-emerald-600 rounded-xl text-xs font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  সাইন ইন
                </Link>
                <Link
                  href="/sign-up"
                  className="w-full text-center py-2 bg-[#00875a] text-white rounded-xl text-xs font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  সাইন আপ
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* প্রাইস টিকার */}
      <div className="bg-emerald-50 border-b border-emerald-100 py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block text-sm text-emerald-800 font-medium animate-pulse">
          <span className="mx-6">🥔 আলু: ৪৫ টাকা/কেজি (▲ ২.১%)</span>
          <span className="mx-6">🧅 পেঁয়াজ: ১১০ টাকা/কেজি (▼ ১.৫%)</span>
          <span className="mx-6">🍚 মিনিকেট চাল: ৭০ টাকা/কেজি (▲ ০.৮%)</span>
          <span className="mx-6">🐟 ইলিশ মাছ: ১,৪৫০ টাকা/কেজি (▼ ৩.০%)</span>
        </div>
      </div>
    </>
  );
}