import React from 'react';
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
  render(){
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={(props) => (
      this.props.isSignedIn
        ? <Component {...props} /> //renders component given to is as prop
        : <Redirect to='/login' />
    )} />
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn : state.auth.isSignedIn }
};

export default connect(mapStateToProps)(PrivateRoute);
