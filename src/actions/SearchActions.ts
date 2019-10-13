import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { AppState } from '../reducers';
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  ITorrent,
  ChatActionTypes,
} from './types';

export const searchRequest = (): ChatActionTypes => ({
  type: SEARCH_REQUEST,
});

export const searchSuccess = (torrents: ITorrent[]): ChatActionTypes => ({
  type: SEARCH_SUCCESS,
  payload: { torrents },
});

export const searchFailure = (message: string): ChatActionTypes => ({
  type: SEARCH_FAILURE,
  payload: { message },
});

export const search = (
  keyword: string,
): ThunkAction<void, AppState, null, Action<string>> => dispatch => {
  dispatch(searchRequest());
  axios
    .get('https://us-central1-rarbg-d56e1.cloudfunctions.net/search', {
      params: { keyword },
    })
    .then(({ data }) => {
      if (data.error) {
        dispatch(searchFailure(data.error));
      } else {
        dispatch(searchSuccess(data));
      }
    })
    .catch(({ message }) => {
      dispatch(searchFailure(message));
    });
};
