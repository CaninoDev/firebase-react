import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import SignInComponent from './SignInComponent';

import { SignUpLink } from "../SignUp";
import { withFirebase } from "../Firebase";
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    const { email, password } = this.state;
    const { firebase, history } = this.props;

    firebase
       .doSignInWithEmailAndPassword(email, password)
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
    const { email, password } = this.state;
    const isInvalid = password === '' || email === '';

    return (
       <React.Fragment>
         <SignInComponent onChange={this.onChange} onSubmit={this.onSubmit} isInvalid={isInvalid} account={this.state} />
         <SignUpLink />
       </React.Fragment>
    )
  }
}

const SignIn = compose(
   withRouter,
   withFirebase,
)(SignInContainer);

export default SignIn;