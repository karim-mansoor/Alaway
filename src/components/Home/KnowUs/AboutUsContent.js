import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import cls from './KnowUs.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 130,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root} id="aboutus">
      <Grid container justify="center">
        <Grid item xs={12} sm={10}>
          <h1 className={cls.textTitle}><small className={cls.smallTitle}>---------------</small> ¿Quiénes Somos? <small className={cls.smallTitle}>---------------</small></h1>
          <p className={classes.paper}>Somos una plataforma digital innovadora y disruptiva del Ecuador que facilita a la gente contratar diferentes servicios para su hogar u oficinas. Funcionamos como un medio de conexión entre personas que necesitan contratar un servicio (clientes) y los profesionales que ofrecen el servicio (agentes). Facilitando el pago electrónico mediante un botón de pagos que acepta tarjetas de crédito o débito, garantizando una compra 100% segura. Por los servicios prestados se emiten facturas con un sistema de facturación electrónica. Los servicios ofrecidos en la plataforma cuentan con la garantía NOC NOC y todo el proceso de contratación es realizado digitalmente.</p>
        </Grid>
        <Grid item xs={12} sm={10}>
          <div className={classes.paper}>
            <h3 className={cls.Content} variant="headline" gutterBottom>¿Por qué creamos NOC NOC?</h3>
            <h5>Creemos firmemente que podemos aportar a nuestro país con ideas innovadoras, como esta, que nos permitan conectar a personas que necesitan dar sus servicios con personas que lo requieran. Nos enfocamos en dignificar y profesionalizar a las personas para que perfeccionen sus servicios; basándonos en una economía colaborativa.</h5>
            <h3 className={cls.Content} variant="headline" gutterBottom>¿Qué tipo de profesionales brindan los servicios de NOC NOC?</h3>
            <h5>Nuestra plataforma acoge a profesionales altamente calificados, quienes pasan por un filtro de selección. NOC NOC realiza capacitaciones regulares a sus agentes para brindar un servicio satisfactorio y de alta calidad. Tanto nuestros clientes como los agentes son verificados rigurosamente para formar parte de nuestra plataforma.</h5>
            <h3 className={cls.Content} variant="headline" gutterBottom>¿Por qué contratar en NOC NOC?</h3>
            <p className={cls.Typography_term}>
              Tienes varias razones para hacerlo
              <p className={cls.Typography_term_sub}>
                <b>1</b> Nuestro personal es altamente certificado y calificado.
              </p>
              <p className={cls.Typography_term_sub}>
                <b>2</b> Todos tus trabajos tienen la Garantía de NOC NOC.
              </p>
              <p className={cls.Typography_term_sub}>
                <b>3</b> Tienes facilidad y seguridad en tus pagos utilizando tarjetas de crédito o débito. Garantizando una compra 100% segura.
              </p>
              <p className={cls.Typography_term_sub}>
                <b>4</b> La facilidad de uso de la plataforma (web y app) te permite contratar un profesional desde cualquier lugar
              </p>
            </p>
            <h3 className={cls.Content} variant="headline" gutterBottom>¿Qué servicios puedo contratar?</h3>
            <h5>En nuestra página web o en nuestra aplicación se desplegarán los servicios habilitados para que puedas contratarlos, tu solo debes seleccionarlos y listo. Nuestra plataforma te permitirá contratar servicios de limpieza, jardineria, plomeria, enfermeros, profesores y más</h5>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);