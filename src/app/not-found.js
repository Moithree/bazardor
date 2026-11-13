import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center space-y-4">
      <span className="text-7xl">⚠️</span>
      <h1 className="text-3xl font-extrabold text-gray-900">৪০০ - পেজ পাওয়া যায়নি</h1>
      <p className="text-sm text-gray-500 max-w-md">
        আপনি যে পেজটি খুঁজছেন তা মুছে ফেলা হয়েছে অথবা লিংকটি ভুল রয়েছে।
      </p>
      <Button as={Link} href="/" color="primary" className="bg-emerald-600 text-white font-semibold">
        হোম পেজে ফিরে যান
      </Button>
    </div>
  );
}