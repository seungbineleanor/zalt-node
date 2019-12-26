import React from 'react';
import { connect } from 'react-redux';
import FormFiller from './FormFiller';

class FormFillerContainer extends React.Component {
  render(){
    return (
      <div>
        <FormFiller
          formObject = { this.props.formObject }
          authToken = { this.props.authToken }
          history = { this.props.history }
        />
      </div>
    );
  }
}

//state object from redux store
const mapStateToProps = (state, props) => {
  const form_id = props.form_id;
  return { formObject : state.businessForm[form_id], authToken: state.auth.userInfo.auth.content }
}

export default connect(mapStateToProps)(FormFillerContainer);
