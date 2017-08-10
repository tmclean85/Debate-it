import React from 'react';
import { Field } from 'neoform';
import TextField from 'material-ui/TextField';

const TextInput = ({ value, onChange, rows, disabled, hintText }) => (
    <TextField
        type="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        disabled={disabled}
        hintText={hintText}
    />
);

export default Field(TextInput);