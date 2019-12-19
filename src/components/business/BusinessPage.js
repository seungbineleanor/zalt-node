import React from 'react';
import FormSelectorContainer from './FormSelectorContainer';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { getBusinessInfo } from '../../actions';


class BusinessPage extends React.Component {
  //user use params hook from react-router-dom to get business_id

  componentDidMount(){
    const business_id = this.props.match.params.business_id;
    this.props.getBusinessInfo(business_id);
  }

  render() {
    const business_id = this.props.match.params.business_id;
    if ( this.props.business == undefined ) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div className="ui container">
        <h2 className="ui center aligned header" style={{marginTop:'20px', marginBottom:'20px'}}>
          {this.props.business.name}
        </h2>
        <FormSelectorContainer business_id={ business_id } />
      </div>
    );
  }
}

//state object from redux store
const mapStateToProps = (state, props) => {
  //obtain url from props
  const business_id = props.match.params.business_id;
  //obtain corresponding business Object from redux store
  return { business : state.businesses.businessInfo[business_id] }
};

export default connect(mapStateToProps, { getBusinessInfo })(BusinessPage);
