// Dependencias
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import Typography from 'material-ui/Typography';
import moment from 'moment';

// Componentes
import cls from './MainMisTrabajos.css';
import JobCurrent from '../CardJob/JobCurrent';
import JobCompleted from '../CardJob/JobCompleted';
import JobPostulated from '../CardJob/JobPostulated';

function TabContainer(props) {
  const { children, dir } = props;
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  indicator: {
    backgroundColor: '#0069a7',
  },
});

class MyJobsMain extends React.Component {
  state = {
    value: 0,
    filter: {
      min_price: '',
      max_price: '',
      date_from: null,
      date_to: null,
      frequency: '0',
      current_page_current: 1,
      current_page_completed: 1,
      current_page: 1,
      active_current: false,
      active_completed: false,
      active: false,
    },
  };

  handleChange = (event, value) => {
    switch (value) {
      case 0:
        this.props.onFetchJobAgentCurrent(localStorage.getItem('token'), this.state.filter.current_page_current);
        break;
      case 1:
        this.props.onFetchJobAgentCompleted(localStorage.getItem('token'), this.state.filter.current_page_completed);
        break;
      case 2:
        this.props.onFetchJobAgentPostulated(localStorage.getItem('token'), this.state.filter.current_page);
        break;
    }
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  goNextCurrent = () => {
    if (this.state.filter.current_page_current === parseInt(this.props.totalPagesCurrent, 10)) {

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
        this.props.onFetchJobAgentCurrent(localStorage.getItem('token'), filter);
      } else {
        let filter = {};
        filter.min_price = '0';
        filter.max_price = '';
        filter.date_from = null;
        filter.date_to = null;
        filter.frequency = null;
        filter.current_page_current = this.state.filter.current_page_current + 1;
        this.props.onFetchJobAgentCurrent(localStorage.getItem('token'), filter);
      }
    }
  };

  goBackCurrent = () => {
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
      this.props.onFetchJobAgentCurrent(localStorage.getItem('token'), filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page_current = this.state.filter.current_page_current - 1;
      this.props.onFetchJobAgentCurrent(localStorage.getItem('token'), filter);
    }
  };

  goToCurrent = (a, page) => {
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
      this.props.onFetchJobAgentCurrent(localStorage.getItem('token'), filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page_current = page;
      this.props.onFetchJobAgentCurrent(localStorage.getItem('token'), filter);
    }
  };

  goNextCompleted = () => {
    if (this.state.filter.current_page_completed === parseInt(this.props.totalPagesCompleted, 10)) {

    } else {
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          current_page_completed: this.state.filter.current_page_completed + 1,
        }
      });
      if (this.state.filter.active_completed) {
        let filter = {};
        filter.min_price = this.state.filter.min_price;
        filter.max_price = this.state.filter.max_price;
        filter.date_from = moment(this.state.filter.date_from).format();
        filter.date_to = moment(this.state.filter.date_to).format();
        filter.frequency = this.state.filter.frequency;
        filter.current_page_completed = this.state.filter.current_page_completed + 1;
        this.props.onFetchJobAgentCompleted(localStorage.getItem('token'), filter);
      } else {
        let filter = {};
        filter.min_price = '0';
        filter.max_price = '';
        filter.date_from = null;
        filter.date_to = null;
        filter.frequency = null;
        filter.current_page_completed = this.state.filter.current_page_completed + 1;
        this.props.onFetchJobAgentCompleted(localStorage.getItem('token'), filter);
      }
    }
  };

  goBackCompleted = () => {
    if (this.state.filter.current_page_completed === 1) {

    } else {
      this.setState({
        ...this.state,
        filter: {
          ...this.state.filter,
          current_page_completed: this.state.filter.current_page_completed - 1,
        }
      });
    }
    if (this.state.filter.active_completed) {
      let filter = {};
      filter.min_price = this.state.filter.min_price;
      filter.max_price = this.state.filter.max_price;
      filter.date_from = moment(this.state.filter.date_from).format();
      filter.date_to = moment(this.state.filter.date_to).format();
      filter.frequency = this.state.filter.frequency;
      filter.current_page_completed = this.state.filter.current_page_completed - 1;
      this.props.onFetchJobAgentCompleted(localStorage.getItem('token'), filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page_completed = this.state.filter.current_page_completed - 1;
      this.props.onFetchJobAgentCompleted(localStorage.getItem('token'), filter);
    }
  };

  goToCompleted = (a, page) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        current_page_completed: page,
      }
    });
    if (this.state.filter.active_completed) {
      let filter = {};
      filter.min_price = this.state.filter.min_price;
      filter.max_price = this.state.filter.max_price;
      filter.date_from = moment(this.state.filter.date_from).format();
      filter.date_to = moment(this.state.filter.date_to).format();
      filter.frequency = this.state.filter.frequency;
      filter.current_page_completed = page;
      this.props.onFetchJobAgentCompleted(localStorage.getItem('token'), filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page_completed = page;
      this.props.onFetchJobAgentCompleted(localStorage.getItem('token'), filter);
    }
  };

  goNext = () => {
    if (this.state.filter.current_page === parseInt(this.props.totalPagesPostulated, 10)) {

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
        this.props.onFetchJobAgentPostulated(localStorage.getItem('token'), filter);
      } else {
        let filter = {};
        filter.min_price = '0';
        filter.max_price = '';
        filter.date_from = null;
        filter.date_to = null;
        filter.frequency = null;
        filter.current_page = this.state.filter.current_page + 1;
        this.props.onFetchJobAgentPostulated(localStorage.getItem('token'), filter);
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
      this.props.onFetchJobAgentPostulated(localStorage.getItem('token'), filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page = this.state.filter.current_page - 1;
      this.props.onFetchJobAgentPostulated(localStorage.getItem('token'), filter);
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
      this.props.onFetchJobAgentPostulated(localStorage.getItem('token'), filter);
    } else {
      let filter = {};
      filter.min_price = '0';
      filter.max_price = '';
      filter.date_from = null;
      filter.date_to = null;
      filter.frequency = null;
      filter.current_page = page;
      this.props.onFetchJobAgentPostulated(localStorage.getItem('token'), filter);
    }
  };

  render() {
    const { classes, theme } = this.props;
    let jobs = (
      <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>
        <p>No tienes trabajos actuales</p><br/><p>Aplica trabajos y aumenta tus ingresos</p>
      </Typography>
    );
    if (this.props.acceptedjobs.length > 0) {
      jobs = this.props.acceptedjobs.map(job => (
        <TabContainer key={job.id} dir={theme.direction}>
          <JobCurrent job={job}/>
        </TabContainer>
      ));
    }
    let jobsCompleted = (
      <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>
        <p>No tienes trabajos completados</p><br/><p>Aplica trabajos y aumenta tus ingresos</p>
      </Typography>
    );
    if (this.props.completedjobs.length > 0) {
      jobsCompleted = this.props.completedjobs.map(job => (
        <TabContainer key={job.id} dir={theme.direction}>
          <JobCompleted
            job={job} />
        </TabContainer>
      ));
    }
    let jobsPostulated = (
      <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>
        <p>No te has postulado a ningun trabajo</p><br/><p>Aplica trabajos y aumenta tus ingresos</p>
      </Typography>
    );
    if (this.props.postulatedjobs.length > 0) {
      jobsPostulated = this.props.postulatedjobs.map(job => (
        <TabContainer key={job.id} dir={theme.direction}>
          <JobPostulated
            job={job} />
        </TabContainer>
      ));
    }
    let itemsCurrent = [];
    for (let pageCurrent = 1; pageCurrent <= this.props.totalPagesCurrent; pageCurrent++) {
      itemsCurrent.push(
        <li key={pageCurrent}><a onClick={(a) => this.goToCurrent(a, pageCurrent)} active={pageCurrent === this.state.filter.current_page_current}>{pageCurrent}</a></li>
      );
    }
    let itemsCompleted = [];
    for (let pageCompleted = 1; pageCompleted <= this.props.totalPagesCompleted; pageCompleted++) {
      itemsCompleted.push(
        <li key={pageCompleted}><a onClick={(a) => this.goToCompleted(a, pageCompleted)} active={pageCompleted === this.state.filter.current_page_completed}>{pageCompleted}</a></li>
      );
    }
    let itemsPostulate = [];
    for (let pagePostulated = 1; pagePostulated <= this.props.totalPagesPostulated; pagePostulated++) {
      itemsPostulate.push(
        <li key={pagePostulated}><a onClick={(a) => this.goTo(a, pagePostulated)} active={pagePostulated === this.state.filter.current_page}>{pagePostulated}</a></li>
      );
    }
    return (
      <div className={cls.root}>
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
                                    }}>Completados</span>} />
            <Tab label={<span style={{
                                      backgroundColor: 'transparent',
                                      color: '#0069a7',
                                      fontWeight: '700',
                                      fontSize: '16px',
                                      textTransform: 'initial',
                                    }}>Postulados</span>} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <div dir={theme.direction} className={cls.TabContainerSpace}>
            {jobs}
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li>
                  <a
                    onClick={() => this.goBackCurrent()}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {itemsCurrent}
                <li>
                  <a
                    onClick={() => this.goNextCurrent()}
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav> 
          </div>
          <div dir={theme.direction} className={cls.TabContainerSpace}>
            {jobsCompleted}
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li>
                  <a
                    onClick={() => this.goBackCompleted()}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {itemsCompleted}
                <li>
                  <a
                    onClick={() => this.goNextCompleted()}
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div dir={theme.direction} className={cls.TabContainerSpace}>
            {jobsPostulated}
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li>
                  <a
                    onClick={() => this.goBack()}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {itemsPostulate}
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
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyJobsMain);