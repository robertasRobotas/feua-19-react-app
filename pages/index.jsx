import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { CardsWrapper } from "@/components/CardsWrapper/CardsWrapper";
import Spinner from "@/components/Spinner/Spinner";

const MainPage = () => {
  const [logo, setLogo] = useState("FEUA19");

  const [links, setLinks] = useState([
    { title: "About", link: "/about" },
    { title: "Main", link: "/main" },
    { title: "Contacts", link: "/contacts" },
  ]);

  const [characters, setCharacters] = useState(null);

  const fetchCharacters = async () => {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );

    setCharacters(response.data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setLogo("FEUA29");
        }}
      >
        Change logo
      </button>
      <Header logo={logo} links={links} />
      {!characters ? (
        <Spinner />
      ) : (
        <CardsWrapper characters={characters} setCharacters={setCharacters} />
      )}
      <Footer />
    </>
  );
};

export default MainPage;
