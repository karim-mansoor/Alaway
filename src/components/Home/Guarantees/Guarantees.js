// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

// Component
import cls from './Guarantees.css';
import Profesionales from '../../../assets/Icono2.png';
import GuaranteesAlDia from '../../../assets/Icono3.png';
import Guarante from '../../../assets/Icono4.png'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
  },
});

function Guarantees(props) {
  const { classes } = props;

  return (
    <Grid container className={cls.Guarante} align="center" justify="center">
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.paper}>
          <img src={Profesionales} alt="Profesionales" />
          <p className={cls.Text}>Personas que tienen como principal objetivo <br/> <small className={cls.small}>Tu satisfacción</small></p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.paper}>
          <img src={GuaranteesAlDia} alt="Garantias Al Dia"/>
          <p className={cls.Text}>Tú eliges el día que necesitas nuestra visita</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.paper}>
          <img className={cls.icon} src={Guarante} alt="Garantias" />
          <p className={cls.Text} id="works">Noc Noc garantiza el servicio con nuestro seguro de protección.</p>
        </div>
      </Grid>
    </Grid>
  );
}

Guarantees.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Guarantees);