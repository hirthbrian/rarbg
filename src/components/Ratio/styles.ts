import { StyleSheet } from 'react-native';
import { Color } from '../../utils';

export default StyleSheet.create({
  barContainer: {
    height: 3,
    width: 75,
    borderRadius: 3,
    flexDirection: 'row',
    backgroundColor: Color.Orange,
    overflow: 'hidden',
  },
  barGreen: {
    backgroundColor: Color.Green,
  },
  text: {
    fontSize: 16,
    color: Color.LightGrey,
    textAlign: 'right',
    paddingBottom: 2,
  },
});
