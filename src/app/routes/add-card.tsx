import { MainLayout } from "../../components/main-layout";
import AddCard from "../../features/cards/components/add-card";

const AddCardRoute = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Add Card</h1>
        <AddCard />
      </div>
    </MainLayout>
  );
};

export default AddCardRoute;
