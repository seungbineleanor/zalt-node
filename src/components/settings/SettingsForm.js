import React from 'react';
import { Field, reduxForm , change } from 'redux-form';
import { connect } from 'react-redux';

class SettingsForm extends React.Component {

  onSubmit = (formValues) => {
    console.log(formValues);
    // this.props.updateSettings(formValues)
  }

  renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
      </div>
    );
  }

  render () {
    return(
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="first_name" component={this.renderInput} label="First Name"/>
        <Field name="last_name" component={this.renderInput} label="Last Name"/>
        <Field name="phone_number" component={this.renderInput} label="Phone Number"/>
        <Field name="address_line_1" component={this.renderInput} label="Address"/>
        <Field name="city" component={this.renderInput} label="City"/>
        <Field name="state" component={this.renderInput} label="State"/>
        <Field name="zip_code" component={this.renderInput} label="Zip Code"/>
        <Field name="email" component={this.renderInput} label="Email"/>
        <button className="ui button primary">Submit</button>
      </form>
    );

  }
}
// const mapStateToProps = (state, props) => ({
//   initialValues: state.
// })

export default reduxForm({
  form : 'SettingsForm'
})(SettingsForm);
