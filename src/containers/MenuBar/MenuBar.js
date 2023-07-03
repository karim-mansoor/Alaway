// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { withStyles } from 'material-ui/styles';
import {
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  Avatar,
  Modal,
  Grid,
  Badge
} from 'material-ui';

// Component
import cls from './MenuBar.css';
import Logo from './img/logo.png';
import LogoAzul from './img/logo.svg'
import Registro from '../../components/Client/Register/Register';
import Login from '../../components/Client/Login/Login';
import LoginAgent from '../../containers/Agent/Login/Login';

import * as actions from '../../store/actions';

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: 'transparent',
    boxShadow: theme.shadows[5],
  },
});

class AppBarMenu extends Component {
  state = {
    anchorEl: null,
    anchorElNotification: null,
    openLogin: false,
    openRegister: false,
    openAgentLogin: false,
    open: false,
    openNotification: false,
  }

  componentDidMount() {
    this.props.onNotificationsCustomer(localStorage.getItem('token'));
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleNotification = event => {
    this.setState({ anchorElNotification: event.currentTarget });
  };

  handleNotificationReadCustomer = (event, id, job_id) => {
    event.preventDefault();
    let response 
    response = this.props.onNotificationsCustomerRead(localStorage.getItem('token'), id, job_id);
    
    response.then((res) => {
      this.props.history.push(`/cliente/trabajo/${job_id}`);
      this.handleClose();
      window.location.reload()
    })
    .catch((err) => {
      console.log('error')
    });
  }

  handleOpen = (modal) => {
    this.setState({ openNotification: true });
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
      anchorElNotification: false,
      open: false
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { anchorElNotification } = this.state;
    const open = Boolean(anchorEl);
    const openNotification = Boolean(anchorElNotification);
    const { classes } = this.props;
    let menu = null;
    let notifiCustomer = null;
    let badgeContentState = null;
    if (this.props.notifiCustomer.length > 0) {
      if(this.props.notifiCustomer.length > 9) {
        badgeContentState = '9+'
      } else {
        badgeContentState = this.props.notifiCustomer.length
      }
      notifiCustomer = this.props.notifiCustomer.map(notification => (
        <ul className={cls.notificationList} id="notification-list-transactions">
          <li className={cls.notificationMessage} data-notification="" key={notification.id}>
            {notification.attributes.job.data ? (
              <a className={cls.notificationLink}
                onClick={(event) => this.handleNotificationReadCustomer(event, notification.id, notification.attributes.job.data.id)}
              >
                <p className={cls.notificationContent}>{notification.attributes.text}</p>
              </a>
            ) : (
              <p></p>
            )}
          </li> 
        </ul>
      ));
    }
    if (this.props.auth) {
      menu = (
        <AppBar topfixed="true" className={cls.AppBar} elevation={0}>
          <Toolbar className={cls.Toolbar}>
            <p className={cls.flex}>
              <Link to="/">
                <img src={LogoAzul} className={cls.Applogo} alt="logo" />
              </Link>
            </p>
            <MenuItem className={`${cls.DisplayMenuItem} ${cls.MenuItem}`} component={Link} to="/cliente">
              Inicio
            </MenuItem>
            <MenuItem className={`${cls.DisplayMenuItem} ${cls.MenuItem}`} component={Link} to="/cliente/trabajos">
              Trabajos
            </MenuItem>
            <div>
              <IconButton
                aria-label="4 pending messages"
                aria-owns={openNotification ? 'menu-appbar-notification' : null}
                aria-haspopup="true"
                onClick={this.handleNotification}
              >
                {this.props.notifiCustomer.length === 0 ? (
                  <Badge badgeContent=''>
                    <i className="fa notification-icons fa-bell-o"></i>
                  </Badge>
                ):(
                  <Badge badgeContent={badgeContentState} color="primary">
                    <i className="fa notification-icons fa-bell-o"></i>
                  </Badge>
                )}
              </IconButton>
              <Menu
                className={cls.SubMenu}
                id="menu-appbar-notification"
                anchorEl={anchorElNotification}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openNotification}
                onClose={this.handleClose}
              >
                <div className={`${cls.notificationBox} ${cls.show} ${cls.arrowNotificationTip}`}>
                  {notifiCustomer}
                </div>
              </Menu>
            </div>
            <div>
              <IconButton
                className={cls.Avatar}
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
              {this.props.profile === 'null' ? (
                <Avatar className={cls.IconUser}>
                  {(localStorage.getItem('first_name').charAt(0)).toUpperCase()}{(localStorage.getItem('last_name').charAt(0)).toUpperCase()}
                </Avatar>
              ) : (
                <Avatar
                  className={cls.IconUser}
                  src={this.props.profile}/>
              )}
                <i className={`${cls.IconAvatarMenuResponsive} ${"caret"}`}></i>
                <a className={`${cls.MenuItem} ${cls.Perfil} ${cls.DisplayNo}`}>Mi perfil <span className="caret"></span></a>
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
                <a className={`${cls.Display} ${cls.SubMenuItem}`} component={Link} href="/cliente">Inicio</a>
                <a className={`${cls.Display} ${cls.SubMenuItem}`} component={Link} href="/cliente/trabajos">Trabajos</a>
                <a className={cls.SubMenuItem} onClick={this.handleClose} component={Link} href="/cliente/perfil/info">Mi Perfil</a>
                <a className={cls.SubMenuItem} onClick={this.props.logout} component={Link} href="/">Cerrar sesión</a>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      )
    } else {
      menu = (
        <nav>
          <Toolbar className={cls.Toolbar}>
            <AnchorLink className={cls.flex} href="#main"><img src={Logo} className={cls.Applogo} alt="logo" /></AnchorLink>
            <MenuItem>
              <AnchorLink className={cls.styleAnchor} href="#works">¿Cómo Funciona?</AnchorLink>
            </MenuItem>
            <MenuItem>
              <AnchorLink className={cls.styleAnchor} href="#services">Servicios</AnchorLink>
            </MenuItem>
            <MenuItem>
              <Button className={cls.styleAnchor} component={Link} to="/agente/registro">Únete a Noc Noc</Button>
            </MenuItem>
            <MenuItem className={cls.MenuItem}>
              <Button className={cls.pageButtonActive} onClick={() => this.handleOpen("login")} >Iniciar Sesión</Button>
            </MenuItem>
          </Toolbar>
        </nav>
      );
    }
    return (
      <div className={`${cls.root} ${cls.NavBar}`}>
        {menu}
        <Grid container justify="center" className={cls.style}>
          <Grid item xs={12} md={8} sm={12}>
            <Grid container align="center">
              <Grid item xs={12} sm={4} align="right">
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
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onNotificationsCustomer: (token) => dispatch(actions.notificationsCustomer(token)),
  onNotificationsCustomerRead: (token, id, job_id) => dispatch(actions.notificationsCustomerRead(token, id, job_id))
});

const mapStateToProps = state => ({
  notifiCustomer: state.notificationsCustomer.notificationsCustomer,
});

const MenuAppBar = withStyles(styles)(AppBarMenu);

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(MenuAppBar));