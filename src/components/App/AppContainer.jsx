import React from 'react';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import Home from '../Home';
import Account from '../Account';
import Admin from '../Admin';

const App = () => (
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
);

export default App;