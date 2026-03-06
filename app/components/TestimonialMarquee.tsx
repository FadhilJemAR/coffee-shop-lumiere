import { motion } from "framer-motion";
import { testimonials } from "../data/dummy";

export default function TestimonialMarquee() {
  return (
    <div className="py-10 my-4  overflow-hidden whitespace-nowrap flex">
      <motion.div
        className="flex"
        animate={{
          x: [0, "-50%"], // Gerak dari awal ke tengah (karena kita duplikasi isinya)
        }}
        transition={{
          duration: 30, // Semakin besar angka, semakin pelan jalannya
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Render pertama */}
        {testimonials.map((text, index) => (
          <span
            key={index}
            className=" text-xl font-serif mx-10 flex items-center"
          >
            <span className="text-amber-400 mr-4">★</span> {text}
          </span>
        ))}

        {/* Duplikasi untuk efek infinite (biar gak putus) */}
        {testimonials.map((text, index) => (
          <span
            key={`dup-${index}`}
            className=" text-xl font-serif mx-10 flex items-center"
          >
            <span className="text-amber-400 mr-4">★</span> {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
