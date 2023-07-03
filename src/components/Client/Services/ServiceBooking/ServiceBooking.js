import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Alert from 'react-s-alert';

// Actions
import * as actions from '../../../../store/actions';

// Components
import {Grid} from 'material-ui';
import BookingForm from '../../BookingForm/BookingForm';
import HowWorks from '../../HowWorks/HowWorks';
// import BookingTotal from './BookingTotal/BookingTotal';
import Checking from './Checking/Checking';
import Payment from './Payment/Payment';
import Thanks from './Thanks/Thanks';

// Css
import cls from './ServiceBooking.css';

const start = moment();
const remainder = 30 - (start.minute() % 30); 
const dateTime = moment(start).add(remainder, "minutes");

class ServiceBooking extends Component {
  state = {
    value: '',
    form: {
      recurrent: {
        value: '0',
      },
      services_base: {
        id: 0,
        value: 0,
        name: '',
        time: 0,
        price: 0,
        errorText: 'Debe elegir un servicio principal',
      },
      services_addons: [],
      services_parameters: [],
      property: {
        value: '',
        errorText: 'Debe elegir una propiedad'
      },
      details: '',
      started_at: dateTime,
      finished_recurrency_at: null,
      isHolidays: false,
    },
    service: true,
    checking: false,
    payment: false,
    thanks: false,
    creditCardId: null,
    cardId: null,
    installments: 1,
    invoiceId: {
      value: '',
      errorText: 'Debe elegir un detalle de facturación'
    },
    selectedProperty: 'Mi Casa',
    textCodePlaceholder : "Ingrese código",
    textCode : '',
    textInputStatus : true,
  };

  componentDidMount () {
    this.props.cleanPromoCode();
    let services_addons = [];
    let services_parameters =[];
    let service_principal;
    this.props.service_base.forEach(service =>{
      service_principal =  {
        id: service.id,
        value: 1,
        name: service.name,
        time: service.time,
        price: service.price,
        errorText: '',
      }
    })

    this.props.services_addons.forEach(service => {
      if (service.quantity) {
        let input = {
          label: service.name,
          value: 1,
          active: false,
          id: service.id,
          icon: service.icon,
          quantity: service.quantity,
          time: service.time,
          price: service.price,
          time_per_price: service.time,
        };   
      services_addons.push(input)
      } else {
        let checkbox = {
          id: service.id,
          label: service.name,
          value: 1,
          active: false,
          time: service.time,
          price: service.price,
          icon: service.icon,
        };
        services_addons.push(checkbox);
      }
    })
    this.props.services_parameters.forEach(service => {
      if (service.quantity) {
        let input = {
          label: service.name,
          value: 1,
          active: true,
          id: service.id,
          icon: service.icon,
          quantity: service.quantity,
          time: service.time,
          price: service.price,
          time_per_price: service.time,
        };   
      services_parameters.push(input)
      }
    })
    
    let holiday = this.is_holiday(moment(this.state.form.started_at).format('YYYY-M-D'));

    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        services_addons: services_addons,
        services_parameters: services_parameters,
        services_base: service_principal,
        isHolidays: holiday,
      }
    })
  };

  handlePropertyUpdate = (property) => {
    if (property != undefined){
      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          property: {
            ...this.state.form.property,
            value: property.attributes.id,
          }, 
        },
        selectedProperty: property
      });
    }
  }

  handleInvoiceUpdate = (invoice) => {
    if (invoice != undefined){
        this.setState({
          ...this.state,
          invoiceId: {
            ...this.state.invoiceId,
            value: {
              ...this.state.form.value,
              value: invoice
            },
          },
        });
      } 
    }

  handlePropertyChange = (event) => {
    if (event.target.value !== "" && this.props.properties.length > 0) {
      let property = this.props.properties.filter(p => parseInt(p.attributes.id) === parseInt(event.target.value))
      let selectProperty = null
      if (property.length > 0){
        property.map( pro => (
          selectProperty = pro
        ))
      }
      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          property: {
            ...this.state.form.property,
            value: event.target.value,
          },
        },
        selectedProperty: selectProperty,
      });
    } else {
      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          property: {
            ...this.state.form.property,
            value: '',
          },
        },
      });
    };
  };

  handleRecurrentChange = (event) => {
    const updatedControls = {
      ...this.state.form,
      recurrent: {
        ...this.state.form.recurrent,
        value: event.target.value,
      },
    };

    this.setState({
      form: updatedControls,
    });
  };

  changeCheckboxHandler = (event, key) => {
    event.preventDefault();
    let a = this.state.form.services_addons.slice();
    a[key].active = !this.state.form.services_addons[key].active
    const updatedEventService = {
      ...this.state.form,
      services_addons: a
    }
    this.setState({
      form: updatedEventService,
    })
  };

  handleTextChange = (event) => {
    const updatedControls = {
      ...this.state.form,
      details: event.target.value,
    };

    this.setState({
      form: updatedControls,
    });
  };

  handleServiceChange = (event) => {
    if (event.target.value !== "") {
      const service = this.props.service_base.find(s => s.id === parseInt(event.target.value, 10));
      const updatedObject = {
        id: service.id,
        value: service.id,
        name: service.name,
        time: service.time,
        price: service.price,
      }
  
      this.setState({
        ...this.state,
        value: event.target.value,
        form: {
          ...this.state.form,
          services_base: updatedObject
        }
      });
    } else {
      const updatedObject = {
        id: 0,
        value: 0,
        name: '',
        time: 0,
        price: 0,
        errorText: 'Debe elegir un servicio principal',
      }
      this.setState({
        ...this.state,
        value: event.target.value,
        form: {
          ...this.state.form,
          services_base: updatedObject,
        },
      });
    }
  };

  inputChangedHandler = (event, key) => {
    let a = this.state.form.services_addons.slice();
    a[key].value = event.target.value;
    a[key].time = event.target.value * a[key].time_per_price;
    this.setState({
      ...this.state.form,
      services_addons: a,
    });
  };

  changeEventsHandler = (event, key) => {
    event.preventDefault();
    let a = this.state.form.services_parameters.slice();
    this.setState({
      ...this.state.form,
      services_parameters: a
    });
  };

  inputEventsChanger = (event, key) => {
    let a = this.state.form.services_parameters.slice();
    a[key].value = event.target.value;
    a[key].time = event.target.value * a[key].time_per_price;
    const updatedEventService = {
      ...this.state.form,
      services_parameters: a,
    }
    this.setState({
      form: updatedEventService,
    })
  };

  changeDatetimeFinishedHandler = (dateTime) => {
    this.setState({
      ...this.state,
      form: {
         ...this.state.form,
        finished_recurrency_at: moment(dateTime),
      }
    });
  };

  changeDatetimeHandler = (dateTime) => {
    let holiday = this.is_holiday(dateTime)
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        started_at: moment(dateTime),
        isHolidays: holiday
      }
    })
  };

  is_holiday = (date) => {
    let date_to_compare = moment(date).format('YYYY-M-D')
    let is_holiday =  false;
    this.props.holidays.find(function(element) {
      while (element.attributes.holiday_date == date_to_compare) {
        is_holiday = true;
        break;
      }
    });
    if(moment(date).day() == 0 || moment(date).day() == 6){
      is_holiday = true
    }
    return is_holiday
  }

  createJobHandler = (event, installments, invoice_detail_id) => {
    event.preventDefault();
    const formData = {};
    formData["property_id"] = this.state.form.property.value;
    formData["started_at"] = this.state.form.started_at;
    formData["details"] = this.state.form.details;
    formData["invoice_detail_id"] = invoice_detail_id;
    formData["frequency"] = parseInt(this.state.form.recurrent.value, 10);
    formData["job_details_attributes"] = [{
      service_id: this.state.form.services_base.id,
      value: 1
    }]
    for (const formElementIdentifier in this.state.form.services_addons) {
      if (this.state.form.services_addons[formElementIdentifier].active) {
        formData["job_details_attributes"].push({
          service_id: this.state.form.services_addons[formElementIdentifier].id,
          value: this.state.form.services_addons[formElementIdentifier].value
        })
      }
    }
    for (const formElementIdentifier in this.state.form.services_parameters) {
      formData["job_details_attributes"].push({
        service_id: this.state.form.services_parameters[formElementIdentifier].id,
        value: this.state.form.services_parameters[formElementIdentifier].value
      })
    }
    if (this.state.form.recurrent.value !== '0' ) {
      formData["finished_recurrency_at"] = this.state.form.finished_recurrency_at;
    }
    formData["credit_card_id"] = this.props.paymenData.id || this.state.cardId;
    formData["installments"] =  installments;
    if(Object.keys(this.props.validateCode).length > 0){
      formData["promotion_id"] =  this.props.validateCode.data.promotion.data.attributes.id;
    }
    const job = {
      job: formData,
    };
    this.props.createJob(localStorage.getItem('token'), job);
  };

  nextPage = (event, actual_page, card_id, installments, invoiceId) => {
    event.preventDefault();
    if (actual_page === 'Service') {
      if (this.state.form.services_base.id === 0) {
        Alert.error(this.state.form.services_base.errorText, {
          position: 'top',
          effect: 'genie',
        });
      } else if (this.state.form.property.value === '' || this.state.form.property.value === 'Propiedad') {
        Alert.error(this.state.form.property.errorText, {
          position: 'top',
          effect: 'genie',
        });
      } else if (this.state.form.started_at < Date.now()) {
        Alert.error('La fecha no puede ser menor a hoy', {
          position: 'top',
          effect: 'genie',
        });
      } else if (this.state.form.recurrent.value !== '0' && this.state.form.finished_recurrency_at === null) {
        Alert.error('Debe elejir una fecha de finalizacion', {
          position: 'top',
          effect: 'genie',
        });
      } else if (this.state.form.recurrent.value !== '0' && this.state.form.finished_recurrency_at < this.state.form.started_at) {
        Alert.error('La fecha de finalizacion del trabajo no puede ser menor a la fecha de inicio', {
          position: 'top',
          effect: 'genie',
        });
      } else {
        this.setState({
          service: false,
          checking: false,
          payment: true,
          thanks: false
        });
      }
    } else if (actual_page === 'Checking') {
      this.setState({
        service: false,
        checking: false,
        payment: false,
        thanks: true,
        cardId: card_id,
      });
      this.createJobHandler(event, installments, invoiceId);
    } else if (actual_page === 'Payment') {
      this.setState({
        service: false,
        checking: true,
        payment: false,
        thanks: false,
        cardId: card_id,
      });
    }
  }

  backPage = (event, actual_page) => {
    event.preventDefault();
    if (actual_page === 'Checking') {
      this.setState({
        service: true,
        checking: false,
        payment: false,
        thanks: false
      });
    } else if (actual_page === 'Payment') {
      this.setState({
        service: true,
        checking: false,
        payment: false,
        thanks: false,
      });
    }
  }

  calculateFrequency = () => {
    let frequency = null
    if (this.state.form.recurrent.value === '0') {
      frequency = 'Una vez';
    } else if (this.state.form.recurrent.value === '1') {
      frequency = 'Semanal';
    } else if (this.state.form.recurrent.value === '2') {
      frequency = 'Quincenal';
    } else if (this.state.form.recurrent.value === '3') {
      frequency = 'Mensual';
    }
    return frequency
  }

  calculateDiscount = (serviceId, discountPercentage, total) => {
    let sf = this.state.form;
    if (serviceId == sf.services_base.id) {
      return total * discountPercentage / 100
    }else{
      Alert.error('CÓDIGO invalido, no encontrado ó no pertenece a este servicio', {
        position: 'top',
        effect: 'genie',
      });
      this.setState({textInputStatus:true})
    }

    if (sf.services_addons.length > 0) {
      sf.services_addons.forEach(s => {
        if (serviceId == s.id) {
          return total * discountPercentage / 100
        }
      })
    }else{
      Alert.error('CÓDIGO invalido, no encontrado ó no pertenece a este servicio', {
        position: 'top',
        effect: 'genie',
      });
      this.setState({textInputStatus:true})
    }

    if (sf.services_parameters.length > 0) {
      sf.services_parameters.forEach(s => {
        if (serviceId == s.id) {
          return total * discountPercentage / 100
        }
      })
    }else{
      Alert.error('CÓDIGO invalido, no encontrado ó no pertenece a este servicio', {
        position: 'top',
        effect: 'genie',
      });
      this.setState({textInputStatus:true})
    }

    return 0
  }

  calculate = () => {
    let price = 0;
    let base = this.state.form.services_base.price * this.state.form.services_base.time;
    let time = this.state.form.services_base.time;
    let validateCodeIf = Object.keys(this.props.validateCode).length;
    let sdp = 0
    let discount = 0;
    let recharge = 0;
    let iva = 0;
    let extra_fee = this.props.serviceFee.value;
    let total = 0;
    let idPromoCode = null;

    if (this.state.form.services_addons.length > 0) {
      this.state.form.services_addons.forEach(s => {
        if (s.active) {
          price = ((s.price * s.time)) + price;
          time = s.time + time
        }
      })
    }

    if (this.state.form.services_parameters.length > 0) {
      this.state.form.services_parameters.forEach(s => {
        price = ((s.price * s.time)) + price;
        time = s.time + time
      })
    }

    if (this.state.form.isHolidays) {
      recharge =  (base + price) * (extra_fee/100);
      iva = (base + price + recharge) * 0.12;
      total = (base + price + iva + recharge)
    } else {
      recharge =  0;
      iva = ((base + price) * 0.12);
      total = (base + price + iva);
    }

    if(validateCodeIf > 0){
      idPromoCode = this.props.validateCode.data.promotion.data.attributes.id
      discount = this.calculateDiscount(this.props.validateCode.data.promotion.data.attributes.service.id,this.props.validateCode.data.promotion.data.attributes.discount,base + price + recharge)
      if(discount > 0){
        sdp = this.props.validateCode.data.promotion.data.attributes.discount
      }else{
        sdp = 0
      }
      let subTotal = ((base + price + recharge) - discount)
      iva = (subTotal * 0.12)
      total = (subTotal + iva)
    }

    let data = {price,base,time,recharge,iva,total,validateCodeIf,sdp,discount,idPromoCode};

    return data
  }

  inputChangedHandler = (event) => {
    let orig = event.target.value.trim();
    this.setState({textCode:orig})
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.textCode != '' && this.state.textCodePlaceholder == "Ingrese código"){
      this.setState({textInputStatus: false, codeAplay: true})
      this.props.onValidateCode(localStorage.getItem('token'),this.state.textCode)
    }else{
      Alert.error('El campo CÓDIGO no puede estar vacio', {
        position: 'top',
        effect: 'genie',
      });
    }
  }

  render() {
    const bookingTotal = (
      <table id="customers">
        <tr>
          <th>
            <span>{this.props.service_base[0].name}</span>
            <span>{this.calculateFrequency()}</span>
          </th>
        </tr>
        <div>{moment.utc(this.state.form.started_at).format('MMM D, YYYY h:mm a')}</div>
        {this.props.service_base[0].name !== '' ? (
          <tr>
            <td>{this.props.service_base[0].name}</td>
            <td>${(this.state.form.services_base.price * this.state.form.services_base.time).toFixed(2)}</td>
          </tr>
        ) : null}
        {this.state.form.services_parameters.length > 0 ? 
          this.state.form.services_parameters.map(parameters => {
              {
              let price = parameters.price;
              let time = parameters.time;
              let summary = price * time;
              return (
                <tr key={parameters.id}>
                  <td>{parameters.label}</td>
                  <td>${summary.toFixed(2)}</td>
                </tr>
              );
            }
          })
        : null}
        {this.state.form.services_addons.length > 0 ? 
          this.state.form.services_addons.map(addon => {
            if (addon.active) {
              let price = addon.price;
              let time = addon.time;
              let summary = price * time;
              return (
                <tr key={addon.id}>
                  <td>{addon.label}</td>
                  <td>${summary.toFixed(2)}</td>
                </tr>
              );
            } else {
              return null;
            }
          })
        : null}
        <tr>
          <td>Recargo fin de semana o feriados</td>
          <td>${this.calculate().recharge.toFixed(2)}</td>
        </tr>
        <tr>
          <td>{"Descuento Promoción "}{this.calculate().validateCodeIf > 0 ? 'del ' + this.calculate().sdp + '%' :'0.00%'}</td>
          <td>${this.calculate().discount > 0 ? '-' + this.calculate().discount.toFixed(2) :'0.00'}</td>
        </tr>
        <tr>
          <td>IVA <small>12%</small></td>
          <td>${this.calculate().iva.toFixed(2)}</td>
        </tr>
        <tr>
          <td><small>Total horas de servicio {this.calculate().time}h</small></td>
        </tr>
        <tr>
          <td className={cls.texTotal}>
            <span>{"Te cobraremos "}</span>
            <span className={cls.TotalText}>{this.calculateFrequency()} cada vez que te visitemos.</span>
          </td>
          <td><span className={cls.total}>${this.calculate().total.toFixed(2)}</span></td>
        </tr>
        {(this.state.textInputStatus == true) || (this.calculate().discount == 0) ?
          <tr>
            <td>
              <input
                // className={`${cls.Input}`}
                style={{textTransform: 'uppercase'}}
                type="text"
                name="code"
                placeholder={this.state.textCodePlaceholder}
                value={this.state.textCode}
                onChange={(event) => this.inputChangedHandler(event)}
              />
            </td>
            <td>
              <button onClick={(e) => this.submitHandler(e)} className={cls.pageButton}>VALIDAR CÓDIGO</button>
            </td>
          </tr>
        :null}
      </table>
    );
    return (
      <div className={cls.ServiceBooking}>
        <Grid container justify="center">
          <Grid item xs={12} sm={11} md={12} lg={10}>
            <Grid container justify="center">
              {this.state.service ? (
                <Grid container justify="center">
                  <Grid item xs={12} sm={12} md={7} lg={7}>
                    <BookingForm
                      nextPage={this.nextPage}
                      value={this.state.value}
                      form={this.state.form}
                      service_base={this.props.service_base}
                      properties={this.props.properties}
                      cities={this.props.cities}
                      neightborhoods={this.props.neightborhoods}
                      fetchNeightborhoods={this.props.fetchNeightborhoods}
                      createProperty={this.props.createProperty}
                      handlePropertyUpdate={this.handlePropertyUpdate}
                      handlePropertyChange={this.handlePropertyChange}
                      handleRecurrentChange={this.handleRecurrentChange}
                      handleServiceChange={this.handleServiceChange}
                      changeCheckboxHandler={this.changeCheckboxHandler}
                      changeEventsHandler={this.changeEventsHandler}
                      inputEventsChanger={this.inputEventsChanger}
                      inputChangedHandler={this.inputChangedHandler}
                      changeDatetimeHandler={this.changeDatetimeHandler}
                      changeDatetimeFinishedHandler={this.changeDatetimeFinishedHandler}
                      handleTextChange={this.handleTextChange}
                      selectedProperty={this.state.selectedProperty}/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={5} lg={5}>
                    <Grid container>
                      <Grid item xs={12} sm={6} md={12} lg={12}>
                        {bookingTotal}
                      </Grid>
                      <div className={cls.ButtonSolicitud}>
                        <button onClick={(event) => this.nextPage(event, 'Service')} className={cls.ButtonBookingCore}>Solicitar servicio</button>
                      </div>
                      <Grid item xs={12} sm={6} md={12} lg={12} className={cls.HowWorks}>
                        <HowWorks />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ) : null}
              {this.state.payment ? (
                <Grid container justify="center">
                  <Grid item xs={12} sm={11} md={8} lg={8}>
                    <Grid container>
                      <Payment
                        backPage={this.backPage}
                        nextPage={this.nextPage} />
                    </Grid>
                  </Grid>
                </Grid>                
              ) : null}
              {this.state.checking ? (
                <Grid container justify="center">
                  <Grid item xs={12} sm={11} md={8} lg={8}>
                    <Grid container justify="center">
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Checking
                          user={this.props.user}
                          backPage={this.backPage}
                          nextPage={this.nextPage}
                          form={this.state.form}
                          serviceFee={this.props.serviceFee}
                          invoices={this.props.invoices}
                          handleInvoiceUpdate={this.handleInvoiceUpdate}
                          handleInvoiceChange={this.handleInvoiceChange}
                          selectedProperty={this.state.selectedProperty}
                          dataDiscount={this.calculate()}
                        />
                      </Grid>
                      <Grid item xs={12} sm={8} md={7} lg={6}>
                        <HowWorks />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>                
              ) : null}
              {this.state.thanks ? (
                <Grid container justify="center">
                  <Grid item xs={12} sm={11} md={8} lg={8}>
                    <Grid container>
                      <Grid item xs={12} lg={12}>
                        <Thanks />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>                
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  onValidateCode: (token, data) => dispatch(actions.validateCode(token, data)),
  cleanPromoCode: () => dispatch(actions.cleanPromoCode()),
});

const mapStateToProps = state => ({
  paymenData: state.paymenData.paymenData,
  validateCode: state.validateCode.validateCode,
});

export default connect(mapStateToProps, mapDispatchToProps) (ServiceBooking);