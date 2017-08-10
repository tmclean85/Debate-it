import { createContainer } from 'meteor/react-meteor-data';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import React, { Component } from 'react';
import { Organizations,
         Users,
         Debates,
         UserAtDebate  
} from '../../../api/publications';
import DebateAttendees from '../CurrentDebate/DebateAttendees';    

import './styles.css';

class DebatorScreenContainer extends Component {



  render() {

    const { users } = this.props;
    
    return (
      <div className="debator-page">
        <div className="debator-card">
          <div className="debator-main-box">
            <CardTitle
              className="debator-card-header"
              title="Currently up for debate:"
              subtitle="The debate topic will be appended here"
            />
          </div>
          <div className="check-in-box">
             {users.map(user =>
              (<DebateAttendees 
                userData={user} 
                icon={<ToggleCheckBoxOutlineBlank />}
                key={user._id}
              />)
            )} 
          </div>
          <div className="debator-good-points-box">
            <h1>Good Points earned this debate:</h1>
            <h1>13</h1>
          </div>  
        </div>  
      </div>  
    );
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
}, DebatorScreenContainer);