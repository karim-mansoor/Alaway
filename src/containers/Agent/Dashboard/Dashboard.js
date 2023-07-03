// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Componentes
import MenuBar from '../../MenuBar/MenuBarAgent';
import Filter from '../../../components/Agent/Filter/Filter';
import MainDashboardAgent from '../../../components/Agent/MainDashboardAgent/MainDashboardAgent';
import Spinner from '../../../components/UI/Spinner/Spinner';

// Css
import cls from './Dashboard.css';

import * as actions from '../../../store/actions';

class DashboardAgent extends Component {
  state = {
    filter: {
      min_price: '',
      max_price: '',
      date_from: null,
      date_to: null,
      frequency: '4',
      current_page: 1,
      active: false,
    },
  };

  componentDidMount() {
    let filter = {};
    filter.min_price = '0';
    filter.max_price = '';
    filter.date_from = null;
    filter.date_to = null;
    filter.frequency = null;
    filter.current_page = this.state.filter.current_page;
    this.props.onFetchJobs(localStorage.getItem('token'), filter);
    this.props.onFetchUser(localStorage.getItem('token'));
  };

  filterHandler = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        active: true,
      }
    });
    let filter = {};
    filter.min_price = this.state.filter.min_price;
    filter.max_price = this.state.filter.max_price;
    if (this.state.filter.date_from !== null) {
      filter.date_from = moment(this.state.filter.date_from).format();
    } else {
      filter.date_from = null;
    }
    if (this.state.filter.date_to !== null) {
      filter.date_to = moment(this.state.filter.date_to).format();
    } else {
      filter.date_to = null;
    }
    filter.frequency = this.state.filter.frequency;
    filter.current_page = this.state.filter.current_page;
    this.props.onFetchJobs(localStorage.getItem('token'), filter);
  };

  handleChange = (event, key) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        [key]: event.target.value,
      },
    });
  }

  changeDatetimeHandler = (dateTime, key) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        [key]: moment(dateTime).format(),
      }
    })
  };

  goNext = () => {
   if (this.state.filter.current_page === parseInt(this.props.total_pages, 10)) {

    } else {
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          current_page: this.state.filter.current_page + 1,
        }
      });
      if (this.state.filter.active) {
        let filter = {};
        filter.min_price = this.state.filter.min_price;
        filter.max_price = this.state.filter.max_price;
        filter.date_from = moment(this.state.filter.date_from).format();
        filter.date_to = moment(this.state.filter.date_to).format();
        filter.frequency = this.state.filter.frequency;
        filter.current_page = this.state.filter.current_page + 1;
        this.props.onFetchJobs(localStorage.getItem('token'), filter);
      } else {
        let filter = {};
        filter.min_price = '0';
        filter.max_price = '';
        filter.date_from = null;
        filter.date_to = null;
        filter.frequency = null;
        filter.current_page = this.state.filter.current_page + 1;
        this.props.onFetchJobs(localStorage.getItem('token'), filter);
      }
    }
  };

  goBack = () => {
    if (this.state.filter.current_page === 1) {

    } else {
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          current_page: this.state.filter.current_page - 1,
        }
      });
    }
    if (this.state.filter.active) {
      let filter = {};
      filter.min_price = this.state.filter.min_price;
      filter.max_price = this.state.filter.max_price;
      filter.date_from = moment(this.state.filter.date_from).format();
      filter.date_to = moment(this.state.filter.date_to).format();
      filter.frequency = this.state.filter.frequency;
      filter.current_page = this.state.filter.current_page - 1;
      this.props.onFetchJobs(localStorage.getItem('token'), filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page = this.state.filter.current_page - 1;
      this.props.onFetchJobs(localStorage.getItem('token'), filter);
    }
  };

  goTo = (a, page) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        current_page: page,
      }
    }, function(){
    });
    if (this.state.filter.active) {
      let filter = {};
      filter.min_price = this.state.filter.min_price;
      filter.max_price = this.state.filter.max_price;
      filter.date_from = moment(this.state.filter.date_from).format();
      filter.date_to = moment(this.state.filter.date_to).format();
      filter.frequency = this.state.filter.frequency;
      filter.current_page = page;
      this.props.onFetchJobs(localStorage.getItem('token'), filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page = page;
      this.props.onFetchJobs(localStorage.getItem('token'), filter);
    }
  };
  render() {
    let status = null;
    let firstNameUser = null;
    let lastNameUser = null;
    if (this.props.user.attributes) {
      status = this.props.user.attributes.status,
      firstNameUser = this.props.user.attributes.first_name,
      lastNameUser = this.props.user.attributes.last_name
    }
    return (
      <div className={cls.Dashboard}>
        <MenuBar />
        {this.props.loading ? (
          <div className={cls.LoaderContainer}>
            <Spinner/>
          </div>
        ) : (
          status === 'pending' ? (
            <div className={cls.StatusPending}>
              <h1>Hola, {firstNameUser} {lastNameUser}</h1>
              <h3>en este momento estamos evaluando tu postulación, nuestro equipo de Noc Noc se contactará contigo</h3> 
            </div>
          ) : (
            <div>
              <Filter 
                filter={this.state.filter}
                filterHandler={this.filterHandler}
                handleChange={this.handleChange}
                changeDatetimeHandler={this.changeDatetimeHandler} />
              <MainDashboardAgent 
                jobs={this.props.jobs}
                total_pages={this.props.total_pages}
                current_page={this.state.filter.current_page}
                goNext={this.goNext}
                goBack={this.goBack}
                goTo={this.goTo}
                applyProposal={this.props.onApplyProposal} />
            </div>
          )
        )}
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchUser: (token) => dispatch(actions.fetchCurrentAgent(token)),
  onFetchJobs: (token, filter) => dispatch(actions.fetchJobsAgent(token, filter)),
  onApplyProposal: (token, job_id) => dispatch(actions.applyProposal(token, job_id)),
});

const mapStateToProps = state => ({
  user: state.user.user,
  jobs: state.job.jobs,
  total_pages: state.job.total_pages,
  loading: state.job.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAgent);