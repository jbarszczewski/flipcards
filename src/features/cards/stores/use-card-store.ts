import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Flipcard } from "../types";

interface CardState {
  cards: Flipcard[];
  addCard: (card: Flipcard) => void;
  removeCard: (cardId: string) => void;
  updateCard: (updatedCard: Flipcard) => void;
}

export const useCardStore = create<CardState>()(
  persist(
    (set) => ({
      cards: [],
      addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
      removeCard: (cardId) =>
        set((state) => ({
          cards: state.cards.filter((card) => card.id !== cardId),
        })),
      updateCard: (updatedCard) =>
        set((state) => ({
          cards: state.cards.map((card) =>
            card.id === updatedCard.id ? updatedCard : card,
          ),
        })),
    }),
    { name: "card-storage" },
  ),
);
