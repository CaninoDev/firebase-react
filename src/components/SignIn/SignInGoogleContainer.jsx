import React, { Component } from 'react';

import { withFirebase  } from '../Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';
import SignInGoogleComponent from './SignInGoogleComponent';


class SignInGoogleContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (event) => {
        const { firebase, history } = this.props;

        firebase
            .doSignInWithGoogle()
            .then((authUser) => {
                return firebase
                    .user(authUser.user.uid)
                    .set({
                        username: authUser.user.displayName,
                        email: authUser.user.email,
                        roles: { PATIENT: 'PATIENT' },
                    },
                    { merge: true }
                    );
                })
            .then(() => {
                this.setState({ error: null });
                history.push(ROUTES.HOME);
            })
            .catch((error) => {
                this.setState({ 
                    error: error
                });
            });
        
        event.preventDefault();
    };

    render() {
        const { error } = this.state;

        return (
            <React.Fragment>
                <SignInGoogleComponent onSubmit={this.onSubmit} error={error} />
            </React.Fragment>

        )
    }

}

const SignInGoogle = compose(
    withRouter,
    withFirebase,
)(SignInGoogleContainer);

export default SignInGoogle;