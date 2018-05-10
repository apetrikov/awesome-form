import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';

class RegisterFromContainer extends Component {
  submit = values => alert(JSON.stringify(values, null, 4));
  render() {
    return <RegisterForm onSubmit={this.submit} />;
  }
}

export default RegisterFromContainer;
