import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lora, Comfortaa, Nunito } from 'next/font/google';

const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
const comfortaa = Comfortaa({ subsets: ['latin'], weight: ['400', '700'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'] });


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${comfortaa.className} ${nunito.className} ${lora.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
