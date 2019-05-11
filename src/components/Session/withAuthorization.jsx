import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

/* The firebase listener, onAuthStateChanged, triggers a callback function every time the
authenticated user changes. authUser is either an object or null; within the function, the
passed condition() function is executed with the authUser. If authorization fails
(authUser is null), the user is redirected to the signin page. 
If it doesn't, the the higher order component does nothing. 
While Firebase has internal functions for manipulating the authentication table, however, 
it would further lock this app in with using Firebase. Should we decide to decouple from 
Firebase and migrate to another database, it is prudent to merge the authentication table
with Firebase's database.
*/
const withAuthorization = (condition) => (Component) => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            const { firebase, history } = this.props;

            this.listener = firebase.auth.onAuthUserListener(
                (authUser) => {
                    if (!condition(authUser)) {
                        history.push(ROUTES.SIGN_IN)
                    }
                },
                () => {
                    history.push(ROUTES.SIGN_IN);
                }
            );
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