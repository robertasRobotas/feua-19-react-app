import { useState } from "react";
import styles from "./styles.module.css";

const Article = ({ imgUrl, title }) => {
  const [isShow, setShow] = useState(false);

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        console.log(title);
      }}
    >
      {isShow && <img src={imgUrl} />}
      <h3>{title}</h3>

      <button
        onClick={() => {
          setShow(!isShow);
        }}
      >
        {isShow ? <>Hide photo</> : <>Show photo</>}
      </button>
    </div>
  );
};

export default Article;
