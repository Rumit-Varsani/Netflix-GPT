import "./App.css";
import React from "react";
import Body from "./componets/Body";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
};

export default App;
