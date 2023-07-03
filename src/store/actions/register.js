import { push } from 'react-router-redux';
import Alert from 'react-s-alert';
import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const registerClientSuccess = (id, formData) => ({
  type: actionTypes.REGISTER_CLIENT_SUCCESS,
  clientId: id,
  formData,
});

export const registerClientFail = error => ({
  type: actionTypes.REGISTER_CLIENT_FAIL,
  error,
});

export const registerClientStart = () => ({
  type: actionTypes.REGISTER_CLIENT_START,
});

export const registerClient = formData => (dispatch) => {
  dispatch(registerClientStart());
  axios.post('/customers/signup/', formData)
    .then((response) => {
      const customer = response.data.customer.data;
      localStorage.setItem('token', customer.attributes.access_token);
      localStorage.setItem('userId', customer.id);
      localStorage.setItem('signInAs', 'customer');
      localStorage.setItem('profile', customer.attributes.avatar.url);
      localStorage.setItem('first_name', customer.attributes.first_name);
      localStorage.setItem('last_name', customer.attributes.last_name);
      localStorage.setItem('cell_phone', customer.attributes.cell_phone);
      dispatch(registerClientSuccess(customer.id, formData));
      dispatch(push('/cliente/dashboard'));
      Alert.success(response.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((error) => {
      dispatch(registerClientFail(error));
      if (typeof(error.response.data.message) === 'object') {
        const message = error.response.data.message.email;
        Alert.error(message, {
          position: 'top',
          effect: 'genie',
        });
      } else {
        Alert.error(error.response.data.message, {
          position: 'top',
          effect: 'genie',
        });
      }
    });
};

export const registerAgentSuccess = (id, formData) => ({
  type: actionTypes.REGISTER_AGENT_SUCCESS,
  agentId: id,
  formData,
});

export const registerAgentFail = error => ({
  type: actionTypes.REGISTER_AGENT_FAIL,
  error,
});

export const registerAgentStart = () => ({
  type: actionTypes.REGISTER_AGENT_START,
});

export const registerAgent = formData => (dispatch) => {
  dispatch(registerAgentStart());
  axios.post('/agents/signup/', formData)
    .then((response) => {
      const agent = response.data.agent.data;
      localStorage.setItem('token', agent.attributes.access_token);
      localStorage.setItem('userId', agent.id);
      localStorage.setItem('signInAs', 'agent');
      localStorage.setItem('profile', agent.attributes.avatar.url);
      localStorage.setItem('first_name', agent.attributes.first_name);
      localStorage.setItem('last_name', agent.attributes.last_name);
      dispatch(registerClientSuccess(agent.id, formData));
      dispatch(push('/agente/dashboard'));
      Alert.success(response.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((error) => {
      dispatch(registerAgentFail(error));
      if (typeof(error.response.data.message) === 'object') {
        const message = error.response.data.message.email;
        Alert.error(message, {
          position: 'top',
          effect: 'genie',
        });
      } else {
        Alert.error(error.response.data.message, {
          position: 'top',
          effect: 'genie',
        });
      }
    });
};
