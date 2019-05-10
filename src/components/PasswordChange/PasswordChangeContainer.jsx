import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from "../Firebase";
import * as ROUTES from '../../constants/routes';

import PasswordChangeComponent from './PasswordChangeComponent';

const INITIAL_STATE = {
  password: '',
  passwordConfirm: '',
  error: null,
};

class PasswordChangeContainer extends Component {
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
    const { password } = this.state;
    const { firebase } = this.props;

    firebase
       .doPasswordReset(password)
       .then(() => {
         this.setState({...INITIAL_STATE});
       })
       .catch(error => {
         this.setState = ({ error });
       });

    event.preventDefault();
  };

  render() {
    const { password, passwordConfirm } = this.state;
    const isInvalid = password !== passwordConfirm || password === '';

    return (
       <React.Fragment>
         <PasswordChangeComponent onChange={this.onChange} onSubmit={this.onSubmit} isInvalid={isInvalid} account={this.state} />
       </React.Fragment>
    )
  }
}

const PasswordChange = withFirebase(PasswordChangeContainer);

export default PasswordChange;