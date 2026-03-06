"use client";
import { IProduct } from "../types/interface";
import { superiorProducts, otherProducts } from "../data/dummy";
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
    <section
      className="sm:p-13 p-13 scroll-mt-20 overflow-x-hidden"
      id="product"
    >
      <div>
        <h2 className={`text-center text-2xl ${loraSemibold.className}`}>
          Produk unggulan kami
        </h2>
        <h3 className={`text-center text-slate-700 ${lora.className}`}>
          Ayo jelajahi produk kami
        </h3>
      </div>
      <div className="grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6 gap-8 ">
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
