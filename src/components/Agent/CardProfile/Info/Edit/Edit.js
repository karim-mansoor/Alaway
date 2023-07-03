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
    agent: {
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
    const updateagent = {
      ...this.state.agent,
      "first_name": {
        ...this.state.agent["first_name"],
        value: this.props.user.attributes.first_name,
        valid: true,
        errorText: null,
        touched: false,
      },
      "last_name": {
        ...this.state.agent["last_name"],
        value: this.props.user.attributes.last_name,
        valid: true,
        errorText: null,
        touched: false,
      },
      "email": {
        ...this.state.agent["email"],
        value: this.props.user.attributes.email,
        valid: true,
        errorText: null,
        touched: false,
      },
      "national_id": {
        ...this.state.agent["national_id"],
        value: this.props.user.attributes.national_id,
        valid: true,
        errorText: null,
        touched: false,
      },
      "birthday": {
        ...this.state.agent["birthday"],
        value: this.props.user.attributes.birthday,
        valid: true,
        errorText: null,
        touched: false,
      },
      "cell_phone": {
        ...this.state.agent["cell_phone"],
        value: this.props.user.attributes.cell_phone,
        valid: true,
        errorText: null,
        touched: false,
      },
    }
    this.setState({
      ...this.state,
      agent: updateagent,
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
      ...this.state.agent,
      [controlName]: {
        ...this.state.agent[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.agent[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.agent[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      agent: updatedControls,
      formIsValid,
    });
  }

  updatedHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.agent) {
      formData[formElementIdentifier] = this.state.agent[formElementIdentifier].value;
    }
    const agent = {
      agent: formData,
    };
    this.props.update(localStorage.getItem('token'), agent);
  }

  inputFileHandler = event => {
    const fd = new FormData();
    fd.append('agent[avatar]', event.target.files[0]);
    this.props.updateAvatar(localStorage.getItem('token'), fd);
  }

  render() {
    let form = null;
    let avatar = (
      <div className={cls.Container}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <div className={cls.AvatarContainer}>
              <img className={cls.Image} src={Image} alt="profile" />
              <input id="avatar" type="file" className={cls.AvatarFile} name="avatar" onChange={this.inputFileHandler}/>
            </div>  
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="avatar">
              <span>Subir nueva foto</span>
            </label>
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
            <Grid item xs={12}>
              <Grid container justify="center">
                <div className={cls.AvatarContainer}>
                  <img className={cls.Image} src={this.props.user.attributes.avatar.url || Image} alt="profile" />
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
    }

    if (this.props.user.attributes) {
      form = (
        <div className={cls.Container}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="first_name"><span>Nombre</span></label>
                <input className={`${cls.Input} ${(!this.state.agent.first_name.valid && this.state.agent.first_name.touched) && cls.ContainerError}`}
                  type="text"
                  name="first_name"
                  value={this.state.agent.first_name.value}
                  onChange={(event) => this.inputChangedHandler(event, 'first_name')}/>
                  {(!this.state.agent.first_name.valid && this.state.agent.first_name.touched) && (
                    <div className={cls.Error}>{this.state.agent.first_name.errorText}</div>
                  )}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="last_name"><span>Apellido</span></label>
                <input className={`${cls.Input} ${(!this.state.agent.last_name.valid && this.state.agent.last_name.touched) && cls.ContainerError}`}
                  type="text"
                  name="last_name"
                  value={this.state.agent.last_name.value}
                  onChange={(event) => this.inputChangedHandler(event, 'last_name')}/>
                  {(!this.state.agent.last_name.valid && this.state.agent.last_name.touched) && (
                    <div className={cls.Error}>{this.state.agent.last_name.errorText}</div>
                  )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="email"><span>Correo</span></label>
                <input className={`${cls.Input} ${(!this.state.agent.email.valid && this.state.agent.email.touched) && cls.ContainerError}`}
                  type="text"
                  name="email"
                  value={this.state.agent.email.value}
                  onChange={(event) => this.inputChangedHandler(event, 'email')}/>
                  {(!this.state.agent.email.valid && this.state.agent.email.touched) && (
                    <div className={cls.Error}>{this.state.agent.email.errorText}</div>
                  )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="national_id"><span>Cédula</span></label>
                <input className={`${cls.Input} ${(!this.state.agent.national_id.valid && this.state.agent.national_id.touched) && cls.ContainerError}`}
                  type="text"
                  name="national_id"
                  value={this.state.agent.national_id.value}
                  onChange={(event) => this.inputChangedHandler(event, 'national_id')}/>
                  {(!this.state.agent.national_id.valid && this.state.agent.national_id.touched) && (
                    <div className={cls.Error}>{this.state.agent.national_id.errorText}</div>
                  )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="cell_phone"><span>Teléfono</span></label>
                <input className={`${cls.Input} ${(!this.state.agent.cell_phone.valid && this.state.agent.cell_phone.touched) && cls.ContainerError}`}
                  type="text"
                  name="cell_phone"
                  value={this.state.agent.cell_phone.value}
                  onChange={(event) => this.inputChangedHandler(event, 'cell_phone')}/>
                  {(!this.state.agent.cell_phone.valid && this.state.agent.cell_phone.touched) && (
                    <div className={cls.Error}>{this.state.agent.cell_phone.errorText}</div>
                  )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
              <Grid container>
                <label htmlFor="birthday"><span>Fecha de cumpleaños</span></label>
                <input className={`${cls.Input} ${(!this.state.agent.birthday.valid && this.state.agent.birthday.touched) && cls.ContainerError}`}
                  type="date"
                  name="birthday"
                  value={this.state.agent.birthday.value}
                  onChange={(event) => this.inputChangedHandler(event, 'birthday')}/>
                  {(!this.state.agent.birthday.valid && this.state.agent.birthday.touched) && (
                    <div className={cls.Error}>{this.state.agent.birthday.errorText}</div>
                  )}
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} className={cls.FormItem}>
              <Link className={cls.Button} to="/agente/perfil/info">
                Cancelar
              </Link>
              {this.state.formIsValid ? (
                <button onClick={this.updatedHandler} className={cls.ButtonSave}><span>Guardar</span></button>
              ) : (
                <button disabled className={cls.ButtonDisabled}><span>Guardar</span></button>
              )}
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
