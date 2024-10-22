import React from "react";
import Buttons from "./Buttons";
import Title from "./Title";
import { MoonIcon, SunIcon } from "../Icons/Icons.component";
import VisuallyHidden from "./VisuallyHidden";

const Header: React.FC = () => {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const handleTheme = () => {
    if (isDark) {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    }
    setIsDark(!isDark);
  };

  return (
    <header className="container flex justify-between items-center px-8 py-12">
      <a
        href="#"
        className="text-fs-logo font-fw-bold text-color-secondary-light"
      >
        <Title level="h1">Todo</Title>
      </a>
      <Buttons
        type={"button"}
        className="flex items-center gap-2 font-fw-bold text-color-secondary-light"
        onClick={handleTheme}
      >
        {isDark === true ? (
          <React.Fragment>
            Light{" "}
            <span>
              <SunIcon className="w-[30px] h-[30px] fill-color-secondary-light" />
            </span>
            <VisuallyHidden>Toggle theme to Light</VisuallyHidden>
          </React.Fragment>
        ) : (
          <React.Fragment>
            Dark{" "}
            <span>
              <MoonIcon className="w-[30px] h-[30px] fill-color-secondary-light" />
            </span>
            <VisuallyHidden>Toggle theme to Dark</VisuallyHidden>
          </React.Fragment>
        )}
      </Buttons>
    </header>
  );
};

export default Header;
