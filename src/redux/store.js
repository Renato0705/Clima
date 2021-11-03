import { createStore, applyMiddleware } from "redux"; 
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga"; 

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => { 
   const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga)  
  return store;
} 

export const AppStore = createAppStore();
 