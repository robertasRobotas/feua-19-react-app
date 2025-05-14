import styles from "./styles.module.css";

const Header = ({ logo }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{logo}</div>
      <nav>
        <ul>
          <li>
            <a href="#">aaaaaa</a>
          </li>
          <li>
            <a href="#">aaaaaa</a>
          </li>
          <li>
            <a href="#">aaaaaa</a>
          </li>
          <li>
            <a href="#">aaaaaa</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
