import { Route, Switch } from "wouter";
import HomeRoute from "./routes/home";
import RandomCardRoute from "./routes/random-card";
import AddCardRoute from "./routes/add-card";
import SyncCardsRoute from "./routes/sync-cards";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/flipcards" component={HomeRoute} />
      <Route path="/flipcards/cards/random" component={RandomCardRoute} />
      <Route path="/flipcards/cards/add" component={AddCardRoute} />
      <Route path="/flipcards/cards/sync" component={SyncCardsRoute} />
      <Route>404: No such page!</Route>
    </Switch>
  );
};
