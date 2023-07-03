import React, { Component } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import {TextField} from 'material-ui';
// Css
import cls from './Filter.css'

class Filter extends Component {
  validDates = current => {
    return current.isAfter(Datetime.moment().subtract(1, 'days'));
  };

  validDatesTo = current => {
    return current.isAfter(moment(this.props.filter.date_from));
  };

  renderInput = (props) => {
    return (
      <div>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
        {...props}/>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className={cls.SearchFilter}>
          <div className={cls.SearchWrapper}>
            <div className={cls.Card}>
              <div className={cls.CardJobsFilter}>
                <div className="row">
                  <div className="col-md-6">
                    <article className="card-group-item">
                      <header className="card-header">
                        <h6 className={cls.Title}>Monto del trabajo</h6>
                      </header>
                      <div className="filter-content">
                        <div className="form-group col-md-6">
                          <label>Min</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="$0"
                            value={this.props.filter.min_price}
                            onChange={(event) => this.props.handleChange(event, 'min_price')} />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Max</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="$1,0000" 
                            value={this.props.filter.max_price}
                            onChange={(event) => this.props.handleChange(event, 'max_price')}/>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-6">
                    <article className="card-group-item">
                      <header className="card-header">
                        <h6 className={cls.Title}>Fecha del trabajo</h6>
                      </header>
                      <div className="filter-content">
                        <div className="form-group col-md-6">
                          <label>Desde</label>
                          <Datetime
                            isValidDate={this.validDates}
                            value={moment(this.props.filter.date_from)}
                            onChange={(dateTime) => this.props.changeDatetimeHandler(dateTime, 'date_from')}
                            dateFormat="MM/DD/YYYY"
                            timeFormat={false}
                            inputProps={{
                              className: 'form-control',
                              placeholder: 'Inicio',
                              label: 'Fecha',
                            }}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Hasta</label>
                          <Datetime
                            isValidDate={this.validDatesTo}
                            label="Fecha"
                            id="simple-start-adornment"
                            value={moment(this.props.filter.date_to)}
                            onChange={(dateTime) => this.props.changeDatetimeHandler(dateTime, 'date_to')}
                            dateFormat="MM/DD/YYYY"
                            timeFormat={false}
                            inputProps={{
                              className: 'form-control',
                              placeholder: 'Fin',
                              label: 'Fecha',
                            }}
                          />
                        </div>
                      </div>
                    </article> 
                  </div>
                </div>
                <article className="card-group-item">
                  <header className="card-header">
                    <h6 className={cls.Title}>Frecuencia</h6>
                  </header>
                  <div className="filter-content">
                    <div className="card-body">
                      <div className="row">
                        <div className={`${cls.paddingFrequencyConten} ${"col-xs-12 col-md-8"}`}>
                          <div className="row">
                            <div className={`${cls.paddingFrequency} ${"col-xs-6 col-md-2"}`}>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="Check4" 
                                  checked={this.props.filter.frequency === '4'}
                                  value="4"
                                  onChange={(event) => this.props.handleChange(event, 'frequency')} />
                                <label className={`${cls.spaceLabelFrequency} ${"custom-control-label"}`} htmlFor="Check4" value="4">Todas</label>
                              </div>
                            </div>
                            <div className={`${cls.paddingFrequency} ${"col-xs-6 col-md-2"}`}>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="Check0" 
                                  checked={this.props.filter.frequency === '0'}
                                  value="0"
                                  onChange={(event) => this.props.handleChange(event, 'frequency')} />
                                <label className={`${cls.spaceLabelFrequency} ${"custom-control-label"}`} htmlFor="Check0" value="0">Una vez</label>
                              </div>
                            </div>
                            <div className={`${cls.paddingFrequency} ${"col-xs-6 col-md-2"}`}>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="Check1"
                                  checked={this.props.filter.frequency === '1'}
                                  value="1"
                                  onChange={(event) => this.props.handleChange(event, 'frequency')} />
                                <label className={`${cls.spaceLabelFrequency} ${"custom-control-label"}`} htmlFor="Check1" value="1">Semanal</label>
                              </div>
                            </div>
                            <div className={`${cls.paddingFrequency} ${"col-xs-6 col-md-2"}`}>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="Check2" 
                                  checked={this.props.filter.frequency === '2'}
                                  value="2"
                                  onChange={(event) => this.props.handleChange(event, 'frequency')} />
                                <label className={`${cls.spaceLabelFrequency} ${"custom-control-label"}`} htmlFor="Check2" value="2">Quincenal</label>
                              </div>
                            </div>
                            <div className={`${cls.paddingFrequency} ${"col-xs-6 col-md-2"}`}>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="Check3"
                                  checked={this.props.filter.frequency === '3'}
                                  value="3"
                                  onChange={(event) => this.props.handleChange(event, 'frequency')} />
                                <label className={`${cls.spaceLabelFrequency} ${"custom-control-label"}`} htmlFor="Check3" value="3">Mensual</label>
                            </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                          <div className={cls.FilterBtnWrapper}>
                            <button onClick={(event) => this.props.filterHandler(event)} className={cls.FilterBtn}>Filtrar</button>
                            <button onClick={() => window.location.reload() } className={cls.FilterBtn}>Mostrar Todos</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
