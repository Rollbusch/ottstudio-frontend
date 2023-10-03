import "@/styles/global.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Analytics } from '@vercel/analytics/react'

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { pathname } = router;
    const bluePage = ["/", "/projetos"];
    const isBluePage = bluePage.filter((page) => page == pathname).length;
    document.body.classList.add(isBluePage ? "bluescreen" : "whitescreen");
    return () => {
      document.body.classList.remove(isBluePage ? "bluescreen" : "whitescreen");
    };
  }, [router]);
  
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
