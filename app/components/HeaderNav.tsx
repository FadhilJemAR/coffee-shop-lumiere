'use client'
import { Playfair_Display } from "next/font/google";
import { useEffect,useState } from "react";
import {AnimatePresence, motion} from 'framer-motion';
import { Coffee, House } from "lucide-react";
import Image from "next/image";
const playfairDisplay = Playfair_Display({
  variable: "--playfair-display",
  subsets: ["latin"],
});

function HeaderNav() {
  const [isTransparent,setIsTransparent]  = useState<boolean  | null>(null);
  const [isOpen,setIsOpen] = useState(false);
  useEffect(()=>{
    const handleScrollWin = ()=>{
      setIsTransparent(window.scrollY < 555);
    }
    handleScrollWin();
    window.addEventListener('scroll',handleScrollWin);
      
    return ()=>{
      window.removeEventListener('scroll',handleScrollWin)
    }
  },[])
  return (
    <>
    <header
      className={`
      ${isTransparent === null ? 'opacity-0' : `opacity-100 ${isTransparent ? 'bg-transparent text-white' : 'bg-white shadow-md text-black'}`} 
      z-3 duration-200 fixed w-full z-5 backdrop-blur-xs ${playfairDisplay.className} z-2 p-7  md:px-13 flex justify-between items-center`}
    >
      <div className="flex items-center gap-x-2">
        <Image
          src={`${isTransparent?'/img/logo.png':'/img/logo-black.png'}`}
          width={28}
          height={28}
          alt="Kopi Senja Logo"
        />
        <h1 className={`text-xl`}>Kopi Senja</h1>
      </div>
      <nav className="mr-14 hidden md:block">
        <ul className="flex justify-between gap-x-6 ">
          <li className="underline decoration-transparent decoration-[2px]  hover:decoration-inherit underline-offset-4 hover:underline-offset-8 duration-200"><a href={'#hero'}>Beranda</a></li>
          <li className="underline decoration-transparent decoration-[2px] hover:decoration-inherit underline-offset-4 hover:underline-offset-8 duration-200"><a href={'#product'}>Kopi</a></li>
          <li className="underline decoration-transparent decoration-[2px] hover:decoration-inherit underline-offset-4 hover:underline-offset-8 duration-200"><a href={'#about'}>Tentang</a></li>
          <li className="underline decoration-transparent decoration-[2px] hover:decoration-inherit underline-offset-4 hover:underline-offset-8 duration-200"><a href={'#footer'}>Kontak</a></li>
        </ul>
      </nav>
      <button className="block md:hidden flex flex-col w-6 gap-y-[5px]" onClick={()=>{setIsOpen(true)}}>
        {[0,1,2].map((index:number)=>{
          return(
            <span className={`w-full h-[2px] inline-block  duration-200 ${isTransparent?'bg-white':'bg-black'}`} key={index}></span>
          )
        })}
      </button>
    </header>
    <AnimatePresence>
    {isOpen && (
    <motion.div 
      className="bg-black/40 md:hidden fixed h-[100vh] inset-0 z-5"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:0.2}}
    >
      <motion.nav 
    className={`fixed right-0 top-0 h-screen w-70 bg-white text-black shadow-2xl z-[50] p-5 ${playfairDisplay.className}`}
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '100%' }}
    /* transition spring bikin efek gerak lebih 'organik' */
    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
  >
    <div className="justify-end flex">
      <button 
        className="font-sans text-3xl p-2 hover:rotate-90 duration-300 transition-transform cursor-pointer" 
        onClick={() => setIsOpen(false)}
      >
        &times;
      </button>
    </div>

    <ul className="flex flex-col gap-y-2 mt-8 text-base">
      {[
        { name: 'Beranda', href: '#hero' },
        { name: 'Kopi', href: '#product' },
        { name: 'Tentang', href: '#about' },
        { name: 'Kontak', href: '#footer' },
      ].map((item, i) => (
        <motion.li 
          key={item.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * i }} // Efek muncul berurutan
          className="border-b border-gray-600"
        >
          <a 
            href={item.href} 
            onClick={() => setIsOpen(false)}
            className={`block py-4 px-2 text-gray-800  transition-all duration-200 rounded-lg `}
          >
            {item.name}
          </a>
        </motion.li>
      ))}
    </ul>
  </motion.nav>
    </motion.div>
    )}
    </AnimatePresence>
    </>
  );
}

export default HeaderNav;
