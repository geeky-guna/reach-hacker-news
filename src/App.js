import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import ListStories from "./components/ListStories";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!["top", "ask", "show", "job"].includes(type)) {
                return <Redirect to="/" />;
              }
              return <ListStories type={type} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
