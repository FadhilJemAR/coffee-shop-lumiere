import ProductCard from "./ProductCard";
import { Lora } from "next/font/google";

const lora = Lora({
  weight: "400",
});

const loraSemibold = Lora({
  weight: "500",
});

function ProductSection() {
  return (
    <section className="p-14">
      <div>
        <h2 className={`text-center text-2xl ${loraSemibold.className}`}>
          Produk unggulan kami
        </h2>
        <h3 className={`text-center text-slate-700 ${lora.className}`}>
          Ayo jelajahi produk kami
        </h3>
      </div>
      <div className="flex flex-wrap mt-6">
        <ProductCard />
      </div>
    </section>
  );
}

export default ProductSection;
