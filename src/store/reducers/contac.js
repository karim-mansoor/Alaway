import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  formContact: [],
};

const formContactStart = (state, action) => updateObject(state, {
  loading: true,
});

const formContactSuccess = (state, action) => updateObject(state, {
  formContact: action.formContact,
  loading: false,
});

const formContactFail = (state, action) => updateObject(state, {
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FORM_CONTACT_START: return formContactStart(state, action);
    case actionTypes.FORM_CONTACT_SUCCESS: return formContactSuccess(state, action);
    case actionTypes.FORM_CONTACT_FAIL: return formContactFail(state, action);
    default: return state;
  }
};

export default reducer;
