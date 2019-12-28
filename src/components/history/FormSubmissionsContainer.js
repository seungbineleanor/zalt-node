import React from 'react';
import { connect } from 'react-redux';
import { getFormSubmissions } from '../../actions';
import { Header, Modal } from 'semantic-ui-react';
import FormSubmissionsDetails from './FormSubmissionsDetails';

class FormSubmissionsContainer extends React.Component {

  componentDidMount(){
    this.props.getFormSubmissions();
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
                  <FormSubmissionsDetails key = {submission._id} submission_id = { submission._id }/>
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
    formSubmissions : state.submissions.submissions
  };
};

//connects a React component to the redux store
export default connect(mapStateToProps, { getFormSubmissions })(FormSubmissionsContainer);
