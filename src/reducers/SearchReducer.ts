import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  items: [],
  isFetching: false,
  errorMessage: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        items: action.payload.data,
        isFetching: false,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        items: [],
        errorMessage: action.payload.message,
        isFetching: false,
      };
    default:
      return state;
  }
};
