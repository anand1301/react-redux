import React from "react";
import { Home } from "./componants/Home";
import Body from "./componants/Body";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "./sass/app.scss";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
