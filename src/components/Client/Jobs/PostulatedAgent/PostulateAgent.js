// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Paper, Grid, Avatar, Typography} from 'material-ui';

// Componentes
import cls from './PostulateAgent.css'

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

function PostulateAgent(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <div className={cls.AvatarAgent}>
                    <Avatar className={cls.AvatarMargin}>
                    RR
                    </Avatar>
                    <Typography className={cls.Name} variant="subheading">
                        Rainiero Romero
                    </Typography>
                    <Typography className={cls.Name} variant="caption">
                        estrellas
                    </Typography>
                    <Typography className={cls.Name} variant="caption">
                        10 Reviews
                    </Typography>
                </div>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

PostulateAgent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostulateAgent);