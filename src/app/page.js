export const instant = false;

import React from "react";
import Link from "next/link";

export default function Home() {
  const risers = [
    { name: "পেঁয়াজ", unit: "প্রতি কেজি", price: "৫৪ টাকা", change: "▲ ১২.৫%", emoji: "🧅", slug: "peyaz" },
    { name: "আদা", unit: "প্রতি কেজি", price: "৪৫ টাকা", change: "▲ ৯.০%", emoji: "🫚", slug: "ginger" },
    { name: "বেগুন", unit: "প্রতি কেজি", price: "৪৪ টাকা", change: "▲ ৪.৮%", emoji: "🍆", slug: "brinjal" },
    { name: "রুই মাছ", unit: "প্রতি কেজি", price: "৪৬ টাকা", change: "▲ ৪.৫%", emoji: "🐟", slug: "rui-fish" },
    { name: "ডিম", unit: "প্রতি ডজন", price: "১৫৮ টাকা", change: "▲ ৩.৯%", emoji: "🥚", slug: "egg" },
    { name: "মাখন", unit: "প্রতি পিস", price: "১৪৫ টাকা", change: "▲ ৩.৬%", emoji: "🧈", slug: "butter" },
  ];

  const fallers = [
    { name: "কাঁচামরিচ", unit: "প্রতি কেজি", price: "৯২ টাকা", change: "▼ ১২.৪%", emoji: "🌶️", slug: "green-chili" },
    { name: "রসুন", unit: "প্রতি কেজি", price: "১২৫ টাকা", change: "▼ ৭.৪%", emoji: "🧄", slug: "garlic" },
    { name: "আলু", unit: "প্রতি কেজি", price: "৩০ টাকা", change: "▼ ৬.২%", emoji: "🥔", slug: "alu" },
    { name: "কাতলা মাছ", unit: "প্রতি কেজি", price: "৪৩ টাকা", change: "▼ ৪.৪%", emoji: "🐟", slug: "catla-fish" },
    { name: "হাঁসের মাংস", unit: "প্রতি কেজি", price: "২৮৫ টাকা", change: "▼ ৩.৪%", emoji: "🦆", slug: "duck-meat" },
    { name: "খাসির মাংস", unit: "প্রতি কেজি", price: "১,২৯০ টাকা", change: "▼ ৩.০%", emoji: "🍖", slug: "mutton" },
  ];

  const allProducts = [
    { name: "স্বর্ণমাছি চাল", unit: "প্রতি কেজি", price: "১৪৮ টাকা", change: "▲ ২.৫%", emoji: "🍚", slug: "swarnamachi" },
    { name: "মিনিকেট চাল", unit: "প্রতি কেজি", price: "৯৯ টাকা", change: "▼ ২.৯%", emoji: "🍚", slug: "miniket" },
    { name: "নাজির চাল", unit: "প্রতি কেজি", price: "৭৪ টাকা", change: "— ০.০%", emoji: "🍚", slug: "nazir" },
    { name: "বাটম সাইজ চাল", unit: "প্রতি কেজি", price: "৬৬ টাকা", change: "▲ ৩.৫%", emoji: "🍚", slug: "bottom-chal" },
    { name: "মসুর ডাল", unit: "প্রতি কেজি", price: "১৪২ টাকা", change: "▲ ২.৯%", emoji: "🫘", slug: "masoor-dal" },
    { name: "মুগ ডাল", unit: "প্রতি কেজি", price: "১৩৫ টাকা", change: "— ০.০%", emoji: "🫘", slug: "moong-dal" },
    { name: "ছোলা", unit: "প্রতি কেজি", price: "১২০ টাকা", change: "▼ ২.৪%", emoji: "🫘", slug: "chhola" },
    { name: "আমান ডাল", unit: "প্রতি কেজি", price: "১৪৬ টাকা", change: "▲ ২.৬%", emoji: "🫘", slug: "aman-dal" },
    { name: "সরিষার তেল", unit: "প্রতি লিটার", price: "১৯২ টাকা", change: "▲ ২.১%", emoji: "🧴", slug: "mustard-oil" },
    { name: "পাম তেল", unit: "প্রতি কেজি", price: "১৬৮ টাকা", change: "▼ ২.৭%", emoji: "🛢️", slug: "palm-oil" },
    { name: "ঘানি তেল", unit: "প্রতি লিটার", price: "২১৫ টাকা", change: "▲ ২.৪%", emoji: "🫙", slug: "ghani-oil" },
    { name: "আলু", unit: "প্রতি কেজি", price: "৩০ টাকা", change: "▼ ৬.২%", emoji: "🥔", slug: "alu" },
    { name: "পেঁয়াজ", unit: "প্রতি কেজি", price: "৫৪ টাকা", change: "▲ ১২.৫%", emoji: "🧅", slug: "peyaz" },
    { name: "কাঁচামরিচ", unit: "প্রতি কেজি", price: "৯২ টাকা", change: "▼ ১২.৪%", emoji: "🌶️", slug: "green-chili" },
    { name: "বেগুন", unit: "প্রতি কেজি", price: "৪৪ টাকা", change: "▲ ৪.৮%", emoji: "🍆", slug: "brinjal" },
    { name: "ঢেঁড়স", unit: "প্রতি কেজি", price: "৩৮ টাকা", change: "— ০.০%", emoji: "🟢", slug: "ladyfinger" },
    { name: "রুই মাছ", unit: "প্রতি কেজি", price: "৪৬ টাকা", change: "▲ ৪.৫%", emoji: "🐟", slug: "rui-fish" },
    { name: "তেলাপিয়া", unit: "প্রতি কেজি", price: "৩৬ টাকা", change: "— ০.০%", emoji: "🐟", slug: "tilapia" },
    { name: "ইলিশ মাছ", unit: "প্রতি কেজি", price: "১,৮৫০ টাকা", change: "▲ ৩.৪%", emoji: "🐟", slug: "ilish" },
    { name: "কাতলা মাছ", unit: "প্রতি কেজি", price: "৪৩ টাকা", change: "▼ ৪.৪%", emoji: "🐟", slug: "catla-fish" },
    { name: "চিংড়ি মাছ", unit: "প্রতি কেজি", price: "৩৩০ টাকা", change: "▲ ৩.১%", emoji: "🦐", slug: "shrimp" },
    { name: "মুরগির মাংস", unit: "প্রতি কেজি", price: "২২৫ টাকা", change: "▼ ৫.৩%", emoji: "🍗", slug: "chicken" },
    { name: "গরুর মাংস", unit: "প্রতি কেজি", price: "৯৫০ টাকা", change: "▼ ৬.২%", emoji: "🥩", slug: "beef" },
    { name: "খাসির মাংস", unit: "প্রতি কেজি", price: "১,২৯০ টাকা", change: "▼ ৩.০%", emoji: "🍖", slug: "mutton" }
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f5] flex flex-col">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10 py-6">
        
        {/* প্রাইস টিকার */}
        <div className="bg-white border border-gray-100 rounded-2xl p-3 overflow-hidden shadow-sm">
          <div className="flex items-center gap-6 whitespace-nowrap overflow-x-auto text-xs font-medium text-gray-700">
            <span className="text-red-600 font-semibold">🌾 স্বর্ণমাছি চাল ১৪৮ টাকা/কেজি ▲ ২.৫%</span>
            <span className="text-emerald-600 font-semibold">🍚 মিনিকেট চাল ৯৯ টাকা/কেজি ▼ ২.৯%</span>
            <span className="text-red-600 font-semibold">🍚 বাটম সাইজ চাল ৬৬ টাকা/কেজি ▲ ৩.৫%</span>
            <span className="text-red-600 font-semibold">🫘 মসুর ডাল ১৪২ টাকা/কেজি ▲ ২.৯%</span>
            <span className="text-emerald-600 font-semibold">🫘 ছোলা ১২০ টাকা/কেজি ▼ ২.৪%</span>
          </div>
        </div>

        {/* হিরো ব্যানার */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
              মঙ্গলবার, ৬ অক্টোবর, ২০২৬
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              আজকের বাজারের দাম এক নজরে
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত ও দামের পরিবর্তন এক জায়গায়।
            </p>
            <div>
              <a href="#সব-পণ্য" className="inline-block bg-[#00875a] hover:bg-[#007048] text-white font-medium px-6 py-3 rounded-xl transition-colors shadow-sm">
                সব পণ্য দেখুন 👇
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-emerald-50/80 p-6 rounded-3xl text-8xl flex items-center justify-center">
              🧺🍅🍏
            </div>
          </div>
        </section>

        {/* আজ দাম বেড়েছে */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-red-500">▲</span> আজ দাম বেড়েছে
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {risers.map((item, idx) => (
              <Link key={idx} href={`/product/${item.slug}`} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl bg-gray-50 p-2.5 rounded-xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-400">{item.unit}</p>
                    <div className="mt-1">
                      <span className="text-xs text-gray-400">আজকের দাম</span>
                      <p className="text-sm font-bold text-gray-900">{item.price}</p>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-red-500 bg-red-50 px-2.5 py-1 rounded-lg">
                  {item.change}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* আজ দাম কমেছে */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-emerald-600">▼</span> আজ দাম কমেছে
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {fallers.map((item, idx) => (
              <Link key={idx} href={`/product/${item.slug}`} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl bg-gray-50 p-2.5 rounded-xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-400">{item.unit}</p>
                    <div className="mt-1">
                      <span className="text-xs text-gray-400">আজকের দাম</span>
                      <p className="text-sm font-bold text-gray-900">{item.price}</p>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  {item.change}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* সব পণ্য */}
        <section id="সব-পণ্য" className="space-y-4 pt-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">সব পণ্য</h2>
            <p className="text-xs text-gray-400">মোট ২৪টি পণ্য দেখানো হচ্ছে</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {allProducts.map((item, idx) => (
              <Link key={idx} href={`/product/${item.slug}`} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl bg-gray-50 p-2.5 rounded-xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-400">{item.unit}</p>
                    <div className="mt-1">
                      <span className="text-xs text-gray-400">আজকের দাম</span>
                      <p className="text-sm font-bold text-gray-900">{item.price}</p>
                    </div>
                  </div>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${item.change.includes('▲') ? 'text-red-500 bg-red-50' : item.change.includes('▼') ? 'text-emerald-600 bg-emerald-50' : 'text-gray-500 bg-gray-50'}`}>
                  {item.change}
                </span>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}