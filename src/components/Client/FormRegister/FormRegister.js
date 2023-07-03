import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, TextField, Grid} from 'material-ui';
import cls from './FormRegister.css'
import * as action from '../../../store/actions';

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
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
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

class FormRegister extends Component {
  state = {
    registerForm: {
      first_name: {
        label: 'Nombre',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      last_name: {
        elementType: 'input',
        label: 'Apellido',
        elementConfig: {
          type: 'text',
          placeholder: 'Apellido',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      email: {
        elementType: 'input',
        label: 'Correo',
        elementConfig: {
          type: 'email',
          placeholder: 'ejemplo@ejemplo.com',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      cell_phone: {
        value: '',
        validation: {
          required: true,
          maxLength: 10,
        },
        valid: false,
        touched: false,
        // errorText: null,
      },
      password: {
        elementType: 'input',
        label: 'Contraseña',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
      password_confirmation: {
        elementType: 'input',
        label: 'Confirmar contraseña',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  }

  checkValidity(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
      errorText = 'Requerido.';
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
      errorText = `Debe contener mas de ${rules.minLength} caracteres.`;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
      errorText = `Debe contener menos de ${rules.maxLength} caracteres.`;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Debe ser un email valido.';
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Debe ser solo numerico.';
    }

    return {
      isValid,
      errorText,
    };
  }

  registerHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.registerForm) {
      formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value;
    }
    const customer = {
      customer: formData,
    };
    this.props.onRegisterUser(customer);
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.registerForm,
      [controlName]: {
        ...this.state.registerForm[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.registerForm[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.registerForm[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      registerForm: updatedControls,
      formIsValid,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={6} sm={6}>
          <TextField
            value={this.state.registerForm.first_name.value}
            onChange={(event) => this.inputChangedHandler(event, 'first_name')}
            fullWidth
            placeholder="Nombre"
            id="name"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: !this.state.registerForm.first_name.valid && this.state.registerForm.first_name.touched ? 
                  classes.bootstrapInputError : 
                  classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
          {!this.state.registerForm.first_name.valid && this.state.registerForm.first_name.touched ? (
            <div className={cls.ErrorText}>
              {this.state.registerForm.first_name.errorText}
            </div>
          ) : null}
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            value={this.state.registerForm.last_name.value}
            onChange={(event) => this.inputChangedHandler(event, 'last_name')}
            fullWidth
            placeholder="Apellido"
            id="Apellido"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: !this.state.registerForm.last_name.valid && this.state.registerForm.last_name.touched ? 
                  classes.bootstrapInputError : 
                  classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
          {!this.state.registerForm.last_name.valid && this.state.registerForm.last_name.touched ? (
            <div className={cls.ErrorText}>
              {this.state.registerForm.last_name.errorText}
            </div>
          ) : null}
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            value={this.state.registerForm.email.value}
            onChange={(event) => this.inputChangedHandler(event, 'email')}
            fullWidth
            placeholder="Correo"
            id="Correo"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: !this.state.registerForm.email.valid && this.state.registerForm.email.touched ? 
                  classes.bootstrapInputError : 
                  classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
          {!this.state.registerForm.email.valid && this.state.registerForm.email.touched ? (
            <div className={cls.ErrorText}>
              {this.state.registerForm.email.errorText}
            </div>
          ) : null}
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            value={this.state.registerForm.cell_phone.value}
            onChange={(event) => this.inputChangedHandler(event, 'cell_phone')}
            type="number"
            fullWidth
            placeholder="Celular"
            id="celular"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: !this.state.registerForm.cell_phone.valid && this.state.registerForm.cell_phone.touched ? 
                  classes.bootstrapInputError : 
                  classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
          {!this.state.registerForm.cell_phone.valid && this.state.registerForm.cell_phone.touched ? (
            <div className={cls.ErrorText}>
              {this.state.registerForm.cell_phone.errorText}
            </div>
          ) : null}
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            value={this.state.registerForm.password.value}
            onChange={(event) => this.inputChangedHandler(event, 'password')}
            type={'password'}  
            fullWidth
            placeholder="Contraseña"
            id="Contrasena"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: !this.state.registerForm.password.valid && this.state.registerForm.password.touched ? 
                  classes.bootstrapInputError : 
                  classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
            shrink: true,
            className: classes.bootstrapFormLabel,
            }}
          />
          {!this.state.registerForm.password.valid && this.state.registerForm.password.touched ? (
            <div className={cls.ErrorText}>
              {this.state.registerForm.password.errorText}
            </div>
          ) : null}
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            type={'password'}
            value={this.state.registerForm.password_confirmation.value}
            onChange={(event) => this.inputChangedHandler(event, 'password_confirmation')}
            fullWidth
            placeholder="Confirme Contraseña"
            id="Confirmacion"
            InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.bootstrapRoot,
              input: !this.state.registerForm.password_confirmation.valid && this.state.registerForm.password_confirmation.touched ? 
                classes.bootstrapInputError : 
                classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
          {!this.state.registerForm.password_confirmation.valid && this.state.registerForm.password_confirmation.touched ? (
            <div className={cls.ErrorText}>
              {this.state.registerForm.password_confirmation.errorText}
            </div>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          {this.state.formIsValid ? (
            <button onClick={(event) => this.registerHandler(event, this.registerHandler)} className={cls.pageButton} >Registrar</button>
          ): (
            <button disabled className={cls.pageButtonInvalid} >Registrar</button>
          )}
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegisterUser: formData => dispatch(action.registerClient(formData)),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(FormRegister));