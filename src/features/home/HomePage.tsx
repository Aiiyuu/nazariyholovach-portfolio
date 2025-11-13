import React from "react";
import { Welcome, ShortProjectList, Skills } from "./components";

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
