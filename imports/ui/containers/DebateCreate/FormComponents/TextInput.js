import React from 'react';
import { Field } from 'neoform';
import TextField from 'material-ui/TextField';

const TextInput = ({ defaultValue, className, floatingLabelText, value, onChange, rows, disabled, hintText }) => (
    <TextField
        type="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        disabled={disabled}
        hintText={hintText}
        floatingLabelText={floatingLabelText}
        className={className}
        defaultValue={defaultValue}
    />
);

export default Field(TextInput);