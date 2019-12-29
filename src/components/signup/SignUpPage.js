import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { signUp } from '../../actions'

//make functional component
class SignUpPage extends React.Component {
  render(){
    return (
      <div>
        <h2 className="ui centered padded grid"> Welcome to Zalt.</h2>
        <SignUpForm signUp = { this.props.signUp }/>
      </div>
    );
  }
}

export default connect(null, { signUp })(SignUpPage);
