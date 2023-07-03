import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  neightborhoods: [],
  loading: false,
};

const fetchNeightborhoodsStart = state => updateObject(state, { loading: true });

const fetchNeightborhoodsSuccess = (state, action) => updateObject(state, {
  neightborhoods: action.neightborhoods,
  loading: false,
});

const fetchNeightborhoodsFail = state => updateObject(state, { loading: false });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEIGHTBORHOODS_START: return fetchNeightborhoodsStart(state, action);
    case actionTypes.FETCH_NEIGHTBORHOODS_SUCCESS: return fetchNeightborhoodsSuccess(state, action);
    case actionTypes.FETCH_NEIGHTBORHOODS_FAIL: return fetchNeightborhoodsFail(state, action);
    default: return state;
  }
};

export default reducer;
