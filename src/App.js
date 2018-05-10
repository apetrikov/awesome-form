import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import { SubmissionError } from 'redux-form';

class RegisterFromContainer extends Component {
  submit = values => {
    if(['John', 'Bob', 'Donald'].includes(values.username)) {
      throw new SubmissionError({
        username: 'Username already taken'
      });
    } else {
      alert(JSON.stringify(values, null, 4));
    }
  };

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
