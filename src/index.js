import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor, sagaMiddleware } from "./redux/store";

import App from "./App";
import { PersistGate } from "redux-persist/integration/react"; // refered this website to understand about persisting a reducer (https://dev.to/dawnind/persist-redux-state-with-redux-persist-3k0d)
import watchSagas from "./redux/store/sagas";

sagaMiddleware.run(watchSagas);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
