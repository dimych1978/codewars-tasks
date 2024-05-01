import { render } from "preact";
import { App } from "./app.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import "./index.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
