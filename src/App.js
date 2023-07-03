//Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

//Component
import cls from './index.css';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Client from './containers/Client/Client';
import Agent from './containers/Agent/Agent';
import HomeAgent from './containers/Agent/HomeAgent';
import LoginClient from './components/Client/Login/Login';
import RegisterClient from './components/Client/Register/Register';
import LoginAgent from './containers/Agent/Login/Login';
import ResetClient from './containers/Client/Reset/Reset';
import UpdatePasswordClient from './containers/Client/UpdatePassword/UpdatePassword';
import UpdatePasswordAgent from './containers/Agent/UpdatePassword/UpdatePassword';
import ResetAgent from './containers/Agent/Reset/Reset';
import AboutUs from './components/Home/KnowUs/AboutUs';
import Policies from './components/Home/KnowUs/Policies';
import Terms from './components/Home/KnowUs/Terms';
import Alert from 'react-s-alert';

class App extends Component {
  render() {
    let routes = null;
    if (this.props.auth && localStorage.getItem('signInAs') === 'customer') {
      routes = (
        <Route path="/cliente" component={Client}/>
      ) 
    }
    if (this.props.auth && localStorage.getItem('signInAs') === 'agent') {
      routes = (
        <Route path="/agente" component={Agent}/>
      )
    }
    return (
      <div className={cls.body}>
        <Alert stack={{limit: 1}} />
        <Layout>
          <Switch>
            {routes}
            <Route path="/resetear" exact component={ResetClient}/>
            <Route path="/resetear/:reset_token" exact component={UpdatePasswordClient}/>
            <Route path="/agente/resetear" exact component={ResetAgent}/>
            <Route path="/agente/resetear/:reset_token" exact component={UpdatePasswordAgent}/>
            <Route path="/cliente/login" component={LoginClient}/>
            <Route path="/agente/login" component={LoginAgent}/>
            <Route path="/agente/registro" component={HomeAgent}/>
            <Route path="/cliente/registro" component={RegisterClient}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/politicas" component={Policies}/>
            <Route path="/terms" component={Terms}/>
            <Route path="/" exact component={Home}/>
            <Redirect to="/"/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.token || localStorage.getItem('token')
  };
};

export default withRouter(connect(mapStateToProps)(App));