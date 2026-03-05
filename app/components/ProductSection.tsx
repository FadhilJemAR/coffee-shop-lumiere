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
    description: "Dibuat dengan campuran biji kopi arabika dan robusta. Memiliki rasa yang pas sehingga enak dikonsumsi di ujung hari.",
    badge: {
      isBestSeller: true,
      rating: 4.5,
    },
  },
  {
    name: 'Original Espresso',
    imageUrl: "/img/products/Espresso.jpg",
    description: "Espresso dengan biji kopi arabika impor dari Yaman, memiliki rasa yang kuat, body yang tebal, dan aroma yang sangat autentik.",
    badge: {
      isBestSeller: true,
      rating: 4.8,
    },
  },
  // --- TAMBAHAN PRODUK BARU ---
  {
    name: "Velvet Latte",
    imageUrl: "/img/products/Velvet-Latte.jpg",
    description: "Perpaduan lembut susu *creamy* dengan *double shot* espresso. Tekstur *silky* yang memberikan ketenangan di setiap tegukan.",
    badge: {
      isBestSeller: true,
      rating: 4.9,
    },
  },
  {
    name: "Classic Flat White",
    imageUrl: "/img/products/Flat-White.jpg",
    description: "Gaya khas kafe Melbourne dan London. Lapisan micro-foam tipis di atas espresso yang menonjolkan karakter asli biji kopi pilihan.",
    badge: {
      isBestSeller: true,
      rating: 4.7,
    },
  },
  {
    name: "Cold Brew Artisan",
    imageUrl: "/img/products/Cold-Brew.jpg",
    description: "Kopi yang diseduh dingin selama 12 jam untuk menghasilkan rasa yang bersih, rendah asam, dan sentuhan rasa cokelat alami.",
    badge: {
      isBestSeller: true,
      rating: 4.6,
    },
  }
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
