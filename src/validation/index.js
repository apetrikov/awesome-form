export const validate = values => {
  const errors = {};

  if (!values.firstname){
    errors.firstname = 'First name is required!';
  }

  if (!values.surname){
    errors.surname = 'Surname is required!';
  }

  if (!values.username){
    errors.username = 'Username is required!';
  }else if (values.username.length < 4){
    errors.username = 'Username must be at least 3 characters long!';
  }else if (values.username.length >= 8){
    errors.username = 'Username must be less than 8 characters long!';
  }

  return errors;
};
