import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchCitiesStart = () => ({
  type: actionTypes.FETCH_CITIES_START,
});

export const fetchCitiesFail = error => ({
  type: actionTypes.FETCH_CITIES_FAIL,
  error,
});

export const fetchCitiesSuccess = (cities) => ({
  type: actionTypes.FETCH_CITIES_SUCCESS,
  cities,
});

export const fetchCities = token => (dispatch) => {
  dispatch(fetchCitiesStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/cities', headers)
    .then((res) => {
      let cities = [];
      cities = res.data.city.data;
      dispatch(fetchCitiesSuccess(cities));
    })
    .catch((err) => {
      dispatch(fetchCitiesFail(err));
    });
};
