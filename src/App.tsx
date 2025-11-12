import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";
import TransitionScreen from "./components/animations/TransitionScreen";
import { useLanguage, useLenis, usePageTransition } from "./hooks";
import { SECOND_PHASE_DELAY } from "./components/animations/TransitionScreen";
import { LanguageProvider } from "./context";

function App() {
  const { showTransition, title } = usePageTransition();

  useLanguage();
  useLenis();
  useLenis();

  return (
    <>
      <LanguageProvider>
        <Navbar />

        <main className="main-wrapper">
          {`${SECOND_PHASE_DELAY}`}

          <Outlet />
        </main>

        <Footer />

        {showTransition && <TransitionScreen title={title} />}
      </LanguageProvider>
    </>
  );
}

export default App;
