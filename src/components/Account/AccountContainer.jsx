import React from 'react';

import PasswordForget from '../PasswordForget';
import PasswordChange from '../PasswordChange';

const AccountContainer = () => (
    <React.Fragment>
        <PasswordForget />
        <PasswordChange />
    </React.Fragment>
)

const Account = AccountContainer;

export default Account;