import { render } from "preact";
import { Provider } from "react-redux";
import { App } from "./components/app";
import "./index.css";
import { store } from "./store/store.js";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
