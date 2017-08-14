import React from 'react';
import { ListItem } from 'material-ui/List';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import Avatar from 'material-ui/Avatar';
import Gravatar from 'react-gravatar';

const DebateAttendees = ({ user, icon }) => (
    <div>
        <ListItem
            primaryText={user.name}
            leftAvatar={<Gravatar email={user.email} />}
            rightIcon={icon}
        />
    </div>
);

export default DebateAttendees;