import React from "react";
import Buttons from "./Buttons";

const Header: React.FC = () => {
  return (
    <header className="container flex justify-between items-center px-8 py-12">
      <a href="">Todo</a>
      <Buttons type={"button"}>Dark</Buttons>
    </header>
  );
};

export default Header;
