import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'material-ui';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Auth from '../Auth/Auth';
import cls from './Login.css';
import FacebookIcon from '../../../assets/facebookicon.svg';
import Spinner from '../../UI/Spinner/Spinner';
import Logo from '../../../assets/LogoBlanco.svg';

import * as actions from '../../../store/actions';

class Login extends Component {
  state = {
    accessToken: null,
  }

  // onLoginWithFacebook = () => {
  //   this.props.onLogin(this.state.accessToken);
  // }

  // responseFacebook = (response) => {
  //   const { accessToken } = response.accessToken;
  //   this.setState({
  //       accessToken,
  //     },
  //     this.onLoginWithFacebook,
  //   );
  // }

  responseFacebook = (response) => {
    this.props.onLogin(response.accessToken);
  }

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
              <p className={cls.Title}>Queremos facilitar tu vida.</p>
              <p className={cls.SubTitle}>En NOC NOC, lo hacemos por ti</p>
            </Grid>
            <Grid item xs={12}>
              <Auth />
            </Grid>
            <Grid item xs={12} align="center">
              <div className={cls.Divider}>
                <i className="material-icons">circle</i>
                <i className="material-icons">circle</i>
              </div>
              <div className={cls.ButtonFacebookContainer}>
                <FacebookLogin
                  appId="2057031764572769"
                  autoLoad={false}
                  fields="name,email,picture"
                  // scope="public_profile"
                  callback={this.responseFacebook}
                  isMobile={false}
                  render={renderProps => (
                    <a onClick={renderProps.onClick} className={`${cls.ButtonFacebookContainer} ${cls.ButtonFacebookText}`} >
                      <img className={cls.IconFacebook} src={FacebookIcon} alt="IconFacebook" />
                      Inicia Sesión con Facebook
                    </a>
                  )}
                />
              </div>
            </Grid>
            <Grid container justify="center" className={cls.ContainerOpciones}>
              <a className={cls.PageButtonRegister} onClick={() => this.props.switchModal("loginAgent")}>ENTRA COMO AGENTE</a>
              <a className={cls.PageButtonRegister} component={Link} href="/resetear">¿OLVIDÓ SU CONTRASEÑA?</a>
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

const mapStateToDispatch = state => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => ({
  onLogin: accessToken => dispatch(actions.facebookLogin(accessToken)),
});

export default connect(mapStateToDispatch, mapDispatchToProps)(Login);