import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  properties: [],
  property: [],
  loading: false,
};

const fetchPropertiesStart = state => updateObject(state, { loading: true });

const fetchPropertiesSuccess = (state, action) => updateObject(state, {
  properties: action.properties,
  loading: false,
});

const fetchPropertiesFail = state => updateObject(state, { loading: false });

const fetchPropertySuccess = (state, action) => updateObject(state, {
  property: action.property,
  loading: false,
});

const createPropertyStart = state => updateObject(state, { loading: true });

const createPropertyFail = state => updateObject(state, { loading: false });

const createPropertySuccess = (state, action) => updateObject(state, {
  properties: state.properties.concat(action.property),
  loading: false,
});

const updatePropertyStart = state => updateObject(state, { loading: true });

const updatePropertyFail = state => updateObject(state, { loading: false });

const updatePropertySuccess = (state, action) => Object.assign({}, state, {
  properties: state.properties.map(property => (
    property.id === action.property.id ? action.property : property
  )),
});

const deletePropertyStart = state => updateObject(state, { loading: true });

const deletePropertyFail = state => updateObject(state, { loading: false });

const deletePropertySuccess = (state, action) => Object.assign({}, state, {
  properties: state.properties.filter(property => (
    property.id !== action.id
  )),
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROPERTIES_START: return fetchPropertiesStart(state, action);
    case actionTypes.FETCH_PROPERTIES_SUCCESS: return fetchPropertiesSuccess(state, action);
    case actionTypes.FETCH_PROPERTIES_FAIL: return fetchPropertiesFail(state, action);
    case actionTypes.FETCH_PROPERTY_SUCCESS: return fetchPropertySuccess(state, action);
    case actionTypes.CREATE_PROPERTY_START: return createPropertyStart(state, action);
    case actionTypes.CREATE_PROPERTY_SUCCESS: return createPropertySuccess(state, action);
    case actionTypes.CREATE_PROPERTY_FAIL: return createPropertyFail(state, action);
    case actionTypes.UPDATE_PROPERTY_START: return updatePropertyStart(state, action);
    case actionTypes.UPDATE_PROPERTY_SUCCESS: return updatePropertySuccess(state, action);
    case actionTypes.UPDATE_PROPERTY_FAIL: return updatePropertyFail(state, action);
    case actionTypes.DELETE_PROPERTY_START: return deletePropertyStart(state, action);
    case actionTypes.DELETE_PROPERTY_SUCCESS: return deletePropertySuccess(state, action);
    case actionTypes.DELETE_PROPERTY_FAIL: return deletePropertyFail(state, action);
    default: return state;
  }
};

export default reducer;
