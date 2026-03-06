"use client";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
const playfairDisplay = Playfair_Display({
  variable: "--playfair-display",
  subsets: ["latin"],
});

function HeroSection() {
  return (
    <section
      id="hero"
      className={
        "w-full relative before:bg-[url(/img/coffee-beans.jpg)] h-160 before:absolute before:inset-0 before:opacity-35 before:bg-cover before:before:bg-no-repeat "
      }
    >
      <div className="bg-black/70 absolute inset-0 px-5 lg:px-30 flex flex-col justify-center items-center">
        <span className={`text-white lg:text-lg ${playfairDisplay.className}`}>
          Buat dirimu jadi lebih berenergi
        </span>
        <h2
          className={`text-white text-2xl lg:text-4xl  text-center ${playfairDisplay.className}`}
        >
          Nikmati secangkir kopi dengan berbagai varian di waktu senja
        </h2>
        <button
          className={`duration-200 bg-transparent active:bg-white active:text-black hover:bg-white border-white border ${playfairDisplay.className} hover:text-black text-white rounded-2xl p-3 px-9 mt-6 hover:cursor-pointer`}
        >
          <a href={"#product"}>Lihat kopi</a>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
