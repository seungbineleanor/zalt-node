import React from 'react';
import FormSubmissionsContainer from './../history/FormSubmissionsContainer';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class SuccessPage extends React.Component {

  onButtonClick = () => {
    console.log("here");
    //react router redirect programmatically
    this.props.history.push(`/history`);
  }

  render(){
    return (
      <div>
        <p> Your Form Submission Was Successful! </p>
        <Button primary onClick={this.onButtonClick}>Go To History</Button>
      </div>
    );
  }
}

export default SuccessPage;
