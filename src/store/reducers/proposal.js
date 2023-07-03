import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  proposalPostulate: [],
  loading: false,
};

const proposalPostulateStart = (state, action) => updateObject(state, {
  loading: true,
  proposalPostulate: [],
});

const proposalPostulateSuccess = (state, action) => updateObject(state, {
  proposalPostulate: action.proposalPostulate,
  loading: false,
});

const proposalPostulateFail = (state, action) => updateObject(state, {
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROPOSAL_POSTULATE_START: return proposalPostulateStart(state, action);
    case actionTypes.PROPOSAL_POSTULATE_SUCCESS: return proposalPostulateSuccess(state, action);
    case actionTypes.PROPOSAL_POSTULATE_FAIL: return proposalPostulateFail(state, action);
    default: return state;
  }
};

export default reducer;