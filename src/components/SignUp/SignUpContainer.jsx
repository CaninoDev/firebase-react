import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { FirebaseContext } from '../Firebase';

import * as ROUTES from '../../constants/routes';

import SignUpComponent from './SignUpComponent';

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
         this.setState({...INITIAL_STATE})
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

const SignUp = () => (
   <React.Fragment>
     <h1>Sign Up</h1>
     <FirebaseContext.Consumer>
       {firebase => <SignUpContainer firebase={firebase} />}
     </FirebaseContext.Consumer>
   </React.Fragment>
);

export default SignUp;

export { SignUpLink };