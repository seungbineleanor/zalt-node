import React from 'react';
import { connect } from 'react-redux';
import { getSharedForms } from '../../actions';

class SharedPage extends React.Component {

  componentDidMount(){
    this.props.getSharedForms();
  }

  render(){
    return (
      <div>
        { this.props.sharedSubmissions }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { sharedSubmissions : state.submissions.sharedSubmissions }
};

export default connect(mapStateToProps, { getSharedForms })(SharedPage);
