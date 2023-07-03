import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

import Auth from '../../../components/Agent/Auth/Auth';
import cls from './Login.css';
import Logo from '../../../assets/LogoBlanco.svg';
import Spinner from '../../../components/UI/Spinner/Spinner';

import * as actions from '../../../store/actions';

class Login extends Component {
  render() {
    return (
      <div className={cls.Login}>
        {this.props.loading ? (
          <Grid container justify="center" className={cls.LoadingContainer}>
            <Spinner />
          </Grid>
        ) : (
          <Grid container justify="center" className={cls.LoginContainer}>
            <Grid item xs={12}>
              <img src={Logo} className={cls.Applogo} alt="logo" />
            </Grid>
            <Grid item xs={12}>
              <h3 className={cls.Typogra}>ENTRA COMO AGENTE</h3>
            </Grid>
            <Grid item xs={12}>
              <Auth />
            </Grid>
            <Grid item xs={12} align="center">
              <div className={cls.Divider}>
                <i className="material-icons">circle</i>
                <i className="material-icons">circle</i>
              </div>
            </Grid>
            <Grid container justify="center" className={cls.ContainerOpciones}>
              <a className={cls.PageButtonRegister} component={Link} href="/agente/registro" >¿NO TIENES UNA CUENTA?</a>
              <a className={cls.PageButtonRegister} component={Link} href="/agente/resetear" >¿OLVIDÓ SU CONTRASEÑA?</a>
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => ({
  onAuth: (email, password) => dispatch(actions.authAgent(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
