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
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
                <Route path={ROUTES.SIGN_IN} component={SignIn} />
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
                <Route path={ROUTES.ACCOUNT} component={Account} />
                <Route path={ROUTES.ADMIN} component={Admin} />
                <Route path={ROUTES.HOME} component={Home} />
            </Router>
        )
    }
};

export default withAuthentication(App);