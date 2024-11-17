import SnowEffect from "../components/SnowEffect";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Snow effect in the background */}
      <SnowEffect />

      {/* Centered text */}
      <div id="center-text">
        <h1 className="text-5xl font-festive mb-6">Welcome to Felt Christmas 🎄✨</h1>
        <p className="text-lg mb-8">
          Where everything is as cozy and soft as felt, with a sprinkle of Christmas magic!
        </p>
        <Link
          href="/about"
          className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition"
        >
          Discover the Magic
        </Link>
      </div>

      {/* Social Media Bar at the bottom */}
      <div className="social-media-bar">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/icons/facebook.svg" alt="Facebook" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/icons/twitter.svg" alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>

      {/* Background Audio with multiple formats */}
      <audio
        autoPlay
        loop
        muted={false} // Ensure it's not muted
        id="background-audio"
        style={{ display: "none" }} // Hide the audio element
      >
        <source src="/music/gex.opus" type="audio/opus" />
        <source src="/music/gex.ogg" type="audio/ogg" />
        <source src="/music/gex.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
