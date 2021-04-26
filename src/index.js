import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
import reducer from "./store/reducers";
import { PersistGate } from "redux-persist/integration/react";

const store = createStore(reducer);
const psStore = persistStore(store);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={psStore}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
