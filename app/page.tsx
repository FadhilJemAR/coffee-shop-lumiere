import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";


export default function Home() {
  return (
    <div className="min-h-screen font-sans dark:bg-black">
        <HeaderNav />
        <main>
          <HeroSection />
          <ProductSection />
        </main>
    </div>
  );
}
