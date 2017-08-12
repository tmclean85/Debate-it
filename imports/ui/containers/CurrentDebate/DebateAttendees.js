import React from 'react';
import { ListItem } from 'material-ui/List';
import { ToggleCheckBox, ToggleCheckBoxOutlineBlank } from 'material-ui/svg-icons';
import Avatar from 'material-ui/Avatar';
import Gravatar from 'react-gravatar';

const DebateAttendees = ({ attendeeData, icon }) => (
    <div>
        {attendeeData.map(attendee =>
        <ListItem
            primaryText={attendee.name}
            //leftAvatar={<Gravatar email={userData.emails[0].address} />}
            rightIcon={icon}
        />)}
    </div>
);

export default DebateAttendees;