import { MainLayout } from "../../components/main-layout";
import CardsList from "../../features/cards/components/cards-list";

const HomeRoute = () => {
  return (
    <MainLayout>
      <h1>Home</h1>
      <CardsList />
    </MainLayout>
  );
};

export default HomeRoute;
