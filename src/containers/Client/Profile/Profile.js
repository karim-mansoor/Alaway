import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
  Grid,
} from 'material-ui';
import CardProfile from '../../../components/Client/CardProfile/CardProfile';

// Css
import cls from './Profile.css';

import * as actions from '../../../store/actions';

class Profile extends Component {
  componentDidMount() {
    this.props.onFetchUser(localStorage.getItem('token'));
    this.props.onFetchProperties(localStorage.getItem('token'));
    this.props.onFetchCities(localStorage.getItem('token'));
  }

  render() {
    return (
      <div>
        <Grid container justify="center" className={cls.Profile}>
          <Grid item xs={11} sm={11} md={8} lg={6}>
            <Grid container>
              <Grid item xs={11} sm={12} md={12} lg={12}>
                <h2 className={cls.Title}>Mi Perfil</h2>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardProfile
                  logout={this.props.onLogout}
                  user={this.props.user}
                  update={this.props.onUpdateUser}
                  updateAvatar={this.props.onUpdateAvatar}
                  loading={this.props.loading}
                  changePassword={this.props.onChangePassword}
                  properties={this.props.properties}
                  cities={this.props.cities}
                  neightborhoods={this.props.neightborhoods}
                  fetchNeightborhoods={this.props.onFetchNeightborhoods}
                  createProperty={this.props.onCreateProperty}
                  updateProperty={this.props.onUpdateProperty}
                  fetchProperty={this.props.onFetchProperty}
                  deleteProperty={this.props.onDeleteProperty}
                  property={this.props.property}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    user: state.user.user,
    properties: state.property.properties,
    cities: state.city.cities,
    neightborhoods: state.neightborhood.neightborhoods,
    property: state.property.property,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (token) => dispatch(actions.fetchCurrentUser(token)),
    onUpdateUser: (token, form) => dispatch(actions.updatedCurrentUser(token, form)),
    onUpdateAvatar: (token, file) => dispatch(actions.updatedCurrentUserAvatar(token, file)),
    onChangePassword: (token, form) => dispatch(actions.changePassword(token, form)),
    onFetchProperties: (token) => dispatch(actions.fetchProperties(token)),
    onFetchCities: (token) => dispatch(actions.fetchCities(token)),
    onFetchNeightborhoods: (token, id) => dispatch(actions.fetchNeightborhoods(token, id)),
    onCreateProperty: (token, formData) => dispatch(actions.createPropertyOnProfile(token, formData)),
    onFetchProperty: (token, id) => dispatch(actions.fetchProperty(token, id)),
    onUpdateProperty: (token, formData, id) => dispatch(actions.updateProperty(token, formData, id)),
    onDeleteProperty: (token, id) => dispatch(actions.deleteProperty(token, id)),
    onLogout: () => dispatch(actions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);