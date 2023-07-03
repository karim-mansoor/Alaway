// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
// Component
import classes from '../../../index.css';
import MenuBar from '../../../containers/MenuBar/MenuBarPolicies';
import MenuResponsive from '../../../containers/MenuBar/MenuResponsivePolicies';
import TermsContent from './TermsContent.js';
import Footer from '../Footer/Footer';

class Terms extends Component {
  render() {
    return (
      <Grid container justify="center">
        <div className={classes.MenuBar}><MenuBar /></div>
        <div className={classes.MenuNone}><MenuResponsive /></div>
        <Grid item xs={12} sm={7} className={classes.PoliciesContent}>
          <TermsContent />
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default Terms;