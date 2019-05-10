import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

/* The firebase listener, onAuthStateChanged, triggers a callback function everytime the
authenticated user changes. authUser is either an object or null; within the function, the
passed condition() function is executed with the authUser. If authorization fails
(authUser is null), the user is redirected to the signin page. 
If it doesn't the the higher order component does nothing. */

const withAuthorization = (condition) => (Component) => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            const { firebase, history } = this.props;

            this.listener = firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        history.push(ROUTES.SIGN_IN)
                    }
                }
            )
        }

        componentWillUnmount() {
            this.listener();
        }
        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition(authUser) 
                        ? <Component {...this.props} />
                        : null}
                </AuthUserContext.Consumer>
            );
        }
    }
    return compose(
        withRouter,
        withFirebase,
    )(WithAuthorization)
};

export default withAuthorization;