import { useState } from "react";
import { MainLayout } from "../../components/main-layout";
import { useCardStore } from "../../features/cards/stores/use-card-store";
import Card from "../../features/cards/components/card"; // Import the Card component
import { Flipcard } from "../../features/cards/types";

const RandomCardRoute = () => {
  const { cards, updateCard, removeCard } = useCardStore();
  const [card, setCard] = useState<Flipcard>();

  const handleGetRandomCard = () => {
    const newCard = cards[Math.floor(Math.random() * cards.length)];
    if (newCard !== card) {
      setCard(newCard);
    } else {
      handleGetRandomCard();
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Random Card</h1>
        <button className="btn btn-primary" onClick={handleGetRandomCard}>
          Get Random Card
        </button>
        {card && (
          <Card card={card} updateCard={updateCard} removeCard={removeCard} />
        )}
      </div>
    </MainLayout>
  );
};

export default RandomCardRoute;
