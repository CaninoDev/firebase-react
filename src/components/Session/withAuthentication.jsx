import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = (Component) => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
            };        
        }

        componentDidMount () {
            const { firebase } = this.props;

            this.listener = firebase.auth.onAuthStateChanged(
                authUser => {
                    if (authUser) {
                        firebase
                        .user(authUser.uid)
                        .once('value')
                        .then((snapshot) => {
                            const dbUser = snapshot.val();

                            // default to null ROLES
                            if (!dbUser.roles) {
                                dbUser.roles = {};
                            }

                            // merge auth and dbuser
                            authUser = {
                                uid: authUser.uid,
                                email: authUser.email,
                                ...dbUser
                            };
                            this.setState({ authUser })
                        });
                    } else {
                        this.setState({ authUser: null });
                    }
                }
            );
        }

        componentWillUnmout () {
            this.lister();
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;

