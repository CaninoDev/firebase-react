import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import SignUpComponent from './SignUpComponent';
import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
  isPatient: true,
  isPhysician: false, // Placeholder
  isAdmin: false, // Placeholder
  error: null,
};

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
  }

  onSubmit = (event) => {
    const { username, email, password, isPatient, isPhysician, isAdmin } = this.state;
    const { firebase } = this.props;
    
    const roles = {};

    if (isPatient) {
      roles[ROLES.PATIENT] = ROLES.PATIENT;
    } else if (isPhysician) {
      roles[ROLES.PHYSICIAN] = ROLES.PHYSICIAN;
    } else if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    };

    firebase
       .doCreateUserWithEmailAndPassword(email, password)
       .then(authUser => {
         // Create the user in Firebase db
         return firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            roles,
          },
          { merge: true }
          );
        })
        .then(() => {
         this.setState({...INITIAL_STATE});
         this.props.history.push(ROUTES.HOME);
        })
       .catch(error => {
         this.setState = ({ error: error });
       });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const { password, passwordConfirm, email, username, isAdmin, isPhysician, isPatient } = this.state;
    const isInvalid = password !== passwordConfirm ||
       password === '' ||
       email === '' ||
       username === '';

    return (
       <React.Fragment>
         <SignUpComponent 
          isInvalid={isInvalid}
          isAdmin={isAdmin}
          isPhysician={isPhysician}
          isPatient={isPatient}
          onSubmit={this.onSubmit} 
          onChange={this.onChange} 
          onChangeCheckbox={this.onChangeCheckbox} 
          account={this.state} 
         />
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