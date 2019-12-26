import React from 'react';
import { connect } from 'react-redux';
import { getFormSubmissions, getFormSubmissionsDetail } from '../../actions';
import { Header, Modal } from 'semantic-ui-react';

class FormSubmissionsContainer extends React.Component {

  componentDidMount(){
    this.props.getFormSubmissions();
    console.log("?");
  }

  render(){
    const submissions = this.props.formSubmissions.map((submission) => {
      return (
        <div key={submission._id} className="ui card">
          <div className="content">
            <div key={submission._id}>
              <Modal trigger={<a className="date">{submission.form_name}</a>}>
                <Modal.Header>{ submission.location_name } > { submission.form_name }</Modal.Header>
                <Modal.Content>
                  hi
                </Modal.Content>
              </Modal>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>{ submissions }</div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    formSubmissions : state.submissions.submissions,
    // formSubmissionsDetails : state.submissions.submissionsInfo[submission_id]
  };
};

//connects a React component to the redux store
export default connect(mapStateToProps, { getFormSubmissions, getFormSubmissionsDetail })(FormSubmissionsContainer);
