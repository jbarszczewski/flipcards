import { v4 as uuidv4 } from "uuid";
import { useCardStore } from "../stores/use-card-store";

const AddCard: React.FC = () => {
  const { addCard } = useCardStore();
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() =>
          addCard({
            id: uuidv4(),
            frontText: "New Card",
            backText: "Back text",
          })
        }
      >
        Add Card
      </button>
    </div>
  );
};

export default AddCard;
