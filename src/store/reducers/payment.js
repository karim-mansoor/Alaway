import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  paymenData: [],
  listCard: [],
  validateCode : [],
};


const paymentAddCardStart = (state, action) => updateObject(state, {
  // loading: true,
  paymenData: [],
});

const paymentAddCardSuccess = (state, action) => updateObject(state, {
  // loading: false,
  paymenData: action.paymenData,
});

const listCardSuccess = (state, action) => updateObject(state, {
  // loading: false,
  listCard: action.listCard,
});

const validateCodeStart = (state, action) => updateObject(state, {
  // loading: true,
  validateCode: [],
});

const validateCodeFail = (state, action) => updateObject(state, {
  // loading: false,
});

const validateCodeSuccess = (state, action) => updateObject(state, {
  // loading: false,
  validateCode: action.validateCode,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PAYMENT_ADD_CARD_START: return paymentAddCardStart(state,action);
    case actionTypes.PAYMENT_ADD_CARD_FAIL: return state;
    case actionTypes.PAYMENT_ADD_CARD_SUCCESS: return paymentAddCardSuccess(state, action);
    case actionTypes.LIST_CARD_START: return state;
    case actionTypes.LIST_CARD_SUCCESS: return listCardSuccess(state, action);
    case actionTypes.LIST_CARD_FAIL: return state;
    case actionTypes.VALIDATE_CODE_START: return validateCodeStart(state,action);
    case actionTypes.VALIDATE_CODE_FAIL: return validateCodeFail(state, action);
    case actionTypes.VALIDATE_CODE_SUCCESS: return validateCodeSuccess(state, action);
    default: return state;
  }
};

export default reducer;