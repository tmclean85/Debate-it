import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
//import DebateDetails from './DebateDetails';
import DebateAttendees from './DebateAttendees';
import { createContainer } from 'meteor/react-meteor-data';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import './styles';

class CurrentDebateContainer extends Component {
  
  render() {
    return (
      <div className="current-debate-wrapper">
        <Tabs
          value={"b"}
          //onChange={this.handleChange}
        >
          <Tab label="DETAILS" value="a">
            <div>
              {/* <DebateDetails /> */}
            </div>
          </Tab>
          <Tab label="ATTENDEES" value="b">
              <List>
                <Subheader>People in Attendance</Subheader>
                {/* mapping function goes here */}
                <ListItem
                  primaryText="Brendan Lim"
                  leftAvatar={<Avatar src="" />}
                  rightIcon={<ToggleCheckBox />}
                />
              </List>
              <List>
                <Subheader>People Enroute</Subheader>
                <ListItem
                  primaryText="Brendan Dim"
                  leftAvatar={<Avatar src="" />}
                  rightIcon={<ToggleCheckBoxOutlineBlank />}
                />
              {/* <DebateAttendees /> */}
            </List>
          </Tab>
        </Tabs>
      </div>
    );
  }
};


export default createContainer(() => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');
  Meteor.subscribe('organizations');
  
  return {
    debates: Debates.find().fetch(),
    users: Users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, CurrentDebateContainer);

