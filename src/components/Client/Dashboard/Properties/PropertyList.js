// Core Imports
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// CSS Framework Imports
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  root: {
    flexGrow: 1,
  },
  body: {
    marginTop: 40,
  },
};

const propertyList = (props) => {
  const { classes } = props;
  const propertiesRender = props.properties.map(p => (
    <Grid key={p.id} item>
      <Card className={classes.card} onClick={() => props.show(p.id)}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {p.attributes.name}
          </Typography>
          <Typography component="p">
            {p.attributes.details}
          </Typography>
          <Typography component="p">
            {p.attributes.p_street}
          </Typography>
          <Typography component="p">
            {p.attributes.s_street}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
  return (
    <div className={classes.body}>
      <Grid container className={classes.root} justify="center" spacing={0}>
        <Grid item xs={12}>
          <Button color="inherit" component={Link} to={`${props.match.path}/crear`}>Crear Propiedad</Button>
        </Grid>
        <Grid item>
          <Grid container className={classes.demo} justify="center" spacing={40}>
            {propertiesRender}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(withStyles(styles)(propertyList));
