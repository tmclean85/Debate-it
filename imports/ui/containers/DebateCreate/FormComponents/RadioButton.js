import React from 'react';
import { Field } from 'neoform';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
    radioButton: {
        marginBottom: 16,
        fontSize: 14
    }
};

const RadioButtonInput = ({ value, onChange, state }) => (
    <RadioButtonGroup
        onChange={(e) => onChange(e.target.value)}
    >
        <RadioButton
            value="8" //set this to current user_id
            label="I Agree!"
            style={styles.radioButton}
        />
        <RadioButton
            value="8" //set this to empty string
            label="I Disagree!"
            style={styles.radioButton}
        />
    </RadioButtonGroup>
);

export default Field(RadioButtonInput);