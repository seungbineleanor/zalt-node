import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import { PersistGate } from 'redux-persist/integration/react';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}

//persistedReducer is an augmented version of reducers
const persistedReducer = persistReducer(persistConfig, reducers)

//hook up middleware to redux store
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store)
// persistor.purge() 

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);
