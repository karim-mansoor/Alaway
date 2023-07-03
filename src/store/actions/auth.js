import { push } from 'react-router-redux';
import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import Alert from 'react-s-alert';

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = (token, userId, profile) => ({
  type: actionTypes.AUTH_SUCCESS,
  token,
  userId,
  profile,
});

export const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  error,
});

export const authLogout = () => ({
  type: actionTypes.AUTH_LOGOUT,
});

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch(authLogout());
  dispatch(push('/'));
  Alert.success('Te has deslogueado con exito', {
    position: 'top',
    effect: 'genie',
  });
};

export const authClient = (email, password) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    customer: {
      email,
      password,
    },
  };
  axios.post('/customers/signin', authData)
    .then((response) => {
      const customer = response.data.customer.data;
      localStorage.clear();
      localStorage.setItem('token', customer.attributes.access_token);
      localStorage.setItem('userId', customer.id);
      localStorage.setItem('signInAs', 'customer');
      localStorage.setItem('profile', customer.attributes.avatar.url);
      localStorage.setItem('first_name', customer.attributes.first_name);
      localStorage.setItem('last_name', customer.attributes.last_name);
      dispatch(authSuccess(customer.attributes.access_token, customer.id, customer.attributes.avatar.url));
      dispatch(push('/cliente/dashboard'));
      Alert.success(response.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(authFail(err));
      Alert.error(err.response.data.message, {
        position: 'bottom-right',
        effect: 'genie',
      });
    });
};

export const resetPassword = (email) => (dispatch) => {
  const resetData = {
    customer: {
      email,
    },
  };
  axios.post('/customers/forgot_password', resetData)
    .then((response) => {
      Alert.success('El email se ha enviado a su correo', {
        position: 'bottom-right',
        effect: 'genie',
      });
    })
    .catch((err) => {
      Alert.error(err.response.data.message, {
        position: 'bottom-right',
        effect: 'genie',
      });
    });
};

export const updatePassword = (formData) => (dispatch) => {
  axios.post('/customers/update_password', formData)
    .then((response) => {
      dispatch(push('/'));
      Alert.success('Se ha actualizado su contraseña', {
        position: 'bottom-right',
        effect: 'genie',
      });
    })
    .catch((err) => {
      Alert.error('Contraseñas invalidas, verifique que sean iguales.', {
        position: 'bottom-right',
        effect: 'genie',
      });
    });
};

export const resetPasswordAgent = (email) => (dispatch) => {
  const resetData = {
    agent: {
      email,
    },
  };
  axios.post('/agents/forgot_password', resetData)
    .then((response) => {
      Alert.success('El email se ha enviado a su correo', {
        position: 'bottom-right',
        effect: 'genie',
      });
    })
    .catch((err) => {
      Alert.error(err.response.data.message, {
        position: 'bottom-right',
        effect: 'genie',
      });
    });
};

export const updatePasswordAgent = (formData) => (dispatch) => {
  axios.post('/agents/update_password', formData)
    .then((response) => {
      dispatch(push('/'));
      Alert.success('Se ha actualizado su contraseña', {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      Alert.error('Contraseñas invalidas, verifique que sean iguales.', {
        position: 'bottom-right',
        effect: 'genie',
      });
    });
};

export const authAgent = (email, password) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    agent: {
      email,
      password,
    },
  };
  axios.post('/agents/signin', authData)
    .then((response) => {
      const agent = response.data.agent.data;
      localStorage.clear();
      localStorage.setItem('token', agent.attributes.access_token);
      localStorage.setItem('userId', agent.id);
      localStorage.setItem('signInAs', 'agent');
      localStorage.setItem('profile', agent.attributes.avatar.url);
      localStorage.setItem('first_name', agent.attributes.first_name);
      localStorage.setItem('last_name', agent.attributes.last_name);
      dispatch(authSuccess(agent.attributes.access_token, agent.id, agent.attributes.avatar.url));
      dispatch(push('/agente/dashboard'));
      Alert.success(response.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(authFail(err));
      Alert.error(err.response.data.message, {
        position: 'bottom-right',
        effect: 'genie',
      });
    });
};

export const facebookLogin = accessToken => (dispatch) => {
  dispatch(authStart());
  const facebookData = {
    customer: {
      facebook_access_token: accessToken,
    },
  };
  axios.post('/customers/facebook', facebookData)
    .then((response) => {
      const customer = response.data.customer.data;
      localStorage.clear();
      localStorage.setItem('token', customer.attributes.access_token);
      localStorage.setItem('userId', customer.id);
      localStorage.setItem('signInAs', 'customer');
      localStorage.setItem('profile', customer.attributes.avatar.url);
      localStorage.setItem('first_name', customer.attributes.first_name);
      localStorage.setItem('last_name', customer.attributes.last_name);
      dispatch(authSuccess(customer.attributes.access_token, customer.id));
      dispatch(push('/cliente/dashboard'));
      Alert.success(response.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(authFail(err));
      Alert.error(err.response.data.message, {
        position: 'bottom-right',
        effect: 'genie',
      });
    });
};

export const authCheckState = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(logout());
  } else {
    const userId = localStorage.getItem('userId');
    dispatch(authSuccess(token, userId));
  }
};
