import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_SUCCESS,
} from "./actionTypes";

export function fetchServicesRequest() {
  return { type: FETCH_SERVICES_REQUEST }
}

export function fetchServicesFailure(error) {
  return { type: FETCH_SERVICES_FAILURE, payload: { error } }
}

export function fetchServicesSuccess(services) {
  return { type: FETCH_SERVICES_SUCCESS, payload: { services } }
}

export function fetchDetailsRequest(id) {
  return { type: FETCH_DETAILS_REQUEST, payload: { id } }
}

export function fetchDetailsFailure(error) {
  return { type: FETCH_DETAILS_FAILURE, payload: { error } }
}

export function fetchDetailsSuccess(details) {
  return { type: FETCH_DETAILS_SUCCESS, payload: { details } }
}
