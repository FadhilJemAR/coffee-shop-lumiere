'use client'
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--playfair-display",
  subsets: ["latin"],
});

function HeroSection() {
  return (
    <section
      className={
        "w-full relative before:bg-[url(/img/coffee-beans.jpg)] h-160 before:absolute before:inset-0 before:opacity-35 before:bg-cover before:before:bg-no-repeat "
      }
    >
      <div className="bg-black/70 absolute inset-0 px-50 flex flex-col justify-center items-center">
        <span className={`text-white  ${playfairDisplay.className}`}>
          Buat dirimu jadi lebih berenergi
        </span>
        <h2
          className={`text-white text-4xl  text-center ${playfairDisplay.className}`}
        >
          Nikmati secangkir kopi dengan berbagai varian di waktu senja
        </h2>
        <button
          className={`duration-200 bg-transparent hover:bg-white border-white border ${playfairDisplay.className} hover:text-black text-white rounded-2xl p-3 px-9 mt-6 hover:cursor-pointer`}
        >
          Lihat kopi
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
