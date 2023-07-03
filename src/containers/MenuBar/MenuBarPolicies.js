// Dependencias
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MenuItem,
  AppBar,
  Toolbar,
  Button,
  Modal,
  Grid
} from 'material-ui';

// Component
import cls from './MenuBar.css';
import Logo from './img/logo.png';
import Registro from '../../components/Client/Register/Register';
import Login from '../../components/Client/Login/Login';
import LoginAgent from '../../containers/Agent/Login/Login';

class AppBarMenu extends Component {
  state = {
    anchorEl: null,
    openLogin: false,
    open: false
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

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

  render() {
    let menu = null;
    if (!this.props.auth) {
      menu = (
        <AppBar topfixed="true" className={cls.AppBarKnowUs} elevation={0}>
          <Toolbar className={cls.Toolbar}>
            <p className={cls.flex}><NavLink to="/"><img src={Logo} className={cls.Applogo} alt="logo" /></NavLink></p>
            <MenuItem>
              <NavLink className={cls.styleAnchor} to="/">Regístrate</NavLink>
            </MenuItem>
            <MenuItem>
              <Button className={cls.styleAnchor} onClick={() => this.handleOpen("login")} >Iniciar Sesión</Button>
            </MenuItem>
          </Toolbar>
        </AppBar>
      )
    }
    return (
      <div className={cls.root}>
        {menu}
        <Grid container justify="center" className={cls.style}>
          <Grid item xs={12} md={8} sm={12}>
            <Grid container align="center">
              <Grid item xs={12} sm={4} align="right">
              <Modal
                  open={this.state.openRegister}
                  onClose={this.handleClose}
                >
                  <div className={cls.Modal}>
                    <Registro close={this.handleClose} />
                  </div>
                </Modal>
                <Modal
                  open={this.state.openLogin}
                  onClose={this.handleClose}
                >
                  <div className={cls.Modal}>
                    <Login className={cls.Modal} close={this.handleClose} switchModal={this.handleOpen}/>
                  </div>
                </Modal>
                <Modal
                  open={this.state.openAgentLogin}
                  onClose={this.handleClose}
                >
                  <div className={cls.Modal}>
                    <LoginAgent className={cls.Modal} close={this.handleClose} />
                  </div>
                </Modal>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AppBarMenu;