import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import ListStories from "./components/ListStories";
import "./App.css";

const App = () => {
  console.log("Geeky ==>")
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div style={{ padding: 50 }}>
          <Switch>
            <Route
              path="/"
              render={() => <Redirect to="/top" />}
              exact={true}
            />
            <Route
              path="/profile/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <UserProfile id={id} />;
              }}
            />
            <Route
              path="/:type"
              render={({ match }) => {
                const { type } = match.params;
                return <ListStories type={type} />;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
