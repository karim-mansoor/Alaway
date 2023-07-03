// Dependencias
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  Button,
  Grid,
  Modal,
  Avatar,
} from 'material-ui';

// Component
import Logo from './img/logo.svg';
import cls from './MenuResponsive.css';
import Registro from '../../components/Client/Register/Register';
import Login from '../../components/Client/Login/Login';
import LoginAgent from '../../containers/Agent/Login/Login';

const styleAnchor = {
  textDecoration: 'none',
  color: '#0069A7'
};

const styles = theme => ({
  flex: {
    flex: 1,
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
});

class MenuAppBar extends React.Component {
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
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    let menu = null;
    if (this.props.auth) {
      menu = (
        <AppBar topfixed="true" className={cls.AppBar} elevation={0}>
          <Toolbar className={cls.Toolbar}>
            <Typography variant="title" color="secondary" className={cls.flex}>
              <Link to="/">
                <img src={Logo} className={cls.Applogo} alt="logo" />
              </Link>
            </Typography>
            <MenuItem className={cls.MenuItem} component={Link} to="/cliente">
              Dashboard
            </MenuItem>
            <MenuItem className={cls.MenuItem} component={Link} to="/cliente/trabajos">
              Mis Trabajos
            </MenuItem>
            <div>
              <IconButton
                className={cls.Avatar}
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
              {this.props.profile === null ? (
                <Avatar>
                  {localStorage.getItem('first_name').charAt(0)}{localStorage.getItem('last_name').charAt(0)}
                </Avatar>
              ) : (
                <Avatar
                  src={this.props.profile}/>
                )}
                <i className={`${cls.IconAvatarMenu} ${"material-icons"}`}>keyboard_arrow_down</i>
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
                <MenuItem className={cls.SubMenuItem} onClick={this.handleClose} component={Link} to="/cliente/perfil/info">Mi Perfil</MenuItem>
                <MenuItem className={cls.SubMenuItem} onClick={this.props.logout} component={Link} to="/">
                  Cerrar sesión
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      )
    } else {
      menu = (
        <AppBar style={{backgroundColor: 'transparent'}} elevation={0}>
          <Toolbar style={{ backgroundColor: this.state.bgColor }}>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <AnchorLink style={ styleAnchor } href='/'>
                <img src={Logo} className={cls.Applogo} alt="logo" />
              </AnchorLink>
            </Typography>
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
                  <NavLink className={cls.styleAnchor} to="/">Regístrate</NavLink>
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

export default withRouter(withStyles(styles)(MenuAppBar));