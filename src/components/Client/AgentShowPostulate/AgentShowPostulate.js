// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Componentes
import Grid from 'material-ui/Grid';
import cls from './AgentShow.css';
import CardAgentShow from './CardAgentShow/CardAgentShow';
import ReviewsPostulated from '../../../components/Agent/Reviews/ReviewsPostulated';
import Spinner from '../../UI/Spinner/Spinner';


import * as actions from '../../../store/actions';

class AgentShow extends Component {
  componentDidMount() {
    this.props.onProposalPostulate(localStorage.getItem('token'), this.props.match.params.job_id, this.props.match.params.proposal_id);
  }

  acceptedProposal = (event, token, job_id, proposal_id) => {
    event.preventDefault();
    this.props.onAcceptedJob(token, job_id, proposal_id);
  }

  render() {
    let agent = null;
    let reviews = null;
    let job_id = null;
    let proposal_id = null;
    let review_average = null;
    let review_count = null;
    let review_title = null;
    if (this.props.proposal.agent) {
      if (this.props.proposal.agent.data.attributes.rewiews.data.length === 0) {
        review_title = 'No hay opiniones';
      } else {
        review_title = 'Opiniones';     
      };
      if (this.props.proposal.agent.data.attributes.rewiews.data.length > 0) {
        reviews = this.props.proposal.agent.data.attributes.rewiews.data.map(r => (
          <ReviewsPostulated key={r.id} review={r.attributes} />
        ))
      }
      agent = this.props.proposal.agent.data.attributes;
      job_id = this.props.proposal.job.hashed_id;
      proposal_id = this.props.proposal.hashed_id;
      review_average = this.props.proposal.agent_rewiews_average;
      review_count = this.props.proposal.agent_rewiews_count;
    };
    return (
      <div>
        <Grid container className={cls.root}>
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
                      job_id={job_id}
                      proposal_id={proposal_id}
                      accepted={this.acceptedProposal}/>
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
    proposal: state.proposal.proposalPostulate,
    loading: state.proposal.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProposalPostulate: (token, job_id, hashed_id) => dispatch(actions.proposalPostulate(token, job_id, hashed_id)),
    onAcceptedJob: (token, job_id, proposal_id) => dispatch(actions.acceptedJob(token, job_id, proposal_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgentShow);
