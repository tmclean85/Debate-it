import React from 'react';
import { ListItem } from 'material-ui/List';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import Avatar from 'material-ui/Avatar';

const DebateAttendees = ({ userData, voteData, icon }) => (
    <ListItem
        primaryText={userData.profile.name}
        // TODO: Access user-specific because values
        secondaryText={voteData[0].because}
        leftAvatar={<Avatar src="" />}
        rightIcon={icon}
    />
);

export default DebateAttendees;