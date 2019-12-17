import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import LogInForm from './LogInForm';
import { Redirect } from 'react-router-dom';

//make functional component
class LogInPage extends React.Component{
  render(){
    if(this.props.isSignedIn){
      return <Redirect to="/"/>
    }
    return <div><LogInForm signIn={this.props.signIn}/></div>
  }

};

//state object from redux store
const mapStateToProps = (state) => {
  return { isSignedIn : state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signIn })(LogInPage);
