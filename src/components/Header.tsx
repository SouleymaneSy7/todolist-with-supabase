import React from "react";
import Buttons from "./Buttons";
import Title from "./Title";

const Header: React.FC = () => {
  return (
    <header className="container flex justify-between items-center px-8 py-12">
      <a href="#" className="text-fs-logo font-fw-bold text-white">
        <Title level="h1">Todo</Title>
      </a>
      <Buttons
        type={"button"}
        className="flex items-center gap-2 font-fw-bold text-white"
      >
        Dark
      </Buttons>
    </header>
  );
};

export default Header;
