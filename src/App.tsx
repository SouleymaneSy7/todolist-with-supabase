import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="hero-img | absolute top-0 left-0 -z-10  w-full h-[360px]">
        <img
          src="./src/assets/images/hero-img.jpg"
          alt="Beautifull Mountain and rivers"
          className="bg-no-repeat bg-cover w-full h-full"
        />
      </div>
      <div className="min-h-screen w-full">
        <Header />
        <Main />
      </div>
    </React.Fragment>
  );
};

export default App;
