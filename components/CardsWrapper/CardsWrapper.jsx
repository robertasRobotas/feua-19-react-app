import React from "react";
import Card from "../Card/Card";

export const CardsWrapper = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => {
        return (
          <Card
            name={character.name}
            image={character.image}
            yearOfBirth={character.yearOfBirth}
          />
        );
      })}
    </div>
  );
};
