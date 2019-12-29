import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SignUpForm extends React.Component{

  onSubmit = (formValues) => {
    console.log(formValues);
    const {
      first_name,
      last_name,
      email,
      password,
      password_confirmation
    } = formValues;
    this.props.signUp(email, password, password_confirmation, first_name, last_name)
  }

  renderError({ error, touched }){//extract error and touched from meta
      if(touched && error){
        return (
          <div className="ui error message">
            <div className="header">{error}</div>
          </div>
        );
      }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  render () {
    return(
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="first_name" component={this.renderInput} label="First Name"/>
        <Field name="last_name" component={this.renderInput} label="Last Name"/>
        <Field name="email" component={this.renderInput} label="Email"/>
        <Field name="password" component={this.renderInput} label="Password"/>
        <Field name="password_confirmation" component={this.renderInput} label="Confirm Password"/>
        <button className="ui button primary">Sign Up</button>
      </form>
    );

  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.first_name){
    errors.first_name = "Please enter first name";
  }
  if (!formValues.last_name){
    errors.last_name = "Please enter last name";
  }
  if (!formValues.email){
    errors.email = "Please enter email";
  }
  if (!formValues.password){
    errors.password = "Please enter password";
  }
  if (!formValues.password_confirmation){
    errors.password_confirmation = "Please confirm your password";
  }
  if (formValues.password_confirmation !== formValues.password){
    errors.password = "Password and password confirmation don't match";
    errors.password_confirmation = "Password and password confirmation don't match";
  }
  return errors;
}

export default reduxForm({
  form: "SignUpForm",
  validate
})(SignUpForm);
