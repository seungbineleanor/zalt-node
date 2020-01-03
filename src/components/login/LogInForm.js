import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LogInForm extends React.Component {

  renderError({ error, touched }){//extract error and touched from meta
      if(touched && error){
        return (
          <div className="ui error message">
            <div className="header">{error}</div>
          </div>
        );
      }
  }

  renderInput = ({ input, label, meta, type }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type={type} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.signIn(formValues.email,formValues.password)
  }

  render(){
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="email" type="email" component={this.renderInput} label="Email"/>
        <Field name="password" type="password" component={this.renderInput} label="Password"/>
        <button className="ui button primary">LogIn</button>
      </form>
    );
  }
}

//formValues contain all different values in the form
const validate = (formValues) => {
  const errors = {};
  if (!formValues.email){
    //only run if user did not enter a title
    errors.email = "Please enter your email address.";
  }

  if (!formValues.password){
    errors.password = "You must enter your password.";
  }
  return errors;
}

//wire validate up to our component
export default reduxForm({
  form:'LogInForm',
  validate
})(LogInForm);
