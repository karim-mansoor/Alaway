import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const proposalPostulateStart = () => ({
  type: actionTypes.PROPOSAL_POSTULATE_START,
});

export const proposalPostulateFail = error => ({
  type: actionTypes.PROPOSAL_POSTULATE_FAIL,
  error
});

export const proposalPostulateSuccess = proposalPostulate => ({
  type: actionTypes.PROPOSAL_POSTULATE_SUCCESS,
  proposalPostulate,
});

export const proposalPostulate = (token, job_id, hashed_id) => dispatch => {
  dispatch(proposalPostulateStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get(`/customers/jobs/${job_id}/proposals/${hashed_id}`, headers)
  .then((res) => {
    let proposalPostulate = [];
    proposalPostulate = res.data.proposal.data.attributes;
    dispatch(proposalPostulateSuccess(proposalPostulate));
  })
  .catch((err) => {
    dispatch(proposalPostulateFail(err));
  });
}