// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

// Component
import cls from './IsTold.css'
import mood from '../../../assets/mood.png'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={cls.IsTold} justify="center">
        <Grid item xs={12} md={8} sm={12}>
          <Grid container>
            <Grid item xs={12} className={cls.TopSeccion}>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Los que dicen de NocNoc</Typography>
              </Paper>
            </Grid>
            
            <Grid container align="center" justify="center">
              <Grid item xs={12} sm={4} md={4}>
                <Paper className={classes.paper} elevation={0}>
                  <Avatar src={mood} alt="Avatar 1" className={cls.AvatarIsTold} />
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Andre Barreto</Typography>
                  <Grid item xs={12} className={cls.IsToldComentario}>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora adipisci ipsam temporibus sapiente in quidem dolores modi numquam hic odit maiores nemo fugit voluptates."
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Paper className={classes.paper} elevation={0}>
                  <Avatar src="http://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2013/11/hombreguapo.jpg" alt="AppLogo" className={cls.AvatarIsTold}/>
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Alejandro Urbina</Typography>
                  <Grid item xs={12} className={cls.IsToldComentario}>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora adipisci ipsam temporibus sapiente in quidem dolores modi numquam hic odit maiores nemo fugit voluptates."
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Paper className={classes.paper} elevation={0}>
                  <Avatar src="http://catesthill.com/wp-content/uploads/2016/01/catesthill-scandi-living-12.jpg" alt="Avatar" className={cls.AvatarIsTold} />
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Maria De Freitas</Typography>
                  <Grid item xs={12} className={cls.IsToldComentario}>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora adipisci ipsam temporibus sapiente in quidem dolores modi numquam hic odit maiores nemo fugit voluptates."
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);