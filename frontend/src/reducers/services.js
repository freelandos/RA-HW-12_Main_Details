import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  services: [],
  details: null,
  loading: false,
  error: null,
};

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { ...state, services: [], loading: true, error: null };
    case FETCH_SERVICES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case FETCH_SERVICES_SUCCESS:
      return { ...state, services: action.payload.services, loading: false, error: null };
    case FETCH_DETAILS_REQUEST:
      return { ...state, details: null, loading: true, error: null };
    case FETCH_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case FETCH_DETAILS_SUCCESS:
      return { ...state, details: action.payload.details, loading: false, error: null };
    default:
      return state;
  }
}
