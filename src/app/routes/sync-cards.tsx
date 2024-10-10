import { MainLayout } from "../../components/main-layout";
import { ChangeEvent, useRef } from "react";
import { useCardStore } from "../../features/cards/stores/use-card-store";

const SyncCardsRoute = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { importCardsFromCSV, exportCardsToCSV } = useCardStore();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      importCardsFromCSV(file);
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Sync Cards</h1>
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
        <button className="btn btn-primary" onClick={() => exportCardsToCSV()}>
          Export Cards
        </button>
      </div>
    </MainLayout>
  );
};

export default SyncCardsRoute;
