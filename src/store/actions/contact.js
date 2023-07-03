import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import Alert from 'react-s-alert';

export const formContactSuccess = formData => ({
  type: actionTypes.FORM_CONTACT_SUCCESS,
  formData,
});

export const formContactFail = err => ({
  type: actionTypes.FORM_CONTACT_FAIL,
  err,
});

export const formContactStart = () => ({
  type: actionTypes.FORM_CONTACT_START,
});

export const formContact = (formData) => (dispatch) => {
  axios.post(`/contact`, formData)
  .then((response) => {
    let form = [];
    form = response.data;
    dispatch(formContactSuccess(form));
    Alert.success(response.data.message, {
      position: 'top',
      effect: 'genie',
      onShow: function () {
        setTimeout(window.location.reload(),30000)
      }
    });
  })
  .catch((err) => {
    dispatch(formContactFail(err));
    Alert.error(err.response.data.message, {
      position: 'bottom',
      effect: 'genie',
      onShow: function () {
        setTimeout(window.location.reload(),30000)
      }
    });
  });
};