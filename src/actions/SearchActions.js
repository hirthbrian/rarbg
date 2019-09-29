import axios from 'axios';

import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './types';

export const search = (keyword) => (dispatch) => {
  dispatch({ type: SEARCH_REQUEST });
  axios
    .get('https://us-central1-rarbg-d56e1.cloudfunctions.net/search', {
      params: {
        keyword,
      },
    })
    .then(({ data }) => {
      dispatch({ type: SEARCH_SUCCESS, payload: { data } });
    })
    .catch(({ message }) => {
      dispatch({ type: SEARCH_FAILURE, payload: { message } });
    });
};
