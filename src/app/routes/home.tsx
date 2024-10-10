import { MainLayout } from "../../components/main-layout";
import CardsList from "../../features/cards/components/cards-list";

const HomeRoute = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Home</h1>
        <CardsList />
      </div>
    </MainLayout>
  );
};

export default HomeRoute;
