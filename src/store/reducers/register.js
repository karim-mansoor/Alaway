import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_CLIENT_START: return {
      ...state,
      loading: true,
    };
    case actionTypes.REGISTER_CLIENT_SUCCESS:
      const newCustomer = {
        ...action.formData,
        id: action.clientId,
      };
      return {
        ...state,
        users: state.users.concat(newCustomer),
        loading: false,
      };
    case actionTypes.REGISTER_CLIENT_FAIL: return {
      ...state,
      loading: false,
    };
    case actionTypes.REGISTER_AGENT_START: return {
      loading: true,   
    };
    case actionTypes.REGISTER_AGENT_SUCCESS:
      const newAgent = {
        ...action.formData,
        id: action.agentId,
      };
      return {
        ...state,
        users: state.users.concat(newAgent),
        loading: false,
      };
    case actionTypes.REGISTER_AGENT_FAIL: return {
      ...state,
      loading: false,
    };
    default: return state;
  }
};

export default reducer;
