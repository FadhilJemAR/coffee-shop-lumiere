import { Lora } from "next/font/google";
import { Star, Crown } from "lucide-react";
import { IProduct } from "../types/interface";
import Image from "next/image";
const lora = Lora({
  weight: "400",
});

const loraSemibold = Lora({
  weight: "500",
});

interface IProductCardProps {
  product: IProduct;
}

function ProductCard({ product }: IProductCardProps) {
  const renderBadge = () => {
    if (product.badge) {
      const badge = product.badge;
      return (
        <div className="absolute bg-stone-800 z-2 text-white text-xs flex py-1 px-4  rounded-2xl left-4 top-4 items-center gap-x-2">
          {badge.isBestSeller && (
            <div className="flex items-center gap-x-[2px]">
              <Crown size={14} />
              <span>Terlaris</span>
            </div>
          )}
          <div className="flex items-center gap-x-[2px]">
            <Star size={13} fill="white" color="white" />
            <span className="text-white">{badge.rating}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <article className="rounded-lg overflow-hidden h-95 w-40 sm:w-60 ">
      <div className="h-40 rounded-lg relative overflow-hidden w-full">
        {renderBadge()}
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill={true}
          style={{ objectFit: "cover" }}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <span
        className={`${loraSemibold.className} sm:text-lg  font-bold inline-block mt-2`}
      >
        {product.name}
      </span>

      <p className={`${lora.className} sm:text-sm text-xs min-h-25`}>
        {product.description}
      </p>

      {/* ELEMENT HARGA BARU */}
      <span
        className={`${loraSemibold.className} block text-base font-bold mb-3`}
      >
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(product.price)}
      </span>

      <button className="rounded-2xl text-xs md:text-sm py-2 px-4 border border-black/80 hover:bg-black/80 hover:text-white duration-200 hover:cursor-pointer">
        Pesan Via WhatsApp
      </button>
    </article>
  );
}

export default ProductCard;
