// Dependencias
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui';
import Modal from 'material-ui/Modal';
import Carousel from 'nuka-carousel';

// Component
import cls from './Services.css';
import ServiceOne from '../../../assets/service1.png';
import ServiceTwo from '../../../assets/service2.png';
import ServiceThree from '../../../assets/service3.png';
import Registro from '../../../components/Client/Register/Register';
import Login from '../../../components/Client/Login/Login';
import LoginAgent from '../../../containers/Agent/Login/Login';

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: 'transparent',
    boxShadow: theme.shadows[5],
  },
});

class Services extends Component {
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

  render(){
    const { classes } = this.props;
    return (
      <Grid container direction="row" alignItems="center" justify="center" className={cls.stylesServices}>
        <Grid item xs={10} md={6}>
          <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
              <a className={cls.OnClickCarousel} onClick={previousSlide}>{"<"}</a>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <a className={cls.OnClickCarousel} onClick={nextSlide}>{">"}</a>
            )}
            autoplay={true}
            autoplayReverse={true}
            className={cls.Carousel}
          >
            <div className={cls.styleImg}>
              <img src={ServiceOne} onClick={() => this.handleOpen("login")} alt="AppLogo" />
            </div>
            <div className={cls.styleImg}>
              <img src={ServiceTwo} onClick={() => this.handleOpen("login")} alt="AppLogo" />
            </div>
            <div className={cls.styleImg}>
              <img src={ServiceThree} onClick={() => this.handleOpen("login")} alt="AppLogo" />
            </div>
          </Carousel>
        </Grid>
        <Modal
          open={this.state.openRegister}
          onClose={this.handleClose}
        >
          <div className={`${cls.Modal} ${classes.paper}`}>
            <Registro close={this.handleClose} />
          </div>
        </Modal>
        <Modal
          open={this.state.openLogin}
          onClose={this.handleClose}
        >
          <div className={`${cls.Modal} ${classes.paper}`}>
            <Login className={cls.Modal} close={this.handleClose} switchModal={this.handleOpen}/>
          </div>
        </Modal>
        <Modal
          open={this.state.openAgentLogin}
          onClose={this.handleClose}
        >
          <div className={`${cls.Modal} ${classes.paper}`}>
            <LoginAgent className={cls.Modal} close={this.handleClose} />
          </div>
        </Modal>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(Services))
