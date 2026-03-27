import { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home.jsx';
import { rootReducer } from './reducers/index.js';
import './App.css';
import createSagaMiddleware from 'redux-saga';
import mySaga from './components/sagas/index.js';
import { configureStore } from '@reduxjs/toolkit';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false // disable thunk if you're using saga
    }).concat(sagaMiddleware)
});
sagaMiddleware.run(mySaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
