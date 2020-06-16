import React from "react";
import { Route, Switch } from "react-router-dom";
import Discover from "../../pages/Discover/Discover";
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <div className="p-4">
        <Switch>
          <Route path="/reading-list">
            <h2>Reading list page</h2>
          </Route>
          <Route path="/finished-books">
            <h2>Finished books page</h2>
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>

          <Route path="/">
            <header>
              <h1 className="text-xl font-bold text-center">
                [Book | Movie | Game] shelf
              </h1>
            </header>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
