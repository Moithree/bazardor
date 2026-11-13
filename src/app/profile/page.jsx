"use client";

import React, { useState, useEffect } from "react";
import { useSession, signOut, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const [name, setName] = useState("");
  const [updating, setUpdating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/sign-in");
    } else if (session?.user?.name) {
      setName(session.user.name);
    }
  }, [session, isPending, router]);

  const handleUpdateName = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const { error } = await authClient.updateUser({
      name,
    });

    setUpdating(false);

    if (error) {
      toast.error("নাম আপডেট করতে সমস্যা হয়েছে!");
      return;
    }

    toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
    router.refresh();
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success("সাইন আউট সম্পন্ন হয়েছে!");
    router.push("/");
  };

  if (isPending || !session) {
    return (
      <div className="min-h-screen bg-[#f4f7f5] flex items-center justify-center">
        <p className="text-gray-500 text-sm animate-pulse">লোড হচ্ছে...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7f5] py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* পেজ শিরোনাম */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">আমার প্রোফাইল</h1>
          <p className="text-xs text-gray-500 mt-1">আপনার অ্যাকাউন্টের তথ্য দেখুন ও আপডেট করুন</p>
        </div>

        {/* ইউজার ইনফো কার্ড */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#00875a] flex items-center justify-center text-xl font-bold uppercase">
              {session.user.name?.charAt(0) || "U"}
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900">{session.user.name}</h2>
              <p className="text-xs text-gray-500">{session.user.email}</p>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            ↪ সাইন আউট
          </button>
        </div>

        {/* নাম আপডেট কার্ড */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <h3 className="text-sm font-bold text-gray-900">তথ্য</h3>
          <form onSubmit={handleUpdateName} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-gray-700">নাম</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#00875a] focus:ring-1 focus:ring-[#00875a] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={updating}
              className="w-full bg-[#00875a] hover:bg-[#007048] disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              {updating ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}