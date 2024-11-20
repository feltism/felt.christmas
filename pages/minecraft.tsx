import { useEffect, useState } from "react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div id="center-text">
      <h1 className="text-5xl font-festive mb-6">Coming soon 👀</h1>
      <Link
        href="/games/minecraft"
        className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition"
        style={{ marginRight: "16px" }}
      >
        Meant browser Minecraft?
      </Link>
    </div>
  );
}
