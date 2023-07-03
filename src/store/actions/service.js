import * as actionTypes from './actionTypes';
import Alert from 'react-s-alert';
import axios from '../../axios-instance';

export const fetchServicesSuccess = services => ({
  type: actionTypes.FETCH_SERVICES_SUCCESS,
  services,
});

export const fetchServicesFail = error => ({
  type: actionTypes.FETCH_SERVICES_FAIL,
  error,
});

export const fetchServicesStart = () => ({
  type: actionTypes.FETCH_SERVICES_START,
});

export const fetchServiceStart = () => ({
  type: actionTypes.FETCH_SERVICE_START,
});

export const fetchServiceFail = error => ({
  type: actionTypes.FETCH_SERVICE_FAIL,
  error,
});

export const fetchServiceSuccess = service => ({
  type: actionTypes.FETCH_SERVICE_SUCCESS,
  service,
})

export const fetchServices = token => (dispatch) => {
  dispatch(fetchServicesStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/service_types', headers)
    .then((res) => {
      let services = [];
      services = res.data.service_type.data;
      dispatch(fetchServicesSuccess(services));
    })
    .catch((err) => {
      dispatch(fetchServicesFail(err));
    });
};

export const fetchService = (id, token) => dispatch => {
  dispatch(fetchServiceStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get(`/customers/service_types/${id}`, headers)
    .then((res) => {
      let service = [];
      service = res.data.service_type.data;
      dispatch(fetchServiceSuccess(service));
    })
    .catch((err) => {
      dispatch(fetchServiceFail(err));
    });
}

export const holidaysStart = () => ({
  type: actionTypes.HOLIDAYS_START,
});

export const holidaysSuccess = holidays => ({
  type: actionTypes.HOLIDAYS_SUCCESS,
  holidays,
})

export const holidaysFail = error => ({
  type: actionTypes.HOLIDAYS_FAIL,
  error,
});

export const holidays = (token) => dispatch => {
  dispatch(holidaysStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/holidays', headers)
    .then((res) => {
      let holidays = [];
      holidays = res.data.holiday.data;
      dispatch(holidaysSuccess(holidays));
    })
    .catch((err) => {
      dispatch(holidaysFail(err));
    });
}

export const invoicesStart = () => ({
  type: actionTypes.INVOICES_START,
});

export const invoicesSuccess = invoices => ({
  type: actionTypes.INVOICES_SUCCESS,
  invoices,
})

export const invoicesFail = error => ({
  type: actionTypes.INVOICES_FAIL,
  error,
});

export const invoices = (token) => dispatch => {
  dispatch(invoicesStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/invoice_details', headers)
    .then((res) => {
      let invoices = [];
      invoices = res.data.invoice_detail.data;
      dispatch(invoicesSuccess(invoices));
    })
    .catch((err) => {
      dispatch(invoicesFail(err));
    });
}

export const createdInvoiceStart = () => ({
  type: actionTypes.CREATED_INVOICE_START,
});

export const createdInvoiceSuccess = createdInvoice => ({
  type: actionTypes.CREATED_INVOICE_SUCCESS,
  createdInvoice,
})

export const createdInvoiceFail = error => ({
  type: actionTypes.CREATED_INVOICE_FAIL,
  error,
});

export const createdInvoice = (token, form) => dispatch => {
  dispatch(createdInvoiceStart());
  const headers = {
   headers: {
     Authorization: `Token token=${token}`,
   },
  };
  axios.post('/customers/invoice_details', form, headers)
       .then((res) => {
         let createdInvoice = [];
         createdInvoice = res.data.invoice_detail.data;
         dispatch(createdInvoiceSuccess(createdInvoice));
         Alert.success(res.data.message, {
          position: 'top',
          effect: 'genie',
         });
         window.location.reload()
        })
       .catch((err) => {
         dispatch(createdInvoiceFail(err));
       });
}

export const deleteInvoiceStart = () => ({
  type: actionTypes.DELETE_INVOICE_START,
});
export const deleteInvoiceSuccess = id => ({
  type: actionTypes.DELETE_INVOICE_SUCCESS,
  id,
});
export const deleteInvoiceFail = error => ({
  type: actionTypes.DELETE_INVOICE_FAIL,
  error,
});
export const deleteInvoice = (token, id) => (dispatch) => {
  dispatch(deleteInvoiceStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.delete(`/customers/invoice_details/${id}`, headers)
    .then((res) => {
      dispatch(deleteInvoiceSuccess(id));
      Alert.success(res.data.message, {
        position: 'top',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(deleteInvoiceFail(err));
      Alert.error(err.data.message, {
        position: 'top',
        effect: 'genie',
      });
    });
};