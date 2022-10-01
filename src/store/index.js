import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import user from './reducers/User';
import themes from './reducers/Theme';
import orders from './reducers/Orders';
import loader from './reducers/Loader';
import toast from './reducers/Toast';
import allLogics from './logics';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from 'constants/reduxPersist';
import HttpClient from 'services/HttpClient';
import dispatch from 'helper/dispatch/dispatch';

let reducers = combineReducers({
  user: persistReducer(persistConfig, user),
  themes: persistReducer(persistConfig, themes),
  orders: orders,
  loader,
  toast,
});

const operationsDependencies = {
  HttpClient,
  dispatch,
};

const logicMiddleware = createLogicMiddleware(allLogics, operationsDependencies);

const store = createStore(reducers, applyMiddleware(logicMiddleware));

const persistor = persistStore(store);

export { store, persistor };
