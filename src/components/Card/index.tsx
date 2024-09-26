import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  id: number;
  text1: string;
  text2: string;
  isLearned: boolean;
}

const Card = (props: CardProps) => {
  const { id, text1, text2, isLearned } = props;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{text1}</h2>
        <p>{text2}</p>
        <p>{id}</p>
        <div className="card-actions justify-end">
          {isLearned && <FontAwesomeIcon icon={faCheckCircle} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
