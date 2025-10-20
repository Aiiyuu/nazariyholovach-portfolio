import { useEffect, useRef } from "react";
import "./App.scss";
import Navbar from "./components/layout/Navbar";
import Welcome from "./components/sections/Welcome/Welcome";
import Lenis from "@studio-freight/lenis";
import ShortProjectList from "./components/sections/ShortProjectList";

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
      <Welcome />
      <ShortProjectList />
    </>
  );
}

export default App;
