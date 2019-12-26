import React from 'react';
import { Field, reduxForm } from 'redux-form';

class MenuForm extends React.Component {
  render(){
    return (
      <div>menu</div>
    );
  }
}

//hook up reduxForm
//reduxForm returns a function and we call that function
//with FormFillerContainer
export default reduxForm({
  form : 'MenuForm'
})(MenuForm);
