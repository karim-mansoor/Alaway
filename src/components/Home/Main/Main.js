// Dependencias
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

// Component
import cls from './Main.css';
import Main_Imagen from '../../../assets/main.png';
import Main_Imagen_2 from '../../../assets/main_2.png';
import Registro from '../../../components/Client/Register/Register';
import Login from '../../../components/Client/Login/Login';
import LoginAgent from '../../../containers/Agent/Login/Login';

class Main extends Component {
  state = {
    openRegister: false,
    openLogin: false,
    openAgentLogin: false,
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
    return (
      <div className={cls.Main}>
        <Grid container justify="center" className={cls.style}>
          <Grid item xs={12} md={8} sm={12}>
            <Grid container align="center">
              <Grid item xs={12} sm={6}>
                <img src={Main_Imagen} className={cls.ImgMain}  alt="Main imagen"/>
                <button className={cls.pageButtonActive} onClick={() => this.handleOpen("register")}>Regístrate</button>
                <button className={cls.pageButton} onClick={() => this.handleOpen("login")} >Iniciar Sesión</button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img src={Main_Imagen_2} className={cls.ImgMain_2} alt="Main imagen"/>
              </Grid>
              <Grid item xs={12} sm={6} align="right">
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

export default Main
