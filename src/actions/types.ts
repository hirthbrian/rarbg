export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export interface ITorrent {
  title: string,
  size: number,
  magnetLink: string,
}

export interface ISearchState {
  torrents: ITorrent[],
  isFetching: boolean,
  errorMessage: string,
}

interface ISearchRequestAction {
  type: typeof SEARCH_REQUEST,
}

interface ISearchSuccessAction {
  type: typeof SEARCH_SUCCESS,
  payload: {
    torrents: ITorrent[],
  }
}

interface ISearchFailureAction {
  type: typeof SEARCH_FAILURE,
  payload: {
    message: string,
  },
}

export type ChatActionTypes = ISearchRequestAction | ISearchSuccessAction | ISearchFailureAction;
