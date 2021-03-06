import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const enhancers = compose( 
  applyMiddleware( ...[ ReduxThunk ]), 
  window.devToolsExtension
    ? window.devToolsExtension()
      : f => f
),
store = createStore( reducers, enhancers ),
app = document.getElementById( 'root' );
if( app ){

ReactDOM.render(
  <Provider store={ store }>
    <App />
    </Provider>,
  app
);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
