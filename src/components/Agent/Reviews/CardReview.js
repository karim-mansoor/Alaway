import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  Paper,
  Grid,
  Avatar,
} from 'material-ui';
import Image from '../../../assets/avatar-default-300x300.jpg'
import cls from './Review.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CardReview(props) {
  const { classes } = props;
  return (
    <div className={`${cls.Review} ${classes.root}`}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={24}>
              <Grid item xs={6} sm={2}>
                <Paper className={classes.paper}>
                  {props.avatar === null ? (
                    <Avatar aria-label="Recipe" src={Image}></Avatar>
                  ) : (
                    <Avatar aria-label="Recipe" src={props.avatar}></Avatar>
                  )}
                </Paper>
              </Grid>
              <Grid item xs={6} sm={10}>
                <Paper className={classes.paper}>{props.firstName} {props.lastName}</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>{props.commentCard}</Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CardReview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardReview);