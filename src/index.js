import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import NSApp from "./NSApp";
import {Feed} from "./feed/Feed";
import {Login} from "./login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {EntityExplorer} from "./entityExplorer/EntityExplorer";

ReactDOM.render(
    <BrowserRouter>
        <Route exact path="/" component={NSApp}/>
        <Route path="/feed" component={Feed}/>
        <Route path="/login" component={Login}/>
        <Route path="/entities/:entityType" component={EntityExplorer}/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
