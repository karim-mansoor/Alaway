import React, { Component } from 'react';
import axios from '../../../../../axios-instance';
import moment from 'moment';
import Alert from 'react-s-alert';

// Components
import Grid from 'material-ui/Grid';

// Css
import cls from './Checking.css';

var _updated = false;

class Checking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        social_reason: {
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
        identification_type: {
          value: 'consumidor_final',
          validation: {
            required: true,
          },
          valid: true,
          touched: true,
          errorText: null,
        },
        identification: {
          value: '',
          validation: {
            required: true,
            maxLength: 10,
            minLength: 10,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
        email: {
          elementType: 'input',
          label: 'Correo',
          elementConfig: {
            type: 'email',
            placeholder: 'ejemplo@ejemplo.com',
          },
          value: '',
          validation: {
            required: true,
            isEmail: true,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
        telephone: {
          value: '',
          validation: {
            required: true,
            maxLength: 10,
            minLength: 10,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
        address: {
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
          errorText: null,
        },
      },
      formIsValid: false,
      selectedOption: 1,
      check: false,
      card_id: 1,
      invoiceSelect: 0,
      close: true,
      invoiceDetails: [],
      discount: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.invoiceSelectOptionType = this.invoiceSelectOptionType.bind(this);
    this.handlerClose = this.handlerClose.bind(this);
    this.handlerOpen = this.handlerOpen.bind(this);
  }
  
  componentDidMount () {
    _updated = false;
    if (this.props.invoices[0]) {
      let idInvoiceDefault = this.props.invoices[0].id;
      let invoice_details = this.props.invoices
      this.setState({
        invoiceSelect: idInvoiceDefault,
        invoiceDetails: invoice_details,
      })
    } else {
      let socialReason = this.props.user.attributes.first_name +' '+ this.props.user.attributes.last_name;
      let emailUser = this.props.user.attributes.email;
      let telephone = this.props.user.attributes.cell_phone ? this.props.user.attributes.cell_phone : this.props.selectedProperty.attributes.phone ;
      let nameAddress = this.props.selectedProperty.attributes.name + ' ' + this.props.selectedProperty.attributes.number + ' ' + this.props.selectedProperty.attributes.city;
      this.setState({
        ...this.state,
        formData: {
          ...this.state.formData,
          social_reason: {
            ...this.state.formData.social_reason,
            value: socialReason,
            valid: true,
            touched: true,
          },
          email: {
            ...this.state.formData.email,
            value: emailUser,
            valid: true,
            touched: true,
          },
          telephone: {
            ...this.state.formData.telephone,
            value: telephone,
            valid: true,
            touched: true,
          },
          address: {
            ...this.state.formData.address,
            value: nameAddress,
            valid: true,
            touched: true,
          },
        }
      })
    };
  }

  componentDidUpdate() {
    if (this.state.formData.identification_type.value === "cedula" && !_updated) {
      this.setState({
        ...this.state,
        formData: {
          ...this.state.formData,
          identification: {
            ...this.state.formData.identification,
            validation: {
              ...this.state.formData.identification.validation,
              maxLength: 10,
              minLength: 10,
            }
          }
        }
      })
      _updated = true;
    }
    if (this.state.formData.identification_type.value === "ruc" && !_updated) {
      this.setState({
        ...this.state,
        formData: {
          ...this.state.formData,
          identification: {
            ...this.state.formData.identification,
            validation: {
              ...this.state.formData.identification.validation,
              maxLength: 13,
              minLength: 13,
            }
          }
        }
      })
      _updated = true;
    }
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
      errorText = `Debe contener ${rules.minLength} caracteres.`;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
      errorText = `Debe contener ${rules.maxLength} caracteres.`;
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
      ...this.state.formData,
      [controlName]: {
        ...this.state.formData[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.formData[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.formData[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formData: updatedControls,
      formIsValid,
    });
  }
  
  invoiceSelectOptionType = (event) => {
    const target = event.target;
    const value = target.value;
    _updated = false;
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        identification_type: {
          ...this.state.formData.identification_type,
          value: value
        }
      }
    })
  }

  formInvoice = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.formData) {
      formData[formElementIdentifier] = this.state.formData[formElementIdentifier].value;
    }
    const invoice_detail = {
      invoice_detail: formData,
    };
    const headers = {
      headers: {
        Authorization: `Token token=${localStorage.getItem('token')}`,
      },
    };
    axios.post('/customers/invoice_details', invoice_detail, headers)
      .then((res) => {
        let new_invoice = res.data.invoice_detail.data
        let new_invoices = [new_invoice].concat(this.state.invoiceDetails)
        let id_invoice_select = res.data.invoice_detail.data.id;
        this.setState({ 
          invoiceDetails: new_invoices,
          invoiceSelect: id_invoice_select, 
          close: true,
        })
        Alert.success(res.data.message, {
          position: 'top',
          effect: 'genie',
          });
        })
      .catch((err) => {
        Alert.error(err, {
          position: 'top',
          effect: 'genie',
        });
      });
  }

  handlerClose = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
        close: true
    })
  }


  handlerOpen = () => {
    this.setState({
      ...this.state,
        close: false
    })
  }

  handleCheckbox = () => {
    this.setState({
      check: !this.state.check,
    });
  }
  
  changePageValidator = (event) => {
    event.preventDefault();
    let installment = this.state.selectedOption;
    let cardId = this.state.card_id;
    let invoiceId = this.state.invoiceSelect;
    if (this.state.check) {
      this.props.nextPage(event, 'Checking', cardId, installment, invoiceId)
    } else if (this.state.invoiceSelect == 0) {
      Alert.error('Debes seleccionar un detalle de facturacion', {
        position: 'top',
        effect: 'genie',
      });
    } else {
      Alert.error('Debes aceptar los términos y condiciones para avanzar', {
        position: 'top',
        effect: 'genie',
      });
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    this.setState({ selectedOption: value });
  }

  invoiceSelectChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    this.setState({ invoiceSelect: value });
  }

  render () {
    let price = 0;
    let base = 0;
    let time = 0;
    let frequency = null;
    if (this.props.form.services_addons.length > 0) {
      this.props.form.services_addons.forEach(s => {
        if (s.active) {
          price = ((s.price * s.time)) + price;
          time = s.time + time
        }
      })
    }
    if (this.props.form.services_parameters.length > 0) {
      this.props.form.services_parameters.forEach(s => {
        price = ((s.price * s.time)) + price;
        time = s.time + time
      })
    }
    base = this.props.form.services_base.name !== '' ? (this.props.form.services_base.price * this.props.form.services_base.time) : 0;
    time = time + this.props.form.services_base.time;
    
    let recharge = 0;
    let iva = 0;
    let total = 0
    let extra_fee = this.props.serviceFee.value;

    if (this.props.form.isHolidays) {
      recharge =  (base + price) * (extra_fee/100);
      iva = (base + price + recharge) * 0.12;
      total = (base + price + iva + recharge)
    } else {
      recharge =  0;
      iva = ((base + price) * 0.12);
      total = (base + price + iva);
    }

    let sdp = this.props.dataDiscount.sdp;
    let discount = this.props.dataDiscount.discount;

    if(discount > 0){
      let subTotal = ((base + price + recharge) - discount)
      iva = (subTotal * 0.12)
      total = (subTotal + iva)
    }
    
    if (this.props.form.recurrent.value === '0') {
      frequency = 'una vez';
    } else if (this.props.form.recurrent.value === '1') {
      frequency = 'semanal';
    } else if (this.props.form.recurrent.value === '2') {
      frequency = 'quincenal';
    } else if (this.props.form.recurrent.value === '3') {
      frequency = 'mensual';
    }

    let invoice = null;
    if (this.state.invoiceDetails.length > 0 && this.state.close) {
      invoice = (
        <div className={cls.RowTotalTerm}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <h4 className={cls.titleQuestion}>Datos para tu factura</h4>
              {Object.keys(this.state.invoiceDetails).length > 0 &&
              <form>
                <div className={cls.Term}>
                  <select
                    className={cls.Select}
                    onChange={(e) => this.invoiceSelectChange(e)}
                  >
                    {this.state.invoiceDetails.map( i => {
                      let identificationType = null;
                      if(i.attributes.identification_type === "consumidor_final" ) {
                        identificationType = "Consumidor final"
                      }else if(i.attributes.identification_type === "cedula") {
                        identificationType = "Cédula"
                      }else if(i.attributes.identification_type === "ruc") {
                        identificationType = "RUC"
                      }else{
                        identificationType = "Sin tipo de identificación"
                      }
                      return (
                        <option
                          key = {i.id}
                          id = {i.id}
                          value = {i.id}
                          selected={this.state.invoiceSelect == i.id ? 'selected' : ''}
                        >Razón social: {i.attributes.social_reason}, Identificación: {identificationType}, N°: {i.attributes.identification}</option>
                      )
                    })}
                  </select>
                  <button
                    type="button"
                    className={cls.ButonNewDetailsInvoice}
                    onClick={this.handlerOpen}
                  >Agregar facturación</button>
                </div>
              </form>
              }
            </Grid>
          </Grid>
        </div>
      )
    } else {
      invoice = (
        <div className={cls.RowTotalTerm}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <h4 className={cls.titleQuestion}>Datos para tu factura</h4>
              <form>
                <div className={cls.row}>
                  <div className={cls.col25}>
                    <label for="socialReason">Razón social:</label>
                  </div>
                  <div className={cls.col75}>
                    <input
                      className={(!this.state.formData.social_reason.valid && this.state.formData.social_reason.touched) && cls.ContainerError}
                      type="text"
                      id="social_reason"
                      name="social_reason"
                      value={this.state.formData.social_reason.value}
                      placeholder="Tu nombre completo"
                      onChange={(event) => this.inputChangedHandler(event, 'social_reason')}
                    />
                    {!this.state.formData.social_reason.valid && this.state.formData.social_reason.touched ? (
                      <div className={cls.ErrorText}>
                        {this.state.formData.social_reason.errorText}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={cls.row}>
                  <div className={cls.col25}>
                    <label for="identificationType">Identificación:</label>
                  </div>
                  <div className={`${cls.col25} ${cls.fixNoPadding}`}>
                    <select onChange={(event) => this.invoiceSelectOptionType(event)}>
                      <option value="consumidor_final">Consumidor final</option>
                      <option value="cedula">Cédula</option>
                      <option value="ruc">RUC</option>
                    </select>
                    {!this.state.formData.identification_type.valid && this.state.formData.identification_type.touched ? (
                      <div className={cls.ErrorText}>
                        {this.state.formData.identification_type.errorText}
                      </div>
                    ) : null}
                  </div>
                  <div className={cls.col25}>
                    <label for="identificationNumber">N° de identificación:</label>
                  </div>
                  <div className={`${cls.col25} ${cls.fixNoPadding}`}>
                    <input
                      className={(!this.state.formData.identification.valid && this.state.formData.identification.touched) && cls.ContainerError}
                      type="text"
                      id="identification"
                      name="identification"
                      value={this.state.formData.identification.value}
                      placeholder="00-000-000-000"
                      onChange={(event) => this.inputChangedHandler(event, 'identification')}
                    />
                    {!this.state.formData.identification.valid && this.state.formData.identification.touched ? (
                      <div className={cls.ErrorText}>
                        {this.state.formData.identification.errorText}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={cls.row}>
                  <div className={cls.col25}>
                    <label for="email">Correo electrónico:</label>
                  </div>
                  <div className={`${cls.col25} ${cls.fixNoPadding}`}>
                    <input
                      className={(!this.state.formData.email.valid && this.state.formData.email.touched) && cls.ContainerError}
                      type="text"
                      id="email"
                      name="email"
                      value={this.state.formData.email.value}
                      placeholder="email@email.com"
                      onChange={(event) => this.inputChangedHandler(event, 'email')}
                    />
                    {!this.state.formData.email.valid && this.state.formData.email.touched ? (
                      <div className={cls.ErrorText}>
                        {this.state.formData.email.errorText}
                      </div>
                    ) : null}
                  </div>
                  <div className={cls.col25}>
                    <label for="telephone">Teléfono:</label>
                  </div>
                  <div className={`${cls.col25} ${cls.fixNoPadding}`}>
                    <input
                      className={(!this.state.formData.telephone.valid && this.state.formData.telephone.touched) && cls.ContainerError}
                      type="text"
                      id="telephone"
                      name="telephone"
                      value={this.state.formData.telephone.value}
                      placeholder="9999999999"
                      onChange={(event) => this.inputChangedHandler(event, 'telephone')}
                    />
                    {!this.state.formData.telephone.valid && this.state.formData.telephone.touched ? (
                      <div className={cls.ErrorText}>
                        {this.state.formData.telephone.errorText}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={cls.row}>
                  <div className={cls.col25}>
                    <label for="address">Dirección:</label>
                  </div>
                  <div className={cls.col75}>
                    <input
                      className={(!this.state.formData.address.valid && this.state.formData.address.touched) && cls.ContainerError}
                      type="text"
                      id="address"
                      name="address"
                      value={this.state.formData.address.value}
                      placeholder="Ecuador, Quito - Pichincha"
                      onChange={(event) => this.inputChangedHandler(event, 'address')}
                    />
                    {!this.state.formData.address.valid && this.state.formData.address.touched ? (
                      <div className={cls.ErrorText}>
                        {this.state.formData.address.errorText}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  {this.state.formIsValid ? (
                    <button className={cls.submit} onClick={(event) => this.formInvoice(event)} >Guardar</button>
                  ):(
                    <button disabled className={cls.ButtonDisabled}><span>Guardar</span></button>
                  )}
                </div>
                <button className={cls.buttonClose} onClick={(event) => this.handlerClose(event)}>Cancelar</button>
              </form>
            </Grid>
          </Grid>
        </div>
      )
    }
    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={cls.BookingTotal}>
            <Grid container>
              <div className={cls.BookingTotalWrapper}>
                <Grid item xs={12} sm={12} lg={12}>
                  <Grid container>
                    <div className={cls.BookingSection}>
                      <Grid container>
                        <div className={cls.RowInfo}>
                          <div className={cls.InfoContent}>
                            <span onClick={(event) => this.props.backPage(event, 'Checking')} className={cls.ButtonBack}>{'<<'} Volver</span>
                            <h3 className={cls.ServiceMain}>
                              <span>{this.props.form.services_base.name === '' ? 'No ha seleccionado un servicio' : this.props.form.services_base.name} </span>
                              <span>{frequency}</span>
                            </h3>
                            <div>
                              <div className={cls.PadTop}>
                                <div>
                                  {moment(this.props.form.started_at).format('MMM D, YYYY h:mm a').charAt(0).toUpperCase() + moment(this.props.form.started_at).format('MMM D, YYYY h:mm a').slice(1)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <div className={cls.BookingSection}>
                    <Grid container>
                      <div className={cls.Row}>
                        <Grid item xs={12} lg={12}>
                          <Grid container>
                            <div className={cls.SummaryRow}>
                              {this.props.form.services_base.name !== '' ? (
                                <Grid container>
                                  <Grid item xs={6} lg={6}>
                                    <div className={cls.SummaryTitle}>{this.props.form.services_base.name}</div>
                                  </Grid>
                                  <Grid item xs={6} lg={6}>
                                    <div className={cls.SummaryAmount}>${base.toFixed(2)}</div>
                                  </Grid>
                                </Grid>
                              ) : (
                                <Grid container>
                                  <Grid item xs={6} lg={6}>
                                    <div className={cls.SummaryTitle}>No ha seleccionado servicios</div>
                                  </Grid>
                                  <Grid item xs={6} lg={6}>
                                    <div className={cls.SummaryAmount}></div>
                                  </Grid>
                                </Grid>
                              )}
                              {this.props.form.services_parameters.length > 0 ? 
                                this.props.form.services_parameters.map(addon => {
                                  if (addon.active) {
                                    return (
                                      <Grid key={addon.id} container>
                                        <Grid item xs={6} lg={6}>
                                          <div className={cls.SummaryTitle}>{addon.label}</div>
                                        </Grid>
                                        <Grid item xs={6} lg={6}>
                                          <div className={cls.SummaryAmount}>${(addon.price * addon.time)}</div>
                                        </Grid>
                                      </Grid>
                                    );
                                  } else {
                                    return null;
                                  }
                                })
                              : null}
                              {this.props.form.services_addons.length > 0 ? 
                                this.props.form.services_addons.map(addon => {
                                  if (addon.active) {
                                    return (
                                      <Grid key={addon.id} container>
                                        <Grid item xs={6} lg={6}>
                                          <div className={cls.SummaryTitle}>{addon.label}</div>
                                        </Grid>
                                        <Grid item xs={6} lg={6}>
                                          <div className={cls.SummaryAmount}>${(addon.price * addon.time)}</div>
                                        </Grid>
                                      </Grid>
                                    );
                                  } else {
                                    return null;
                                  }
                                })
                              : null}
                              <Grid container>
                                <Grid item xs={6} lg={6}>
                                  <div className={cls.SummaryTitle}>Recargo fin de semana o feriados</div>
                                </Grid>
                                <Grid item xs={6} lg={6}>
                                  <div className={cls.SummaryAmount}>${recharge.toFixed(2)}</div>
                                </Grid>
                              </Grid>
                              <Grid container>
                                <Grid item xs={6} lg={6}>
                                  <div className={cls.SummaryTitle}>{"Descuento Promoción " + sdp + "%"}</div>
                                </Grid>
                                <Grid item xs={6} lg={6}>
                                  <div className={cls.SummaryAmount}>${discount > 0 ? "-" + discount.toFixed(2) : "0.00"}</div>
                                </Grid>
                              </Grid>
                              <Grid container>
                                <Grid item xs={6} lg={6}>
                                  <div className={cls.SummaryTitle}>IVA <small>12%</small></div>
                                </Grid>
                                <Grid item xs={6} lg={6}>
                                  <div className={cls.SummaryAmount}>${iva.toFixed(2)}</div>
                                </Grid>
                              </Grid>
                              <Grid container>
                                <Grid item xs={8} lg={8}>
                                  <div className={cls.SummaryTime}><small>Total horas de servicio <span className={cls.Hour}>{time}h</span></small></div>
                                </Grid>
                              </Grid>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <div className={cls.BookingSectionNoBorder}>
                    <Grid container>
                      <div className={cls.RowTotal}>
                        <Grid container>
                          <Grid item xs={6} lg={6}>
                            <div className={cls.TotalText}>
                              <span>Total</span>
                            </div>
                          </Grid>
                          <Grid item xs={6} lg={6}>
                            <div className={cls.Total}>
                              $
                              <span>
                                {total.toFixed(2)}
                              </span>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <div className={cls.BookingSectionNoBorderTerm}>
                    <Grid container>
                      <div className={cls.RowTotalTerm}>
                        <Grid container>
                          <Grid item xs={12} lg={12}>
                            <h4 className={cls.titleQuestion}>¿Quieres diferir tu pago?</h4>
                            <form onChange={(event) => this.handleChange(event)}>
                              <div className={cls.Term}>
                                <select className={cls.Select} >
                                  <option value="1">No deseo diferir mi pago.</option>
                                  <option value="3" onChange={(event) => this.handleChange(event)}>Diferir mi pago en 3 meses. Sin intereses.</option>
                                </select>
                              </div>
                            </form>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <div className={cls.BookingSectionNoBorderTerm}>
                    <Grid container>
                      {invoice}
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <div className={cls.BookingSectionNoBorderTerm}>
                    <Grid container>
                      <div className={cls.RowTotalTerm}>
                        <Grid container>
                          <Grid item xs={12} lg={12}>
                            <div className={cls.Term}>
                              <input onChange={this.handleCheckbox} checked={this.state.check} type="checkbox"/>
                              <span className={cls.TermText}><a className={cls.Link} href="/politicas" target="_blank">Acepto términos y condiciones</a></span>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <div className={cls.BookingSectionNoBorderTerm}>
                    <Grid container>
                      <div className={cls.RowTotalTerm}>
                        <Grid container>
                          <Grid item xs={12} lg={12}>
                            <button
                              className={cls.ButtonBookingCore}
                              value={this.state.card_id}
                              onClick={(event) => this.changePageValidator(event)}
                            >Solicitar Servicio</button>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </Grid>
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    );
  }
};

export default Checking;