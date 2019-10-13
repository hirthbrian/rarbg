import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../reducers';
import {
  search,
} from '../../actions';
import Search from './Search';
import { ChatActionTypes } from '../../actions/types';

const mapStateToProps = (state: AppState) => ({
  loading: state.search.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<ChatActionTypes>) => (
  bindActionCreators({
    search,
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
