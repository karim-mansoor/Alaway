// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Componentes
import {
  Paper,
  Grid,
  Typography,
} from 'material-ui';
import MenuBar from '../../MenuBar/MenuBarAgent';
import CalendarioComponent from '../../../components/Agent/Calendario/CalendarioComponent';

// Css    
import cls from './Calendario.css';

// import * as actions from '../../../store/actions';

class Calendario extends Component {
  // componentDidMount() {
  //   this.props.onFetchCalendar(localStorage.getItem('token'));
  // }

  render() {
    return (
      <div>
        <MenuBar />
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={12} sm={10}>
            <Paper elevation={0}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <Typography variant="title" gutterBottom className={cls.Typogra}>Calendario</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Paper elevation={0}>
                    <CalendarioComponent />
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
}

// const mapStateToProps = (state) => ({
//   calendar: state.job.calendar,
//   loading: state.job.loading,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onFetchCalendar: (token) => dispatch(actions.jobCalendar(token)),
// });

export default Calendario;