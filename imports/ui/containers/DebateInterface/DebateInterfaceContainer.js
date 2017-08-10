import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
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
    const users = this.props.users;
    const vote = this.props.userAtDebate
    console.log(vote)
    return (
    <div className="debate-interface-page">
      <div className="debate-interface-wrapper">
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
              voteData={vote}
            />)
          )}           
        </div>  
        <div className="debate-meta">
          <div className="debate-meta-yes">
            <h1 className="vote-bold">Votes Yes:</h1>
            <p>11</p>
            <div className="good-point-yes">
              <Avatar size={60} src="" />
              <RaisedButton
                buttonStyle={{
                  height: '3.75rem',
                  width: '8rem'        
                }} 
                label="Good Point!"
              />
            </div>              
          </div>
          <div className="debate-meta-no">  
            <h1 className="vote-bold">Votes No:</h1>
            <p>14</p>
            <div className="good-point-no">
              <RaisedButton
                buttonStyle={{
                  height: '3.75rem',
                  width: '8rem'        
                }} 
                label="Good Point!"
              />            
              <Avatar size={60} src="" />              
            </div>                 
          </div>
        </div>    
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
    users: Meteor.users.find().fetch(),
    userAtDebate: UserAtDebate.find().fetch(),
    organizations: Organizations.find().fetch()
  };
}, DebateInterfaceContainer);