import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";


export default function Home() {
  return (
    <div className=" min-h-screen  font-sans dark:bg-black">
      <HeaderNav/>
      <HeroSection/>
      
    </div> 
  );
}
