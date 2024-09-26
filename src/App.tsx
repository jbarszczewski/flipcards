import Header from "./components/Header";
import AddCard from "./features/cards/components/add-card";
import CardsList from "./features/cards/components/cards-list";

const App = () => {
  return (
    <>
      <div>
        {/* <Header /> */}
        <AddCard />
        <CardsList />
      </div>
    </>
  );
};

export default App;
