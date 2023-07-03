import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import MenuBar from '../MenuBar/MenuBarAgent';
import Dashboard from './Dashboard/Dashboard';
import MyJobs from './MyJobs/MyJobs';
import Calendario from './Calendario/Calendario';
import Report from './Report/Report';
import Profile from './Profile/Profile';
import DetailsJob from './DetailsJob/DetailsJob';
import CustomerShowQualify from './CustomerShowQualify/CustomerShowQualify';

// Css
import cls from './Agent.css';

import * as actions from '../../store/actions';

class Agent extends Component {
  render () {
    return (
      <div className={cls.Agent}>
        <MenuBar auth={this.props.auth} logout={this.props.onLogout} profile={this.props.profile}/>
        <Switch>
          <Route path={`${this.props.match.url}/dashboard`} exact component={Dashboard}/>
          <Route path={`${this.props.match.url}/trabajos`} exact component={MyJobs}/>
          <Route path={`${this.props.match.url}/calendario`} exact component={Calendario}/>
          <Route path={`${this.props.match.url}/reporte`} exact component={Report}/>
          <Route path={`${this.props.match.url}/perfil`} component={Profile}/>
          <Route path={`${this.props.match.url}/trabajo/:job_id`} component={DetailsJob}/>
          <Route path={`${this.props.match.url}/:job_id/calificar`} exact component={CustomerShowQualify}/>
          <Redirect to={`${this.props.match.url}/dashboard`}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.token || localStorage.getItem('token'),
    profile: state.auth.profile || localStorage.getItem('profile'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Agent);
