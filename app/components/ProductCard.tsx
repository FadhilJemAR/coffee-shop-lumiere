import { Lora } from "next/font/google";
import { Star, Crown } from "lucide-react";

const lora = Lora({
  weight: "400",
});

const loraSemibold = Lora({
  weight: "500",
});

function ProductCard() {
  return (
    <article className="rounded-lg overflow-hidden h-90 w-60">
      <div className="h-40 rounded-lg relative overflow-hidden w-full">
        <div className="absolute bg-stone-800  text-white text-xs flex py-1 px-3 w-35 rounded-2xl left-4 top-4 items-center gap-x-2">
          <div className="flex items-center gap-x-[2px]">
            <Crown size={14} />
            <span>Terlaris</span>
          </div>
          <div className="flex items-center gap-x-[2px]">
            <Star size={13} fill="white" color="white" />
            <span className="text-white">4.5</span>
          </div>
        </div>
        <img
          src={"/img/products/Cappucino.jpg"}
          className="h-40 w-full object-cover"
        ></img>
      </div>
      <span
        className={`${loraSemibold.className} text-lg font-bold inline-block mt-2`}
      >
        Mixed Cappucino
      </span>
      <p className={`${lora.className} text-sm`}>
        Dibuat dengan campuran biji kopi arabika dan robusta. Memiliki rasa yang
        pas sehingga enak dikonsumsi pagi hari
      </p>
      <button className="rounded-2xl text-sm mt-3 py-2 px-4 border border-black/80 hover:bg-black/80 hover:text-white duration-200 hover:cursor-pointer">
        Pesan Via WhatsApp
      </button>
    </article>
  );
}

export default ProductCard;
