import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import {
  Grid,
} from 'material-ui';

// Css
import cls from './EditPassword.css';

class EditPassword extends Component {
  state = {
    formIsValid: true,
    customer: {
      current_password: {
        value: '',
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
        errorText: null,
      },
      password: {
        value: '',
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
        errorText: null,
      },
      password_confirmation: {
        value: '',
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
        errorText: null,
      },
    },
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

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.customer,
      [controlName]: {
        ...this.state.customer[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.customer[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.customer[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      customer: updatedControls,
      formIsValid,
    });
  }

  updatedHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.customer) {
      formData[formElementIdentifier] = this.state.customer[formElementIdentifier].value;
    }
    const customer = {
      customer: formData,
    };
    this.props.changePassword(localStorage.getItem('token'), customer);
  }

  render() {
    return (
      <div className={cls.Div}>
        <h3 className={cls.CardTitle}><span>Actualizar Perfil</span></h3>
        <form className={cls.Form}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
							<div className={cls.Container}>
								<Grid container>
									<Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
										<Grid container>
											<label htmlFor="current_password"><span>Ingresa clave actual</span></label>
											<input className={`${cls.Input} ${(!this.state.customer.current_password.valid && this.state.customer.current_password.touched) && cls.ContainerError}`}
												type="password"
												name="current_password"
												value={this.state.customer.current_password.value}
												onChange={(event) => this.inputChangedHandler(event, 'current_password')}/>
												{(!this.state.customer.current_password.valid && this.state.customer.current_password.touched) && (
													<div className={cls.Error}>{this.state.customer.current_password.errorText}</div>
												)}
										</Grid>
									</Grid>
								</Grid>
								<Grid container>
									<Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
										<Grid container>
											<label htmlFor="password"><span>Nueva Contraseña</span></label>
											<input className={`${cls.Input} ${(!this.state.customer.password.valid && this.state.customer.password.touched) && cls.ContainerError}`}
												type="password"
												name="password"
												value={this.state.customer.password.value}
												onChange={(event) => this.inputChangedHandler(event, 'password')}/>
												{(!this.state.customer.password.valid && this.state.customer.password.touched) && (
													<div className={cls.Error}>{this.state.customer.password.errorText}</div>
												)}
										</Grid>
									</Grid>
								</Grid>
								<Grid container>
									<Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
										<Grid container>
											<label htmlFor="password_confirmation"><span>Confirmar Nueva Contraseña</span></label>
											<input className={`${cls.Input} ${(!this.state.customer.password_confirmation.valid && this.state.customer.password_confirmation.touched) && cls.ContainerError}`}
												type="password"
												name="password_confirmation"
												value={this.state.customer.password_confirmation.value}
												onChange={(event) => this.inputChangedHandler(event, 'password_confirmation')}/>
												{(!this.state.customer.password_confirmation.valid && this.state.customer.password_confirmation.touched) && (
													<div className={cls.Error}>{this.state.customer.password_confirmation.errorText}</div>
												)}
										</Grid>
									</Grid>
								</Grid>
								<Grid container>
									<Grid item xs={12} sm={12} md={12} lg={12} className={cls.FormItem}>
										<Grid container>
											<Link className={cls.Button} to="/cliente/perfil/info">
												Cancelar
											</Link>
											{this.state.formIsValid ? (
												<button onClick={this.updatedHandler} className={cls.ButtonSave}><span>Guardar</span></button>
											) : (
												<button disabled className={cls.ButtonDisabled}><span>Cambiar</span></button>
											)}
										</Grid>
									</Grid>
								</Grid>
							</div>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default EditPassword;