import { useEffect, useState } from "react";
import SnowEffect from "../components/SnowEffect";
import Link from "next/link";

{
  /* Snow effect in the background */
}
<SnowEffect />;

{
  /* Centered text */
}
<div id="center-text">
  <h1 className="text-5xl font-festive mb-6">Welcome to felt.christmas 🎄🐈</h1>
  <p className="text-lg mb-8">
    Where everything is as cozy and soft as felt, with a sprinkle of Christmas
    magic!
  </p>

  <Link
    href="/about"
    className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition"
    style={{ marginRight: "16px" }}
  >
    Discover the Magic
  </Link>
  <Link
    href="/minecraft"
    className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition"
  >
    fentynal
  </Link>
</div>;

{
  /* Social Media Bar at the bottom */
}
<div className="social-media-bar">
  <a
    href="https://reddit.com/r/foundfelt389"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <img
      src="https://www.logo.wine/a/logo/Reddit/Reddit-Logomark-Color-Logo.wine.svg"
      alt="Subreddit"
    />
  </a>
  <a
    href="https://discord.gg/B8MzchHFPF"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <img
      src="https://static.cdnlogo.com/logos/d/15/discord.svg"
      alt="Discord"
    />
  </a>
  <a
    href="minecraft/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <img src="1.1.1.1/logo.svg" alt="Minecraft" />
  </a>
</div>;
