import React from 'react';
import { Meteor } from 'meteor/meteor';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Gravatar from 'react-gravatar';
import {List, ListItem} from 'material-ui/List';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Close from 'material-ui/svg-icons/navigation/close';
import Check from 'material-ui/svg-icons/navigation/check';
import Star from 'material-ui/svg-icons/toggle/star';


import './styles.css';

const Profile = ({ userLogged, edit, handleEdit, handleSubmit }) => {

  const updateUser = () => {console.log('updateUser')};
  console.log('edit', edit)

  btEditStyle = {  display: edit ? 'none' : 'inline-block' };
  btSubmitStyle = {  display: edit ? 'inline-block' : 'none' };

  return (
    <div className="profile-page"> 
      <div className="profile-wrapper">
        <Card>
          <div className="profile-button">
            <RaisedButton
            style={btEditStyle}
              primary 
              type="button"
              onClick={() => { handleEdit() }}           
              label="Edit"
            />
          <RaisedButton
            style={btSubmitStyle}
              primary 
              type="button"
              onClick={() => { handleSubmit() }}           
              label="Submit"
            />
          </div>
          <form onSubmit={updateUser} autoComplete="off">
            <Gravatar size={100} email={userLogged.emails[0].address} />
            <div className="profile-score">
            <List>
              <ListItem disabled={true} primaryText="Wins" secondaryText={userLogged.profile.wins || '0'} leftIcon={<Check />} />
              <ListItem disabled={true} primaryText="Losses" secondaryText={userLogged.profile.losses || '0'} leftIcon={<Close />} />
              {/*<ListItem disabled={true} primaryText="Good Points" secondaryText="12" leftIcon={<Star />} />*/}         
            </List>  
            </div>
            <div className="profile-main-box">
              <p>{userLogged.emails[0].address}</p>
              <TextField
                label="name"
                floatingLabelText="Name"
                floatingLabelFixed={false}
                disabled={!edit}
                defaultValue={userLogged.profile.name}
                fullWidth={true}
                />
            </div>
            <div className="profile-bio-box">
              <TextField
                  label="bio"
                  floatingLabelText="Bio"
                  floatingLabelFixed={true}
                  multiLine={true}
                  rows={3}
                  rowsMax={4}
                  disabled={!edit}
                  defaultValue={userLogged.profile.bio}
                />
                {/* <CardText>
                  <p>{userLogged.profile.bio}</p>
                </CardText> */}
              </div>
            </form>
        </Card>
      </div>
    </div>
  )
}

export default Profile;