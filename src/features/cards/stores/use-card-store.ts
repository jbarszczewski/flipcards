import Papa from "papaparse";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Flipcard } from "../types";

interface CardState {
  cards: Flipcard[];
  addCard: (card: Flipcard) => void;
  removeCard: (cardId: string) => void;
  updateCard: (updatedCard: Flipcard) => void;
  importCardsFromCSV: (file: File) => void;
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
      importCardsFromCSV: (file) => {
        Papa.parse<Flipcard>(file, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (results) => {
            // todo: Merge cards from CSV with existing cards making sure to avoid duplicates based on id
            // In case of same id, use values from CSV file
            set((state) => ({ cards: [...state.cards, ...results.data] }));
          },
        });
      },
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
