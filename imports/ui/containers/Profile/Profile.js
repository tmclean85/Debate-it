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
        <Avatar size={100} src="" />
        <CardHeader
          title="Trevor McLean"
          subtitle="Politics, Technology, Travel"
        />
      </div>
      <div className="profile-meta-box">
        <List>
          <ListItem primaryText="Wins" secondaryText="3" leftIcon={<Check />} />
          <ListItem primaryText="Losses" secondaryText="5" leftIcon={<Close />} />
          <ListItem primaryText="Good Points" secondaryText="12" leftIcon={<Star />} />          
        </List>  
      </div>
        <div className="profile-bio-box">
          <CardText>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardText>  
        </div>    
    </Card>  
  </div>  
  )
}

export default Profile;