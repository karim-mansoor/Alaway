import React from 'react';
import Grid from 'material-ui/Grid';
import { Typography } from 'material-ui';

// CSS
import cls from './Jumbotron.css';

const jumbotron = () => {
  return (
    <Grid container className={cls.Jumbotron} justify="center" align="center">
      <Grid item xs={12} sm={10} md={9} className={cls.findBest}>
        <Typography className={cls.Title}>
          Encuentra los mejores servicios para ti
        </Typography>
      </Grid>
    </Grid>
  );
}

export default jumbotron;