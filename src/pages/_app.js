import "@/styles/global.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import localFont from "next/font/local";

const texGyreHeroes = localFont({
  src: [
    {
      path: "../styles/font/texgyreheros-bold.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/font/texgyreheros-regular.otf",
      weight: "300",
      style: "normal",
    },
  ],
});

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
    <main className={texGyreHeroes.className}>
      <h1 style={{ display: "none" }}>Ottstudio</h1>
      <Component {...pageProps} />
    </main>
  );
}
