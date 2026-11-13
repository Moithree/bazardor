export const instant = false;

import React from "react";
import Link from "next/link";

export default async function ProductDetailsPage({ params }) {
  // ডাইনামিক রাউট থেকে আইডি বা স্লাগ গ্রহণ করা
  const { id } = await params;

  // স্যাম্পল ডেটা (আপনার ডাটাবেস বা API থেকে এই ডেটা ফেচ করতে পারেন)
  const product = {
    name: "বাটাইম সাইজ চাল",
    category: "চাল",
    unit: "প্রতি কেজি",
    priceChange: "গতকালের তুলনায় আজ দাম বেড়েছে - ২ টাকা",
    todayPrice: "৬৬ টাকা",
    changePercent: "▲ ৩.১%",
    minPrice: "৫৯ টাকা",
    maxPrice: "৭৩ টাকা",
    markets: [
      { name: "মাঠ বাজার", division: "ময়মনসিংহ", min: "৫৯ টাকা", max: "৬৫ টাকা", avg: "৬২ টাকা" },
      { name: "সদর বাজার", division: "রাজশাহী", min: "৬০ টাকা", max: "৬৬ টাকা", avg: "৬৩ টাকা" },
      { name: "বাজারহাট", division: "খুলনা", min: "৬০ টাকা", max: "৬৭ টাকা", avg: "৬৩.৫০ টাকা" },
      { name: "বাসারহাট বাজার", division: "রাজশাহী", min: "৬০ টাকা", max: "৬৮ টাকা", avg: "৬৪ টাকা" },
      { name: "চৌর বাজার", division: "ময়মনসিংহ", min: "৬০ টাকা", max: "৬৯ টাকা", avg: "৬৪.৫০ টাকা" },
      { name: "আমতলী বাজার", division: "চট্টগ্রাম", min: "৬৪ টাকা", max: "৬৯ টাকা", avg: "৬৫ টাকা" },
      { name: "তবলছড়ি বাজার", division: "খুলনা", min: "৬২ টাকা", max: "৬৯ টাকা", avg: "৬২.৫০ টাকা" },
      { name: "চৌরাস্তা বাজার", division: "সিলেট", min: "৬৩ টাকা", max: "৭৫ টাকা", avg: "৬৭ টাকা" },
      { name: "গ্রীন মার্কেট, মিরপুর", division: "ঢাকা", min: "৬৪ টাকা", max: "৭৫ টাকা", avg: "৬৭.৫০ টাকা" },
      { name: "চৌধুরী বাজার", division: "চট্টগ্রাম", min: "৬৩ টাকা", max: "৭৩ টাকা", avg: "৬৮ টাকা" },
      { name: "আমবাজার", division: "সিলেট", min: "৬৪ টাকা", max: "৭৩ টাকা", avg: "৬৮.৫০ টাকা" },
      { name: "কারওয়ান বাজার", division: "ঢাকা", min: "৬২ টাকা", max: "৭৩ টাকা", avg: "৬৯ টাকা" },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f4f7f5] py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* ব্রেডক্রাম্ব নেভিগেশন */}
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:underline">হোম</Link>
          <span>›</span>
          <span className="hover:underline text-gray-600">{product.category}</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        {/* প্রধান প্রোডাক্ট ব্যানার কার্ড */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 text-3xl">
              🍚
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900">{product.name}</h1>
              <p className="text-xs text-gray-400 mt-0.5">{product.unit} · {product.category}</p>
              <p className="text-xs text-emerald-700 mt-2 bg-emerald-50 px-2.5 py-1 rounded-lg inline-block font-medium">
                {product.priceChange}
              </p>
            </div>
          </div>

          {/* আজকের দাম বক্স */}
          <div className="bg-[#f4f7f5] border border-gray-200/60 rounded-2xl p-4 text-center min-w-[140px]">
            <span className="text-[11px] text-gray-500 block font-medium">আজকের দাম</span>
            <div className="text-2xl font-black text-gray-900 mt-0.5">{product.todayPrice}</div>
            <span className="text-[11px] text-gray-500 block">{product.unit}</span>
            <span className="text-xs font-semibold text-red-500 mt-1 inline-block">{product.changePercent}</span>
          </div>
        </div>

        {/* দামের সারাংশ কার্ডসমূহ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <span className="text-xs text-gray-400 block">সর্বনিম্ন দাম</span>
            <div className="text-lg font-bold text-emerald-600 mt-1">{product.minPrice}</div>
            <span className="text-[11px] text-gray-400 mt-1 block">সবচেয়ে কম দামের বাজার</span>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <span className="text-xs text-gray-400 block">সর্বাধিক দাম</span>
            <div className="text-lg font-bold text-red-500 mt-1">{product.maxPrice}</div>
            <span className="text-[11px] text-gray-400 mt-1 block">সবচেয়ে বেশি দামের বাজার</span>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <span className="text-xs text-gray-400 block">প্রতি দর</span>
            <div className="text-lg font-bold text-gray-900 mt-1">{product.todayPrice}</div>
            <span className="text-[11px] text-gray-400 mt-1 block">প্রতি কেজি-এর হিসাবে</span>
          </div>
        </div>

        {/* বাজারভিত্তিক আজকের দাম টেবিল */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-900">বাজারভিত্তিক আজকের দাম</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/75 border-b border-gray-100 text-xs font-semibold text-gray-500">
                  <th className="py-3.5 px-6">বাজার</th>
                  <th className="py-3.5 px-6">বিভাগ</th>
                  <th className="py-3.5 px-6">সর্বনিম্ন</th>
                  <th className="py-3.5 px-6">সর্বাধিক</th>
                  <th className="py-3.5 px-6">গড়</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs text-gray-700">
                {product.markets.map((m, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-medium text-gray-900">{m.name}</td>
                    <td className="py-3.5 px-6 text-gray-500">{m.division}</td>
                    <td className="py-3.5 px-6 text-gray-800">{m.min}</td>
                    <td className="py-3.5 px-6 text-gray-800">{m.max}</td>
                    <td className="py-3.5 px-6 font-semibold text-gray-900">{m.avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}