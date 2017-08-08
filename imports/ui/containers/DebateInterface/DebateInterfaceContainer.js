import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import DebateAttendees from '../CurrentDebate/DebateAttendees';
        
import './styles.css';


class DebateInterfaceContainer extends Component {
    state = {
    value: null,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
     const { users } = this.props;


    return (
    <div className="debate-interface-page">
      <div className="debate-interface-wrapper">
        <Card className="debate-interface-card" >
          <div className="debate-interface-header">
            <h1 className="interface-title">Debate title goes here</h1>
            <SelectField
              floatingLabelText="My Vote"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={null} primaryText="" />
              <MenuItem value={false} primaryText="No" />
              <MenuItem value={true} primaryText="Yes" />
            </SelectField>     
          </div>    
          <div className="interface-attendees-box">
            {users.map(user =>
              (<DebateAttendees 
                userData={user} 
                key={user._id}
              />)
            )}            
          </div>  
          {/* <Avatar size={60} src="" /> */}
        </Card>  
      </div>      
    </div>  
    )
  }
}

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
}, DebateInterfaceContainer);