import React from 'react';
import { connect } from 'react-redux';
import BusinessListContainer from './BusinessListContainer'

//class based component
class HomePage extends React.Component {
  render(){
    if (this.props.isSignedIn){
      return <div><BusinessListContainer/></div>
    }
    return <div>Welcome To the Zalt Home Page</div>
  }
}

//state object from redux store
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps)(HomePage);
