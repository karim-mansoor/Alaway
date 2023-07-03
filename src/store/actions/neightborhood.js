import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchNeightborhoodsStart = () => ({
  type: actionTypes.FETCH_NEIGHTBORHOODS_START,
});

export const fetchNeightborhoodsFail = error => ({
  type: actionTypes.FETCH_NEIGHTBORHOODS_FAIL,
  error,
});

export const fetchNeightborhoodsSuccess = (neightborhoods) => ({
  type: actionTypes.FETCH_NEIGHTBORHOODS_SUCCESS,
  neightborhoods,
});

export const fetchNeightborhoods = (token, id) => (dispatch) => {
  dispatch(fetchNeightborhoodsStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get(`/customers/cities/${id}/neightborhoods`, headers)
    .then((res) => {
      let neightborhoods = [];
      neightborhoods = res.data.neightborhood.data;
      dispatch(fetchNeightborhoodsSuccess(neightborhoods));
    })
    .catch((err) => {
      dispatch(fetchNeightborhoodsFail(err));
    });
};
