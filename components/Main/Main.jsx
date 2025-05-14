import { useState } from "react";
import styles from "./styles.module.css";
import Article from "../Article/Article";

const Main = () => {
  const [articles, setArticles] = useState([
    {
      title: "Take a look at this dog!!!",
      imgUrl:
        "https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=12%2C96%2C2671%2C1335&q=45&auto=format&w=1356&h=668&fit=crop",
    },
    {
      title: "This dog is really cute!!!",
      imgUrl:
        "https://www.dogstrust.org.uk/images/800x600/assets/2025-03/toffee%202.jpg",
    },
    {
      title: "333333",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3AZLYQbah51ZWbFob7YokxP-ZdE-WV8Us4mSrSbNPA&s&ec=72940543",
    },
  ]);

  console.log(articles.title);

  return (
    <main className={styles.wrapper}>
      <Article title={articles[0]?.title} imgUrl={articles[0]?.imgUrl} />
      <Article title={articles[1]?.title} imgUrl={articles[1]?.imgUrl} />
      <Article title={articles[2]?.title} imgUrl={articles[2]?.imgUrl} />
    </main>
  );
};

export default Main;
