import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import cls from './UpdatePassword.css';
import Logo from '../../../assets/Logo.svg';
import UpdatedPassword from '../../../components/Agent/UpdatedPassword/UpdatedPassword';
import * as actions from '../../../store/actions';

class UpdatePassword extends Component {
  state = {
    controls: {
      password: {
        elementType: 'input',
        label: 'Nueva Clave',
        elementConfig: {
          type: 'password',
        },
        value: '',
        required: true,
          validation: {
          minLength: 6,
        },
        valid: false,
        touched: false
      },
      password_confirmation: {
        elementType: 'input',
        label: 'Repetir Nueva Clave',
        elementConfig: {
          type: 'password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false
      },
    },
    formIsValid: false
  }

  submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      reset_password_token: this.props.match.params.reset_token,
      password: this.state.controls.password.value,
      password_confirmation: this.state.controls.password_confirmation.value, 
    }
    this.props.onUpdate(formData);
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

  render() {
    return (
      <div>
        <div className={cls.Reset}>
          <Grid container className={cls.ButtonClose}>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <Button component={Link} to="/">
                  <i className="material-icons">clear</i>
                </Button>
              </Paper>
            </Grid>
          </Grid>
          <Grid container className={cls.ResetContainer} justify="center">
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                 <Button className={cls.pageButtonLogin} component={Link} to="/" >
                  <img src={Logo} className={cls.Applogo} alt="logo" />
                 </Button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Ingrese su nueva contraseña</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <UpdatedPassword
                  controls={this.state.controls}
                  submitHandler={this.submitHandler}
                  inputChangedHandler={this.inputChangedHandler} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdate: (formData) => dispatch(actions.updatePasswordAgent(formData))
  };
};

export default connect(null, mapDispatchToProps)(UpdatePassword);
