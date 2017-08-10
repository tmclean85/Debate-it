import React from 'react';
import { ListItem } from 'material-ui/List';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import Gravatar from 'react-gravatar';

const Attendees = ({userData, voteData, icon}) => (
  <ListItem
    primaryText={userData.profile.name}
    leftAvatar={<Gravatar email={userData.emails[0].address} />}
    rightIcon={icon}
  />
);

export default Attendees;

