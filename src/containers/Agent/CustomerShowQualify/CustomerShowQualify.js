// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Paper,
  Grid,
  TextField,
  Typography,
  } from 'material-ui';

// Componentes
import cls from './CustomerShowQualify.css';
import * as actions from '../../../store/actions';
import Rating from 'react-rating';

class CustomerShowQualify extends Component {
  state = {
    reviewForm: {
      comment: {
        label: 'Comentario',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      qualification: {
        label: 'Calificación',
        value: 0,
        validation: {
          required: true,
        },
        valid: false,
        errorText: null,
      }
    },
    formIsValid: false,
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.reviewForm,
      [controlName]: {
        ...this.state.reviewForm[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.reviewForm[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.reviewForm[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      reviewForm: updatedControls,
      formIsValid,
    });
  }

  rateChangedHandler = (value, controlName) => {
    const updatedControls = {
      ...this.state.reviewForm,
      [controlName]: {
        ...this.state.reviewForm[controlName],
        value: value,
        valid: this.checkRateValidity(
          value,
          this.state.reviewForm[controlName].validation,
        ).isValid,
        errorText: this.checkRateValidity(
          value,
          this.state.reviewForm[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      reviewForm: updatedControls,
      formIsValid,
    });
  }

  checkValidity(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
      errorText = 'Requerido.';
    }

    return {
      isValid,
      errorText,
    };
  }

  checkRateValidity(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value > 0 && isValid;
      errorText = 'Requerido.';
    }

    return {
      isValid,
      errorText,
    };
  }

  reviewHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.reviewForm) {
      formData[formElementIdentifier] = this.state.reviewForm[formElementIdentifier].value;
    }
    const review = {
      review: formData,
    };
    this.props.onReview(localStorage.getItem('token'), this.props.match.params.job_id, review);
  }

  render() {
    return (
      <div>
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={10} sm={10}>
            <Paper elevation={0}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <Typography variant="title" gutterBottom className={cls.Typogra}>Calificar Cliente</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Paper elevation={0}>
              <Grid container justify="center" className={cls.Boot}>
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <Grid container spacing={24} justify="center">
                      <Grid item xs={10} sm={12}>
                        <Paper elevation={0}>
                          <Grid container spacing={24} justify="center">
                            <Grid item xs={12} sm={3}>
                              <Paper elevation={0}>
                                <TextField
                                  id="multiline-static"
                                  label="Comenta tu calificación"
                                  multiline
                                  rows="4"
                                  margin="normal"
                                  onChange={(event) => this.inputChangedHandler(event, 'comment')}
                                />
                                {!this.state.reviewForm.comment.valid && this.state.reviewForm.comment.touched ? (
                                  <div className={cls.ErrorText}>
                                    {this.state.reviewForm.comment.errorText}
                                  </div>
                                ) : null}
                              </Paper>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid item xs={10} sm={12}>
                        <Paper elevation={0}>
                          <Grid container spacing={24} justify="center">
                            <Grid item xs={12} sm={3}>
                              <Paper elevation={0}>
                                <Typography variant="title" gutterBottom className={cls.SubTypogra}>Selecciona tu preferencia</Typography>
                                  <Rating 
                                    initialRating={this.state.reviewForm.qualification.value}
                                    onChange={(value) => this.rateChangedHandler(value, 'qualification')}
                                    emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" className={`${cls.Stars} ${"icon"}`} alt="starsMin" />}
                                    fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" className={`${cls.Stars} ${"icon"}`} alt="startFull" />}
                                  />
                                  {!this.state.reviewForm.qualification.valid && this.state.reviewForm.qualification.touched ? (
                                    <div className={cls.ErrorText}>
                                      {this.state.reviewForm.qualification.errorText}
                                    </div>
                                  ) : null}
                              </Paper>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid item xs={10} sm={12}>
                        <Paper elevation={0}>
                          <Grid container spacing={24} justify="center">
                            <Grid item xs={12} sm={3}>
                              <Paper elevation={0}>
                                {this.state.formIsValid ? (
                                  <button onClick={(event) => this.reviewHandler(event, this.registerHandler)} className={cls.pageButton} >ENVIAR CALIFICACION</button>
                                ): (
                                  <button disabled className={cls.pageButtonInvalid} >ENVIAR CALIFICACION</button>
                                )}
                              </Paper>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReview: (token, job_id, review) => dispatch(actions.qualifyCustomer(token, job_id, review))
  };
};

export default connect(null, mapDispatchToProps) (CustomerShowQualify);