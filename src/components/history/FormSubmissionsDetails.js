import React from 'react';
import { connect } from 'react-redux';
import { getFormSubmissionsDetail } from '../../actions';
import Moment from 'react-moment';

class FormSubmissionsDetails extends React.Component {

  componentDidMount(){
    this.props.getFormSubmissionsDetail(this.props.submission_id);
  }

  render(){
    if(this.props.formSubmissionsDetails === undefined) {
      return <div>Loading...</div>
    }

    const details = this.props.formSubmissionsDetails;
    var sections = {};
    if(details.form_submission_sections !== undefined){
      sections = details.form_submission_sections.map((section) => {
        var entries = {};
        if (section.form_submission_entries !== undefined){
          entries = section.form_submission_entries.map((entry) => {
            return (
              <div key = { entry._id }>
                <div>{ entry._id }</div>
              </div>
            );
          });
        }
        return (
          <div key = {section._id} className="ui card">
            <div className="content">
              <div className="header">{ section.name } </div>
              <div className="list">{ section.form_submission_entries ? entries : "No Entries" }</div>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
        <div> Form Submitted : <Moment date = { details.created_at }/> </div>
        <div>{ details.form_submission_sections ? sections : "No Sections" }</div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    formSubmissionsDetails : state.submissions.submissionsInfo[props.submission_id]
  };
};

//connects a React component to the redux store
export default connect(mapStateToProps, { getFormSubmissionsDetail })(FormSubmissionsDetails);
