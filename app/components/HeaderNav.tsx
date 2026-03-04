import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const playfairDisplay =  Playfair_Display({
  variable:'--playfair-display',
  subsets:['latin']
})
function HeaderNav(){
    return(
         <header className={`bg-transparent fixed w-full ${playfairDisplay.className} z-2 p-7 flex justify-between items-center`}>
        <div className="flex items-center gap-x-2">
         <Image src={'/img/logo.png'} width={28} height={28} alt="Kopi Senja Logo"/>
         <h1 className={` text-white text-xl`}>Kopi Senja</h1>
        </div>
        <nav className="mr-14">
          <ul className="flex justify-between gap-x-6 text-white">
            <li>
               Beranda
            </li>
            <li>
               Kopi
            </li>
            <li>
               Tentang
            </li>
            <li>
               Kontak
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default  HeaderNav