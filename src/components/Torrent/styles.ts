import { StyleSheet } from 'react-native';
import { Color } from '../../utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
    paddingRight: 15,
    color: Color.LightGrey,
  },
});
