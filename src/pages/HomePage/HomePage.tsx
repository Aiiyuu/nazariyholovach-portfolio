import React from "react";
import Welcome from "../../components/sections/Welcome";
import ShortProjectList from "../../components/sections/ShortProjectList";
import Skills from "../../components/sections/Skills";

const HomePage: React.FC = () => {
  return (
    <>
      <Welcome />
      <ShortProjectList />
      <Skills />
    </>
  );
};

export default HomePage;
