// Dependencias
import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import { connect } from 'react-redux';

// Componentes
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import MenuBar from '../../../containers/MenuBar/MenuBarAgent';

// CSS
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'fullcalendar/dist/fullcalendar.js';

import * as actions from '../../../store/actions';

class Calendario extends Component {
    
  componentDidMount() {
    this.props.onFetchCalendar(localStorage.getItem('token'));
  }
    
  render() {
    
    const { calendar } = this.refs;
    if(Object.keys(this.props.calendar).length > 0){
      $(calendar).fullCalendar({
        eventClick: (eventObj) => {
          if (eventObj.url) {
            window.open(eventObj.url);
            return false; // prevents browser from following link in current tab.
          } else {
            alert('Hecho clic ' + eventObj.title);
          }
        },
        events: this.props.calendar,
        eventLimit: 3,
      });
    }
    return (
      <div>
        {/* { this.props.events == undefined ? (
          <div>cargando</div>
        ) : (
          <div> */}
            <MenuBar />
            <Grid container justify="center">
              <Grid item xs={12}>
                <Paper elevation={0}>
                  <div ref='calendar'></div>
                </Paper>
              </Grid>
            </Grid>
          {/* </div>
        )} */}
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  calendar: state.job.calendar,
  // loading: state.job.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchCalendar: (token) => dispatch(actions.jobCalendar(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendario);