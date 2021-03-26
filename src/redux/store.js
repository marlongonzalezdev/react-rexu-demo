import { configureStore } from '@reduxjs/toolkit';
import  rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/index.js";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

// then run the sagas
sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reducers", () => {
      const newRootReducer = require("./reducers").default;
      store.replaceReducer(newRootReducer);
  });
}

export default store;
