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

const Enum = (options) => ({__ty: 'Enum', options});

// Material ui types
const colorTy = Enum(['default', 'primary', 'secondary']);
const variantTy = Enum(['raised', 'flat', 'outlined', 'fab']);
const sizeTy = Enum(['small', 'medium', 'large']);

// React bootstrap types
const bsStyleTy = Enum(['success', 'warning', 'danger', 'info']);
const bsSizeTy = Enum(["large", "small", "xsmall"])

Button.pdPropControls = {'variant': variantTy, size: sizeTy, 'color': colorTy, 'children': 'Text', disabled: 'Boolean', fullWidth: 'Boolean'};
Button.pdResizable = ['width'];

IconButton.pdPropControls = {color: colorTy, 'children': 'Text', disabled: 'Boolean'}
IconButton.pdResizable = ['width']

Switch.pdPropControls = {color: colorTy, checked: 'Boolean', disabled: 'Boolean'}
Switch.pdResizable = [];

TextField.pdPropControls = {defaultValue: 'Text', helperText: 'Text', label: 'Text', disabled: 'Boolean', error: 'Boolean', fullWidth: 'Boolean'};
TextField.pdResizable = ['width'];

Checkbox.pdPropControls = {color: colorTy, checked: 'Boolean', disabled: 'Boolean'};
Checkbox.pdResizable = [];

CircularProgress.pdPropControls = {color: colorTy, thickness: 'Number', size: 'Number', value: "Number", variant: Enum(['determinate', 'indeterminate', 'static'])}
CircularProgress.pdResizable = []

Input.pdPropControls = {defaultValue: 'Text', disabled: "Boolean", disableUnderline: "Boolean", error: 'Boolean', multiline: 'Boolean'}
Input.pdResizable = ['width'];

LinearProgress.pdPropControls = {value: 'Number', valueBuffer: 'Number', color: Enum(['primary', 'secondary']), variant: Enum(['determinate', 'indeterminate', 'buffer', 'query'])};
LinearProgress.pdResizable = ['width'];

/*Select.pdPropControls = {value: 'Text', open: 'Boolean', displayEmpty: 'Boolean', children: 'Text'};
Select.pdResizable = ['width']; Bugs the store for now */

Radio.pdPropControls = {color: colorTy, disabled: 'Boolean', disableRipple: 'Boolean', checked: 'Boolean'}
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
