import React from 'react';

import PasswordForget from '../PasswordForget';
import PasswordChange from '../PasswordChange';
import { withAuthorization } from '../Session';


const AccountContainer = () => (
    <React.Fragment>
        <PasswordForget />
        <PasswordChange />
    </React.Fragment>
)

const condition = (authUser) => !!authUser;
const Account = AccountContainer;

export default withAuthorization(condition)(Account);