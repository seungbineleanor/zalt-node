import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn, signOut } from '../actions';

//class-based component
class Header extends React.Component {

  onSignOutClick = () => {
     this.props.signOut();
   };

  loggedOutHeader(){
    return (
      <div className="ui secondary pointing menu">
        <Link to = "/" className="item">
          Zalt
        </Link>
        <div className="right menu">
          <Link to = "/signup" className="item">
            Sign Up
          </Link>
          <Link to = "/login" className="item">
            Log In
          </Link>
        </div>
      </div>
    );
  }

  loggedInHeader(){
    return (
      <div className="ui secondary pointing menu">
        <Link to = "/" className="item">
          Zalt
        </Link>
        <div className="right menu">
          <Link to = "/" className="item">
            History
          </Link>
          <Link to = "/settings" className="item">
            Settings
          </Link>
          <a onClick={this.onSignOutClick} className="item">
            Log Out
          </a>
        </div>
      </div>
    );
  }

  render (){
    if(this.props.isSignedIn){
      return this.loggedInHeader()
    }
    return this.loggedOutHeader()
  }
}

//state object from redux store
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signIn, signOut })(Header);
