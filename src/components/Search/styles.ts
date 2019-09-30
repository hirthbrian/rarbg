import { StyleSheet } from 'react-native';
import { Color } from '../../utils';

export default StyleSheet.create({
  container: {
    padding: 10,
  },
  searchBarContainer: {
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: Color.MediumGrey,
  },
  searchBarText: {
    flex: 1,
    fontSize: 18,
    color: Color.LightGrey,
    paddingLeft: 10,
  },
  iconContainer: {
    width: 20,
    height: 20,
  },
  icon: {
    tintColor: Color.LightGrey,
    width: 20,
    height: 20,
  },
});
