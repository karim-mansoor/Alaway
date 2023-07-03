import React, { Component } from 'react';
import { withStyles } from 'material-ui';

import {
  TextField,
  Grid,
  Paper,
} from 'material-ui';

import cls from './UpdatedPassword.css'

const styles = theme => ({
  flexGrow: 1,
  root: {
  },
  paper: {
    padding: theme.spacing.unit * 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 520,
    margin: 10,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapInputError: {
    borderRadius: 4,
    border: '1px solid #b80808',
    fontSize: 16,
    padding: '10px 12px',
    margin: 10,
    width: 520,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

class UpdatePassword extends Component {
  render () {
    const { classes } = this.props;
    const formElementsArray = [];
    for (let key in this.props.controls) {
      formElementsArray.push({
        id: key,
        config: this.props.controls[key]
      });
    }
    let form = (
      <form onSubmit={this.props.submitHandler}>
        <Grid container>
          <Grid item xs={12}>
            <Paper elevation={0} className={cls.InputText}>
              {formElementsArray.map(formElement => (
                <Grid key={formElement.id} item xs={12}>
                  <Grid container justify="center">
                    <TextField 
                      key={formElement.id}
                      type={formElement.config.elementConfig.type}
                      placeholder={formElement.config.label}
                      value={formElement.config.value}
                      onChange={(event) => this.props.inputChangedHandler(event, formElement.id)}
                      InputProps={{
                        disableUnderline: true,
                        classes: {
                          root: classes.bootstrapRoot,
                          input: !this.props.controls[`${formElement.id}`].valid && this.props.controls[`${formElement.id}`].touched ? 
                          classes.bootstrapInputError : 
                          classes.bootstrapInput,
                        },
                      }}
                      InputLabelProps={{
                        shrink: true,
                        className: classes.bootstrapFormLabel,
                      }}
                    />
                  </Grid>
                </Grid>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0}>
              <button type="submit" variant="raised" className={cls.pageButton}>RECUPERAR</button>
            </Paper>
          </Grid>
        </Grid>          
      </form>
    );
    return (
      <div>
        {form}
      </div>
    );
  }
}

export default withStyles(styles)(UpdatePassword);