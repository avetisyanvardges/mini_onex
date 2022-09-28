import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import user from 'store/reducers/User';
import allLogics from './logics';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from 'constants/reduxPersist';

let reducers = combineReducers({
  user: persistReducer(persistConfig, user),
});

const logicMiddleware = createLogicMiddleware(allLogics);

const store = createStore(reducers, applyMiddleware(logicMiddleware));

export const persistor = persistStore(store);

export default store;
