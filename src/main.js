import React from "react";
import App from "./App";

// Redux
import { Provider } from "react-redux";
import configStore from "./redux/configStore";

// React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// router
import route from "./router";
import Navigation from "./components/Navigation/navigation";
import Loading from "./components/loading";
import Menu from "./components/menu";
import { ToastProvider } from "react-toast-notifications";

// create store
const store = configStore();

const Main = () => {
  return (
    <Provider store={store}>
      <Loading />
      <Menu />
      <ToastProvider>
        <Router>
          {/* <App /> */}
          <Navigation />

          <Switch>{showRoute(route)}</Switch>
        </Router>
      </ToastProvider>
    </Provider>
  );
};

const showRoute = (route) => {
  var result = null;
  result = route.map((item) => {
    return <Route key={item.path} path={item.path} exact={item.exact} component={item.main} />;
  });
  return result;
};

export default Main;
