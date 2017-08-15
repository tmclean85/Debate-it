import React from 'react';
import { Field } from 'neoform';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const RadioButtonInput = ({ onChange, className }) => (
    <RadioButtonGroup
        className={className}
        onChange={(e) => onChange(e.target.value)}
        defaultSelected={'reset'}
    >
        <RadioButton
            value={'Yes'}
            label={'Yes!'}
        />
        <RadioButton
            value={''} // to simulate a falsy value
            label={'No!'}
        />
        <RadioButton
            value={'null'}
            label={'Undecided!'}
        />
        <RadioButton
            value={'reset'}
            label={'reset'}
            style={{ display: 'none' }}
        />
    </RadioButtonGroup>
);

export default Field(RadioButtonInput);
