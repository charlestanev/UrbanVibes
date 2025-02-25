import Footer from "@/components/footer/Footer";
import MainContent from "@/components/main/Main";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      {/* Hero Section */}
      <MainContent />
      <Footer />
    </>
  )
}
