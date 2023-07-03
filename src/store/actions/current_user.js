import * as actionTypes from './actionTypes';
import { push } from 'react-router-redux';
import axios from '../../axios-instance';
import Alert from 'react-s-alert';

export const fetchCurrentUserStart = () => ({
  type: actionTypes.FETCH_CURRENT_USER_START,
});

export const fetchCurrentUserFail = error => ({
  type: actionTypes.FETCH_CURRENT_USER_FAIL,
  error,
});

export const fetchCurrentUserSuccess = (user) => ({
  type: actionTypes.FETCH_CURRENT_USER_SUCCESS,
  user,
});

export const fetchCurrentUser = token => (dispatch) => {
  dispatch(fetchCurrentUserStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/current', headers)
    .then((res) => {
      let user = {};
      user = res.data.customer.data;
      dispatch(fetchCurrentUserSuccess(user));
    })
    .catch((err) => {
      dispatch(fetchCurrentUserFail(err));
    });
};

export const fetchCurrentAgentStart = () => ({
  type: actionTypes.FETCH_CURRENT_AGENT_START,
});

export const fetchCurrentAgentFail = error => ({
  type: actionTypes.FETCH_CURRENT_AGENT_FAIL,
  error,
});

export const fetchCurrentAgentSuccess = (agent) => ({
  type: actionTypes.FETCH_CURRENT_AGENT_SUCCESS,
  agent,
});

export const fetchCurrentAgent = token => (dispatch) => {
  dispatch(fetchCurrentAgentStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/agents/current', headers)
    .then((res) => {
      let user = {};
      user = res.data.agent.data;
      dispatch(fetchCurrentAgentSuccess(user));
    })
    .catch((err) => {
      dispatch(fetchCurrentAgentFail(err));
    });
};

export const updatedCurrentUserStart = () => ({
  type: actionTypes.UPDATED_CURRENT_USER_START,
});

export const updatedCurrentUserSuccess = (user) => ({
  type: actionTypes.UPDATED_CURRENT_USER_SUCCESS,
  user,
});

export const updatedCurrentUserFail = error => ({
  type: actionTypes.UPDATED_CURRENT_USER_FAIL,
});

export const updatedCurrentUser = (token, form) => dispatch => {
  dispatch(updatedCurrentUserStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.put('/customers/update', form, headers)
    .then((res) => {
      let user = {};
      user = res.data.customer.data;
      localStorage.setItem('first_name', user.attributes.first_name);
      localStorage.setItem('last_name', user.attributes.last_name);
      dispatch(updatedCurrentUserSuccess(user));
      Alert.success(res.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(updatedCurrentUserFail(err));
      Alert.error(err.response.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
};

export const updatedCurrentAgentStart = () => ({
  type: actionTypes.UPDATED_CURRENT_AGENT_START,
});

export const updatedCurrentAgentSuccess = (agent) => ({
  type: actionTypes.UPDATED_CURRENT_AGENT_SUCCESS,
  agent,
});

export const updatedCurrentAgentFail = error => ({
  type: actionTypes.UPDATED_CURRENT_AGENT_FAIL,
});

export const updatedCurrentAgent = (token, form) => dispatch => {
  dispatch(updatedCurrentAgentStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.put('/agents/update', form, headers)
    .then((res) => {
      let user = {};
      user = res.data.agent.data;
      localStorage.setItem('first_name', user.attributes.first_name);
      localStorage.setItem('last_name', user.attributes.last_name);
      dispatch(updatedCurrentAgentSuccess(user));
      Alert.success(res.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(updatedCurrentAgentFail(err));
      Alert.error(err.response.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
};

export const updatedCurrentUserAvatarStart = () => ({
  type: actionTypes.UPDATED_CURRENT_USER_START,
});

export const updatedCurrentUserAvatarSuccess = (user) => ({
  type: actionTypes.UPDATED_CURRENT_USER_SUCCESS,
  user,
});

export const updatedCurrentUserAvatarFail = error => ({
  type: actionTypes.UPDATED_CURRENT_USER_FAIL,
});

export const updatedCurrentUserAvatar = (token, file) => dispatch => {
  dispatch(updatedCurrentUserAvatarStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.put('/customers/update', file, headers)
    .then((res) => {
      let user = {};
      user = res.data.customer.data;
      localStorage.setItem('profile', user.attributes.avatar.url);
      dispatch(updatedCurrentUserAvatarSuccess(user));
      Alert.success('Avatar actualizado exitosamente.', {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(updatedCurrentUserAvatarFail(err));
      Alert.error(err.response.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
};

export const updatedCurrentAgentAvatarStart = () => ({
  type: actionTypes.UPDATED_CURRENT_AGENT_START,
});

export const updatedCurrentAgentAvatarSuccess = (agent) => ({
  type: actionTypes.UPDATED_CURRENT_AGENT_SUCCESS,
  agent,
});

export const updatedCurrentAgentAvatarFail = error => ({
  type: actionTypes.UPDATED_CURRENT_AGENT_FAIL,
});

export const updatedCurrentAgentAvatar = (token, file) => dispatch => {
  dispatch(updatedCurrentAgentAvatarStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.put('/agents/update', file, headers)
    .then((res) => {
      let user = {};
      user = res.data.agent.data;
      localStorage.setItem('profile', user.attributes.avatar.url);
      dispatch(updatedCurrentUserAvatarSuccess(user));
      Alert.success('Avatar actualizado exitosamente.', {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(updatedCurrentUserAvatarFail(err));
      Alert.error(err.response.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
};

export const changePasswordStart = () => ({
  type: actionTypes.CHANGE_PASSWORD_START,
});

export const changePasswordSuccess = () => ({
  type: actionTypes.CHANGE_PASSWORD_SUCCESS,
});

export const changePasswordFail = error => ({
  type: actionTypes.CHANGE_PASSWORD_FAIL,
});

export const changePassword = (token, form) => dispatch => {
  dispatch(changePasswordStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.put('/customers/change_password', form, headers)
    .then((res) => {
      dispatch(changePasswordSuccess());
      Alert.success(res.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(changePasswordFail(err));
      Alert.error(err.response.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
};

export const changePasswordAgentStart = () => ({
  type: actionTypes.CHANGE_PASSWORD_AGENT_START,
});

export const changePasswordAgentSuccess = () => ({
  type: actionTypes.CHANGE_PASSWORD_AGENT_SUCCESS,
});

export const changePasswordAgentFail = error => ({
  type: actionTypes.CHANGE_PASSWORD_AGENT_FAIL,
});

export const changePasswordAgent = (token, form) => dispatch => {
  dispatch(changePasswordAgentStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.put('/agents/change_password', form, headers)
    .then((res) => {
      dispatch(changePasswordAgentSuccess());
      Alert.success(res.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(changePasswordAgentFail(err));
      Alert.error(err.response.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
};

export const notificationsAgentStart = () => ({
  type: actionTypes.NOTIFICATIONS_AGENT_START,
});

export const notificationsAgentSuccess = (notificationsAgent) => ({
  type: actionTypes.NOTIFICATIONS_AGENT_SUCCESS,
  notificationsAgent
});

export const notificationsAgentFail = error => ({
  type: actionTypes.NOTIFICATIONS_AGENT_FAIL,
  error,
});

export const notificationsAgent = token => (dispatch) => {
  dispatch(notificationsAgentStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/agents/notifications', headers)
  .then((res) => {
      let notifications = {};
      notifications = res.data.notification.data;
      dispatch(notificationsAgentSuccess(notifications));
    })
    .catch((err) => {
    });
};

export const notificationsAgentReadSuccess = id => ({
  type: actionTypes.NOTIFICATIONS_AGENT_READ_SUCCESS,
  id,
});

export const notificationsAgentReadFail = error => ({
  type: actionTypes.NOTIFICATIONS_AGENT_READ_FAIL,
  error,
});

export const notificationsAgentReadStart = () => ({
  type: notificationsAgentReadStart,
});

export const notificationsAgentRead = (token, id) => dispatch => {
  dispatch(notificationsAgentReadStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  let response
  response = axios.get(`/agents/read_notifications/${id}`, '', headers)
    return response
};

export const notificationsCustomerStart = () => ({
  type: actionTypes.NOTIFICATIONS_CUSTOMER_START,
});

export const notificationsCustomerSuccess = (notificationsCustomer) => ({
  type: actionTypes.NOTIFICATIONS_CUSTOMER_SUCCESS,
  notificationsCustomer
});

export const notificationsCustomerFail = error => ({
  type: actionTypes.NOTIFICATIONS_CUSTOMER_FAIL,
  error,
});

export const notificationsCustomer = token => (dispatch) => {
  dispatch(notificationsCustomerStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/notifications', headers)
  .then((res) => {
      let notifications = {};
      notifications = res.data.notification.data;
      dispatch(notificationsCustomerSuccess(notifications));

    })
    .catch((err) => {
    });
};

export const notificationsCustomerReadSuccess = (id) => ({
  type: actionTypes.NOTIFICATIONS_CUSTOMER_READ_SUCCESS,
  id,
});

export const notificationsCustomerReadFail = error => ({
  type: actionTypes.NOTIFICATIONS_CUSTOMER_READ_FAIL,
  error,
});

export const notificationsCustomerReadStart = () => ({
  type: notificationsCustomerReadStart,
});

export const notificationsCustomerRead = (token, id) => dispatch => {
  dispatch(notificationsCustomerReadStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  let response
  response = axios.get(`/customers/read_notifications/${id}`, headers)   
  return response
};