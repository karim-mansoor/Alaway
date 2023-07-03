import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

//Component
import GooglePlay from '../../../assets/AppPlayStore.svg';
import AppStore from '../../../assets/AppStore.svg';
import Fondo from '../../../assets/MovilNocNoc2.png';
import cls from './Download.css';

const styles = theme => ({
  paper: {
    backgroundColor: 'transparent',
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
  },
});

function Download(props) {
  const { classes } = props;

  return (
    <div className={`${cls.Download} ${cls.stylesDownload}`}>
      <Grid container justify="center">
        <Grid item xs={12} md={9} className={cls.Download}>
          <Paper elevation={0}>
            <Grid container alignItems="center">
              <Grid item xs={12} sm={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography className={cls.SubTitle} variant="headline" gutterBottom>
                    Descarga Noc Noc desde la tienda de tu Smartphone
                  </Typography>
                  <Grid container>
                    <Grid item xs={12}>
                      <Paper className={classes.paper} elevation={0}>
                        <Grid container className={cls.ContentDownload} align="center">
                          <Grid item xs={6} sm={4} md={6}>
                            <a href="https://play.google.com/store/apps/details?id=com.nocnoc.app" target="_black"><img className={cls.IconDownload} src={GooglePlay} alt="GoolglePlay" /></a>
                          </Grid>
                          <Grid item xs={6} sm={4} md={6}>
                            <a href="https://apps.apple.com/ec/app/noc-noc/id1460598374" target="_black"><img className={cls.IconDownload} src={AppStore} alt="App Store" /></a>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} align="right">
                <img className={cls.Img} src={Fondo} alt="celular" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Download);