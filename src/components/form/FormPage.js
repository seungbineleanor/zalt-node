import React from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { getFormInfo } from '../../actions';
import FormFillerContainer from './FormFillerContainer';

class FormPage extends React.Component {

  componentDidMount(){
    const form_id = this.props.match.params.form_id;
    this.props.getFormInfo(form_id); //populate redux store
  }

  render(){
    const business_id = this.props.match.params.business_id;
    const form_id = this.props.match.params.form_id;
    if ( this.props.businessForm == undefined ) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div className="ui container">
        <h2 className="ui center aligned header" style={{marginTop:'20px', marginBottom:'20px'}}>
          {this.props.business.name} > {this.props.businessForm.name}
        </h2>
        <FormFillerContainer form_id={ form_id } history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const business_id = props.match.params.business_id;
  const form_id = props.match.params.form_id;
  return {
    businessForm : state.businessForm[form_id],
    business : state.businesses.businessInfo[business_id]
  };
};

//connects a React component to the redux store
export default connect(mapStateToProps, { getFormInfo })(FormPage);
