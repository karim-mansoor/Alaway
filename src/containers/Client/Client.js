import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import MenuBar from '../MenuBar/MenuBar';
import Dashboard from './Dashboard/Dashboard';
import Service from './Service/Service';
import Job from './Job/Job';
import Profile from './Profile/Profile';
import JobCliente from '../Client/Job/JobClient';
import AgentShowAccepted from '../../components/Client/AgentShowAccepted/AgentShowAccepted';
import AgentShowQualify from '../../components/Client/AgentShowAccepted/AgentShowQualify';
import AgentShowPostulate from '../../components/Client/AgentShowPostulate/AgentShowPostulate';
import JobCancel from './JobCancel/JobCancel';

// Css
import cls from './Client.css';

import * as actions from '../../store/actions';

class Client extends Component {
  render () {
    return (
      <div className={cls.Client}>
        <MenuBar auth={this.props.auth} logout={this.props.onLogout} profile={this.props.profile}/>
        <Switch>
          <Route path={`${this.props.match.url}/dashboard`} exact component={Dashboard}/>
          <Route path={`${this.props.match.url}/servicio/:service_id`} exact component={Service}/>
          <Route path={`${this.props.match.url}/trabajo/:job_id`} exact component={Job}/>
          <Route path={`${this.props.match.url}/trabajo/:job_id/cancelar`} exact component={JobCancel}/>
          <Route path={`${this.props.match.url}/trabajo/:job_id/agente/postulado/:proposal_id`} exact component={AgentShowPostulate}/>
          <Route path={`${this.props.match.url}/trabajo/:job_id/agente/contratado`} exact component={AgentShowAccepted}/>
          <Route path={`${this.props.match.url}/trabajo/:job_id/agente/calificar`} exact component={AgentShowQualify}/>
          <Route path={`${this.props.match.url}/perfil`} component={Profile}/>
          <Route path={`${this.props.match.url}/trabajos`} component={JobCliente}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Client);
