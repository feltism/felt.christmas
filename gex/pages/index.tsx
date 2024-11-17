import Link from "next/link";
import SnowEffect from "../components/SnowEffect";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-christmasRed to-christmasGreen text-white min-h-screen flex flex-col items-center justify-center">
      {/* Snow effect */}
      <SnowEffect />

      <h1 className="text-5xl font-festive mb-6">Welcome to Felt Christmas 🎄✨</h1>
      <p className="text-lg mb-8">
        Where everything is as cozy and soft as felt, with1 a sprinkle of Christmas magic!
      </p>
      <Link href="/about">
        <a className="px-6 py-3 bg-white text-christmasGreen font-bold rounded-full hover:bg-gray-100 transition">
          Discover the Magic
        </a>
      </Link>
    </div>
  );
}
