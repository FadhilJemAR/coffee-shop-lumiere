import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen font-sans dark:bg-black">
        <HeaderNav />
        <main>
          <HeroSection />
          <ProductSection />
          <AboutSection/>
        </main>
    </div>
  );
}
