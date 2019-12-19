import React from 'react';
import BusinessList from './BusinessList';


class BusinessListContainer extends React.Component {
  render(){
    return (
      <div className="ui container">
        <h1 className="ui center aligned header" style = {{ marginTop: '10px' }}>
          ZALT
        </h1>
        <BusinessList/>
      </div>
    );
  }
}

export default BusinessListContainer;
