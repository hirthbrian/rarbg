import axios from 'axios';

import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './types';

export const search = (keyword: string) => (dispatch) => {
  dispatch({ type: SEARCH_REQUEST });
  axios
    .get('https://us-central1-rarbg-d56e1.cloudfunctions.net/search', {
      params: {
        keyword,
      },
    })
    .then(({ data }) => {
      if (data.error) {
        dispatch({ type: SEARCH_FAILURE, payload: { data: data.error } });
      } else {
        dispatch({ type: SEARCH_SUCCESS, payload: { data } });
      }
    })
    .catch(({ message }) => {
      dispatch({ type: SEARCH_FAILURE, payload: { message } });
    });
};
