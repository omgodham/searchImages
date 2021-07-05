import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/core/App';
import {dataReducer} from '../src/reducers/dataReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {createStore ,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'; 

const store = createStore(dataReducer,composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

