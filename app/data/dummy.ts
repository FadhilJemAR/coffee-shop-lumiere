import { IProduct } from "../types/interface";
export const superiorProducts: IProduct[] = [
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

export const otherProducts: IProduct[] = [
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

export const testimonials:string[] = [
  "\"Kopinya juara, vibe-nya dapet banget!\" - Fadhil",
  "\"Espresso terbaik yang pernah saya coba.\" - Elon",
  "\"Baristanya ramah, tempatnya nyaman buat WfH.\" - Budi",
  "\"Berasa lagi ngopi di Paris, keren!\" - Jemima",
  "\"Wajib coba Matcha Espresso-nya, unik!\" - Rizky",
];