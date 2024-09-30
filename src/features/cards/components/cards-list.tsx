import React from "react";
import { useCardStore } from "../stores/use-card-store";
import Card from "./card";
const CardsList: React.FC = () => {
  const { cards, updateCard, removeCard } = useCardStore();
  return (
    <div>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          updateCard={updateCard}
          removeCard={removeCard}
        />
      ))}
    </div>
  );
};

export default CardsList;
