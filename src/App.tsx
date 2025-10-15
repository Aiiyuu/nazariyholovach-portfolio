import "./App.scss";
import Navbar from "./components/layout/Navbar";
import Welcome from "./components/sections/Welcome/Welcome";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <>
      <ReactLenis root />
      <Navbar />
      <Welcome />
    </>
  );
}

export default App;
