// Dependencias
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import {
  Button,
  Grid,
  Modal,
} from 'material-ui';

// Component
import Logo from './img/logo.svg';
import cls from './MenuResponsive.css';
import Registro from '../../components/Client/Register/Register';
import Login from '../../components/Client/Login/Login';
import LoginAgent from '../Agent/Login/Login';

class MenuAppBarResponsive extends React.Component {
  state = {
    anchorEl: null,
    openLogin: false,
    openRegister: false,
    openAgentLogin: false,
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
      anchorEl: null,
    });
  };

  handleScroll = () => {
    const html = document.documentElement;
    if (html.scrollTop >= 100) {
      this.setState({ bgColor: '#fff' });
    } else {
      this.setState({ bgColor: '#fff' });
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    let menu = null;
    if (!this.props.auth) {
      menu = (
        <AppBar style={{backgroundColor: 'transparent'}} elevation={0}>
          <Toolbar style={{ backgroundColor: this.state.bgColor }}>
            <a className={cls.flex} href="/"><img src={Logo} className={cls.Applogo} alt="logo" /></a>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                className={cls.SubMenu}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem style={{height: '13px', paddingLeft: '10px', fontFamily: 'Arial', backgroundColor: 'transparent'}}>
                  <a className={cls.styleAnchor} href="/">Regístrate</a>
                </MenuItem>
                <Button className={cls.styleAnchorButton} onClick={() => this.handleOpen("login")} >Iniciar Sesión</Button>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      );
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

export default MenuAppBarResponsive;