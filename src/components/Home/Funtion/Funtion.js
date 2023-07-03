import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

//Component
import NumberOne from '../../../assets/nocnoc2.png';
import NumberTwo from '../../../assets/nocnoc3.png';
import NumberThree from '../../../assets/nocnoc4.png';
import NumberFour from '../../../assets/nocnoc5.png';
import cls from './Funtion.css'

class Funtion extends Component {
  render() {
    return (
      <div className={cls.stylesFuntion}>
        <h2 className={cls.textTitle}><small className={cls.smallTitle}>---------------</small>  ¿Cómo Funciona?  <small className={cls.smallTitle}>---------------</small></h2>
        <Grid container align="center" className={cls.styleContainer}>
          <Grid item xs={12} md={6}>
            <img src={NumberOne} className={cls.styleImg} alt="AppLogo" />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={NumberTwo} className={cls.styleImg} alt="AppLogo" />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={NumberThree} className={cls.styleImg} alt="AppLogo" />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={NumberFour} className={cls.styleImg} alt="AppLogo" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Funtion;