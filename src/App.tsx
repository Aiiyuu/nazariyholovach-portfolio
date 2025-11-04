import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "./components/layout/Footer";
import TransitionScreen, {
  TRANSITION_SCREEN_DURATION,
} from "./components/animations/TransitionScreen";
import { useLanguage, useLenis } from "./hooks";
import { Language } from "./components/ui/LanguageSwitcher/types";

function App() {
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setShowTransition(true);

      const timer = setTimeout(() => {
        setCurrentPath(location.pathname);
        setShowTransition(false);
      }, TRANSITION_SCREEN_DURATION);

      return () => clearTimeout(timer);
    }
  }, [location, currentPath]);

  useLanguage();
  const { lng } = useParams();

  useLenis();

  return (
    <>
      <main className="main-wrapper">
        <Navbar lng={lng as Language} />

        <Outlet context={{ lng }} />

        <Footer />
      </main>

      {showTransition && <TransitionScreen />}
    </>
  );
}

export default App;
