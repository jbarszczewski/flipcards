// src/features/cards/components/card.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Flipcard } from "../types";

type CardProps = {
  card: Flipcard;
  updateCard: (card: Flipcard) => void;
  removeCard: (id: string) => void;
};

const Card: React.FC<CardProps> = ({ card, updateCard, removeCard }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <h2 className="card-title">{card.frontText}</h2>
        <p>{card.backText}</p>
        {card.extraText && (
          <div role="alert" className="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info h-6 w-6 shrink-0">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p>{card.extraText}</p>
          </div>
        )}
        <div className="card-actions justify-end">
          <button
            className="btn btn-secondary"
            onClick={() => updateCard({ ...card, isLearned: !card.isLearned })}>
            {card.isLearned ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              "Learn"
            )}
          </button>
          <button className="btn btn-ghost" onClick={() => removeCard(card.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
