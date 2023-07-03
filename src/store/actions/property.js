import { push } from 'react-router-redux';
import Alert from 'react-s-alert';
import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchPropertiesSuccess = properties => ({
  type: actionTypes.FETCH_PROPERTIES_SUCCESS,
  properties,
});

export const fetchPropertiesFail = error => ({
  type: actionTypes.FETCH_PROPERTIES_FAIL,
  error,
});

export const fetchPropertiesStart = () => ({
  type: actionTypes.FETCH_PROPERTIES_START,
});

export const fetchPropertySuccess = property => ({
  type: actionTypes.FETCH_PROPERTY_SUCCESS,
  property,
});

export const fetchProperties = token => (dispatch) => {
  dispatch(fetchPropertiesStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/properties', headers)
    .then((res) => {
      let properties = [];
      properties = res.data.property.data;
      dispatch(fetchPropertiesSuccess(properties));
    })
    .catch((err) => {
      dispatch(fetchPropertiesFail(err));
    });
};

export const fetchProperty = (token, propertyId) => (dispatch) => {
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get(`/customers/properties/${propertyId}`, headers)
    .then((res) => {
      let property = [];
      property = res.data.property.data;
      dispatch(fetchPropertySuccess(property));
    })
    .catch((err) => {
      dispatch(fetchPropertiesFail(err));
    });
};

export const createPropertyStart = () => ({
  type: actionTypes.CREATE_PROPERTY_START,
});

export const createPropertyFail = error => ({
  type: actionTypes.CREATE_PROPERTY_FAIL,
  error,
});

export const createPropertySuccess = property => ({
  type: actionTypes.CREATE_PROPERTY_SUCCESS,
  property,
});

export const updatePropertyStart = () => ({
  type: actionTypes.UPDATE_PROPERTY_START,
});

export const updatePropertySuccess = property => ({
  type: actionTypes.UPDATE_PROPERTY_SUCCESS,
  property,
});

export const updatePropertyFail = error => ({
  type: actionTypes.UPDATE_PROPERTY_FAIL,
  error,
});

export const deletePropertyStart = () => ({
  type: actionTypes.DELETE_PROPERTY_START,
});

export const deletePropertySuccess = id => ({
  type: actionTypes.DELETE_PROPERTY_SUCCESS,
  id,
});

export const deletePropertyFail = error => ({
  type: actionTypes.DELETE_PROPERTY_FAIL,
  error,
});

export const createProperty = (token, formData) => (dispatch) => {
  dispatch(createPropertyStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.post('/customers/properties', formData, headers)
    .then((res) => {
      const property = res.data.property.data;
      dispatch(createPropertySuccess(property));
      Alert.success(res.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(createPropertyFail(err));
      Alert.error(err.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
};

export const createPropertyOnProfile = (token, formData) => (dispatch) => {
  dispatch(createPropertyStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.post('/customers/properties', formData, headers)
    .then((res) => {
      const property = res.data.property.data;
      dispatch(createPropertySuccess(property));
      dispatch(push('/cliente/perfil/propiedades'));
      Alert.success(res.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(createPropertyFail(err));
      Alert.error(err.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
};

export const updateProperty = (token, formData, id) => (dispatch) => {
  dispatch(updatePropertyStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.put(`/customers/properties/${id}`, formData, headers)
    .then((res) => {
      const property = res.data.property.data;
      dispatch(updatePropertySuccess(property));
      dispatch(push('/cliente/perfil/propiedades'));
      Alert.success(res.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(updatePropertyFail(err));
      Alert.error(err.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
};

export const deleteProperty = (token, id) => (dispatch) => {
  dispatch(deletePropertyStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.delete(`/customers/properties/${id}`, headers)
    .then((res) => {
      dispatch(deletePropertySuccess(id));
      dispatch(push('/cliente/perfil/propiedades'));
      Alert.success(res.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(deletePropertyFail(err));
      Alert.error(err.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
};
