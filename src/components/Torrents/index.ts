import { connect } from 'react-redux';

import Torrents from './Torrents';
import { AppState } from '../../reducers';

const mapStateToProps = (state: AppState) => ({
  items: state.search.torrents,
});

export default connect(
  mapStateToProps,
)(Torrents);
