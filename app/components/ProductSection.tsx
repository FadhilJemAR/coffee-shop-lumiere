"use client";
import { IProduct } from "../types/interface";
import ProductCard from "./ProductCard";
import { Lora } from "next/font/google";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const lora = Lora({
  weight: "400",
});

const loraSemibold = Lora({
  weight: "500",
});

const superiorProducts: IProduct[] = [
  {
    name: "Mixed Cappucino",
    imageUrl: "/img/products/Cappucino.webp",
    price: 25000,
    description:
      "Dibuat dengan campuran biji kopi arabika dan robusta. Memiliki rasa yang pas sehingga enak dikonsumsi di ujung hari.",
    badge: {
      isBestSeller: true,
      rating: 4.5,
    },
  },
  {
    name: "Original Espresso",
    price: 19000,
    imageUrl: "/img/products/Espresso.webp",
    description:
      "Espresso dengan biji kopi arabika impor dari Yaman, memiliki rasa yang kuat, body yang tebal, dan aroma yang sangat autentik.",
    badge: {
      isBestSeller: true,
      rating: 4.8,
    },
  },
  {
    name: "Velvet Latte",
    price: 34000,
    imageUrl: "/img/products/Velvet-Latte.webp",
    description:
      "Perpaduan lembut susu *creamy* dengan *double shot* espresso. Tekstur *silky* yang memberikan ketenangan di setiap tegukan.",
    badge: {
      isBestSeller: true,
      rating: 4.9,
    },
  },
  {
    name: "Classic Flat White",
    price: 22000,
    imageUrl: "/img/products/Flat-White.webp",
    description:
      "Gaya khas kafe Melbourne dan London. Lapisan micro-foam tipis di atas espresso yang menonjolkan karakter asli biji kopi pilihan.",
    badge: {
      isBestSeller: true,
      rating: 4.7,
    },
  },
  {
    name: "Cold Brew Artisan",
    price: 18000,
    imageUrl: "/img/products/Cold-Brew.webp",
    description:
      "Kopi yang diseduh dingin selama 12 jam untuk menghasilkan rasa yang bersih, rendah asam, dan sentuhan rasa cokelat alami.",
    badge: {
      isBestSeller: true,
      rating: 4.6,
    },
  },
];

const otherProducts: IProduct[] = [
  {
    name: "Piccolo Latte",
    price: 28000,
    imageUrl: "/img/products/Piccolo-Latte.webp",
    description:
      "Ristretto shot yang kuat dengan sedikit susu panas, menghasilkan rasa kopi yang intens namun tetap lembut.",
    badge: { isBestSeller: false, rating: 4.7 },
  },
  {
    name: "Caramel Macchiato",
    price: 38000,
    imageUrl: "/img/products/Caramel-Macchiato.webp",
    description:
      "Espresso dengan sirup vanila dan susu, diakhiri dengan saus karamel di atas busa susu yang tebal.",
    badge: { isBestSeller: true, rating: 4.8 },
  },
  {
    name: "Original Affogato",
    price: 32000,
    imageUrl: "/img/products/Original-Affogato.webp",
    description:
      "Satu *scoop* gelato vanila premium yang disiram dengan satu *shot* espresso panas yang kaya rasa.",
    badge: { isBestSeller: false, rating: 4.9 },
  },
  {
    name: "Mocha Praline",
    price: 42000,
    imageUrl: "/img/products/Mocha-Praline.webp",
    description:
      "Perpaduan harmonis antara espresso, cokelat hitam, dan sentuhan kacang hazelnut panggang.",
    badge: { isBestSeller: false, rating: 4.6 },
  },
  {
    name: "Matcha Espresso",
    price: 40000,
    imageUrl: "/img/products/Matcha-Espresso.webp",
    description:
      "Perpaduan unik antara teh hijau matcha premium dari Jepang dengan espresso arabika pilihan.",
    badge: { isBestSeller: false, rating: 4.7 },
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
  },
};

function ProductSection() {
  const [seesOther, setSeesOther] = useState<boolean>(false);
  const seeOtherProducts = () => {
    setSeesOther(true);
  };
  const hideOtherProducst = () => {
    setSeesOther(false);
  };

  return (
    <section className="p-13">
      <div>
        <h2 className={`text-center text-2xl ${loraSemibold.className}`}>
          Produk unggulan kami
        </h2>
        <h3 className={`text-center text-slate-700 ${lora.className}`}>
          Ayo jelajahi produk kami
        </h3>
      </div>
      <div className="grid grid-cols-5 mt-6 gap-6">
        {superiorProducts.map((product: IProduct, index: number) => {
          return (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          );
        })}

        <AnimatePresence>
          {seesOther &&
            otherProducts.map((product: IProduct, index: number) => {
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <ProductCard product={product} />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-x-2 h-10 text-black text-sm mt-8">
        <button
          className="px-4 border hover:cursor-pointer duration-200  flex items-center gap-x-2"
          onClick={seesOther ? hideOtherProducst : seeOtherProducts}
        >
          <span>{seesOther ? "Lihat lebih sedikit" : "Selengkapnya"}</span>
          {seesOther ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
        </button>
      </div>
    </section>
  );
}

export default ProductSection;
