import { useState } from "react";
import { MainLayout } from "../../components/main-layout";
import { useCardStore } from "../../features/cards/stores/use-card-store";
import Card from "../../features/cards/components/card"; // Import the Card component
import { Flipcard } from "../../features/cards/types";

const RandomCardRoute = () => {
  const { cards, updateCard, removeCard } = useCardStore();
  const [card, setCard] = useState<Flipcard>();

  const handleGetRandomCard = () => {
    setCard(cards[Math.floor(Math.random() * cards.length)]);
  };

  return (
    <MainLayout>
      <h1>Random Card</h1>
      <button className="btn btn-primary" onClick={handleGetRandomCard}>
        Get Random Card
      </button>
      {card && (
        <Card card={card} updateCard={updateCard} removeCard={removeCard} />
      )}
    </MainLayout>
  );
};

export default RandomCardRoute;
