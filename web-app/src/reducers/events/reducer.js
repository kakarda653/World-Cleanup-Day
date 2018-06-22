import { combineReducers } from 'redux';
import TYPES from './types';

const EVENTS_MARKERS_INITIAL_STATE = {
  markers: [],
  loading: false,
};

const EVENTS_INITIAL_STATE = {
  events: [],
  loading: false,
  error: false,
  showEventWindow: true,
};

const EVENT_DETAILS_INITIAL_STATE = {
  event: {},
  loading: false,
  error: false,
};

const GRID_INITIAL_STATE = {
  gridValue: null,
  gridValueToZoom: null,
  maxZoomedIn: false,
};

const gridReducer = (state = GRID_INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_GRID_VALUE:
      return action.gridValue;
    default:
      return state;
  }
};

const eventMarkersReducer = (state = EVENTS_MARKERS_INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_ALL_EVENT_MARKERS_REQUEST:
      return { ...state, loading: true };
    case TYPES.FETCH_ALL_EVENT_MARKERS_SUCCESS:
      return { ...state, loading: false, markers: action.markers };
    default:
      return state;
  }
};

const eventsReducer = (state = EVENTS_INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_ALL_EVENTS_REQUEST:
      return { ...state, loading: true };
    case TYPES.FETCH_ALL_EVENTS_FAILED:
      return { ...state, loading: false, error: true };
    case TYPES.FETCH_ALL_EVENTS_SUCCESS:
      return { ...state, events: action.events, loading: false };
    case TYPES.TOGGLE_EVENT_WINDOW:
      return { ...state, showEventWindow: !state.showEventWindow };
    case TYPES.EXPAND_EVENT_WINDOW:
      return { ...state, showEventWindow: true };
    default:
      return state;
  }
};

const eventDetailsReducer = (state = EVENT_DETAILS_INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_EVENT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case TYPES.FETCH_EVENT_DETAILS_FAILED:
      return { ...state, loading: false, error: true };
    case TYPES.FETCH_EVENT_DETAILS_SUCCESS:
      return { ...state, event: action.event, loading: false };
    default:
      return state;
  }
};

export default combineReducers({
  markers: eventMarkersReducer,
  events: eventsReducer,
  details: eventDetailsReducer,
  grid: gridReducer,
});