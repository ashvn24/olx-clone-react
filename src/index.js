import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebaseContext } from "./Store/Firebasecontext";
import firebase from './Firebase/config'

ReactDOM.render(
    <firebaseContext.Provider value={{firebase}}>

    <App />
    </firebaseContext.Provider>
,document.getElementById('root'));
