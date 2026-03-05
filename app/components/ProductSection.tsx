import { IProduct } from "../types/interface";
import ProductCard from "./ProductCard";
import { Lora } from "next/font/google";

const lora = Lora({
  weight: "400",
});

const loraSemibold = Lora({
  weight: "500",
});

const products: IProduct[] = [
  {
    name: "Mixed Cappucino",
    imageUrl: "/img/products/Cappucino.jpg",
    description:"Dibuat dengan campuran biji kopi arabika dan robusta. Memiliki rasa yang pas sehingga enak dikonsumsi diujung hari",
    badge: {
      isBestSeller: true,
      rating: 4.5,
    },
  },
];

function ProductSection() {
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
      <div className="flex flex-wrap mt-6 gap-6">
        {products.map((product: IProduct, index: number) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </section>
  );
}

export default ProductSection;
