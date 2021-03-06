import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import todoApp from './reducers'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp)

ReactDOM.render(
<Provider store={ store }>
  <App />
</Provider>,

document.getElementById('root'));
registerServiceWorker();
