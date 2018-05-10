import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput, customSelect} from "./fields";

class RegisterForm extends Component {
 render () {
   const { handleSubmit } = this.props;
   return(
     <form onSubmit={handleSubmit}>
         <Field
           name="name"
           component={customInput}
           type="text"
           label="Name"
         />
         <Field
           name="preference"
           component={customSelect}
           label="Preferred formatting"
         />
         <Field
           name="newsletter"
           component={customInput}
           type="checkbox"
           label="Sign up to newsletter?"
         />
       <button type="submit">Submit</button>
     </form>
   );
 }
}

export default reduxForm({
  form: 'register'
})(RegisterForm);
