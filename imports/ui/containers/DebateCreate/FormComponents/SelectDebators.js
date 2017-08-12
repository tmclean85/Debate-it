import React from 'react';
import { Field } from 'neoform';
import { MenuItem, SelectField } from 'material-ui';

const SelectDebators = ({ value, onChange, userData, debatorName, captureDebatorName }) => (
    <SelectField
        hintText={(!debatorName) ? "Pick debator..." : debatorName}
        onChange={(event, index, values) => {
            captureDebatorName(event.target.innerText)
            onChange(values)
            }
        }
        hintStyle={(!debatorName) ? null : {color: 'black' }}
    >
        {userData.map(user => (
            <MenuItem
                key={user._id}
                value={user._id}
                primaryText={user.profile.name}
            />
        ))}
    </SelectField>
);


export default Field(SelectDebators);