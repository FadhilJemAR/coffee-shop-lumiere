import Link from "next/link";
import { Lora, Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--playfair-display",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--lora",
  subsets: ["latin"],
});

function Footer() {
  return (
    <footer
      className={`bg-black/80 text-[#fdfaf7] py-16 ${lora.className}`}
      id="footer"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          {/* Brand & Social */}
          <div className="space-y-4">
            <h2 className={`${playfairDisplay.className} font-serif text-3xl`}>
               Lumière Coffee
            </h2>
            <p className="text-sm text-gray-400">
              Membawa tradisi kopi Eropa ke setiap gelas Anda di jantung kota.
            </p>
            <div className="flex gap-4">
              {/* Icon Sosmed bisa ditaruh di sini */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link
                  href="#hero"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#product"
                  className="hover:text-white transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  The Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Alamat anda</li>
              <li>+62 123 564 893</li>
              <li>hello@LumiereCoffee.com</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest">
              Business Hours
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri</span> <span>08:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span> <span>09:00 - 23:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Lumière Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
