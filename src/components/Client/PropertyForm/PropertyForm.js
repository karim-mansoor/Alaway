import React, { Component } from 'react';

// Components
import { 
  Grid,
} from 'material-ui';

// Css
import cls from './PropertyForm.css';

class PropertyForm extends Component {
  state = {
    formIsValid: false,
    property: {
      name: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      city: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      neightborhood_id: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      p_street: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      number: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      s_street: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      additional_reference: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      phone: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
    },
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

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
      errorText = `Debe contener mas de ${rules.minLength} caracteres.`;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
      errorText = `Debe contener menos de ${rules.maxLength} caracteres.`;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Debe ser un email valido.';
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Debe ser solo numerico.';
    }

    return {
      isValid,
      errorText,
    };
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.property,
      [controlName]: {
        ...this.state.property[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.property[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.property[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    if (controlName === 'city') {
      this.props.fetchNeightborhoods(localStorage.getItem('token'), event.target.value);
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      property: updatedControls,
      formIsValid,
    });
  }

  createdHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.property) {
      formData[formElementIdentifier] = this.state.property[formElementIdentifier].value;
    }
    const property = {
      property: formData,
    };
    this.props.createProperty(localStorage.getItem('token'), property);
    this.props.cancel();
  }

  cancelHandler = (event) => {
    event.preventDefault();
    this.props.cancel();
  }
  render () {
    return (
      <div className={cls.Div}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
							<div className={cls.Container}>
								<Grid container>
									<Grid item xs={12} sm={12} md={12} lg={12} className={cls.FormItem}>
										<Grid container>
											<label htmlFor="name"><span>Nombre</span></label>
											<input className={`${cls.Input} ${(!this.state.property.name.valid && this.state.property.name.touched) && cls.ContainerError}`}
												type="text"
												name="name"
												value={this.state.property.name.value}
												onChange={(event) => this.inputChangedHandler(event, 'name')}/>
												{(!this.state.property.name.valid && this.state.property.name.touched) && (
													<div className={cls.Error}>{this.state.property.name.errorText}</div>
												)}
										</Grid>
									</Grid>
								</Grid>
								<Grid container>
									<Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
										<Grid container>
											<label htmlFor="city"><span>Ciudad</span></label>
                      <select className={`${cls.Select} ${(!this.state.property.city.valid && this.state.property.city.touched) && cls.ContainerError}`}
                        value={this.state.property.city.value}
												name="city"
												onChange={(event) => this.inputChangedHandler(event, 'city')}>
                        <option value="">Seleccionar una ciudad</option>
                        {this.props.cities.map(city => (
                          <option key={city.id} value={city.id}>{city.attributes.name}</option>
                        ))}
                      </select>
												{(!this.state.property.city.valid && this.state.property.city.touched) && (
													<div className={cls.Error}>{this.state.property.city.errorText}</div>
												)}
										</Grid>
									</Grid>
									<Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
										<Grid container>
											<label htmlFor="neightborhood_id"><span>Barrio</span></label>
                      {this.state.property.city.value === "" ? (
                        <select disabled className={`${cls.Select} ${(!this.state.property.neightborhood_id.valid && this.state.property.neightborhood_id.touched) && cls.ContainerError}`}
                        value={this.state.property.neightborhood_id.value}
												name="neightborhood_id"
												onChange={(event) => this.inputChangedHandler(event, 'neightborhood_id')}>
                        <option value="">Seleccionar un barrio</option>
                      </select>  
                      ) : (
											<select className={`${cls.Select} ${(!this.state.property.neightborhood_id.valid && this.state.property.neightborhood_id.touched) && cls.ContainerError}`}
                        name="neightborhood_id"
                        value={this.state.property.neightborhood_id.value}
												onChange={(event) => this.inputChangedHandler(event, 'neightborhood_id')}>
                        <option value="">Seleccionar un barrio</option>
                        {this.props.neightborhoods.map(neightborhood => (
                          <option key={neightborhood.id} value={neightborhood.id}>{neightborhood.attributes.name}</option>
                        ))}
                      </select>
                      )}
                      {(!this.state.property.neightborhood_id.valid && this.state.property.neightborhood_id.touched) && (
                        <div className={cls.Error}>{this.state.property.neightborhood_id.errorText}</div>
                      )}
										</Grid>
									</Grid>
								</Grid>
                <Grid container>
									<Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
										<Grid container>
											<label htmlFor="p_street"><span>Calle Principal</span></label>
											<input className={`${cls.Input} ${(!this.state.property.p_street.valid && this.state.property.p_street.touched) && cls.ContainerError}`}
												type="text"
												name="p_street"
												value={this.state.property.p_street.value}
												onChange={(event) => this.inputChangedHandler(event, 'p_street')}/>
												{(!this.state.property.p_street.valid && this.state.property.p_street.touched) && (
													<div className={cls.Error}>{this.state.property.p_street.errorText}</div>
												)}
										</Grid>
									</Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
										<Grid container>
											<label htmlFor="s_street"><span>Calle Secundaria</span></label>
											<input className={`${cls.Input} ${(!this.state.property.s_street.valid && this.state.property.s_street.touched) && cls.ContainerError}`}
												type="text"
												name="s_street"
												value={this.state.property.s_street.value}
												onChange={(event) => this.inputChangedHandler(event, 's_street')}/>
												{(!this.state.property.s_street.valid && this.state.property.s_street.touched) && (
													<div className={cls.Error}>{this.state.property.s_street.errorText}</div>
												)}
										</Grid>
									</Grid>
								</Grid>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
                    <Grid container>
											<label htmlFor="number"><span>Numeración</span></label>
											<input className={`${cls.Input} ${(!this.state.property.number.valid && this.state.property.number.touched) && cls.ContainerError}`}
												type="text"
												name="number"
												value={this.state.property.number.value}
												onChange={(event) => this.inputChangedHandler(event, 'number')}/>
												{(!this.state.property.number.valid && this.state.property.number.touched) && (
													<div className={cls.Error}>{this.state.property.number.errorText}</div>
												)}
										</Grid>
									</Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
                    <Grid container>
											<label htmlFor="phone"><span>Teléfono</span></label>
											<input className={`${cls.Input} ${(!this.state.property.phone.valid && this.state.property.phone.touched) && cls.ContainerError}`}
												type="text"
												name="phone"
												value={this.state.property.phone.value}
												onChange={(event) => this.inputChangedHandler(event, 'phone')}/>
												{(!this.state.property.phone.valid && this.state.property.phone.touched) && (
													<div className={cls.Error}>{this.state.property.phone.errorText}</div>
												)}
										</Grid>
									</Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12} className={cls.FormItem}>
                    <Grid container>
											<label htmlFor="additional_reference"><span>Referencias adicionales</span></label>
											<input className={`${cls.Input} ${(!this.state.property.additional_reference.valid && this.state.property.additional_reference.touched) && cls.ContainerError}`}
												type="text"
												name="additional_reference"
												value={this.state.property.additional_reference.value}
												onChange={(event) => this.inputChangedHandler(event, 'additional_reference')}/>
												{(!this.state.property.additional_reference.valid && this.state.property.additional_reference.touched) && (
													<div className={cls.Error}>{this.state.property.additional_reference.errorText}</div>
												)}
										</Grid>
									</Grid>
                </Grid>
								<Grid container>
									<Grid item xs={12} sm={12} md={12} lg={12} className={cls.FormItem}>
										<Grid container>
                      {this.props.cancelDisabled ? (
                        <button onClick={(event) => this.cancelHandler(event)} className={cls.Button}>
                          Cancelar
                        </button>
                      ) : (
                        <button disabled className={cls.ButtonDisabledCancel}>
                          Cancelar
                        </button>
                      )}
                      {this.state.formIsValid ? (
                          <button onClick={this.createdHandler} className={cls.ButtonSave}><span>Guardar</span></button>
                        ) : (
                          <button disabled className={cls.ButtonDisabled}><span>Guardar</span></button>
                        )
                      }
										</Grid>
									</Grid>
								</Grid>
							</div>
            </Grid>
          </Grid>
      </div>
    );
  }
}

export default PropertyForm;