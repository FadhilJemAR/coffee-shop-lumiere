'use client'
import { Playfair_Display } from "next/font/google";
import { useEffect,useState } from "react";
import Link from "next/link";
import Image from "next/image";
const playfairDisplay = Playfair_Display({
  variable: "--playfair-display",
  subsets: ["latin"],
});

function HeaderNav() {
  const [isTransparent,setIsTransparent]  = useState<boolean  | null>(null);
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
    <header
      className={`
      ${isTransparent === null ? 'opacity-0' : `opacity-100 ${isTransparent ? 'bg-transparent text-white' : 'bg-white shadow-md text-black'}`} 
      z-3 duration-200 fixed w-full ${playfairDisplay.className} z-2 p-7 px-14 flex justify-between items-center`}
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
      <nav className="mr-14">
        <ul className="flex justify-between gap-x-6 ">
          <li className="underline decoration-transparent decoration-[2px]  hover:decoration-inherit underline-offset-4 hover:underline-offset-8 duration-200"><Link href={'#hero'}>Beranda</Link></li>
          <li className="underline decoration-transparent decoration-[2px] hover:decoration-inherit underline-offset-4 hover:underline-offset-8 duration-200"><Link href={'#product'}>Kopi</Link></li>
          <li className="underline decoration-transparent decoration-[2px] hover:decoration-inherit underline-offset-4 hover:underline-offset-8 duration-200"><Link href={'#about'}>Tentang</Link></li>
          <li className="underline decoration-transparent decoration-[2px] hover:decoration-inherit underline-offset-4 hover:underline-offset-8 duration-200"><Link href={'#footer'}>Kontak</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNav;
