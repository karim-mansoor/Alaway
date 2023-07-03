// DEPENDENCIAS
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// COMPONENTES
import cls from './Itworks.css';
import Movil from '../../../assets/MovilNocNoc.png';
import GooglePlay from '../../../assets/GooglePlay.png';
import PlayStore from '../../../assets/AppStore.png';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
  },
});

class Itworks extends Component {
  render () {
  	const { classes } = this.props;
    return (
      <div className={cls.Itworks}>
      	<Grid container align='center' alignItems='center'>
          <Grid item xs={12} className={cls.TopSeccion}>
            <Paper className={classes.paper} elevation={0}>
            	<Typography variant="headline" gutterBottom className={cls.Typogra}>Cómo Funciona</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={0}>
              <img src={Movil} className={cls.Movil} alt="Movil" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={0}>
              <Grid container align='left'>
                <Grid item xs={1} sm={1}>
                  <Paper className={classes.paper} elevation={0}>
                    <i className={`${cls.iconItworks} ${"material-icons"}`}>label_important</i>
                  </Paper>
                </Grid>
                <Grid item xs={11} sm={11}>
                  <Paper className={classes.paper} elevation={0}>
                    <Typography variant="subheading" gutterBottom className={cls.Subheading}>Lorem ipsum dolor. Lorem ipsum dolor.</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Paper className={classes.paper} elevation={0}>
                    <i className={`${cls.iconItworks} ${"material-icons"}`}>label_important</i>
                  </Paper>
                </Grid>
                <Grid item xs={11} sm={11}>
                  <Paper className={classes.paper} elevation={0}>
                    <Typography variant="subheading" gutterBottom className={cls.Subheading}>Lorem ipsum dolor. Lorem ipsum dolor.</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Paper className={classes.paper} elevation={0}>
                    <i className={`${cls.iconItworks} ${"material-icons"}`}>label_important</i>
                  </Paper>
                </Grid>
                <Grid item xs={11} sm={11}>
                  <Paper className={classes.paper} elevation={0}>
                    <Typography variant="subheading" gutterBottom className={cls.Subheading}>Lorem ipsum dolor. Lorem ipsum dolor.</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Paper className={classes.paper} elevation={0}>
                    <i className={`${cls.iconItworks} ${"material-icons"}`}>label_important</i>
                  </Paper>
                </Grid>
                <Grid item xs={11} sm={11}>
                  <Paper className={classes.paper} elevation={0}>
                    <Typography variant="subheading" gutterBottom className={cls.Subheading}>Lorem ipsum dolor. Lorem ipsum dolor.</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper} elevation={0}>
                    <div>
                      <img src={GooglePlay} className={cls.ButtonDownload} alt="GooglePlay" />
                      <img src={PlayStore} className={cls.ButtonDownload} alt="PlayStore" />
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles) (Itworks);