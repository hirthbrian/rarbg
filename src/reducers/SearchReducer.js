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
      const { data } = action.payload;

      return {
        ...state,
        items: data,
        isFetching: false,
      };
    case SEARCH_FAILURE:
      const { message } = action.payload;

      return {
        ...state,
        errorMessage: message,
        isFetching: false,
      };
    default:
      return state;
  }
};