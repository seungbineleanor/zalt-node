import React from 'react';
import { connect } from 'react-redux';
import { Button, Header, Modal, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class FormGroupList extends React.Component {
  render(){
    const groups = this.props.business.form_groups.map((group) => {
        return (
          <div className="item" key={group._id}>
            <div className="content">
              <div className="header">{ group.name }</div>
                <div className="list">{ getForms(group.forms, this.props.business._id) }</div>
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
const getForms = (forms, business_id) => {
  const forms2 = forms.map((form) => {
    return (
      <div key={form._id}>
        <Modal trigger={<a className="description">{ form.name }</a>}>
          <Modal.Header>{ form.name }</Modal.Header>
          <Modal.Content>
            <h3>Requires Payment?</h3>
            <p>{ form.requires_payment ? 'Yes' : 'No' }</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green'>
              <Icon name='right chevron' /> <Link to = {`/b/${business_id}/${form._id}`} className="header">Go To Form</Link>
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
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
