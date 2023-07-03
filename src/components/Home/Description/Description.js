// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// Component
import cls from './Description.css';
import Icon1 from '../../../assets/Icono1.png';
import Guarante from '../../../assets/Icono-04.svg'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    // backgroundColor: 'transparent',
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <Grid container align="center" justify="center" className={`${cls.Guarante} ${cls.TopSeccion}`}>
      <Grid item xs={12} sm={6} md={4}>
        <img src={Icon1} className={cls.Img} alt="Img."/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className={classes.paper} elevation={0}>
          <p item xs={12} className={cls.Text}>
            NOC NOC es una plataforma digital que tiene el propósito de generar empleo digno y ayudar a clientes a contratar servicios de forma fácil, rápida y segura.
          </p>
        </div>
      </Grid>
    </Grid>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);