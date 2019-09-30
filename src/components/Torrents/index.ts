import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Torrents from './Torrents';

const mapStateToProps = ({ search }) => ({
  torrents: search.items,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Torrents);
