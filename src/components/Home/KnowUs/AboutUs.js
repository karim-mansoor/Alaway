// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
// Component
import classes from '../../../index.css';
import MenuBar from '../../../containers/MenuBar/MenuBarPolicies';
import MenuResponsive from '../../../containers/MenuBar/MenuResponsivePolicies';
import AboutUsContent from './AboutUsContent.js';
import Footer from '../Footer/Footer';

class AboutUs extends Component {
  render() {
    return (
      <Grid container justify="center">
        <div className={classes.MenuBar}><MenuBar /></div>
        <div className={classes.MenuNone}><MenuResponsive /></div>
        <Grid item xs={12} sm={7} className={classes.PoliciesContent}>
          <AboutUsContent />
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default AboutUs;