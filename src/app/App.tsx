import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "@/shared/components/layout";
import {
  TransitionScreen,
  SECOND_PHASE_DELAY,
} from "@/shared/components/animations";
import { useLanguage, useLenis, usePageTransition } from "@/shared/hooks";
import { LanguageProvider } from "./providers";

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
