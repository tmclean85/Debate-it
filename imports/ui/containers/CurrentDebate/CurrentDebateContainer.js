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
import Loader from '../../components/Loader';
import { changeTab } from '../../../redux/modules/debates';
import './styles';

class CurrentDebateContainer extends Component {

  render() {
    const users = this.props.users;
    const debate = this.props.debates[0];

    if (!debate) return <Loader />;
    return (
      <div className="current-debate-wrapper">
        <Tabs
          value={this.props.tabValue}
          onChange={(value) => this.props.dispatch(changeTab(value))}
        >
          <Tab label="DETAILS" value="a">
            <div>
              <DebateDetails debateData={debate} />
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


const currentDebateContainer = createContainer(( params ) => {
  Meteor.subscribe('debates');
  Meteor.subscribe('users');
  Meteor.subscribe('userAtDebate');
  Meteor.subscribe('organizations');

  return {
    debates: Debates.find({ _id: params.match.params.id }).fetch(),
    users: Meteor.users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, CurrentDebateContainer);

export default connect(mapStateFromProps)(currentDebateContainer);