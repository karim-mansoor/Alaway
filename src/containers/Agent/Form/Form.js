// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'material-ui/Modal';
import Alert from 'react-s-alert';

// Components
import {Grid,
  Button,
  TextField,
  Typography,
  Paper,
  withStyles,
  InputAdornment,
  IconButton,
} from 'material-ui';
import Spinner from './Spinner/Spinner';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import LoginAgent from '../../../containers/Agent/Login/Login'

// Css
import cls from './Form.css';

import * as actions from '../../../store/actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 0,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  modalLoginAgent: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
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
    width: 'calc(100% - 24px)',
    margin: 4,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapInputError: {
    backgroundColor: theme.palette.common.white,
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

class Form extends Component {
  state = {
    registerForm: {
      first_name: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      last_name: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      email: {
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      password: {
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      password_confirmation: {
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      national_id: {
        value: '',
        validation: {
          required: true,
          maxLength: 10,
        },
        valid: false,
        touched: false,
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
    },
    formIsValid: false,
    openRegister: false,
    openLogin: false,
    openAgentLogin: false,
  }

  handleOpen = (modal) => {
    if (localStorage.getItem('signInAs') === 'customer') {
      this.props.history.push('/cliente')
    }
    if (localStorage.getItem('signInAs') === 'agent') {
      this.props.history.push('/agente')
    }
    if (modal === "register") {
      this.setState({
        openLogin: false,
        openAgentLogin: false,
        openRegister: true,
      });
    } else if (modal === "login") {
      this.setState({
        openLogin: true,
        openAgentLogin: false,
        openRegister: false,
      });
    } else if (modal === "loginAgent") {
      this.setState({
        openLogin: false,
        openAgentLogin: true,
        openRegister: false,
      });
    }
  };

  handleClose = () => {
    this.setState({
      openLogin: false,
      openAgentLogin: false,
      openRegister: false,
    });
  };

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
  };

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

  registerHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.registerForm) {
      formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value;
    }
    const agent = {
      agent: formData,
    };
    this.props.onRegisterUser(agent);
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  }

  handleClickShowPasswordConfirmation = () => {
    this.setState(state => ({ showPasswordConfirmation: !state.showPasswordConfirmation }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={cls.Form}>
          {this.props.loading ? (
            <Grid className={cls.LoadingContainer} container>
              <Spinner />
            </Grid>
          ) : (
          <Grid container justify="center">
            <p className={cls.None}>Déjanos tus datos y nos contactaremos contigo lo antes posible</p>
            <Grid item xs={12}>
              <Paper className={`${cls.paperInput} ${classes.paper}`} elevation={0}>
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
              </Paper>
              <Paper className={`${cls.paperInput} ${classes.paper}`} elevation={0}>
                <TextField
                  value={this.state.registerForm.last_name.value}
                  onChange={(event) => this.inputChangedHandler(event, 'last_name')}
                  fullWidth
                  placeholder="Apellido"
                  id="last"
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
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <TextField
                  value={this.state.registerForm.email.value}
                  onChange={(event) => this.inputChangedHandler(event, 'email')}
                  fullWidth
                  placeholder="Correo"
                  id="email"
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
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <TextField
                  id="password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.registerForm.password.value}
                  onChange={(event) => this.inputChangedHandler(event, 'password')}
                  fullWidth
                  placeholder="Contraseña"
                  InputProps={{
                    disableUnderline: true,
                    classes: {
                      root: classes.bootstrapRoot,
                      input: !this.state.registerForm.password.valid && this.state.registerForm.password.touched ? 
                        classes.bootstrapInputError : 
                        classes.bootstrapInput,
                    },
                    endAdornment: (
                      <InputAdornment position="end" className={cls.InputPassword}>
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
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
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <TextField
                  value={this.state.registerForm.password_confirmation.value}
                  onChange={(event) => this.inputChangedHandler(event, 'password_confirmation')}
                  fullWidth
                  type={this.state.showPasswordConfirmation ? 'text' : 'password'}
                  placeholder="Confirme Contraseña"
                  id="password-confirmation"
                  InputProps={{
                    disableUnderline: true,
                    classes: {
                      root: classes.bootstrapRoot,
                      input: !this.state.registerForm.password_confirmation.valid && this.state.registerForm.password_confirmation.touched ? 
                        classes.bootstrapInputError : 
                        classes.bootstrapInput,
                    },
                    endAdornment: (
                      <InputAdornment position="end" className={cls.InputPassword}>
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPasswordConfirmation}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {this.state.showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
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
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={`${cls.paperInput} ${classes.paper}`} elevation={0}>
                <TextField
                  value={this.state.registerForm.national_id.value}
                  onChange={(event) => this.inputChangedHandler(event, 'national_id')}
                  fullWidth
                  type="number"
                  placeholder="Cedula"
                  id="cedula"
                  InputProps={{
                    disableUnderline: true,
                    classes: {
                      root: classes.bootstrapRoot,
                      input: !this.state.registerForm.national_id.valid && this.state.registerForm.national_id.touched ? 
                        classes.bootstrapInputError : 
                        classes.bootstrapInput,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    className: classes.bootstrapFormLabel,
                  }}
                />
                {!this.state.registerForm.national_id.valid && this.state.registerForm.national_id.touched ? (
                  <div className={cls.ErrorText}>
                    {this.state.registerForm.national_id.errorText}
                  </div>
                ) : null}
              </Paper>
              <Paper className={`${cls.paperInput} ${classes.paper}`} elevation={0}>
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
              </Paper>
            </Grid>
            <Grid item xs={12}>
              {this.state.formIsValid ? (
                <button onClick={this.registerHandler} className={cls.pageButton}>Registrar</button>
              ): (
                <button disabled className={cls.pageButtonInvalid}>Registrar</button>
              )}
            </Grid>
            <p>Al registrarte aceptas los <span><a className={cls.Link} href="/politicas" target="_blank">Términos y politicas de privacidad.</a></span></p>
            <Grid container justify="center">
              <Grid item xs={6}>
                <a className={cls.ButtonLogin} onClick={() => this.handleOpen("loginAgent")} >INICIAR SESIÓN</a>
              </Grid>
              <Grid item xs={6}>
                <a className={cls.ButtonLogin} href="/">REGRESAR</a>
              </Grid>
            </Grid>
          </Grid>
          )}
        </form>
        <Modal
          open={this.state.openAgentLogin}
          onClose={this.handleClose}
        >
          <div className={`${cls.Modal} ${classes.modalLoginAgent}`}>
            <LoginAgent className={cls.Modal} close={this.handleClose} />
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.register.loading,
});

const mapDispatchToProps = dispatch => ({
  onRegisterUser: formData => dispatch(actions.registerAgent(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Form));