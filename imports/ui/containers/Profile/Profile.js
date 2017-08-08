import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Close from 'material-ui/svg-icons/navigation/close';
import Check from 'material-ui/svg-icons/navigation/check';
import Star from 'material-ui/svg-icons/toggle/star';


import './styles.css';

const Profile = () => {
  return (
  <div className="profile-wrapper">
    <Card>
      <div className="profile-main-box">      
        <Avatar src="" /> 
        <CardHeader
          title="User's Name"
          subtitle="User's Interests"
        />
      </div>   
      <div className="profile-meta-box">
        <List>
          <ListItem primaryText="Wins" leftIcon={<Check />} />
          <ListItem primaryText="Losses" leftIcon={<Close />} />
          <ListItem primaryText="Good Points" leftIcon={<Star />} />          
        </List>  
      </div>  
    </Card>  
  </div>  
  )
}

export default Profile;