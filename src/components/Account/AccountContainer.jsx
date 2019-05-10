import React from 'react';

import PasswordForget from '../PasswordForget';
import PasswordChange from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';



const AccountContainer = () => (
    <AuthUserContext.Consumer>
        <h1>Account: {authUser.email}</h1>
        <PasswordForget />
        <PasswordChange />
    </AuthUserContext.Consumer>

    </React.Fragment>
)

const condition = (authUser) => !!authUser;
const Account = AccountContainer;

export default withAuthorization(condition)(Account);