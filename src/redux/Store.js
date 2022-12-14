import { createStore, applyMiddleware, compose } from "redux";
import reducers from './reducers/combineReducers';
import thunk from 'redux-thunk'
// import { combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'persist-store',
  storage,

}
const persistedReducer = persistReducer(persistConfig,reducers )
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    persistedReducer,
     composeEnhancers(applyMiddleware(thunk))
    // {},
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  export const persistor = persistStore(store)
  
  export default store