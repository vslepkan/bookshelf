import React from "react";
import { Route, Switch } from "react-router-dom";
import Discover from "../../pages/Discover/Discover";
import Home from "../../pages/Home/Home";
import ReadingList from "../../pages/ReadingList/ReadingList";
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <div className="p-4">
        <Switch>
          <Route path="/reading-list">
            <ReadingList />
          </Route>
          <Route path="/finished-books">
            <h2>Finished books page</h2>
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
