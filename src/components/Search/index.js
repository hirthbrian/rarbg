import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  search,
} from '../../actions';
import Search from './Search';

const mapStateToProps = ({ search }) => ({
  loading: search.isFetching,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    search,
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
