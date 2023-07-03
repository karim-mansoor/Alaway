import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import {
  Grid,
} from 'material-ui';
import Spinner from '../../../../UI/Spinner/Spinner';

// Css
import cls from './Edit.css';

import Image from '../../../../../assets/avatar-default-300x300.jpg';

class Edit extends Component {
  state = {
    updated: false,
    formIsValid: true,
    customer: {
      first_name: {
        value: '',
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
        errorText: null,
      },
      last_name: {
        value: '',
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
        errorText: null,
      },
      email: {
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: true,
        touched: false,
        errorText: null,
      },
      cell_phone: {
        value: '',
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
        errorText: null,
      },
      national_id: {
        value: '',
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
        errorText: null,
      },
      birthday: {
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

  setStateWithUser = () => {
    const updateCustomer = {
      ...this.state.customer,
      "first_name": {
        ...this.state.customer["first_name"],
        value: this.props.user.attributes.first_name,
        valid: true,
        errorText: null,
        touched: false,
      },
      "last_name": {
        ...this.state.customer["last_name"],
        value: this.props.user.attributes.last_name,
        valid: true,
        errorText: null,
        touched: false,
      },
      "email": {
        ...this.state.customer["email"],
        value: this.props.user.attributes.email,
        valid: true,
        errorText: null,
        touched: false,
      },
      "cell_phone": {
        ...this.state.customer["cell_phone"],
        value: this.props.user.attributes.cell_phone,
        valid: true,
        errorText: null,
        touched: false,
      },
      "national_id": {
        ...this.state.customer["national_id"],
        value: this.props.user.attributes.national_id,
        valid: true,
        errorText: null,
        touched: false,
      },
      "birthday": {
        ...this.state.customer["birthday"],
        value: this.props.user.attributes.birthday,
        valid: true,
        errorText: null,
        touched: false,
      },
    }
    this.setState({
      ...this.state,
      customer: updateCustomer,
      updated: true,
    })
  }

  componentDidMount() {
    if (this.props.user.attributes) {
      this.setStateWithUser();
    }
  }

  componentDidUpdate() {
    if (!this.state.updated && this.props.user.attributes) {
      this.setStateWithUser();
    }
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
    this.props.update(localStorage.getItem('token'), customer);
  }

  inputFileHandler = event => {
    const fd = new FormData();
    fd.append('customer[avatar]', event.target.files[0]);

    this.props.updateAvatar(localStorage.getItem('token'), fd);
  }

  render() {
    let form = null;
    let avatar = (
      <div className={cls.Container}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Grid container justify="center">
              <div className={cls.AvatarContainer}>
                <img className={cls.Image} src={Image} alt="profile" />
                <input id="avatar" type="file" className={cls.AvatarFile} name="avatar" onChange={this.inputFileHandler}/>
              </div>  
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
              <label htmlFor="avatar">
                <span>Subir nueva foto</span>
              </label>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );

    if (this.props.loading) {
      avatar = (
        <div className={cls.Container}>
          <Grid container justify="center">
            <div className={cls.AvatarContainer}>
              <Spinner />
              <input id="avatar" type="file" className={cls.AvatarFile} name="avatar" onChange={this.inputFileHandler}/>
            </div>  
            <label htmlFor="avatar">
              <span>Subir nueva foto</span>
            </label>
          </Grid>
        </div>
      );
    }

    if (this.props.user.attributes && !this.props.loading) {
      avatar = (
        <div className={cls.Container}>
          <Grid container justify="center">
            <Grid xs={12}>
              <Grid container justify="center">
                <div className={cls.AvatarContainer}>
                  <img className={cls.Image} src={this.props.user.attributes.avatar.url || Image} alt="profile" />
                  <input id="avatar" type="file" className={cls.AvatarFile} name="avatar" onChange={this.inputFileHandler}/>
                </div>  
              </Grid>
            </Grid>
            <Grid xs={12}>
              <Grid container justify="center">
                <label htmlFor="avatar">
                  <span>Subir nueva foto</span>
                </label>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }

    if (this.props.user.attributes) {
      form = (
        <div className={cls.Container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="first_name"><span>Nombre</span></label>
                <input className={`${cls.Input} ${(!this.state.customer.first_name.valid && this.state.customer.first_name.touched) && cls.ContainerError}`}
                  type="text"
                  name="first_name"
                  value={this.state.customer.first_name.value}
                  onChange={(event) => this.inputChangedHandler(event, 'first_name')}/>
                  {(!this.state.customer.first_name.valid && this.state.customer.first_name.touched) && (
                    <div className={cls.Error}>{this.state.customer.first_name.errorText}</div>
                  )}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="last_name"><span>Apellido</span></label>
                <input className={`${cls.Input} ${(!this.state.customer.last_name.valid && this.state.customer.last_name.touched) && cls.ContainerError}`}
                  type="text"
                  name="last_name"
                  value={this.state.customer.last_name.value}
                  onChange={(event) => this.inputChangedHandler(event, 'last_name')}/>
                  {(!this.state.customer.last_name.valid && this.state.customer.last_name.touched) && (
                    <div className={cls.Error}>{this.state.customer.last_name.errorText}</div>
                  )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="email"><span>Correo</span></label>
                <input className={`${cls.Input} ${(!this.state.customer.email.valid && this.state.customer.email.touched) && cls.ContainerError}`}
                  type="text"
                  name="email"
                  value={this.state.customer.email.value}
                  onChange={(event) => this.inputChangedHandler(event, 'email')}/>
                  {(!this.state.customer.email.valid && this.state.customer.email.touched) && (
                    <div className={cls.Error}>{this.state.customer.email.errorText}</div>
                  )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="cell_phone"><span>Teléfono</span></label>
                <input className={`${cls.Input} ${(!this.state.customer.cell_phone.valid && this.state.customer.cell_phone.touched) && cls.ContainerError}`}
                  type="text"
                  name="cell_phone"
                  value={this.state.customer.cell_phone.value}
                  onChange={(event) => this.inputChangedHandler(event, 'cell_phone')}/>
                  {(!this.state.customer.cell_phone.valid && this.state.customer.cell_phone.touched) && (
                    <div className={cls.Error}>{this.state.customer.cell_phone.errorText}</div>
                  )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="national_id"><span>Cédula</span></label>
                <input className={`${cls.Input} ${(!this.state.customer.national_id.valid && this.state.customer.national_id.touched) && cls.ContainerError}`}
                  type="text"
                  name="national_id"
                  value={this.state.customer.national_id.value}
                  onChange={(event) => this.inputChangedHandler(event, 'national_id')}/>
                  {(!this.state.customer.national_id.valid && this.state.customer.national_id.touched) && (
                    <div className={cls.Error}>{this.state.customer.national_id.errorText}</div>
                  )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="birthday"><span>Fecha de cumpleaños</span></label>
                <input className={`${cls.Input} ${(!this.state.customer.birthday.valid && this.state.customer.birthday.touched) && cls.ContainerError}`}
                  type="date"
                  name="birthday"
                  value={this.state.customer.birthday.value}
                  onChange={(event) => this.inputChangedHandler(event, 'birthday')}/>
                  {(!this.state.customer.birthday.valid && this.state.customer.birthday.touched) && (
                    <div className={cls.Error}>{this.state.customer.birthday.errorText}</div>
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
                  <button disabled className={cls.ButtonDisabled}><span>Guardar</span></button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
    return (
      <div className={cls.Div}>
        <h3 className={cls.CardTitle}><span>Actualizar Perfil</span></h3>
        <form className={cls.Form}>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              {avatar}
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              {form}
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default Edit;
