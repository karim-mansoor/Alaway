import React from 'react';

// Components
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from 'material-ui';

// Css
import cls from './Service.css';

const service = props => {
  return (
    <Grid className={cls.Item} onClick={() => props.clicked(props.id)} item xs={11} sm={6} md={4} lg={4}>
      <Card className={cls.Card}>
        <CardMedia
          className={cls.Media}
          image={props.image}
          title="Elige el tipo de servicio que necesitas"
        />
        <CardContent className={cls.CardContent}>
          <Typography
            className={cls.Typo}
            gutterBottom
            variant="title">
            {props.name}
          </Typography>
        </CardContent>
      </Card>      
    </Grid>
  );
}

export default service;