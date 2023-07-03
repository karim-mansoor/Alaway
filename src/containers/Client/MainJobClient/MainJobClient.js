// Dependencias
import React, { Component } from 'react';
import moment from 'moment';

// Componentes
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from 'material-ui/styles';
import { AppBar } from 'material-ui';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import cls from './MainJobClient.css';
import JobFutures from '../CardJobClient/JobFuturesClient';
import JobPast from '../CardJobClient/JobPastClient';

const styles = theme => ({
  root: {
    width: 'auto',
    position: 'relative',
    minHeight: 200,
    backgroundColor: '#f9f9f9',
  },
  indicator: {
    backgroundColor: '#0069a7',
  },
});

class MainJobClient extends Component {
  state = {
    value: 0,
    filter: {
      min_price: '',
      max_price: '',
      date_from: null,
      date_to: null,
      frequency: '0',
      current_page_current: 1,
      current_page_past: 1,
      active_current: false,
      active_past: false,
    },
  };

  handleChange = (event, value) => {
    switch (value) {
      case 0:
        this.props.onFetchNextJobsCurrent(this.props.token, this.state.filter.current_page_current);
        break;
      case 1:
        this.props.onFetchListJobsCompleted(this.props.token, this.state.filter.current_page_past);
        break;
    }
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  goNext = () => {
    if (this.state.filter.current_page_current === parseInt(this.props.totalPagesCurrentCustomer, 10)) {

    } else {
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          current_page_current: this.state.filter.current_page_current + 1,
        }
      });
      if (this.state.filter.active_current) {
        let filter = {};
        filter.min_price = this.state.filter.min_price;
        filter.max_price = this.state.filter.max_price;
        filter.date_from = moment(this.state.filter.date_from).format();
        filter.date_to = moment(this.state.filter.date_to).format();
        filter.frequency = this.state.filter.frequency;
        filter.current_page_current = this.state.filter.current_page_current + 1;
        this.props.onFetchNextJobsCurrent(this.props.token, filter);
      } else {
        let filter = {};
        filter.min_price = '0';
        filter.max_price = '';
        filter.date_from = null;
        filter.date_to = null;
        filter.frequency = null;
        filter.current_page_current = this.state.filter.current_page_current + 1;
        this.props.onFetchNextJobsCurrent(this.props.token, filter);
      }
    }
  };

  goBack = () => {
    if (this.state.filter.current_page_current === 1) {

    } else {
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          current_page_current: this.state.filter.current_page_current - 1,
        }
      });
    }
    if (this.state.filter.active_current) {
      let filter = {};
      filter.min_price = this.state.filter.min_price;
      filter.max_price = this.state.filter.max_price;
      filter.date_from = moment(this.state.filter.date_from).format();
      filter.date_to = moment(this.state.filter.date_to).format();
      filter.frequency = this.state.filter.frequency;
      filter.current_page_current = this.state.filter.current_page_current - 1;
      this.props.onFetchNextJobsCurrent(this.props.token, filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page_current = this.state.filter.current_page_current - 1;
      this.props.onFetchNextJobsCurrent(this.props.token, filter);
    }
  };

  goTo = (a, page) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        current_page_current: page,
      }
    }, function(){
    });
    if (this.state.filter.active_current) {
      let filter = {};
      filter.min_price = this.state.filter.min_price;
      filter.max_price = this.state.filter.max_price;
      filter.date_from = moment(this.state.filter.date_from).format();
      filter.date_to = moment(this.state.filter.date_to).format();
      filter.frequency = this.state.filter.frequency;
      filter.current_page_current = page;
      this.props.onFetchNextJobsCurrent(this.props.token, filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page_current = page;
      this.props.onFetchNextJobsCurrent(this.props.token, filter);
    }
  };

  goNextPast = () => {
    if (this.state.filter.current_page_past === parseInt(this.props.totalPagesCurrentPast, 10)) {

    } else {
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          current_page_past: this.state.filter.current_page_past + 1,
        }
      });
      if (this.state.filter.active_past) {
        let filter = {};
        filter.min_price = this.state.filter.min_price;
        filter.max_price = this.state.filter.max_price;
        filter.date_from = moment(this.state.filter.date_from).format();
        filter.date_to = moment(this.state.filter.date_to).format();
        filter.frequency = this.state.filter.frequency;
        filter.current_page_past = this.state.filter.current_page_past + 1;
        this.props.onFetchListJobsCompleted(this.props.token, filter);
      } else {
        let filter = {};
        filter.min_price = '0';
        filter.max_price = '';
        filter.date_from = null;
        filter.date_to = null;
        filter.frequency = null;
        filter.current_page_past = this.state.filter.current_page_past + 1;
        this.props.onFetchListJobsCompleted(this.props.token, filter);
      }
    }
  };

  goBackPast = () => {
    if (this.state.filter.current_page_past === 1) {

    } else {
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          current_page_past: this.state.filter.current_page_pas - 1,
        }
      });
    }
    if (this.state.filter.active_past) {
      let filter = {};
      filter.min_price = this.state.filter.min_price;
      filter.max_price = this.state.filter.max_price;
      filter.date_from = moment(this.state.filter.date_from).format();
      filter.date_to = moment(this.state.filter.date_to).format();
      filter.frequency = this.state.filter.frequency;
      filter.current_page_past = this.state.filter.current_page_past - 1;
      this.props.onFetchListJobsCompleted(this.props.token, filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page_past = this.state.filter.current_page_past - 1;
      this.props.onFetchListJobsCompleted(this.props.token, filter);
    }
  };

  goToPast = (a, page) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        current_page_past: page,
      }
    }, function(){
    });
    if (this.state.filter.active_past) {
      let filter = {};
      filter.min_price = this.state.filter.min_price;
      filter.max_price = this.state.filter.max_price;
      filter.date_from = moment(this.state.filter.date_from).format();
      filter.date_to = moment(this.state.filter.date_to).format();
      filter.frequency = this.state.filter.frequency;
      filter.current_page_past = page;
      this.props.onFetchListJobsCompleted(this.props.token, filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page_past = page;
      this.props.onFetchListJobsCompleted(this.props.token, filter);
    }
  };

  render() {
    const { classes, theme } = this.props;
    let itemsCurrentCustomer = [];
    for (let pageCurrentCustomer = 1; pageCurrentCustomer <= this.props.totalPagesCurrentCustomer; pageCurrentCustomer++) {
      itemsCurrentCustomer.push(
        <li key={pageCurrentCustomer}><a onClick={(a) => this.goTo(a, pageCurrentCustomer)} active={pageCurrentCustomer === this.state.filter.current_page_current}>{pageCurrentCustomer}</a></li>
      );
    }
    let itemsCurrentPast = [];
    for (let pageCurrentPast = 1; pageCurrentPast <= this.props.totalPagesCurrentPast; pageCurrentPast++) {
      itemsCurrentPast.push(
        <li key={pageCurrentPast}><a onClick={(a) => this.goToPast(a, pageCurrentPast)} active={pageCurrentPast === this.state.filter.current_page_past}>{pageCurrentPast}</a></li>
      );
    }
    return (
      <div className={classes.root}>
        <AppBar position="static" className={cls.AppBar} elevation={0}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            classes={{
              indicator: classes.indicator
            }}
            fullWidth
          >
            <Tab label={<span style={{
                                      backgroundColor: 'transparent',
                                      color: '#0069a7',
                                      fontWeight: '700',
                                      fontSize: '16px',
                                      textTransform: 'initial',
                                    }}>Actuales</span>} />
            <Tab label={<span style={{
                                      backgroundColor: 'transparent',
                                      color: '#0069a7',
                                      fontWeight: '700',
                                      fontSize: '16px',
                                      textTransform: 'initial',
                                    }}>Historial</span>} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <div dir={theme.direction} className={cls.TabContainerSpace}>
            <JobFutures futureJob={this.props.futureJobsMain} />
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li>
                  <a
                    onClick={() => this.goBack()}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {itemsCurrentCustomer}
                <li>
                  <a
                    onClick={() => this.goNext()}
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div dir={theme.direction} className={cls.TabContainerSpace}>
            <JobPast jobPast={this.props.jobsPast} />
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li>
                  <a
                    onClick={() => this.goBackPast()}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {itemsCurrentPast}
                <li>
                  <a
                    onClick={() => this.goNextPast()}
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(MainJobClient);