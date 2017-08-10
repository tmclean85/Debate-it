import React from 'react';
import { Field } from 'neoform';
import { MenuItem, SelectField } from 'material-ui';

const SelectDebators = ({ value, onChange, userData }) => (
    <SelectField
        hintText={"Pick debator..."}
        onChange={(event, index, values) => onChange(values)}
    >
        {userData.map(user => (
            <MenuItem
                key={user._id}
                value={user._id}
                primaryText={user.name}
            />
        ))}
    </SelectField>
);

export default Field(SelectDebators);