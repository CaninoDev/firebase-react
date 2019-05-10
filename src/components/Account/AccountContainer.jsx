import React from 'react';

import PasswordForget from '../PasswordForget';
import PasswordChange from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';



const AccountContainer = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <React.Fragment>
                <h1>Account: {authUser.email}</h1>
                <PasswordForget />
                <PasswordChange />
            </React.Fragment>)}
    </AuthUserContext.Consumer>
)

const condition = (authUser) => !!authUser;
const Account = AccountContainer;

export default withAuthorization(condition)(Account);