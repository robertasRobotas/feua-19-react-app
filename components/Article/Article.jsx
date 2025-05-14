import styles from "./styles.module.css";

const Article = ({ imgUrl, title }) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        console.log(title);
      }}
    >
      <img src={imgUrl} />
      <h3>{title}</h3>
    </div>
  );
};

export default Article;
