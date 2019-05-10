import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';

import SignUpComponent from './SignUpComponent';
import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
  error: null,
};

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = (event) => {
    const { username, email, password } = this.state;
    const { firebase } = this.props;

    firebase
       .doCreateUserWithEmailAndPassword(email, password)
       .then(authUser => {
         // Create the user in Firebase db
         return firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
        })
        .then(() => {
         this.setState({...INITIAL_STATE});
         this.props.history.push(ROUTES.HOME);
        })
       .catch(error => {
         this.setState = ({ error });
       });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { password, passwordConfirm, email, username } = this.state;
    const isInvalid = password !== passwordConfirm ||
       password === '' ||
       email === '' ||
       username === '';

    return (
       <React.Fragment>
         <SignUpComponent isInvalid={isInvalid} onSubmit={this.onSubmit} onChange={this.onChange} account={this.state} />
       </React.Fragment>
    )
  }
}

const SignUpLink = () => (
   <p>
     Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
   </p>
);

const SignUp = compose(
   withRouter,
   withFirebase,
)(SignUpContainer);

export default SignUp;

export { SignUpLink };