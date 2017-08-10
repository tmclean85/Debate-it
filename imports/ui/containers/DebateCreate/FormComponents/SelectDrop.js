import React from 'react';
import { MenuItem, SelectField } from 'material-ui';

const timeValues = ["10 Minutes", "20 Minutes", "30 Minutes", "40 Minutes",
    "50 Minutes", "60 Minutes", "70 Minutes", "80 Minutes", "90 Minutes"];

const SelectDrop = ({ value, onChange }) => (
    <SelectField
        hintText={"Pick a duration..."}
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

export default SelectDrop;
