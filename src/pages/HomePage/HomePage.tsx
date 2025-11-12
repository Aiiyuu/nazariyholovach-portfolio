import React from "react";
import Welcome from "@/components/home/Welcome";
import ShortProjectList from "@/components/home/ShortProjectList";
import Skills from "@/components/home/Skills";

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
