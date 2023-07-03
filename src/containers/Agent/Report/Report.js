// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Datetime from 'react-datetime';

// Componentes
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Table from './Table';
import DownloadFileComponent from './DownloadReport';
// import MyJobsMain from '../../../components/Agent/MyJobsMain/MyJobsMain';
// import Spinner from '../../../components/UI/Spinner/Spinner';

// Css
import cls from './Report.css';

import * as actions from '../../../store/actions';

class Report extends Component {
  state = {
    filter: {
      date_from: moment().startOf('week').format(),
      date_to: moment().endOf('week').format(),
      current_page: 1,
      active: false,
    },
  };
  componentDidMount() {
    this.props.onFetchJobAgentReport(localStorage.getItem('token'), this.state.filter);
    this.props.onFetchUser(localStorage.getItem('token'));
  };
  
  handleChange = (event, key) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        [key]: event.target.value,
      },
    });
  };
  changeDatetimeHandler = (dateTime, key) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        [key]: moment(dateTime).format(),
      }
    })
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
    if (this.state.filter.date_from !== null) {
      filter.date_from = moment(this.state.filter.date_from).format();
    } else {
      filter.date_from = null;
    }
    if (this.state.filter.date_to !== null) {
      filter.date_to = moment(this.state.filter.date_to).endOf('day').format();
    } else {
      filter.date_to = null;
    }
    this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
  };
  // changeDatetimeHandler = (dateTimeFrom) => {
  //   this.setState({
  //     filter:{
  //       date_from: moment(dateTimeFrom).startOf('days'),
  //       date_to: moment(this.state.filter.date_to).format(),
  //     }
  //   },function(){
  //     let filter = {};
  //     if (this.state.filter.date_from !== null) {
  //       filter.date_from = moment(this.state.filter.date_from).format();
  //       filter.date_to = moment(this.state.filter.date_to).format();
  //     } else {
  //       filter.date_from = null;
  //       filter.date_to = null;
  //     }
  //     this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
  //   })
  // };
  // changeDatetimeHandlerTo = (dateTimeTo) => {
  //   this.setState({
  //     filter:{
  //       date_from: moment(this.state.filter.date_from).format(),
  //       date_to: moment(dateTimeTo).endOf('days'),
  //     }
  //   },function(){
  //     let filter = {};
  //     if (this.state.filter.date_to !== null) {
  //       filter.date_from = moment(this.state.filter.date_from).format();
  //       filter.date_to = moment(this.state.filter.date_to).format();
  //     } else {
  //       filter.date_from = null;
  //       filter.date_to = null;
  //     }
  //     this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
  //   })
  // };
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
        filter.date_from = moment(this.state.filter.date_from).format();
        filter.date_to = moment(this.state.filter.date_to).format();
        this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
      } else {
        let filter = {};
        filter.date_from = null;
        filter.date_to = null;
        filter.current_page = this.state.filter.current_page + 1;
        this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
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
      filter.date_from = moment(this.state.filter.date_from).format();
      filter.date_to = moment(this.state.filter.date_to).format();
      this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
    } else {
      let filter = {};
      filter.date_from = null;
      filter.date_to = null;
      filter.current_page = this.state.filter.current_page - 1;
      this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
    }
  };
  // weekBack = () => {
  //   var date = moment(this.state.filter.date_from).subtract(3, 'days')
  //   this.setState({
  //     filter:{
  //       date_from: moment(date).startOf('week'),
  //       date_to: moment(date).endOf('week'),
  //     }
  //   },function(){
  //     let filter = {};
  //     if (this.state.filter.date_from !== null) {
  //       filter.date_from = moment(this.state.filter.date_from).format();
  //     } else {
  //       filter.date_from = null;
  //     }
  //     if (this.state.filter.date_to !== null) {
  //       filter.date_to = moment(this.state.filter.date_to).format();
  //     } else {
  //       filter.date_to = null;
  //     }
  //     this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
  //   })
  // };
  
  // weekNext = () => {
  //   var date = moment(this.state.filter.date_to).add(3, 'days')
  //   this.setState({
  //     filter:{
  //       date_from: moment(date).startOf('week'),
  //       date_to: moment(date).endOf('week'),
  //     }
  //   },function(){
  //     let filter = {};
  //     if (this.state.filter.date_from !== null) {
  //       filter.date_from = moment(this.state.filter.date_from).format();
  //     } else {
  //       filter.date_from = null;
  //     }
  //     if (this.state.filter.date_to !== null) {
  //       filter.date_to = moment(this.state.filter.date_to).format();
  //     } else {
  //       filter.date_to = null;
  //     }
  //     this.props.onFetchJobAgentReport(localStorage.getItem('token'), filter);
  //   })    
  // };
  render() {
    let firstNameUser = null;
    let lastNameUser = null;
    let jobsReport = null;
    let sumTotal = null;
    if (this.props.user.attributes){
      firstNameUser = this.props.user.attributes.first_name
      lastNameUser = this.props.user.attributes.last_name
    }
    if(this.props.reportjobs.length > 0) {
      jobsReport = this.props.reportjobs.map( jR => (
        sumTotal += jR.attributes.agent_earnings,
        <Table
        key={jR.id}
        id={jR.id}
        jobDetails={jR.attributes.job_details}
        total={jR.attributes.total}
        vat={jR.attributes.vat}
        serviceFee={jR.attributes.service_fee}
        subTotal={jR.attributes.agent_earnings}
        customer={jR.attributes.customer}
        />
        ))
      } else {
      jobsReport = 
        <tr>
          <th className="text-info" scope="row">
            No tienes trabajos en ésta fecha seleccionada.
          </th>
          <td className="text-info"></td>
          <td className="text-info"></td>
          <td className="text-info"></td>
          <td className="text-info"></td>
          <td className="text-info"></td>
        </tr>
    }
    return (
      <div>
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={12} sm={10} md={8}>
            <Paper elevation={0}>
              <Typography variant="title" gutterBottom className={cls.Typogra}>Reporte</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8} className={cls.content}>
            <Grid container>
              <Grid item xs={6} sm={12}>
                <Paper elevation={0}>
                  <Grid container>
                    <Grid item xs={6} sm={2}>
                      <Typography variant="title" gutterBottom>Inicio</Typography>
                    </Grid>
                    <Grid item xs={6} sm={10}>
                      <div className={`${cls.ContenDateCombo} ${"row align-items-center"}`}>
                        <Datetime className="col-sm-5"
                          value={moment(this.state.filter.date_from).format(' MMM D YYYY ').replace(/\b\w/g, l => l.toUpperCase())}
                          onChange={(dateTime) => this.changeDatetimeHandler(dateTime, 'date_from')}
                          timeFormat={false}
                        >
                        </Datetime>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10} md={8} className={cls.content}>
            <Grid container>
              <Grid item xs={6} sm={12}>
                <Paper elevation={0}>
                  <Grid container>
                    <Grid item xs={6} sm={2}>
                      <Typography variant="title" gutterBottom>Fin</Typography>
                    </Grid>
                    <Grid item xs={6} sm={10}>
                      <div className={`${cls.ContenDateCombo} ${"row align-items-center"}`}>
                        <Datetime className="col-sm-5"
                          value={moment(this.state.filter.date_to).format('MMM D YYYY').replace(/\b\w/g, l => l.toUpperCase())}
                          onChange={(dateTime) => this.changeDatetimeHandler(dateTime, 'date_to')}
                          timeFormat={false}
                        >
                        </Datetime>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Grid container>
              <Grid item xs={6} sm={6} md={6}>
                <Paper elevation={0} className={cls.alaingButton}>
                  <button onClick={(event) => this.filterHandler(event)} className={cls.FilterBtn}>Filtrar</button>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Grid container>
              <Grid item xs={6} sm={12}>
                <Paper elevation={0}>
                  <Grid container>
                    <Grid item xs={6} sm={2}>
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Usuario</Typography>
                    </Grid>  
                    <Grid item xs={6} sm={10}>                    
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>{firstNameUser} {lastNameUser}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={12}>
                      <table className="table table-dark">  
                        <thead>
                          <tr>
                            <th scope="col">Servicio</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Total trabajo</th>
                            <th scope="col">I.V.A</th>
                            <th scope="col">Comisión Noc Noc</th>
                            <th scope="col">TOTAL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {jobsReport}
                          <tr class="bg-warning">
                            <td class="bg-success">Total Semanal</td>
                            <td class="bg-success"></td>
                            <td class="bg-success"></td>
                            <td class="bg-success"></td>
                            <td class="bg-success"></td>
                            <td class="bg-success">${sumTotal === null ? ("00.00"):(sumTotal.toFixed(2))}</td>
                          </tr>
                          <tr>
                          <th className="text-info" scope="row">
                              <a></a>
                            </th>
                            <td className="text-info"></td>
                            <td className="text-info"></td>
                            <td className="text-info"></td>
                            <td className="text-info"></td>
                            <td className="text-info">
                            {console.log(this.props.reportjobs)}
                            {this.props.reportjobs.length > 0 ? (
                              <DownloadFileComponent {...this.props}/>
                            ):(
                              ''
                            )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Grid> 
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={1}>
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Nota:</Typography>
                    </Grid>  
                    <Grid item xs={11} sm={11}>
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Reporta con nosotros tu inconveniente, si tienes alguna duda.</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchUser: (token) => dispatch(actions.fetchCurrentAgent(token)),
  onFetchJobAgentReport: (token, filter) => dispatch(actions.fetchJobAgentReport(token, filter)),
});

const mapStateToProps = state => ({
  user: state.user.user,
  reportjobs: state.job.reportjobs,
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);