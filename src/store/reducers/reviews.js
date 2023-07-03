import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  showReviews: [],
  qualify: [],
  qualifyCustomer: [],
  reviews: [],
  reviewsAgent: [],
};

const showReviews = (state, action) => updateObject(state, {
  showReviews: action.showReviews,
});

const qualify = (state, action) => updateObject(state, {
  qualify: action.qualify,
});

const qualifyCustomer = (state, action) => updateObject(state, {
  qualifyCustomer: action.qualifyCustomer,
});

const reviews = (state, action) => updateObject(state, {
  reviews: action.reviews,
});

const reviewsAgent = (state, action) => updateObject(state, {
  reviewsAgent: action.reviewsAgent,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_REVIEWS_START: return state;
    case actionTypes.SHOW_REVIEWS_SUCCESS: return showReviews(state, action);
    case actionTypes.SHOW_REVIEWS_FAIL: return state;
    case actionTypes.QUALIFY_START: return state;
    case actionTypes.QUALIFY_SUCCESS: return qualify(state, action);
    case actionTypes.QUALIFY_FAIL: return state;
    case actionTypes.QUALIFY_CUSTOMER_START: return state;
    case actionTypes.QUALIFY_CUSTOMER_SUCCESS: return qualifyCustomer(state, action);
    case actionTypes.QUALIFY_CUSTOMER_FAIL: return state;
    case actionTypes.REVIEWS_START: return state;
    case actionTypes.REVIEWS_SUCCESS: return reviews(state, action);
    case actionTypes.REVIEWS_FAIL: return state;
    case actionTypes.REVIEWS_AGENT_START: return state;
    case actionTypes.REVIEWS_AGENT_SUCCESS: return reviewsAgent(state, action);
    case actionTypes.REVIEWS_AGENT_FAIL: return state;
    default: return state;
  }
};

export default reducer;
