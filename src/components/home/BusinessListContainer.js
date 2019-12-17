import React from 'react';
import BusinessList from './BusinessList';
import BusinessSearchBar from './BusinessSearchBar';


class BusinessListContainer extends React.Component {
  render(){
    return (
      <div>
        <BusinessSearchBar/>
        <BusinessList/>
      </div>
    );
  };
};

export default BusinessListContainer;
