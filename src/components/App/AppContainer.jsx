import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


import { withAuthentication } from '../Session';


import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import Home from '../Home';
import Account from '../Account';
import Admin from '../Admin';

class App extends Component {
    render () {
        return (
            <Router>
                <Navigation />
                <hr />
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
                <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
                <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
                <Route exact path={ROUTES.ACCOUNT} component={Account} />
                <Route exact path={ROUTES.ADMIN} component={Admin} />
                <Route exact path={ROUTES.HOME} component={Home} />
            </Router>
        )
    }
};

export default withAuthentication(App);