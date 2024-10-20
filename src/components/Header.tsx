import React from "react";
import Buttons from "./Buttons";

const Header: React.FC = () => {
  return (
    <header>
      <a href="">Todo</a>
      <Buttons type={"button"}>Dark</Buttons>
    </header>
  );
};

export default Header;
