import React from 'react';
import { Field } from 'neoform';
import { MenuItem, SelectField } from 'material-ui';

const timeValues = ["10 Minutes", "20 Minutes", "30 Minutes", "40 Minutes",
        "50 Minutes", "60 Minutes", "70 Minutes", "80 Minutes", "90 Minutes"];

const SelectMenu = ({ value, onChange }) => (
    <SelectField
        value={value}
        onChange={(event, index, values) => onChange(values)}
    >
        {timeValues.map(time => (
            <MenuItem
                key={time}
                value={time}
                primaryText={time}
            />
        ))}
    </SelectField>
);

export default Field(SelectMenu);
