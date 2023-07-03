// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'material-ui';

import * as action from '../../../store/actions';

// Component
import Facebook from '../../../assets/icono-facebook.png';
import Instagram from '../../../assets/icono-instagram.png';
import WhatsApp from '../../../assets/icono-whatsapp.png';
import cls from './Contact.css';

class Contact extends Component {
  state = {
    formData: {
      name: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
        placeholder: 'Nombre'
      },
      celular: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
        placeholder: 'Número de teléfono'
      },
      email: {
        elementType: 'input',
        label: 'Correo',
        elementConfig: {
          type: 'email',
          placeholder: 'Email',
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
    },
    formIsValid: false,
  }

  formContact = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.formData) {
      formData[formElementIdentifier] = this.state.formData[formElementIdentifier].value;
    }
    const contact = {
      contact: formData,
    };
    this.props.onFormContact(contact, this.responseContact);
  }

  responseContact = {
    success: (response) => {
      try {
        console.log("Aqui======",response)
      } catch (error) {
        alert.alert("NOC NOC",error.message)
      }
    },
    error: (err) => {
      console.log('create properties error ' + JSON.stringify(err));
    }
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.formData,
      [controlName]: {
        ...this.state.formData[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.formData[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.formData[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formData: updatedControls,
      formIsValid,
    });
  }

  rateChangedHandler = (value, controlName) => {
    const updatedControls = {
      ...this.state.formData,
      [controlName]: {
        ...this.state.formData[controlName],
        value: value,
        valid: this.checkRateValidity(
          value,
          this.state.formData[controlName].validation,
        ).isValid,
        errorText: this.checkRateValidity(
          value,
          this.state.formData[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formData: updatedControls,
      formIsValid,
    });
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

    return {
      isValid,
      errorText,
    };
  }

  checkRateValidity(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value > 0 && isValid;
      errorText = 'Requerido.';
    }

    return {
      isValid,
      errorText,
    };
  }
  render (){
    return (
      <Grid container alignContent="center" justify="center">
        <Grid item xs={12} sm={7} align="center" justify="center" className={cls.Contact}>
          <div>
            <a href="https://www.facebook.com/appnocnoc/" target="_blank"><img src={Facebook} alt="Facebook" className={cls.Styleicon} /></a>
            <a href="https://www.instagram.com/nocnoc_app/?hl=es-la" target="_blank"><img src={Instagram} alt="Instagram" className={cls.Styleicon} /></a>
            <a href="https://wa.me/593995388728" target="_black" ><img src={WhatsApp} alt="WhatsApp" className={cls.Styleicon} /></a>
          </div>
          <div className={cls.Paper}>
            <input
              className={cls.Field}
              placeholder={this.state.formData.name.placeholder}
              id="name"
              multiline="true"
              margin="normal"
              onChange={(event) => this.inputChangedHandler(event, 'name')}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {!this.state.formData.name.valid && this.state.formData.name.touched ? (
              <div className={cls.ErrorText}>
                {this.state.formData.name.errorText}
              </div>
            ) : null}
          </div>
          <div className={cls.Paper}>
            <input
              className={cls.Field}
              placeholder={this.state.formData.celular.placeholder}
              id="multiline-static"
              multiline="true"
              margin="normal"
              onChange={(event) => this.inputChangedHandler(event, 'celular')}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {!this.state.formData.celular.valid && this.state.formData.celular.touched ? (
              <div className={cls.ErrorText}>
                {this.state.formData.celular.errorText}
              </div>
            ) : null}
          </div>
          <div className={cls.Paper}>
            <input
              className={cls.Field}
              placeholder={this.state.formData.email.elementConfig.placeholder}
              id="multiline-static"
              multiline="true"
              margin="normal"
              onChange={(event) => this.inputChangedHandler(event, 'email')}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {!this.state.formData.email.valid && this.state.formData.email.touched ? (
              <div className={cls.ErrorText}>
                {this.state.formData.email.errorText}
              </div>
            ) : null}
          </div>
          <div className={cls.Paper}>
            {this.state.formIsValid ? (
              <a
                onClick={(event) => this.formContact(event, this.formContact)}
                className={cls.ButtonContratar}>ENVIAR</a>
            ): (
              <a className={cls.pageButtonInvalid}>ENVIAR</a>
            )}
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFormContact: (formData) => dispatch(action.formContact(formData)),
});

export default connect(null, mapDispatchToProps) (Contact);