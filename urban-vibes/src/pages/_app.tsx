import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lora, Comfortaa, Nunito } from 'next/font/google';

const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
const comfortaa = Comfortaa({ subsets: ['latin'], weight: ['400', '700'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${comfortaa.className} ${nunito.className} ${lora.className} min-h-screen flex flex-col`}>
      <div className="absolute right-0 left-0 z-10 text-white">
        <Navbar />
      </div>
      <main className="bg-blue-400">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
