import styles from "./styles.module.css";

import Card from "../Card/Card";

export const CardsWrapper = ({ characters, setCharacters }) => {
  const onCardClick = (id) => {
    const filteredCharacters = characters.filter((c) => {
      return id !== c.id;
    });

    setCharacters(filteredCharacters);
  };

  return (
    <div className={styles.wrapper}>
      {[...characters]
        .sort((a, b) => {
          return b.yearOfBirth - a.yearOfBirth;
        })
        .map((character) => {
          return (
            <Card
              id={character.id}
              name={character.name}
              image={character.image}
              yearOfBirth={character.yearOfBirth}
              onCardClick={onCardClick}
            />
          );
        })}
    </div>
  );
};
