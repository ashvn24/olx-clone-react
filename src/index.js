import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebaseContext } from "./Store/Firebasecontext";
import firebase from './Firebase/config'
import Context from "./Store/Firebasecontext";

ReactDOM.render(
    <firebaseContext.Provider value={{firebase}}>
        <Context>
        <App />
        </Context>
    </firebaseContext.Provider>
,document.getElementById('root'));
