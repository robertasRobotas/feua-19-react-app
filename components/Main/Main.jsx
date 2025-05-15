import { useState } from "react";
import styles from "./styles.module.css";
import Article from "../Article/Article";

const Main = () => {
  const [articles, setArticles] = useState([
    {
      id: "1",
      title: "Goldis",
      imgUrl:
        "https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=12%2C96%2C2671%2C1335&q=45&auto=format&w=1356&h=668&fit=crop",
    },
    {
      id: "2",
      title: "Pug",
      imgUrl:
        "https://www.dogstrust.org.uk/images/800x600/assets/2025-03/toffee%202.jpg",
    },
    {
      id: "3",
      title: "Cihuahua",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3AZLYQbah51ZWbFob7YokxP-ZdE-WV8Us4mSrSbNPA&s&ec=72940543",
    },
    {
      id: "4",
      title: "Dobermanas",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3AZLYQbah51ZWbFob7YokxP-ZdE-WV8Us4mSrSbNPA&s&ec=72940543",
    },
    {
      id: "5",
      title: "Corgis",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3AZLYQbah51ZWbFob7YokxP-ZdE-WV8Us4mSrSbNPA&s&ec=72940543",
    },
  ]);

  return (
    <main className={styles.wrapper}>
      {articles.map((article) => {
        return (
          <Article
            key={article.id}
            title={article.title}
            imgUrl={article.imgUrl}
          />
        );
      })}
    </main>
  );
};

export default Main;
