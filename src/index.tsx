import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/reset.scss";
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("bannerEcv") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
