import React from 'react';
import { connect } from 'react-redux';

class FormGroupList extends React.Component {
  render(){
    const groups = this.props.business.form_groups.map((group) => {
        return (
          <div className="item" key={group._id}>
            <div className="content">
              <div className="header">{ group.name }</div>
                <div className="list">{ getForms(group.forms) }</div>
                //list of invisible popups
            </div>
          </div>
        );
    });

    return (
      <div className="ui relaxed divided list">{ groups }</div>
    );
  }
}
//returning array of jsx tags
const getForms = (forms) => {
  const forms2 = forms.map((form) => {
    return (
      <a className="description" key={form._id}>{ form.name }</a>
    );
  });

  return forms2
}

//state object from redux store
//lets props to be accessible to mapStateToProps
const mapStateToProps = (state, props) => {
  return { business : state.businesses.businessInfo[props.business_id] }
}

export default connect(mapStateToProps)(FormGroupList);
