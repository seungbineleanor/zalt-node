import React from 'react';
import { Field, reduxForm } from 'redux-form';
import MenuForm from './MenuForm'
import axios from 'axios';
import SuccessPage from './SuccessPage';

class FormFiller extends React.Component {

  //destructure out error and touched from meta object
  renderError({ error, touched }){
    if (touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  }

  //normally, onSubmit would be called with an event object,
  //but when using redux-form, it will be called with what values
  //existed inside our field inputs

  onSubmit = (formValues) => {
    //react router redirect programmatically
    this.props.history.push(`/success`);
  }
  // onSubmit = async (formValues) => {
  //   const result = {
  //     "form_id": this.props.formObject._id,
  //     "submission_input":formValues
  //   }
  //   console.log(result)
  //
  //   const config = {
  //     headers:{
  //       "Zalt-Auth": this.props.authToken
  //     }
  //   }
  //
  //   const postResponse = await axios.post(
  //     "https://zalt.app/api/v1/form_submissions",
  //      result,
  //      config
  //   )
  //
  //   console.log(postResponse.data)
  // }

  render(){
    if (this.props.formObject.is_menu){
      return (
        <div><MenuForm formObject = { this.props.formObject }/></div>
      );
    }
    //regular form
    const sections = this.props.formObject.form_sections.map((section) => {
      const entries = section.form_entries.map((entry) => {
        return (
          <Field key = {entry._id}
            name={entry._id}
            component={this.renderInput}
            label= {`Enter ${entry.display_name}`}
            type="text"
          />
        );
      })

      return (
        <div key = {section._id}>
          <div>{ section.name }</div>
          <p>{ section.description }</p>
          <div>{ entries }</div>
        </div>
      );
    })

    return (
      //call handleSubmit callback function with our callback method
      //having className error will allow us to display the error
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          {sections}
          <br></br>
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

//the formValues object contain all different values that exist inside our form
const validate = (formValues, props) => {
  const requiredEntry = [];
  const sections = props.formObject.form_sections.map((section) => {
    const entries = section.form_entries.map((entry) => {
      if(entry.is_required){
        requiredEntry.push(entry._id)
      }
    })
  })
  //return object of key-values for errors
  const errors = {};
  for(var i = 0; i < requiredEntry.length; i++){
    if(!formValues[requiredEntry[i]]){
      errors[requiredEntry[i]] = "You must enter a " + requiredEntry[i]
    }
  }
  return errors;
}

//hook up reduxForm
//reduxForm returns a function and we call that function
//with FormFillerContainer
export default reduxForm({
  form : 'formFiller',
  validate : validate
})(FormFiller);
