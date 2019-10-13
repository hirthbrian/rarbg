import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  ISearchState,
  ChatActionTypes,
} from '../actions/types';

const initialState: ISearchState = {
  torrents: [],
  isFetching: false,
  errorMessage: '',
};

export default (state = initialState, action: ChatActionTypes): ISearchState => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        torrents: action.payload.torrents,
        isFetching: false,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        torrents: [],
        isFetching: false,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
};
