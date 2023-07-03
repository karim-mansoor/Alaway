// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

// Componentes
import cls from './JobShow.css';
import CardAgentShow from './CardAgentShow/CardAgentShow';
import Spinner from '../../UI/Spinner/Spinner';
import Reviews from '../../../components/Agent/Reviews/Reviews';

import * as actions from '../../../store/actions';

class AgentShow extends Component {
  state = {
    updated: false,
  }
  componentDidMount() {
    this.props.onFetchJob(localStorage.getItem('token'), this.props.match.params.job_id);
  }

  componentDidUpdate() {
    if (this.props.job.attributes && !this.state.updated) {
      this.props.onReviewsAgent(localStorage.getItem('token'), this.props.job.attributes.agent.hashed_id);
      this.setState({
        updated: true,
      });
    }
  }

  render() {
    let agent = null;
    let reviews = null;
    let job_id = null;
    let review_average = null;
    let review_count = null;
    let review_title = null;
    if (this.props.job.attributes) {
      agent = this.props.job.attributes.agent;
      job_id = this.props.job.id;
      review_average = this.props.job.attributes.agent_rewiews_average;
      review_count = this.props.job.attributes.agent_rewiews_count;
    };
    if (this.props.reviews.length === 0) {
      review_title = 'No hay opiniones';
    } else {
      review_title = 'Opiniones';     
    };
    if (this.props.reviews.length > 0) {
      reviews = this.props.reviews.map(r => (
        <Reviews key={r.id} review={r.attributes} />
      ))
    }
    return (
      <div>
        <Grid container>
          <Grid className={cls.ContainerWrapper} item xs={12}>
            {this.props.loading ? (
              <Spinner />
            ) : ( 
              <Grid container>
                <Grid container justify="center">
                  <Grid item xs={12} sm={12} md={10} lg={8}>
                    <CardAgentShow 
                      agent={agent}
                      review_average={review_average}
                      review_count={review_count}
                      job_id={job_id}/>
                  </Grid>
                </Grid>
                <Grid container justify="center">
                  <Grid item xs={12} md={10} lg={8}>
                    <div className={cls.AgentReview}>
                      <h2 className={cls.TitleReview}>{review_title}</h2>
                    </div>
                    <div className={cls.ReviewsWrapper}>
                      {reviews}
                    </div>
                  </Grid>
                </Grid>
              </Grid> 
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    job: state.job.job,
    loading: state.job.loading,
    reviews: state.reviews.reviewsAgent,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchJob: (token, job_id) => dispatch(actions.fetchJob(token, job_id)),
    onReviewsAgent: (token, id) => dispatch(actions.reviewsAgent(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgentShow);