import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Article from "../Article/Article";
import Spinner from "../Spinner/Spinner";

const Main = () => {
  const [candies, setCandies] = useState(null);

  const fetchCandies = async () => {
    const response = await axios.get(
      "https://680726a0e81df7060eb8fba8.mockapi.io/candies"
    );

    setCandies(response.data);
  };

  useEffect(async () => {
    await axios.get("https://680726a0e81df7060eb8fba8.mockapi.io/candies");

    fetchCandies();
  }, []);

  console.log(candies);

  return (
    <main className={styles.wrapper}>
      {candies ? (
        <>
          {candies.map((candy) => {
            return (
              <Article
                key={candy.id}
                title={candy.title}
                imgUrl={candy.imgUrl}
              />
            );
          })}
        </>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Main;
