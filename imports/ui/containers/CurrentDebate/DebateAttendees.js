import React from 'react';
import { ListItem } from 'material-ui/List';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import Avatar from 'material-ui/Avatar';

const DebateAttendees = ({ userData, icon }) => (
    <ListItem
        primaryText={userData.profile.name}
        leftAvatar={<Avatar src="" />}
        rightIcon={icon}
    />
);

export default DebateAttendees;