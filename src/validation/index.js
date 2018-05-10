import {SubmissionError} from "redux-form";

export const required = value => value ? undefined : 'Value is required';

export const minLength = value => value.length < 4 ? 'Value must be at least 4 characters' : undefined;

export const maxLength = value => value.length >= 10 ? 'Value must be less than 10 characters' : undefined;

export const matchesPassword = (value, allValues) => value === allValues.password ? undefined : 'Password does not match!';

export const asyncValidate = values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  return sleep(1000).then(() => {
    if (['kent', 'andy', 'john', 'joel'].includes(values.username)) {
      return Promise.reject({
        username: 'Username already taken'
      });
    }
  });
};
