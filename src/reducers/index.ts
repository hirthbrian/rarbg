import { combineReducers } from 'redux';
import searchReducer from './SearchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
