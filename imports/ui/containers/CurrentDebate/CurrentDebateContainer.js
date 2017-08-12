import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { List, ListItem } from 'material-ui/List';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import DebateDetails from './DebateDetails';
import DebateAttendees from './DebateAttendees';
import { createContainer } from 'meteor/react-meteor-data';
import {
  Organizations,
  Debates,
  UserAtDebate,
  Users
} from '../../../api/publications';
import Loader from '../../components/Loader';
import { changeTab, mapDebateInfoToState, loading } from '../../../redux/modules/debates';
import './styles';

class CurrentDebateContainer extends Component {


  joinDebateSubmit() {
    const debate_id = this.props.debates[0]._id;
    const user_id = this.props.currentUserId;

    Meteor.call('userAtDebate.insert', {
      user_id,
      debate_id
    });
  }

  componentDidMount() {
    Meteor.call('debates.getProfile', this.props.match.params.id, (error, result) => {
      if (error) {
        console.log('error', error);
        return;
      }
        console.log(result);
        this.props.dispatch(mapDebateInfoToState(result));
        this.props.dispatch(loading(false));
    })
  }

  render() {
    const users = this.props.users;
    const usersAtDebate = this.props.usersAtDebate;
    const debate = this.props.debates[0];
    const attendingUsers = this.props.attendingUsers;

    if (this.props.loading) {
      return <Loader />;
    } else {
      return (
        <div className="current-debate-wrapper">
          <Tabs
            value={this.props.tabValue}
            onChange={(value) => this.props.dispatch(changeTab(value))}
          >
            <Tab label="DETAILS" value="a">
              <div>
                <DebateDetails
                  debateData={debate}
                  yesUserData={this.props.debateInfo.yesUser}
                  noUserData={this.props.debateInfo.noUser}
                  joinDebateSubmit={this.joinDebateSubmit.bind(this)}
                />
              </div>
            </Tab>
            <Tab label="ATTENDEES" value="b">
              <List>
                <Subheader>People in Attendance</Subheader>
                {usersAtDebate.map(user =>
                  (user.attended) ?
                    (<DebateAttendees
                      //attendeeData={this.props.debateInfo.attedeeList}
                      icon={<ToggleCheckBox />}
                      key={user._id}
                    />)
                    : null
                )}
              </List>
              <List>
                <Subheader>People Enroute</Subheader>
                {usersAtDebate.map(user =>
                  (!user.attended) ?
                    (<DebateAttendees
                      userData={user}
                      icon={<ToggleCheckBoxOutlineBlank />}
                      key={user._id}
                    />) : null
                )}
              </List>
            </Tab>
          </Tabs>
        </div>
      );
    }
  }
};


function mapStateFromProps(state) {
  return {
    tabValue: state.debates.tabValue,
    debateInfo: state.debates.debateInfo,
    loading: state.debates.loading
  };
}


const currentDebateContainer = createContainer((props) => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');
  Meteor.subscribe('organizations');

  return {
    currentUserId: Meteor.userId(),
    debates: Debates.find({ _id: props.match.params.id }).fetch(),
    users: Meteor.users.find().fetch(),
    usersAtDebate: UserAtDebate.find({ debate_id: props.match.params.id }).fetch(), //change this to props match as above
    organizations: Organizations.find().fetch()
  };
}, CurrentDebateContainer);

export default connect(mapStateFromProps)(currentDebateContainer);