import React from 'react';
// Importing Js
import ReactDOM from 'react-dom';
//Importing  ReactDom
import './index.css';
// Importing Css
import App from './App';
// Importing App Module
import * as serviceWorker from './serviceWorker';
// serviceWorker

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
