import React from 'react';
import moment from 'moment';

// Components
import {
  Grid,
} from 'material-ui';

// Css
import cls from './BookingTotal.css';

const bookingTotal = (props) => {
  console.log("ESTOY COMPROBANDO AQUIIIIIIII",this.props.form)

  let price = 0;
  let base = 0;
  let time = 0;
  let frequency = null;
  if (props.form.recurrent.value === '0') {
    frequency = 'Una vez';
  } else if (props.form.recurrent.value === '1') {
    frequency = 'Semanal';
  } else if (props.form.recurrent.value === '2') {
    frequency = 'Quincenal';
  } else if (props.form.recurrent.value === '3') {
    frequency = 'Mensual';
  }
  if (props.form.services_addons.length > 0) {
    props.form.services_addons.forEach(s => {
      if (s.active) {
        price = ((s.price * s.time)) + price;
        time = s.time + time
      }
    })
  }
  if (props.form.services_parameters.length > 0) {
    props.form.services_parameters.forEach(s => {
      price = ((s.price * s.time)) + price;
      time = s.time + time
    })
  }
  base = props.form.services_base.name !== '' ? (props.form.services_base.price * props.form.services_base.time) : 0;
  time = time + props.form.services_base.time;
  
  let recharge = 0;
  let iva = 0;
  let total = 0;
  let extra_fee = props.serviceFee.value;
  if (props.form.isHolidays) {
    recharge =  (base + price) * (extra_fee/100);
    iva = (base + price + recharge) * 0.12;
    total = (base + price + iva + recharge)
  } else {
    recharge =  0;
    iva = ((base + price) * 0.12);
    total = (base + price + iva);
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
                          <span>{props.form.services_base.name === '' ? 'No ha seleccionado un servicio' : props.form.services_base.name} </span>
                          <span>{props.form.services_base.name === '' ? null : frequency}</span>
                        </h3>
                        <div>
                          <div className={cls.PadTop}>
                            <div>
                              {moment.utc(props.form.started_at).format('MMM D, YYYY h:mm a')}
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
                        {props.form.services_base.name !== '' ? (
                          <div className={cls.containerTotal}>
                            <div className={cls.SummaryTitle}>{props.form.services_base.name}</div>
                            <div className={cls.SummaryAmount}>${base.toFixed(2)}</div>
                          </div>
                        ) : (
                          <div container>
                            <div className={cls.SummaryTitle}>No ha seleccionado servicios</div>
                            <div className={cls.SummaryAmount}></div>
                          </div>
                        )}
                        {props.form.services_parameters.length > 0 ? 
                          props.form.services_parameters.map(addon => {
                              {
                              let price = addon.price;
                              let time = addon.time;
                              let summary = price * time;
                              return (
                                <div key={addon.id} className={cls.containerTotal}>
                                  <div className={cls.titleParameters}>{addon.label}</div>
                                  <div className={cls.priceParameters}>${summary.toFixed(2)}</div>
                                </div>
                              );
                            }
                          })
                        : null}
                        {props.form.services_addons.length > 0 ? 
                          props.form.services_addons.map(addon => {
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
                          <div className={cls.priceParameters}>${recharge.toFixed(2)}</div>
                          <div className={cls.vatPorciento}>IVA <small>12%</small></div>
                          <div className={cls.vat}>${iva.toFixed(2)}</div>
                          <div><small>Total horas de servicio {time}h</small></div>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Grid>
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
                            $
                            <span> {total.toFixed(2)}
                            </span>
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

export default bookingTotal;