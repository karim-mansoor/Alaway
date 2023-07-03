import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions/job';

class JobCancel extends Component {
  componentDidMount() {
    this.props.onCancelJob(localStorage.getItem('token'), this.props.match.params.job_id);
  }

  render() {
    return <Redirect to='/cliente' />
  }
}

const mapDispatchToProps = dispatch => ({
  onCancelJob: (token, job_id) => dispatch(actions.cancelledJob(token, job_id)),
})

export default connect(null, mapDispatchToProps)(JobCancel);