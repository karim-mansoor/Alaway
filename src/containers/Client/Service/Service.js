import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import ServiceImage from '../../../components/Client/Services/ServiceImage/ServiceImage';
import ServiceBooking from '../../../components/Client/Services/ServiceBooking/ServiceBooking';
import Spinner from '../../../components/UI/Spinner/Spinner';

// Css
import cls from './Service.css';

import * as actions from '../../../store/actions';

class Service extends Component {
  componentDidMount () {
    this.props.onFetchUser(this.props.token);
    this.props.onFetchService(this.props.match.params.service_id, this.props.token);
    this.props.onFetchProperties(this.props.token);
    this.props.onFetchCities(this.props.token);
    this.props.onHolidays(this.props.token);
    this.props.onInvoices(this.props.token);
  }
  render () {


    let serviceImage = <ServiceImage />
    let serviceBooking = null;
    if (this.props.service.attributes) {



      serviceImage = (
        <ServiceImage title={this.props.service.attributes.name} image={this.props.service.attributes.image.url}/>
      )
      serviceBooking = (
        <ServiceBooking
          user={this.props.user}
          service_base={this.props.service.attributes.service_base}
          services_addons={this.props.service.attributes.services_addons}
          services_parameters={this.props.service.attributes.services_parameters}
          holidays={this.props.holidays}
          invoices={this.props.invoices}
          properties={this.props.properties}
          cities={this.props.cities}
          neightborhoods={this.props.neightborhoods}
          fetchNeightborhoods={this.props.onFetchNeightborhoods}
          createProperty={this.props.onCreateProperty}
          createJob={this.props.onCreateJob}
          serviceFee={this.props.service.attributes.extra_service_fee_holiday}/>
      )
    }
    return (
      <div>
        {this.props.loading ? (
          <div className={cls.LoaderContainer}>
            <Spinner/>
          </div>
        ) : (
          <div>
            {serviceImage}
            {serviceBooking}
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (token) => dispatch(actions.fetchCurrentUser(token)),
    onFetchService: (id, token) => dispatch(actions.fetchService(id, token)),
    onFetchProperties: (token) => dispatch(actions.fetchProperties(token)),
    onFetchCities: (token) => dispatch(actions.fetchCities(token)),
    onFetchNeightborhoods: (token, id) => dispatch(actions.fetchNeightborhoods(token, id)),
    onCreateProperty: (token, formData) => dispatch(actions.createProperty(token, formData)),
    onCreateJob: (token, formData) => dispatch(actions.createJob(token, formData)),
    onHolidays: (token) => dispatch(actions.holidays(token)),
    onInvoices: (token) => dispatch(actions.invoices(token)),
  };
};

const mapStateToProps = state => {
  return {
    token: state.auth.token || localStorage.getItem('token'),
    user: state.user.user,
    service: state.service.service,
    holidays: state.service.holidays,
    invoices: state.service.invoices,
    properties: state.property.properties,
    cities: state.city.cities,
    neightborhoods: state.neightborhood.neightborhoods,
    loading: state.service.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);