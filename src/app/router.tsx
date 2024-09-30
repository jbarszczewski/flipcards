import { Route, Switch } from "wouter";
import HomeRoute from "./routes/home";
import RandomCardRoute from "./routes/random-card";
import AddCardRoute from "./routes/add-card";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={HomeRoute} />
      <Route path="/cards/random" component={RandomCardRoute} />
      <Route path="/cards/add" component={AddCardRoute} />
      <Route>404: No such page!</Route>
    </Switch>
  );
};
