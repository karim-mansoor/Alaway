import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  services: [],
  service: [],
  loading: false,
  holidays: [],
  invoices: [],
  createdInvoice: [],
  deleteInvoice: [],
};

const fetchServicesStart = (state, action) => updateObject(state, {
  loading: true,
});

const fetchServicesSuccess = (state, action) => updateObject(state, {
  services: action.services,
  loading: false,
});

const fetchServicesFail = (state, action) => updateObject(state, {
  loading: false,
});

const fetchServiceStart = (state, action) => updateObject(state, {
  service: [],
  loading: true,
});

const fetchServiceSuccess = (state, action) => updateObject(state, {
  service: action.service,
  loading: false,
});

const fetchServiceFail = (state, action) => updateObject(state, {
  loading: false,
});

const holidaysStart = (state, action) => updateObject(state, {
  loading: true,
});

const holidaysSuccess = (state, action) => updateObject(state, {
  holidays: action.holidays,
  loading: false,
});

const holidaysFail = (state, action) => updateObject(state, {
  loading: false,
});

const invoicesStart = (state, action) => updateObject(state, {
  loading: true,
});

const invoicesSuccess = (state, action) => updateObject(state, {
  invoices: action.invoices,
  loading: false,
});

const invoicesFail = (state, action) => updateObject(state, {
  loading: false,
});

const createdInvoiceStart = (state, action) => updateObject(state, {
  loading: true,
});

const createdInvoiceSuccess = (state, action) => updateObject(state, {
  createdInvoice: action.createdInvoice,
  loading: false,
});

const createdInvoiceFail = (state, action) => updateObject(state, {
  loading: false,
});

const deleteInvoiceStart = (state, action) => updateObject(state, {
  loading: true,
});

const deleteInvoiceSuccess = (state, action) => updateObject(state, {
  deleteInvoice: action.deleteInvoice,
  loading: false,
});

const deleteInvoiceFail = (state, action) => updateObject(state, {
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVICES_START: return fetchServicesStart(state, action);
    case actionTypes.FETCH_SERVICES_SUCCESS: return fetchServicesSuccess(state, action);
    case actionTypes.FETCH_SERVICES_FAIL: return fetchServicesFail(state, action);
    case actionTypes.FETCH_SERVICE_START: return fetchServiceStart(state, action);
    case actionTypes.FETCH_SERVICE_SUCCESS: return fetchServiceSuccess(state, action);
    case actionTypes.FETCH_SERVICE_FAIL: return fetchServiceFail(state, action);
    case actionTypes.HOLIDAYS_START: return holidaysStart(state, action);
    case actionTypes.HOLIDAYS_SUCCESS: return holidaysSuccess(state, action);
    case actionTypes.HOLIDAYS_FAIL: return holidaysFail(state, action);
    case actionTypes.INVOICES_START: return invoicesStart(state, action);
    case actionTypes.INVOICES_SUCCESS: return invoicesSuccess(state, action);
    case actionTypes.INVOICES_FAIL: return invoicesFail(state, action);
    case actionTypes.CREATED_INVOICE_START: return createdInvoiceStart(state, action);
    case actionTypes.CREATED_INVOICE_SUCCESS: return createdInvoiceSuccess(state, action);
    case actionTypes.CREATED_INVOICE_FAIL: return createdInvoiceFail(state, action);
    case actionTypes.DELETE_INVOICE_START: return deleteInvoiceStart(state, action);
    case actionTypes.DELETE_INVOICE_SUCCESS: return deleteInvoiceSuccess(state, action);
    case actionTypes.DELETE_INVOICE_FAIL: return deleteInvoiceFail(state, action);
    default: return state;
  }
};

export default reducer;
