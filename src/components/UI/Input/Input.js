import React from 'react';
import {
  TextField,
  MenuItem
} from 'material-ui';

const input = ( props ) => {
  let inputElement = null;
  let errorText = null;
  let error = null;
  if (props.invalid && props.shouldValidate && props.touched) {
    errorText = props.errorText;
    error = true;
  }
  switch ( props.elementType ) {
    case ( 'input' ):
      inputElement = <TextField
        className={props.classes}
        error={error}
        helperText={errorText}
        id={props.id}
        autoComplete="off"
        label={props.label}
        value={props.value}
        onChange={props.changed}
        {...props.elementConfig}
        margin="normal"
      />
      break;
    case ('select'):
      inputElement = <TextField
            id={props.id}
            select
            label={props.label}
            className={props.classes}
            value={props.value}
            onChange={props.changed}
            margin="normal"
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {props.options && props.options.map(option => (
            <MenuItem
              key={option.id}
              value={option.id}>{option.attributes.name}</MenuItem>
          ))}
        </TextField>
      break;
    default:
      inputElement = <TextField
        autoComplete='off'
        errorText={props.errorText}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />;
  }
  return (
      <div>
          {inputElement}
      </div>
  );
};

export default input;
