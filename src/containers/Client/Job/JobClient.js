// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Componentes
import {
  Paper,
  Grid,
  Modal
} from 'material-ui';
import MainJobClient from '../MainJobClient/MainJobClient';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Services from '../../../components/Client/Services/Services'

// Css
import cls from './JobClient.css';

import * as actions from '../../../store/actions';

class JobClient extends Component {
  state = {
    filter: {
      current_page_current: 1,
    },
    openModal: false,
  };
  componentDidMount () {
    this.props.onFetchNextJobsCurrent(this.props.token, this.state.filter.current_page_current);
    this.props.onFetchServices(this.props.token);
  }
  showServiceClick = (id) => {
    this.props.history.push(`servicio/${id}`);
  }
  handleOpen = () => {
    this.setState({ openModal: true });
  };
  handleClose = () => {
    this.setState({ openModal: false });
  };
  render() {
    return (
      <div>
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={12} sm={10} md={8}>
            {this.props.loading ? (
              <div className={cls.LoaderContainer}>
                <Spinner />
              </div>
            ) : (
              <Paper elevation={0}>
                <Grid container justify="center">
                  <Grid item xs={6}>
                    <Paper elevation={0} style={{backgroundColor: '#fafafa'}}>
                      <h1 className={cls.Typogra}>Mis trabajos</h1>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper elevation={0} style={{backgroundColor: '#fafafa', textAlign: "right"}}>
                      <a onClick={() => this.handleOpen("login")} className={cls.linkNewJob}><h1 className={cls.Typogra}>Nuevo trabajo</h1></a>
                    </Paper>
                  </Grid>
                  <Grid item xs={11} md={12}>
                    <Paper elevation={0}>
                      <MainJobClient
                        {...this.props}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            )}
          </Grid>
        </Grid>
        <Modal
          open={this.state.openModal}
          onClose={this.handleClose}
        >
          <div className={cls.Modal}>
            <Services close={this.handleClose} clicked={this.showServiceClick} services={this.props.services} /><br/><br/>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: localStorage.getItem('token'),
    services: state.service.services,
    futureJobsMain: state.job.nextjobsCurrent,
    jobsPast: state.job.listJobsCompleted,
    totalPagesCurrentCustomer: state.job.totalPagesCurrentCustomer,
    totalPagesCurrentPast: state.job.totalPagesCurrentPast,
    loading: state.job.loading, 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchServices: (token) => dispatch(actions.fetchServices(token)),
    onFetchNextJobsCurrent: (token, filter) => dispatch(actions.fetchNextJobsCurrent(token, filter)),
    onFetchListJobsCompleted: (token, filter) => dispatch(actions.fetchListJobsCompleted(token, filter)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobClient);