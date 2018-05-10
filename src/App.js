import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';

class RegisterFromContainer extends Component {
  submit = values => alert(JSON.stringify(values, null, 4));
  getInits = () => ({
    preference: 'spaces',
    newsletter: true,
    name: 'John Doe'
  });
  render() {
    return (
      <RegisterForm
        onSubmit={this.submit}
        initialValues={this.getInits()}
      />
    );
  }
}

export default RegisterFromContainer;
