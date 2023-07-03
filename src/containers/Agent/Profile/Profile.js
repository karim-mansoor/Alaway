import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
  Grid,
} from 'material-ui';
import CardProfile from '../../../components/Agent/CardProfile/CardProfile';

// Css
import cls from './Profile.css';

import * as actions from '../../../store/actions';

class Profile extends Component {
  componentDidMount() {
    this.props.onFetchUser(localStorage.getItem('token'));
  }

  render() {
    return (
      <div>
        <Grid container justify="center" className={cls.Profile}>
          <Grid item xs={11} sm={11} md={10} lg={6}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <h1>Mi Perfil</h1>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardProfile
                  logout={this.props.onLogout}
                  user={this.props.user}
                  update={this.props.onUpdateUser}
                  updateAvatar={this.props.onUpdateAvatar}
                  loading={this.props.loading}
                  changePassword={this.props.onChangePassword} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    user: state.user.user,
    loading: state.user.loading,
    properties: state.property.properties,
    cities: state.city.cities,
    neightborhoods: state.neightborhood.neightborhoods,
    property: state.property.property,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (token) => dispatch(actions.fetchCurrentAgent(token)),
    onUpdateUser: (token, form) => dispatch(actions.updatedCurrentAgent(token, form)),
    onUpdateAvatar: (token, file) => dispatch(actions.updatedCurrentAgentAvatar(token, file)),
    onChangePassword: (token, form) => dispatch(actions.changePasswordAgent(token, form)),
    onLogout: () => dispatch(actions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);