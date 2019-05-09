import React, { Component } from 'react';
import { Link } from "react-router-dom";

import * as ROUTES from '../../constants/routes';

import SignUpComponent from './SignUpComponent';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = (event) => {

  }

  onChange = (event) => {

  }

  render() {
    return (
       <React.Fragment>
         <SignUpComponent onSubmit={this.onSubmit} onChange={this.onChange} />
       </React.Fragment>
    )
  }
}