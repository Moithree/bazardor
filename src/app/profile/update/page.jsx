"use client";

import React, { useState } from "react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function UpdateProfilePage() {
  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name || "");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.updateUser({
        name: name,
        fetchOptions: {
          onSuccess: () => {
            toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
            router.push("/");
          },
          onError: (ctx) => {
            toast.error(ctx.error.message || "আপডেট ব্যর্থ হয়েছে!");
          },
        },
      });
    } catch (err) {
      toast.error("কিছু সমস্যা হয়েছে!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
        <div>
          <Link href="/" className="text-xs text-emerald-600 font-semibold hover:underline">
            ← হোম পেজে ফিরে যান
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">প্রোফাইল আপডেট করুন</h1>
          <p className="text-sm text-gray-500">আপনার নাম পরিবর্তন করুন</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-600 block mb-1">নাম</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
            />
          </div>

          <Button
            type="submit"
            isLoading={loading}
            className="w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-xl"
          >
            আপডেট ইনফরমেশন
          </Button>
        </form>
      </div>
    </div>
  );
}