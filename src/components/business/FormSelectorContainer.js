import React from 'react';
import FormGroupList from './FormGroupList';

class FormSelectorContainer extends React.Component {
  render(){
    return (
      <div className="ui grid">
        <div className="five wide column"></div>
        <div className="six wide column"><FormGroupList business_id={this.props.business_id}/></div>
        <div className="five wide column"></div>
      </div>
    );
  }
}

export default FormSelectorContainer;
