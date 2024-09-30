import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCardStore } from "../stores/use-card-store";

const AddCard: React.FC = () => {
  const { addCard } = useCardStore();
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [extraText, setExtraText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCard({
      id: uuidv4(),
      frontText,
      backText,
      extraText,
    });
    // Clear the form after submission
    setFrontText("");
    setBackText("");
    setExtraText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={frontText}
        onChange={(e) => setFrontText(e.target.value)}
        placeholder="Front text"
        required
        className="input input-bordered"
      />
      <input
        type="text"
        value={backText}
        onChange={(e) => setBackText(e.target.value)}
        placeholder="Back text"
        required
        className="input input-bordered"
      />
      <textarea
        value={extraText}
        onChange={(e) => setExtraText(e.target.value)}
        placeholder="Extra text"
        className="textarea textarea-bordered"
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!frontText || !backText}>
        Add Card
      </button>
    </form>
  );
};

export default AddCard;
