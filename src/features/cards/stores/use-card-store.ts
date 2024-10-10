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
  exportCardsToCSV: () => void;
}

export const useCardStore = create<CardState>()(
  persist(
    (set, get) => ({
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
            set((state) => {
              const uniqueCards = [...state.cards, ...results.data].reduce(
                (acc, card) => {
                  const existingCard = acc.find((c) => c.id === card.id);
                  if (existingCard) {
                    return acc.map((c) => (c.id === card.id ? card : c));
                  }
                  return [...acc, card];
                },
                [] as Flipcard[],
              );
              return { cards: uniqueCards };
            });
          },
        });
      },
      updateCard: (updatedCard) =>
        set((state) => ({
          cards: state.cards.map((card) =>
            card.id === updatedCard.id ? updatedCard : card,
          ),
        })),
      exportCardsToCSV: () => {
        const csv = Papa.unparse(get().cards);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "cards.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    }),
    { name: "card-storage" },
  ),
);
