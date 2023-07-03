// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// Component
import cls from './Aside.css';

class Aside extends Component {
  render() {
    return (
      <div>
        <Grid container className={cls.Aside} direction={'column'} justify={'center'} align={'center'}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item xs={12} sm={12}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="caption" gutterBottom className={cls.Caption}>Lorem ipsum dolor sit, consectetur adipisicing elit.</Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <i className={`${cls.iconAside} ${"material-icons"}`}>computer</i>
                    <Typography variant="caption" gutterBottom className={cls.TextIconContent}>Regístrate en linea</Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button className={cls.styleButton} >
                      <AnchorLink className={cls.styleLink} href="#RegistreAgente">Regístrate AHORA</AnchorLink>
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <i className={`${cls.iconAside} ${"material-icons"}`}>build</i>
                    <Typography variant="caption" gutterBottom className={cls.TextIconContent}>Comience Ahora</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Aside;