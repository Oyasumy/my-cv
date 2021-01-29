import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import configStore from "./redux/configStore";

const store = configStore();
const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;
