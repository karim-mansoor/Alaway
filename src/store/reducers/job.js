import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  jobs: [],
  job: [],
  acceptedjobs: [],
  completedjobs: [],
  postulatedjobs: [],
  nextjobs: [],
  nextjobsCurrent: [],
  historyjobs: [],
  listJobsCompleted: [],
  total_pages: 0,
  totalPagesPostulated: 0,
  totalPagesCurrent: 0,
  totalPagesCurrentCustomer: 0,
  totalPagesCurrentPast: 0,
  jobDetails: [],
  disableButton: [],
  disableButtonCustomer: [],
  calendar: [],
  canApply: [],
  loading: false,
  reportjobs: [],
  confirmationPayment: [],
};

const fetchJobsSuccess = (state, action) => updateObject(state, {
  jobs: action.jobs,
});

const fetchNextJobsStart = (state, action) => updateObject(state, {
  loading: true,
  nextjobs: [],
});

const fetchNextJobsSuccess = (state, action) => updateObject(state, {
  nextjobs: action.nextjobs,
  loading: false,
});

const fetchNextJobsFail = (state, action) => updateObject(state, {
  loading: false,
});

const fetchNextJobsCurrentStart = (state, action) => updateObject(state, {
  nextjobsCurrent: [],
  totalPagesCurrentCustomer: 0,
  loading: true,
});

const fetchNextJobsCurrentSuccess = (state, action) => updateObject(state, {
  nextjobsCurrent: action.nextjobsCurrent,
  totalPagesCurrentCustomer: action.totalPagesCurrentCustomer,
  loading: false,
});

const fetchNextJobsCurrentFail = (state, action) => updateObject(state, {
  loading: false,
});

const fetchHistoryJobsSuccess = (state, action) => updateObject(state, {
  historyjobs: action.historyjobs,
});

const fetchListJobsCompletedStart = (state, action) => updateObject(state, {
  nextjobsCurrent: [],
  totalPagesCurrentCustomer: 0,
  // loading: true,
});

const fetchListJobsCompletedSuccess = (state, action) => updateObject(state, {
  listJobsCompleted: action.listJobsCompleted,
  totalPagesCurrentPast: action.totalPagesCurrentPast,
  // loading: false,
});

const fetchJobStart = (state, action) => updateObject(state, {
  job: [],
  loading: true,
});

const fetchJobSuccess = (state, action) => updateObject(state, {
  job: action.job,
  loading: false,
});

const fetchJobFail = (state, action) => updateObject(state, {
  loading: false,
});

const acceptedJobSuccess = (state, action) => updateObject(state, {
  job: action.job,
});

const fetchAgentJobsStart = (state, action) => updateObject(state, {
  jobs: [],
  total_pages: 0,
  loading: true,
});

const fetchAgentJobsSuccess = (state, action) => updateObject(state, {
  jobs: action.jobs,
  total_pages: action.total_pages,
  loading: false,
});

const fetchAgentJobsFail = (state, action) => updateObject(state, {
  loading: false,
});

const fetchJobAgentCurrentStart = (state, action) => updateObject(state, {
  acceptedjobs: [],
  totalPagesCurrent: 0,
  loading: true,
});

const fetchJobAgentCurrentSuccess = (state, action) => updateObject(state, {
  acceptedjobs: action.acceptedjobs,
  totalPagesCurrent: action.totalPagesCurrent,
  loading: false,
});

const fetchJobAgentCurrentFail = (state, action) => updateObject(state, {
  loading: false,
});

const fetchJobAgentCompletedStart = (state, action) => updateObject(state, {
  Completedjobs: [],
  totalPagesCompleted: 0,
  // loading: true,
});

const fetchJobAgentCompletedSuccess = (state, action) => updateObject(state, {
  completedjobs: action.completedjobs,
  totalPagesCompleted: action.totalPagesCompleted,
  // loading: false,
});

const fetchJobAgentPostulatedStart = (state, action) => updateObject(state, {
  postulatedjobs: [],
  totalPagesPostulated: 0,
  // loading: true,
});

const fetchJobAgentPostulatedSuccess = (state, action) => updateObject(state, {
  postulatedjobs: action.postulatedjobs,
  totalPagesPostulated: action.totalPagesPostulated,
  // loading: false,
});

const jobDetailsStart = (state, action) => updateObject(state, {
  jobDetails: [],
  loading: true,
});

const jobDetailsSuccess = (state, action) => updateObject(state, {
  jobDetails: action.jobDetails,
  loading: false,
});

const jobDetailsFail = (state, action) => updateObject(state, {
  loading: false,
});

const disableButtonSuccess = (state, action) => updateObject(state, {
  disableButton: action.disableButton,
});

const disableButtonCustomerSuccess = (state, action) => updateObject(state, {
  disableButtonCustomer: action.disableButtonCustomer,
});

const jobCalendarStart = (state, action) => updateObject(state, {
  calendar: [],
  loading: true,
});

const jobCalendarSuccess = (state, action) => updateObject(state, {
  loading: false,
  calendar: action.jobs,
});

const jobCalendarFail = (state, action) => updateObject(state, {
  loading: false,
});

const canApplySuccess = (state, action) => updateObject(state, {
  canApply: action.canApply,
});

const fetchJobAgentReport = (state, action) => updateObject(state, {
  reportjobs: action.reportjobs,
});

const confirmationPayment = (state, action) => updateObject(state, {
  confirmationPayment: action.confirmationPayment,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JOBS_START: return state;
    case actionTypes.FETCH_JOBS_SUCCESS: return fetchJobsSuccess(state, action);
    case actionTypes.FETCH_JOBS_FAIL: return state;
    case actionTypes.FETCH_JOB_START: return fetchJobStart(state, action);
    case actionTypes.FETCH_JOB_SUCCESS: return fetchJobSuccess(state, action);
    case actionTypes.FETCH_JOB_FAIL: return fetchJobFail(state, action);
    case actionTypes.FETCH_NEXTJOBS_START: return fetchNextJobsStart(state,action);
    case actionTypes.FETCH_NEXTJOBS_FAIL: return fetchNextJobsFail(state, action);
    case actionTypes.FETCH_NEXTJOBS_SUCCESS: return fetchNextJobsSuccess(state, action);
    case actionTypes.FETCH_NEXTJOBS_CURRENT_START: return fetchNextJobsCurrentStart(state,action);
    case actionTypes.FETCH_NEXTJOBS_CURRENT_FAIL: return fetchNextJobsCurrentFail(state, action);
    case actionTypes.FETCH_NEXTJOBS_CURRENT_SUCCESS: return fetchNextJobsCurrentSuccess(state, action);
    case actionTypes.FETCH_HISTORYJOBS_START: return state;
    case actionTypes.FETCH_LIST_JOBS_COMPLETED_START: return fetchListJobsCompletedStart(state,action);
    case actionTypes.FETCH_LIST_JOBS_COMPLETED_SUCCESS: return fetchListJobsCompletedSuccess(state, action);
    case actionTypes.FETCH_HISTORYJOBS_SUCCESS: return fetchHistoryJobsSuccess(state, action);
    case actionTypes.FETCH_HISTORYJOBS_FAIL: return state;
    case actionTypes.ACCEPTED_JOB_START: return state;
    case actionTypes.ACCEPTED_JOB_SUCCESS: return acceptedJobSuccess(state, action);
    case actionTypes.ACCEPTED_JOB_FAIL: return state;
    case actionTypes.CANCELLED_JOB_START: return state;
    case actionTypes.CANCELLED_JOB_SUCCESS: return state;
    case actionTypes.CANCELLED_JOB_FAIL: return state;
    case actionTypes.FETCH_AGENT_JOBS_START: return fetchAgentJobsStart(state, action);
    case actionTypes.FETCH_AGENT_JOBS_SUCCESS: return fetchAgentJobsSuccess(state, action);
    case actionTypes.FETCH_AGENT_JOBS_FAIL: return fetchAgentJobsFail(state, action);
    case actionTypes.APPLY_PROPOSAL_START: return state;
    case actionTypes.APPLY_PROPOSAL_SUCCESS: return state;
    case actionTypes.APPLY_PROPOSAL_FAIL: return state;
    case actionTypes.FETCH_JOB_AGENT_CURRENT_START: return fetchJobAgentCurrentStart(state, action);
    case actionTypes.FETCH_JOB_AGENT_CURRENT_SUCCESS: return fetchJobAgentCurrentSuccess(state, action);
    case actionTypes.FETCH_JOB_AGENT_CURRENT_FAIL: return fetchJobAgentCurrentFail(state, action);
    case actionTypes.FETCH_JOB_AGENT_COMPLETED_START: return fetchJobAgentCompletedStart(state, action);
    case actionTypes.FETCH_JOB_AGENT_COMPLETED_SUCCESS: return fetchJobAgentCompletedSuccess(state, action);
    case actionTypes.FETCH_JOB_AGENT_COMPLETED_FAIL: return state;
    case actionTypes.FETCH_JOB_AGENT_POSTULATED_START: return fetchJobAgentPostulatedStart (state, action);
    case actionTypes.FETCH_JOB_AGENT_POSTULATED_SUCCESS: return fetchJobAgentPostulatedSuccess(state, action);
    case actionTypes.FETCH_JOB_AGENT_POSTULATED_FAIL: return state;
    case actionTypes.JOB_DETAILS_START: return jobDetailsStart(state, action);
    case actionTypes.JOB_DETAILS_SUCCESS: return jobDetailsSuccess(state, action);
    case actionTypes.JOB_DETAILS_FAIL: return jobDetailsFail(state, action);
    case actionTypes.DISABLE_BUTTON_START: return state;
    case actionTypes.DISABLE_BUTTON_SUCCESS: return disableButtonSuccess(state, action);
    case actionTypes.DISABLE_BUTTON_FAIL: return state;
    case actionTypes.DISABLE_BUTTON_CUSTOMER_START: return state;
    case actionTypes.DISABLE_BUTTON_CUSTOMER_SUCCESS: return disableButtonCustomerSuccess(state, action);
    case actionTypes.DISABLE_BUTTON_CUSTOMER_FAIL: return state;
    case actionTypes.JOB_CALENDAR_START: return jobCalendarStart(state, action);
    case actionTypes.JOB_CALENDAR_SUCCESS: return jobCalendarSuccess(state, action);
    case actionTypes.JOB_CALENDAR_FAIL: return jobCalendarFail(state, action);
    case actionTypes.CAN_APPLY_START: return state;
    case actionTypes.CAN_APPLY_SUCCESS: return canApplySuccess(state, action);
    case actionTypes.CAN_APPLY_FAIL: return state;
    case actionTypes.FETCH_JOB_AGENT_REPORT_START: return state;
    case actionTypes.FETCH_JOB_AGENT_REPORT_SUCCESS: return fetchJobAgentReport(state, action);
    case actionTypes.FETCH_JOB_AGENT_REPORT_FAIL: return state;
    case actionTypes.CONFIRMATION_PAYMENT_START: return state;
    case actionTypes.CONFIRMATION_PAYMENT_SUCCESS: return confirmationPayment(state, action);
    case actionTypes.CONFIRMATION_PAYMENT_FAIL: return state;
    default: return state;
  }
};

export default reducer;
