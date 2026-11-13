import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);











// import { betterAuth } from "better-auth";
// import { toNextJsHandler } from "better-auth/next-js";

// // ১. প্রথমে auth ডিক্লেয়ার এবং এক্সপোর্ট করুন (এতে accountLinking ও যুক্ত থাকবে)
// export const auth = betterAuth({
//   // আপনার ডাটাবেজ কানেকশন বা অন্যান্য কনফিগারেশন এখানে থাকবে
//   account: {
//     accountLinking: {
//       enabled: true,
//     },
//   },
// });

// // ২. এরপর সেই auth ভেরিয়েবলটি হ্যান্ডলারে পাস করুন
// export const { POST, GET } = toNextJsHandler(auth);