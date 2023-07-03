// DEPENDENCIAS
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// COMPONENTES
import cls from './Itworks.css';
import Movil from '../../../assets/MovilNocNoc.png';
import GooglePlay from '../../../assets/GooglePlay.png';
import PlayStore from '../../../assets/AppStore.png';

class Itworks extends Component {
  render () {
    return (
      <div className={cls.Itworks}>
      	<Grid container align='center' alignItems='center'>
          <Grid item xs={12} className={cls.TopSeccion}>
            <Typography variant="headline" gutterBottom className={cls.Typogra}>Cómo Funciona</Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={`${cls.Block} ${cls.alinear}`}>
            <img src={Movil} className={cls.Movil} alt="Movil" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container className={cls.ResponsiveSubheading}>
              <Grid item xs={1} sm={1}>
                <i className={`${cls.iconItworks} ${"material-icons"}`}>radio_button_unchecked</i>
              </Grid>
              <Grid item xs={11} sm={11}>
                <Typography variant="subheading" gutterBottom className={cls.Subheading}>Select the one you want to complete</Typography>
              </Grid>
              <Grid item xs={1} sm={1}>
                <i className={`${cls.iconItworks} ${"material-icons"}`}>radio_button_unchecked</i>
              </Grid>
              <Grid item xs={11} sm={11}>
                <Typography variant="subheading" gutterBottom className={cls.Subheading}>Select the one you want to complete</Typography>
              </Grid>
              <Grid item xs={1} sm={1}>
                <i className={`${cls.iconItworks} ${"material-icons"}`}>radio_button_unchecked</i>
              </Grid>
              <Grid item xs={11} sm={11}>
                <Typography variant="subheading" gutterBottom className={cls.Subheading}>Select the one you want to complete</Typography>
              </Grid>
              <Grid item xs={1} sm={1}>
                <i className={`${cls.iconItworks} ${"material-icons"}`}>radio_button_unchecked</i>
              </Grid>
              <Grid item xs={11} sm={11}>
                <Typography variant="subheading" gutterBottom className={cls.Subheading}>Select the one you want to complete</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <img src={GooglePlay} className={cls.ButtonDownload} alt="GooglePlay" />
                  <img src={PlayStore} className={cls.ButtonDownload} alt="PlayStore" />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} className={`${cls.None} ${cls.alinear}`}>
            <img src={Movil} className={cls.Movil} alt="Movil" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Itworks;