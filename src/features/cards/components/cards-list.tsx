import React from "react";
import { useCardStore } from "../stores/use-card-store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const CardsList: React.FC = () => {
  const { cards, updateCard, removeCard } = useCardStore();
  return (
    <div>
      {cards.map((card) => (
        <div className="card w-96 bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title">{card.frontText}</h2>
            <p>{card.backText}</p>
            <p>{card.id}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-secondary"
                onClick={() =>
                  updateCard({ ...card, isLearned: !card.isLearned })
                }>
                {card.isLearned ? (
                  <FontAwesomeIcon icon={faCheckCircle} />
                ) : (
                  "Learn"
                )}
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => removeCard(card.id)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsList;
