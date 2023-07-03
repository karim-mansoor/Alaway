// DEPENDENCIAS
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// COMPONENTES
import cls from './Work.css'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
  },
});

class Work extends Component {
  render () {
  	const { classes } = this.props;
    return (
      <div className={cls.Work}>
        <Grid container align='center' justify='center'>
          <Grid item xs={12} className={cls.TopSeccion}>
            <Paper className={classes.paper} elevation={0}>
              <Typography variant="headline" gutterBottom className={cls.Typogra}>Trabaja con NocNoc</Typography>
            </Paper>
          </Grid>
      	  <Grid container className={cls.TopSeccionCirculos} align='center' justify='center'>
            <Grid item xs={12} sm={3}>
              <Paper className={`${cls.circulo} ${classes.paper}`} elevation={1}>
                <i className={`${cls.iconWork} ${"material-icons"}`}>work</i>
                <Typography variant="subheading" gutterBottom className={cls.Subheading}>Encuentra el trabajo que más te guste</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={`${cls.circulo} ${classes.paper}`} elevation={1}>
                <i className={`${cls.iconWork} ${"material-icons"}`}>monetization_on</i>
                <Typography variant="subheading" gutterBottom className={cls.Subheading}>Al precio que más desees.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={`${cls.circulo} ${classes.paper}`} elevation={1}>
                <i className={`${cls.iconWork} ${"material-icons"}`}>insert_invitation</i>
                <Typography variant="subheading" gutterBottom className={cls.Subheading}>Ajenda Servicios</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles) (Work);