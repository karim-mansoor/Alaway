// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

// Component
import cls from './Testimonio.css'
import Testimonio1 from '../../../assets/testimonio1.png'
import Testimonio2 from '../../../assets/testimonio2.png'
import Testimonio3 from '../../../assets/testimonio3.png'

class Testimonio extends Component {
  render() {
    return (
      <Grid container className={cls.stylesTestimonio} alignContent="center" justify="center">
        <Grid item xs={12} sm={10}>
          <div className={cls.imgTestimonio1}>
            <img className={cls.imgTestimonio} src={Testimonio1} alt="AppLogo" />
          </div>
          <div className={cls.imgTestimonio2}>
            <img className={cls.imgTestimonio} src={Testimonio2} alt="AppLogo" />
          </div>
          <div className={cls.imgTestimonio3}>
            <img className={cls.imgTestimonio} src={Testimonio3} alt="AppLogo" />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Testimonio;