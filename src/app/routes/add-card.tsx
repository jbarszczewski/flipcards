import { MainLayout } from "../../components/main-layout";
import AddCard from "../../features/cards/components/add-card";

const AddCardRoute = () => {
  return (
    <MainLayout>
      <h1>Add Card</h1>
      <AddCard />
    </MainLayout>
  );
};

export default AddCardRoute;
