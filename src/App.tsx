import { useEffect, useRef } from "react";
import "./App.scss";
import Navbar from "./components/layout/Navbar";
import Lenis from "@studio-freight/lenis";
import { Outlet } from "react-router-dom";

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

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
