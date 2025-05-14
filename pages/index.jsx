import { useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  const [logo, setLogo] = useState("FEUA19");

  return (
    <>
      <button
        onClick={() => {
          setLogo("FEUA29");
        }}
      >
        Change logo
      </button>
      <Header logo={logo} />
      <Main />
      <Footer />
    </>
  );
};

export default MainPage;
