import styles from "./styles.module.css";

const Header = ({ logo, links }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>{logo}</div>
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li>
                <a href={link.link}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
