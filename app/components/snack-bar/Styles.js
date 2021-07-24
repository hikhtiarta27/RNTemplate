import {StyleSheet} from 'react-native';
import _style from '../../styles';
import _color from '../../styles/Color'

const Styles = StyleSheet.create({
  info: {
    backgroundColor: _color.gray
  },
  infoText: {
    color: _color.red
  },
  error: {
    backgroundColor: _color.redPastel
  },
  errorText: {
    color: _color.white
  },
  snackBarContainer: animated => ({
    transform: [{translateY: animated}],
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 15,
    paddingHorizontal: 18,
  }),  
});

export default Styles;
