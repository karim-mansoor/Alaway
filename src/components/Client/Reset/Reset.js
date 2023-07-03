import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';

import {
  TextField,
  Grid,
  Paper,
} from 'material-ui';

import * as actions from '../../../store/actions';
import cls from './Reset.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 520,
    margin: 10,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapInputError: {
    borderRadius: 4,
    border: '1px solid #b80808',
    fontSize: 16,
    padding: '10px 12px',
    margin: 10,
    width: 520,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

class Reset extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        label: 'Ingrese su correo electrónico',
        elementConfig: {
          type: 'email',
          placeholder: 'example@example.com'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  }

  checkValidity(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }
    
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
      errorText = "Requerido."
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
      errorText = "Debe contener mas de " + rules.minLength + " caracteres."
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
      errorText = "Debe contener menos de " + rules.maxLength + " caracteres."
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
      errorText = "Debe ser un email valido."
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
      errorText = "Debe ser solo numerico."
    }

    return {
      isValid,
      errorText
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onReset(this.state.controls.email.value.toLowerCase());
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation).isValid,
        errorText: this.checkValidity(event.target.value, this.state.controls[controlName].validation).errorText,
        touched: true
      }
    };

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      controls: updatedControls,
      formIsValid: formIsValid
    });
  }
  
  render () {
    const { classes } = this.props;
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    let form = (
      <form onSubmit={this.submitHandler}>
        <Grid container>
          <Grid item xs={12}>
            <Paper elevation={0} className={cls.InputText}>
              {formElementsArray.map(formElement => (
                <TextField 
                  key={formElement.id}
                  value={formElement.config.value}
                  placeholder={formElement.config.label}
                  onChange={(event) => this.inputChangedHandler(event, formElement.id)}
                  InputProps={{
                    disableUnderline: true,
                    classes: {
                      root: classes.bootstrapRoot,
                      input: !this.state.controls.email.valid && this.state.controls.email.touched ? 
                      classes.bootstrapInputError : 
                      classes.bootstrapInput,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    className: classes.bootstrapFormLabel,
                  }}
                />
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={cls.backgroundColorReset}>
              <button type="submit" variant="raised" className={cls.pageButton}>RECUPERAR</button>
            </Paper>
          </Grid>
        </Grid>          
      </form>
    );
    return (
      <div>
        {form}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReset: (email) => dispatch(actions.resetPassword(email))
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Reset));