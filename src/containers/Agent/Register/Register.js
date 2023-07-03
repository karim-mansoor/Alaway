// DEPENDENCIAS
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Paper} from 'material-ui';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// COMPONENTES
import AppLogo from '../../../assets/LogoBlanco.svg';
import Form from '../Form/Form';

import cls from './Register.css';

class Register extends Component {
  render () {
    return (
      <Grid container className={cls.Registro} justify="flex-end">
        {/* <Grid item xs={12} sm={6}>
          <Paper className={cls.PaperStile} elevation={0}>
            <Grid container>
              <Grid item xs={12}>
                <Paper className={cls.PaperStile} elevation={0}>
                  <Button component={Link} to="/" >
                    <img src={AppLogo} className={cls.logo} alt="logo" />
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={cls.PaperStile} elevation={0}>
                  <Typography variant="headline" gutterBottom className={cls.Typogra}>Bienvenidos a Noc Noc, un lugar donde tu decides cuando trabajar</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <Paper className={cls.PaperStile} elevation={0}>
            <Grid container justify="center">
              <Grid item xs={11} sm={6}>
                <Paper className= {`${cls.Form} ${cls.PaperStile}`} elevation={0}>
                  <Form />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Register;