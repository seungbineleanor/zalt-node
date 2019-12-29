import React from 'react';
import SettingsForm from './SettingsForm';
import { connect } from 'react-redux';
import { updateSettings } from '../../actions'

class SettingsPage extends React.Component {
  render () {
    return (
      <div>
        <h2 className="ui centered grid">My Settings</h2>
        <SettingsForm userObject = { this.props.userObject } updateSettings = {this.props.updateSettings}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userObject : state.auth.userInfo.user }
};

export default connect(mapStateToProps, { updateSettings })(SettingsPage);
