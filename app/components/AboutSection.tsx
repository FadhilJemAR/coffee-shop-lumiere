'use client'
import { Playfair_Display,Lora } from "next/font/google";
import {motion} from 'framer-motion';
import Image from "next/image";
const playfairDisplay = Playfair_Display({
  variable: "--playfair-display",
  subsets: ["latin"],
});

const lora =Lora({
  variable: "--lora",
  subsets: ["latin"],
});

function AboutSection(){
   return (
    <section className={`py-26 ${lora.className} `} id="about">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Sisi Kiri: Foto Estetik */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image 
            src="/img/coffee-shop.jpg" 
            alt="Suasana Cafe" 
            fill 
            className="object-cover"
          />
        </motion.div>

        {/* Sisi Kanan: Teks Cerita */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-gray-600 font-sans font-semibold tracking-widest uppercase text-sm mb-4">
            Our Story
          </h4>
          <h2 className={`text-4xl md:text-5xl font-serif leading-tight ${playfairDisplay.className} mb-6`}>
            Membawa Tradisi Kopi Eropa ke Gelas Anda
          </h2>
          <p className={`text-gray-600 leading-relaxed mb-8 `}>
            Setiap biji kopi yang kami pilih memiliki cerita. Dari perkebunan tinggi di Ethiopia hingga teknik roasting presisi di Milan, kami memastikan setiap tetes espresso yang sampai ke meja Anda adalah sebuah mahakarya.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mb-10">
            <div>
              <h5 className="font-bold text-2xl font-serif">65%</h5>
              <p className="text-sm text-gray-500">Arabica Beans</p>
            </div>
             <div>
              <h5 className="font-bold text-2xl font-serif">35%</h5>
              <p className="text-sm text-gray-500">Other Beans</p>
            </div>
            <div>
              <h5 className="font-bold text-2xl font-serif">5+</h5>
              <p className="text-sm text-gray-500">Master Baristas</p>
            </div>
          </div>

          <button className="border-2 border-black text-black/80 hover:cursor-pointer px-8 py-3 rounded-full hover:bg-black/80 hover:text-white transition-all">
            Kunjungi kami
          </button>
        </motion.div>
      </div>
    </section>
   )
}

export default AboutSection