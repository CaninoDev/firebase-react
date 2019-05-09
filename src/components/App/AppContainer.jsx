import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import { withFirebase } from '../Firebase';

import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import Home from '../Home';
import Account from '../Account';
import Admin from '../Admin';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser 
            ? this.setState({authUser}) 
            : this.setState({ authUser: null });
        });
    }

    componentWillUnmount() {
        this.listener();
    }

    render () {
        return (
        <Router>
            <Navigation authUser={this.state.authUser} />

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

export default withFirebase(App);