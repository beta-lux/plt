import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.scss';
import {PATH_SQLI, PATH_XSS, PATH_LOGIN, PATH_REGISTER, PATH_SHOP, PATH_ITEM, PATH_DASHBOARD} from "./env/path";
import Sqli from "./content/challenge/sqli";
import Xss from "./content/challenge/xss";
import Login from "./content/login";
import Register from "./content/register";
import Shop from "./content/shop/shop";
import Item from "./content/shop/item";
import Dashboard from "./content/Dashboard";
import Navigation from "./component/Navigation";

interface AppProps {

}

interface AppStates {

}

class App extends React.Component<AppProps, AppStates> {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation />
                    <Switch>
                        <Route exact path={PATH_LOGIN}>
                            <Login />
                        </Route>
                        <Route exact path={PATH_SQLI}>
                            <Sqli />
                        </Route>
                        <Route exact path={PATH_XSS}>
                            <Xss />
                        </Route>
                        <Route exact path={PATH_REGISTER}>
                            <Register />
                        </Route>
                        <Route exact path={PATH_SHOP}>
                            <Shop />
                        </Route>
                        <Route exact path={PATH_ITEM}>
                            <Item />
                        </Route>
                        <Route exact path={PATH_DASHBOARD}>
                            <Dashboard />
                        </Route>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
