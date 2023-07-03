import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Avatar} from 'material-ui';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

// Css
import cls from './CardJobClient.css';

const styles = theme => ({
    paper: {
      padding: theme.spacing.unit * 1,
    },
});

function CardJob(props) {
  const { classes } = props;
  let services = null;
  let frequency = null;
  if (props.job_details) {
    services = props.job_details.map(detail => {
      if (detail.service.type_service === 'base') {
        return detail.service.name
      }
      return null;
    })
  };
  if (props.frequency === 'one_time') {
    frequency = 'Una vez';
  } else if (props.frequency === 'weekly') {
    frequency = 'Semanal';
  } else if (props.frequency === 'fortnightly') {
    frequency = 'Quincenal';
  } else if (props.frequency === 'monthly') {
    frequency = 'Mensual';
  };
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
                          {props.avatar === null ? (
                            <Avatar aria-label="Recipe">{props.job.attributes.customer.first_name.charAt(0).toUpperCase()}{props.job.attributes.customer.last_name.charAt(0).toUpperCase()}</Avatar>
                          ) : (
                            <Avatar aria-label="Recipe" src={props.avatar}></Avatar>
                          )}
                        </div>
                        <div className={cls.NameAvatar}>
                          <Typography variant="subheading" gutterBottom>{props.first_name} {props.last_name}</Typography>
                        </div>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <Paper className={`${cls.StatuCard} ${classes.paper}`} elevation={0}>{frequency}</Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <Grid container align="center">
                  <Grid item xs={12}>
                    <Paper className={`${cls.TitleCard} ${classes.paper}`} elevation={0}>
                      {services}
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
                    <Typography variant="display3" gutterBottom className={cls.TypograFechaPrecio}>{props.total}$</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={`${cls.pageButtonJobCurrentDetalles} ${classes.paper}`}>
                <Grid container align="center">
                  <Grid item xs={12}>
                    <Button className={cls.ButtonDetalles} fullWidth >VER DETALLES</Button>
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