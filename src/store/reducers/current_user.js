import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  user: {},
  loading: false,
  notificationsAgent: [],
  notificationsCustomer: [],
  notificationsAgentRead: [],
  notificationsCustomerRead: [],
};

const fetchCurrentUserStart = (state, action) => updateObject(state, {
  loading: true,
});

const fetchCurrentAgentStart = (state, action) => updateObject(state, {
  loading: true,
});

const fetchCurrentUserSuccess = (state, action) => updateObject(state, {
  user: action.user,
  loading: false,
});

const fetchCurrentAgentSuccess = (state, action) => updateObject(state, {
  user: action.agent,
  loading: false,
});

const fetchCurrentUserFail = (state, action) => updateObject(state, {
  loading: false,
});

const fetchCurrentAgentFail = (state, action) => updateObject(state, {
  loading: false,
});

const updatedCurrentUserStart = (state, action) => updateObject(state, {
  loading: true,
});

const updatedCurrentAgentStart = (state, action) => updateObject(state, {
  loading: true,
});

const updatedCurrentUserSuccess = (state, action) => updateObject(state, {
  user: action.user,
  loading: false,
});

const updatedCurrentAgentSuccess = (state, action) => updateObject(state, {
  user: action.agent,
  loading: false,
});

const notificationsAgentSuccess = (state, action) => updateObject(state, {
  notificationsAgent: action.notificationsAgent,
});

const notificationsAgentReadSuccess = (state, action) => updateObject(state, {
  notificationsAgentRead: action.notificationsAgentRead,
});

const notificationsCustomerSuccess = (state, action) => updateObject(state, {
  notificationsCustomer: action.notificationsCustomer,
});

const notificationsCustomerReadSuccess = (state, action) => updateObject(state, {
  notificationsCustomerRead: action.notificationsCustomerRead,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_USER_SUCCESS: return fetchCurrentUserSuccess(state, action);
    case actionTypes.FETCH_CURRENT_USER_START: return fetchCurrentUserStart(state, action);
    case actionTypes.FETCH_CURRENT_USER_FAIL: return fetchCurrentUserFail(state, action);
    case actionTypes.UPDATED_CURRENT_USER_SUCCESS: return updatedCurrentUserSuccess(state, action);
    case actionTypes.UPDATED_CURRENT_USER_START: return updatedCurrentUserStart(state, action);
    case actionTypes.FETCH_CURRENT_AGENT_SUCCESS: return fetchCurrentAgentSuccess(state, action);
    case actionTypes.FETCH_CURRENT_AGENT_START: return fetchCurrentAgentStart(state, action);
    case actionTypes.FETCH_CURRENT_AGENT_FAIL: return fetchCurrentAgentFail(state, action);
    case actionTypes.UPDATED_CURRENT_AGENT_SUCCESS: return updatedCurrentAgentSuccess(state, action);
    case actionTypes.UPDATED_CURRENT_AGENT_START: return updatedCurrentAgentStart(state, action);
    case actionTypes.NOTIFICATIONS_AGENT_START: return state;
    case actionTypes.NOTIFICATIONS_AGENT_SUCCESS: return notificationsAgentSuccess(state, action);
    case actionTypes.NOTIFICATIONS_AGENT_FAIL: return state;
    case actionTypes.NOTIFICATIONS_AGENT_READ_START: return state;
    case actionTypes.NOTIFICATIONS_AGENT_READ_SUCCESS: return notificationsAgentReadSuccess(state, action);
    case actionTypes.NOTIFICATIONS_AGENT_READ_FAIL: return state;
    case actionTypes.NOTIFICATIONS_CUSTOMER_START: return state;
    case actionTypes.NOTIFICATIONS_CUSTOMER_SUCCESS: return notificationsCustomerSuccess(state, action);
    case actionTypes.NOTIFICATIONS_CUSTOMER_FAIL: return state;
    case actionTypes.NOTIFICATIONS_CUSTOMER_READ_START: return state;
    case actionTypes.NOTIFICATIONS_CUSTOMER_READ_SUCCESS: return notificationsCustomerReadSuccess(state, action);
    case actionTypes.NOTIFICATIONS_CUSTOMER_READ_FAIL: return state;
    default: return state;
  }
};

export default reducer;
