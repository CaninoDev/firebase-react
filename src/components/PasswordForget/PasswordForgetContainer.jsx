import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from "../Firebase";
import * as ROUTES from '../../constants/routes';

import PasswordForgetComponent from './PasswordForgetComponent';

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.onSubmit = this.onSubmit.bind(this);

    this.onChange = this.onChange.bind(this);

  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    const { email } = this.state;
    const { firebase, history } = this.props;

    firebase
       .doPasswordReset(email)
       .then(() => {
         this.setState({...INITIAL_STATE});
         history.push(ROUTES.HOME);
       })
       .catch(error => {
         this.setState = ({ error });
       });

    event.preventDefault();
  };

  render() {
    const { email } = this.state;
    const isInvalid = email === '';

    return (
       <React.Fragment>
         <PasswordForgetComponent onChange={this.onChange} onSubmit={this.onSubmit} isInvalid={isInvalid} account={this.state} />
       </React.Fragment>
    )
  }
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
)

const PasswordForget = withFirebase(PasswordForgetContainer);

export { PasswordForget, PasswordForgetLink };