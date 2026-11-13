"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function CategoryPage() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("default");

  // ডামি ক্যাটাগরি ও প্রোডাক্ট ডাটাবেস
  const categoryData = {
    "rice-lentil": {
      title: "চাল ও ডাল",
      icon: "🍚",
      products: [
        { id: "miniket", name: "মিনিকেট চাল", emoji: "🍚", unit: "প্রতি কেজি", price: 70, change: "▲ ০.৮%" },
        { id: "nazirshail", name: "নাজিরশাইল চাল", emoji: "🍚", unit: "প্রতি কেজি", price: 75, change: "▲ ১.২%" },
        { id: "masoor-dal", name: "মসুর ডাল", emoji: "🫘", unit: "প্রতি কেজি", price: 130, change: "— ০.০%" },
        { id: "moong-dal", name: "মুগ ডাল", emoji: "🫘", unit: "প্রতি কেজি", price: 145, change: "▼ ০.৫%" }
      ]
    },
    "vegetables": {
      title: "সবজি",
      icon: "🥦",
      products: [
        { id: "alu", name: "আলু", emoji: "🥔", unit: "প্রতি কেজি", price: 45, change: "▲ ২.১%" },
        { id: "peyaz", name: "পেঁয়াজ", emoji: "🧅", unit: "প্রতি কেজি", price: 110, change: "▼ ১.৫%" },
        { id: "tomato", name: "টমেটো", emoji: "🍅", unit: "প্রতি কেজি", price: 90, change: "▼ ৩.০%" },
        { id: "brinjal", name: "বেগুন", emoji: "🍆", unit: "প্রতি কেজি", price: 80, change: "▲ ১.০%" }
      ]
    },
    "fish-meat": {
      title: "মাছ ও মাংস",
      icon: "🐟",
      products: [
        { id: "ilish", name: "ইলিশ মাছ", emoji: "🐟", unit: "প্রতি কেজি", price: 1450, change: "▼ ৩.০%" },
        { id: "rui", name: "রুই মাছ", emoji: "🐟", unit: "প্রতি কেজি", price: 380, change: "▲ ০.৫%" },
        { id: "chicken", name: "ব্রয়লার মুরগি", emoji: "🍗", unit: "প্রতি কেজি", price: 190, change: "▲ ১.৫%" }
      ]
    },
    "spices": {
      title: "মসলা",
      icon: "🫚",
      products: [
        { id: "ginger", name: "আদা", emoji: "🫚", unit: "প্রতি কেজি", price: 220, change: "▲ ২.০%" },
        { id: "garlic", name: "রসুন", emoji: "🧄", unit: "প্রতি কেজি", price: 200, change: "— ০.০%" }
      ]
    }
  };

  // পেজ লোড হওয়ার সময় স্কেলিটন বা লোডিং অ্যানিমেশন দেখানোর জন্য
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [slug]);

  const currentCategory = categoryData[slug];

  // ইনভ্যালিড স্লাগ বা ক্যাটাগরি না থাকলে 404 স্টাইল মেসেজ দেখাবে
  if (!currentCategory) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center space-y-4">
        <span className="text-6xl">🔍</span>
        <h1 className="text-2xl font-bold text-gray-900">ক্যাটাগরি পাওয়া যায়নি!</h1>
        <p className="text-sm text-gray-500 max-w-md">
          আপনি যে ক্যাটাগরি খুঁজছেন তা বিদ্যমান নয় অথবা লিংকটি ভুল রয়েছে।
        </p>
        <Button as={Link} href="/" color="primary" className="bg-emerald-600 text-white font-semibold">
          হোম পেজে ফিরে যান
        </Button>
      </div>
    );
  }

  // সর্টিং লজিক (দাম কম থেকে বেশি বা বেশি থেকে কম)
  const sortedProducts = [...currentCategory.products].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.price - b.price;
    if (sortOrder === "high-to-low") return b.price - a.price;
    return 0; // ডিফল্ট
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* হেডার ও সর্টিং কন্ট্রোল */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <span className="text-4xl bg-emerald-50 p-3 rounded-2xl">{currentCategory.icon}</span>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">{currentCategory.title}</h1>
              <p className="text-xs text-gray-500 mt-1">এই ক্যাটাগরির সমস্ত পণ্যের আজকের বাজার দর</p>
            </div>
          </div>

          {/* সর্টিং ড্রপডাউন (চ্যালেঞ্জ C1) */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">সাজান:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full md:w-48 px-3 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:border-emerald-600 font-medium text-gray-700"
            >
              <option value="default">ডিফল্ট</option>
              <option value="low-to-high">দাম: কম থেকে বেশি</option>
              <option value="high-to-low">দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </div>

        {/* লোডিং স্টেট / স্কেলিটন */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-48 animate-pulse flex flex-col justify-between">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        ) : (
          /* প্রোডাক্ট কার্ড গ্রিড */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/product/${product.id}`}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center group"
              >
                <span className="text-5xl mb-3 group-hover:scale-110 transition-transform">{product.emoji}</span>
                <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{product.unit}</p>
                <div className="flex items-center justify-between w-full mt-auto pt-3 border-t border-gray-100">
                  <span className="font-bold text-emerald-600">{product.price} টাকা</span>
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                    {product.change}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}