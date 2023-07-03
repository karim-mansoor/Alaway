import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Alert from 'react-s-alert';

// Components
import {Grid} from 'material-ui';

import * as actions from '../../../../../store/actions';

// Css
import cls from './BookingTotal.css';

var _updated = true;

class bookingTotal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textCodePlaceholder : "Ingrese código",
      textCode : '',
      textInputStatus : true,
      form : this.props.form,
      sdp : 0,
      discount : 0,
      codeAplay : false,
      recharge : 0,
      price : 0,
      base : 0,
      time : 0,
      iva : 0,
      total : 0,
      dsUpdated : true
    }
  }
  
  componentDidUpdate = () => {
    if (this.props.form.services_addons.length > 0 && _updated === true) {
      this.props.form.services_addons.forEach(s => {
        if (s.active) {
          console.log("AQUIIIIIII",s.active)
          // _updated = false
          // this.setState({
          //   dsUpdated : true,
          // })
        }
      })
    }
    // if (_updated === false) {
    //   this.setState({
    //     dsUpdated : this.props.dsUpdated,
    //   })
    //   _updated = true
    // }
  }

  calculateFrequency = () => {
    let frequency = null
    if (this.props.form.recurrent.value === '0') {
      frequency = 'Una vez';
    } else if (this.props.form.recurrent.value === '1') {
      frequency = 'Semanal';
    } else if (this.props.form.recurrent.value === '2') {
      frequency = 'Quincenal';
    } else if (this.props.form.recurrent.value === '3') {
      frequency = 'Mensual';
    }
    return frequency
  }

  calculateDiscount = (serviceId, discountPercentage, total) => {
    let sf = this.props.form;
    if (serviceId == sf.services_base.id) {
      return total * discountPercentage / 100
    }else{
      Alert.error('CÓDIGO invalido, no encontrado ó no pertenece a este servicio', {
        position: 'top',
        effect: 'genie',
      });
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
    }

    return 0
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.textCode != '' && this.state.textCodePlaceholder == "Ingrese código"){
      this.setState({form:this.props.form,textInputStatus: false, codeAplay: true})
      this.props.onValidateCode(localStorage.getItem('token'),this.state.textCode)
    }else{
      Alert.error('El campo CÓDIGO no puede estar vacio', {
        position: 'top',
        effect: 'genie',
      });
    }
  }
  
  inputChangedHandler = (event) => {
    let orig = event.target.value.trim();
    this.setState({textCode:orig})
  }

  render () {
    let price = this.state.price;
    let base = this.state.base;
    let time = this.state.time;
    let frequency = this.calculateFrequency();
    let validateCodeIf = Object.keys(this.props.validateCode).length
    
    base = this.props.form.services_base.name !== '' ? (this.props.form.services_base.price * this.props.form.services_base.time) : 0;
    time = time + this.props.form.services_base.time;

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

    
    let recharge = 0;
    let iva = 0;
    let total = 0;
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
    
    let sdp = this.state.sdp
    let discount = this.state.discount

    
    if(validateCodeIf > 0){
      discount = this.calculateDiscount(this.props.validateCode.data.promotion.data.attributes.service.id,this.props.validateCode.data.promotion.data.attributes.discount,base + price + recharge)
      if(discount > 0){
        sdp = this.props.validateCode.data.promotion.data.attributes.discount
      }else{
        sdp = 0
      }
      let subTotal = ((base + price + recharge) - discount)
      iva = (subTotal * 0.12)
      total = (subTotal + iva)
      
      const updatedDiscount = {
        ...this.state.form,
        discount: discount,
      }
      if(discount > 0 && this.state.dsUpdated){
        this.setState({
          form: updatedDiscount,
          recharge : recharge,
          sdp : sdp,
          discount : discount,
          iva : iva,
          total : total,
          codeAplay : false,
          dsUpdated : false,
        })
      }
    }

    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={cls.BookingTotal}>
            <Grid container>
              <div className={cls.BookingTotalWrapper}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Grid container>
                    <div className={cls.BookingSection}>
                      <div className={cls.RowInfo}>
                        <div className={cls.InfoContent}>
                          <h3>
                            <span>{this.props.form.services_base.name === '' ? 'No ha seleccionado un servicio' : this.props.form.services_base.name} </span>
                            <span>{this.props.form.services_base.name === '' ? null : frequency}</span>
                          </h3>
                          <div>
                            <div className={cls.PadTop}>
                              <div>
                                {moment.utc(this.props.form.started_at).format('MMM D, YYYY h:mm a')}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <div className={cls.BookingSection}>
                    <Grid container>
                      <div className={cls.Row}>
                        <Grid item xs={12} md={12} lg={12}>
                          {this.props.form.services_base.name !== '' ? (
                            <div className={cls.containerTotal}>
                              <div className={cls.SummaryTitle}>{this.props.form.services_base.name}</div>
                              <div className={cls.SummaryAmount}>${base.toFixed(2)}</div>
                            </div>
                          ) : (
                            <div container>
                              <div className={cls.SummaryTitle}>No ha seleccionado servicios</div>
                              <div className={cls.SummaryAmount}></div>
                            </div>
                          )}
                          {this.props.form.services_parameters.length > 0 ? 
                            this.props.form.services_parameters.map(parameters => {
                                {
                                let price = parameters.price;
                                let time = parameters.time;
                                let summary = price * time;
                                return (
                                  <div key={parameters.id} className={cls.containerTotal}>
                                    <div className={cls.titleParameters}>{parameters.label}</div>
                                    <div className={cls.priceParameters}>${summary.toFixed(2)}</div>
                                  </div>
                                );
                              }
                            })
                          : null}
                          {this.props.form.services_addons.length > 0 ? 
                            this.props.form.services_addons.map(addon => {
                              if (addon.active) {
                                let price = addon.price;
                                let time = addon.time;
                                let summary = price * time;
                                return (
                                  <div key={addon.id} className={cls.containerTotal}>
                                    <div className={cls.titleParameters}>{addon.label}</div>
                                    <div className={cls.priceParameters}>${summary.toFixed(2)}</div>
                                  </div>
                                );
                              } else {
                                return null;
                              }
                            })
                          : null}
                          <div className={cls.containerTotal}>
                            <div className={cls.titleParameters}>Recargo fin de semana o feriados</div>
                            <div className={cls.priceParameters}>${validateCodeIf > 0 ? this.state.recharge.toFixed(2) : recharge.toFixed(2)}</div>
                            <div className={cls.titleParameters}>{"Descuento Promoción "}{validateCodeIf > 0 ? 'del ' + sdp + '%' :'0.00%'}</div>
                            <div className={cls.priceParameters}>${discount > 0 ? '-' + discount.toFixed(2) :'0.00'}</div>
                            <div className={cls.vatPorciento}>IVA <small>12%</small></div>
                            <div className={cls.vat}>${validateCodeIf > 0 ? this.state.iva.toFixed(2) : iva.toFixed(2)}</div>
                            <div><small>Total horas de servicio {time}h</small></div>
                          </div>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </Grid>

                {(this.state.textInputStatus == true) ? 
                  <Grid item xs={12} md={12} lg={12}>
                    <div className={cls.BookingSectionNoBorder}>
                      <Grid container>
                        <div className={cls.RowTotal}>
                          <Grid container>
                            <div className={cls.TotalText}>
                              <input
                                // className={`${cls.Input}`}
                                style={{textTransform: 'uppercase'}}
                                type="text"
                                name="code"
                                placeholder={this.state.textCodePlaceholder}
                                value={this.state.textCode}
                                onChange={(event) => this.inputChangedHandler(event)}
                              />
                            </div>
                            <Grid item xs={6} md={6} lg={6}>
                              <div className={cls.Total}>
                                <button onClick={(e) => this.submitHandler(e)} className={cls.pageButton}>VALIDAR CÓDIGO</button>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                : null}
                
                <Grid item xs={12} md={12} lg={12}>
                  <div className={cls.BookingSectionNoBorder}>
                    <Grid container>
                      <div className={cls.RowTotal}>
                        <Grid container>
                          <div className={cls.TotalText}>
                            <span>Te cobraremos</span>
                          </div>
                          <Grid item xs={6} md={6} lg={6}>
                            <div className={cls.Total}>
                              <span>${validateCodeIf > 0 ? this.state.total.toFixed(2) : total.toFixed(2)}</span>
                            </div>
                          </Grid>
                          <Grid item xs={12}>
                            <span className={cls.TotalText}>{frequency} cada vez que te visitemos.</span>
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
}

const mapDispatchToProps = dispatch => ({
  onValidateCode: (token, data) => dispatch(actions.validateCode(token, data)),
});

const mapStateToProps = state => ({
  validateCode: state.validateCode.validateCode,
});

export default connect(mapStateToProps, mapDispatchToProps) (bookingTotal);