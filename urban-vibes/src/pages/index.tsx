import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero-sectoin/HeroSection";
import MainContent from "@/components/hero-sectoin/HeroSection";
import Main from "@/components/main/Main";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Main Content */}
      <Main />
      {/* Footer */}
      <Footer />
    </>
  )
}
