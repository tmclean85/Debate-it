import React from 'react';
import { Field } from 'neoform';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
 

const RadioButtonInput = ({ value, onChange, className }) => (
    <RadioButtonGroup
        className={className}
        onChange={(e) => onChange(e.target.value)}
    >
        <RadioButton
            value="Yes"
            label="Yes!"
        />
        <RadioButton
            value={""} //to simulate a falsy value
            label="No!"
        />
        <RadioButton
            value="null"
            label="Undecided!"
        />
    </RadioButtonGroup>
);

export default Field(RadioButtonInput);