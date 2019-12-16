import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import LogInForm from './LogInForm';

//make functional component
class LogInPage extends React.Component{
  render(){
    return <div><LogInForm signIn={this.props.signIn}/></div>
  }
};

export default connect(null, { signIn })(LogInPage);
