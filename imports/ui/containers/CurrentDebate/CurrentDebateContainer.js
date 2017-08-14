import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { List, ListItem } from 'material-ui/List';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import { Redirect } from 'react-router'
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

  handleJoinDebate(debateId, userId) {
    Meteor.call('userAtDebate.insert', {debateId, userId});
  }

  getDebate() {
    const debug = false;

    const users = this.props.users;
    let debate = this.props.debate;
    const userAtDebate = this.props.userAtDebate;
    if (debate && users && userAtDebate) {
      const yesUser = users.find(item => item._id === debate.yesUser_id);
      console.log('uesUser', yesUser)      
      debate.yesUser = { email: yesUser.emails[0].address, name: yesUser.profile.name };
      
      const noUser = users.find(item => item._id === debate.noUser_id);
      debate.noUser = { email: noUser.emails[0].address, name: noUser.profile.name };

      debate.userList = [];
      if (debug) console.log('starting attendees');
      userAtDebate.forEach(item => {
        if (debug) console.log('checking user',item);
        const usr = users.find(it => it._id === item.user_id);
        if (debug) console.log('he is', usr);
        debate.userList.push({
          _id: usr._id,
          email: usr.emails[0].address,
          name: usr.profile.name,
          attended: item.attended,
          vote: item.vote
        });
      })
    }
    if (debug) console.log(debate);
    return debate;
  }

  render() {

    const debate = this.getDebate();
    console.log(debate)

    if (!Meteor.userId()) {
      return <Redirect to="/login" />
    } else if (!debate) {
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
                  debate={debate || {}}
                  joinDebateSubmit={this.handleJoinDebate(debate.id, Meteor.userId())}
                />
              </div>
            </Tab>
            <Tab label="ATTENDEES" value="b">
              <List>
                <Subheader>People in Attendance</Subheader>
                {debate.userList.map(item =>
                  (item.attended) ?
                    (<DebateAttendees
                      user={item}
                      icon={<ToggleCheckBox />}
                      key={item._id}
                    />)
                    : null
                )}
              </List>
               <List>
                <Subheader>People Enroute</Subheader>
                {debate.userList.map(item =>
                  (!item.attended) ?
                    (<DebateAttendees
                      user={item}
                      icon={<ToggleCheckBoxOutlineBlank />}
                      key={item._id}
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
  debate = Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');

  return {
    users: Meteor.users.find().fetch(),
    debate: Debates.find({ _id: props.match.params.id }).fetch()[0],
    userAtDebate: UserAtDebate.find({ debate_id: props.match.params.id }).fetch()
  };
}, CurrentDebateContainer);

export default connect(mapStateFromProps)(currentDebateContainer);