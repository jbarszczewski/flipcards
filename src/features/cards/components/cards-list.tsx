import React from "react";
import { useCardStore } from "../stores/use-card-store";

const CardsList: React.FC = () => {
  const { cards, removeCard } = useCardStore();
  return (
    <div>
      {cards.map((card) => (
        <div key={card.id} className="card bg-base-100 w-96 shadow-xl">
          <h3 className="card-title">{card.frontText}</h3>
          <p className="card-body">{card.backText}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-secondary"
              onClick={() => removeCard(card.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsList;
