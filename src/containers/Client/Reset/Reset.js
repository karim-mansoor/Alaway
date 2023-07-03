import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import cls from './Reset.css';
import Logo from '../../../assets/Logo.svg'
import ResetPassword from '../../../components/Client/Reset/Reset'
import MenuResponsive from '../../MenuBar/MenuResponsiveReset'

class Reset extends Component {
  render() {
    return (
      <div>
        <MenuResponsive />
        <div className={cls.Reset}>
          <Grid container className={cls.ResetContainer} justify="center">
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                 <Button className={cls.pageButtonLogin} component={Link} to="/" >
                  <img src={Logo} className={cls.Applogo} alt="logo" />
                 </Button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Recuperar contraseña cliente</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <ResetPassword />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={cls.paper} elevation={0}>
                <Button className={cls.pageButtonLogin} component={Link} to="/registro" >¿NO TIENES UNA CUENTA?</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={cls.paper} elevation={0}>
                <Button className={cls.pageButtonLogin} component={Link} to="/" >REGRESAR</Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default (Reset);
