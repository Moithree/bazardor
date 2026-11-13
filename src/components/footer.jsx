import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* বাম পাশ */}
        <div className="space-y-1">
          <h3 className="font-bold text-gray-900 flex items-center justify-center md:justify-start gap-1">
            🛒 বাজার দর
          </h3>
          <p className="text-xs text-gray-500">প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        </div>

        {/* ডান পাশ (ডিসক্লেইমার) */}
        <div>
          <p className="text-xs text-gray-500 max-w-sm">
            “সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।”
          </p>
        </div>
      </div>
    </footer>
  );
}