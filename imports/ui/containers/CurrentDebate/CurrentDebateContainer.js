import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem } from 'material-ui/List';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import DebateDetails from './DebateDetails';
import DebateAttendees from './DebateAttendees';
import { createContainer } from 'meteor/react-meteor-data';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import { changeTab } from '../../../redux/modules/debates';
import './styles';

class CurrentDebateContainer extends Component {
 


  render() {

     const { users } = this.props;

    return (
      <div className="current-debate-wrapper">
        <Tabs
          value={this.props.tabValue}
          onChange={this.changeTab}
        >
          <Tab label="DETAILS" value="a">
            <div>
              {/* <DebateDetails /> */}
              <DebateDetails />
            </div>
          </Tab>
          <Tab label="ATTENDEES" value="b">
              <List>
                <Subheader>People in Attendance</Subheader>
                 {users.map(user =>
                    (<DebateAttendees 
                      userData={user} 
                      icon={<ToggleCheckBox />} 
                      key={user._id}
                    />)
                  )}
              </List>
              <List>
                <Subheader>People Enroute</Subheader>
                {users.map(user =>
                    (<DebateAttendees 
                      userData={user} 
                      icon={<ToggleCheckBoxOutlineBlank />} 
                      key={user._id}
                    />)
                  )}
            </List>
          </Tab>
        </Tabs>
      </div>
    );
  }
};


function mapStateFromProps(state) {
    return {
      tabValue: state.debates.tabValue
    };
}

const currentDebateContainer = createContainer(() => {
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

export default connect(mapStateFromProps)(currentDebateContainer);