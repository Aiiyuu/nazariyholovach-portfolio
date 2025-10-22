import React from "react";
import Welcome from "../../components/sections/Welcome";
import ShortProjectList from "../../components/sections/ShortProjectList";

const HomePage: React.FC = () => {
  return (
    <>
      <Welcome />
      <ShortProjectList />
    </>
  );
};

export default HomePage;
