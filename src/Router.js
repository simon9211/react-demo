/* eslint-disable */
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Home from './Home.jsx';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;