import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

//for firebase config
var firebaseConfig = {
    apiKey: "AIzaSyA7u2hPJh9-1Pp_KTegIUfRaVdqc5W3I-U",
    authDomain: "ticketp-28d99.firebaseapp.com",
    databaseURL: "https://ticketp-28d99.firebaseio.com",
    projectId: "ticketp-28d99",
    storageBucket: "ticketp-28d99.appspot.com",
    messagingSenderId: "12316730622",
    appId: "1:12316730622:web:f6ac7bb557eaba3c6db1af",
    measurementId: "G-CJD76C3VD6"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
