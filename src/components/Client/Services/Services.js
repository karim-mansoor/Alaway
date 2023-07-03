import React from 'react';

// Componentes
import Grid from 'material-ui/Grid';
import {
  Typography,
} from 'material-ui';
import Service from './Service/Service';

import cls from './Services.css';

const services = props => {
  const services = props.services.map(service => (
    <Service
      clicked={props.clicked}
      key={service.id}
      id={service.id}
      name={service.attributes.name}
      image={service.attributes.image.url}/>
  ));
  return (
    <Grid container className={cls.Services} justify="center">
      <Grid item xs={12} sm={10} md={9}>
        <Typography className={cls.Title} variant="headline">
          Servicios Recomendados
        </Typography>
        <Grid container spacing={16} className={cls.Items}>
          {services}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default services;
