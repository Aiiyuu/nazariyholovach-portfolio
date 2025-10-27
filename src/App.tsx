import { useEffect, useRef } from "react";
import Navbar from "./components/layout/Navbar";
import Lenis from "@studio-freight/lenis";
import { Outlet, useParams } from "react-router-dom";
import Footer from "./components/layout/Footer";
import { Language } from "./components/ui/LanguageSwitcher/types";
import { useTranslation } from "react-i18next";

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  const { lng } = useParams<{ lng: Language }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
