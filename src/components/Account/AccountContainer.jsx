import React from 'react';

import PasswordForget from '../PasswordForget';
import PasswordChange from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';



const AccountContainer = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Account: {authUser.email}</h1>
                <PasswordForget />
                <PasswordChange />
            </div>)}
    </AuthUserContext.Consumer>
)

const condition = (authUser) => !!authUser;
const Account = withAuthorization(condition)(AccountContainer);

export default Account;