import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import FormGroup from 'material-ui/Form/FormGroup';
import FormControlLabel from 'material-ui/Form/FormControlLabel';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
};

class CheckboxLabels extends React.Component {
  state = {
    checkedA: true,
    checkedB: false,
    checkedC: false,
    checkedD: true,
  };

  render() {

    return (
      <FormGroup row>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedA}
                    value="checkedA"
                    color="primary"
                  />
                }
                label="Servicio 1"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Servicio 2"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedC}
                    value="checkedC"
                    color="primary"
                  />
                }
                label="Servicio 3"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedD}
                    value="checkedD"
                    color="primary"
                  />
                }
                label="Servicio 4"
              />
            </Paper>
          </Grid>
        </Grid>
      </FormGroup>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxLabels);