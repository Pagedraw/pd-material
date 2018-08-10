import React from 'react';

import {
    Button,
    IconButton,
    Switch,
    Dialog,
    TextField,
    Card,
    Checkbox,
    CircularProgress,
    Input,
    LinearProgress,
    Select,
    Radio
} from '@material-ui/core';

const Enum = (options, required, defaultValue) => ({type: 'Enum', options, required, defaultValue});

// Material ui types
const colorTy = Enum(['default', 'primary', 'secondary'], false, 'primary');
const variantTy = Enum(['raised', 'flat', 'outlined', 'fab'], false, 'raised');
const sizeTy = Enum(['small', 'medium', 'large']);

// React bootstrap types
const bsStyleTy = Enum(['success', 'warning', 'danger', 'info']);
const bsSizeTy = Enum(["large", "small", "xsmall"])

Button.pdPropControls = {
    'variant': variantTy,
    size: sizeTy,
    'color': colorTy,
    'children': {type: 'Text', required: true, defaultValue: 'Click me'},
    disabled: 'Boolean',
    onClick: {type: 'Function'}
};
Button.pdResizable = ['width'];

IconButton.pdPropControls = {color: colorTy, 'children': {type: 'Text', required: true, defaultValue: 'icon'}, disabled: 'Boolean'}
IconButton.pdResizable = ['width']

Switch.pdPropControls = {
    color: colorTy, checked: 'Boolean', disabled: 'Boolean',
    onChange: {type: 'Function'}
}
Switch.pdResizable = [];

TextField.pdPropControls = {
    defaultValue: 'Text',
    helperText: 'Text',
    label: {type: 'Text', defaultValue: 'Username'},
    value: {type: 'Text', defaultValue: ''},
    onChange: {type: 'Function'},
    disabled: 'Boolean',
    error: 'Boolean'
};
TextField.pdResizable = ['width'];

Checkbox.pdPropControls = {
    color: colorTy, checked: 'Boolean', disabled: 'Boolean',
    onChange: {type: 'Function'}
};
Checkbox.pdResizable = [];

CircularProgress.pdPropControls = {
    color: colorTy,
    thickness: 'Number',
    size: {type: 'Number', defaultValue: 40}, value: "Number",
    variant: Enum(['determinate', 'indeterminate', 'static'], false, 'indeterminate')
}
CircularProgress.pdResizable = []

Input.pdPropControls = {
    defaultValue: 'Text', disabled: "Boolean", disableUnderline: "Boolean", error: 'Boolean', multiline: 'Boolean',
    value: {type: 'Text', defaultValue: ''},
    placeholder: {type: 'Text', defaultValue: 'Email'},
    required: 'Checkbox',
    onChange: 'Function'
}
Input.pdResizable = ['width'];

LinearProgress.pdPropControls = {
    value: {type: 'Number', defaultValue: 50},
    valueBuffer: 'Number', color: Enum(['primary', 'secondary']),
    variant: Enum(['determinate', 'indeterminate', 'buffer', 'query'])
};
LinearProgress.pdResizable = ['width'];

/*Select.pdPropControls = {value: 'Text', open: 'Boolean', displayEmpty: 'Boolean', children: 'Text'};
Select.pdResizable = ['width']; Bugs the store for now */

Radio.pdPropControls = {color: colorTy, disabled: 'Boolean', disableRipple: 'Boolean', checked: 'Boolean', onChange: {type: 'Function'}}
Radio.pdResizable = []

export default {
    Button,
    IconButton,
    Switch,
    TextField,
    Checkbox,
    CircularProgress,
    Input,
    LinearProgress,
    Radio
};
