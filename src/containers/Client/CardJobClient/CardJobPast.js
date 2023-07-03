import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Avatar} from 'material-ui';
import Typography from 'material-ui/Typography';

// Css
import cls from './CardJobClient.css';
import Profile from './img/0.jpeg';

const styles = theme => ({
    paper: {
      padding: theme.spacing.unit * 1,
    },
});

function CardJob(props) {
  const { classes } = props;

  return (
    <div className={cls.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
            <Grid container alignItems="center" className={cls.CardJob}>
                
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container alignItems="center">
                            <Grid item xs={9} sm={9}>
                                <Paper className={classes.paper} elevation={0}>
                                    <div className={cls.ContainerAvatar}>
                                        <div className={cls.imgAvatar}>
                                            <Avatar aria-label="Recipe" src={Profile}></Avatar>
                                        </div>
                                        <div className={cls.NameAvatar}>
                                            <Typography variant="subheading" gutterBottom>Rainiero Romero</Typography>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Paper className={`${cls.StatuCard} ${classes.paper}`} elevation={0}>Mensual</Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container align="center">
                            <Grid item xs={12}>
                                <Paper className={`${cls.TitleCard} ${classes.paper}`} elevation={0}>
                                    Limpieza de Casa Futuro
                                </Paper>
                            </Grid>
                            <Grid item xs={12} className={cls.BordeFecha}>
                                <Paper className={classes.paper} elevation={0}>
                                    <Typography variant="title" gutterBottom className={cls.TypograFechaPrecio}>
                                        {moment(props.date).format('MMMM D h:mm:ss a').replace(/\b\w/g, l => l.toUpperCase())}
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="display3" gutterBottom className={cls.TypograFechaPrecio}>30$</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </Grid>
      </Grid>
      
    </div>
  );
}

CardJob.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (CardJob);