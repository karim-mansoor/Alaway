import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  cities: [],
  loading: false,
};

const fetchCitiesStart = state => updateObject(state, { loading: true });

const fetchCitiesSuccess = (state, action) => updateObject(state, {
  cities: action.cities,
  loading: false,
});

const fetchCitiesFail = state => updateObject(state, { loading: false });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CITIES_START: return fetchCitiesStart(state, action);
    case actionTypes.FETCH_CITIES_SUCCESS: return fetchCitiesSuccess(state, action);
    case actionTypes.FETCH_CITIES_FAIL: return fetchCitiesFail(state, action);
    default: return state;
  }
};

export default reducer;
