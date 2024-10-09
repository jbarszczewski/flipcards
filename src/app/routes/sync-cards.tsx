import { MainLayout } from "../../components/main-layout";
import { ChangeEvent, useRef } from "react";
import { useCardStore } from "../../features/cards/stores/use-card-store";

const SyncCardsRoute = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { importCardsFromCSV } = useCardStore();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      importCardsFromCSV(file);
    }
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-4">Import Cards</h1>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        className="btn btn-primary"
        onClick={() => inputRef.current?.click()}>
        Import Cards
      </button>
    </MainLayout>
  );
};

export default SyncCardsRoute;
