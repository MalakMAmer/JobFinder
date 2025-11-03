"use client";

import Lottie from "lottie-react";
import animationData from "@/public/lottie-loader.json";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Lottie animationData={animationData} loop={true} className="w-80" />
    </div>
  );
}