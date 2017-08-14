import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Form } from 'neoform';
import RaisedButton from 'material-ui/RaisedButton';
import TextInput from '../DebateCreate/FormComponents/TextInput';
import Gravatar from 'react-gravatar';
import {List, ListItem} from 'material-ui/List';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Close from 'material-ui/svg-icons/navigation/close';
import Check from 'material-ui/svg-icons/navigation/check';
import Star from 'material-ui/svg-icons/toggle/star';


import './styles.css';

const Profile = ({ userLogged, edit, handleEdit, onSubmit }) => {

  const updateUser = () => {console.log('updateUser')};

  btEditStyle = {  display: edit ? 'none' : 'inline-block' };
  btSubmitStyle = {  display: edit ? 'inline-block' : 'none' };

  return (
    <div className="profile-page"> 
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
            type="submit"
            onTouchTap={() => onSubmit()}       
            label="Submit"
          />
        </div>
        <form autoComplete="off">
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
            <TextInput
              name="form.name"
              label="name"
              floatingLabelText="Name"
              floatingLabelFixed={true}
              multiLine={true}
              rows={3}
              rowsMax={4}
              disabled={!edit}
              defaultValue={userLogged.profile.name}
              />
          </div>
          <div className="profile-bio-box">
            <TextInput
                name="form.bio"
                label="bio"
                floatingLabelText="Bio"
                floatingLabelFixed={true}
                multiLine={true}
                rows={3}
                rowsMax={4}
                disabled={!edit}
                defaultValue={userLogged.profile.bio}
              />
            </div>
          </form>
      </Card>
    </div>
  )
}

export default (Form(Profile));