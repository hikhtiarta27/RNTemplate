import {StyleSheet} from 'react-native';
import _style from '../../styles';

const Styles = StyleSheet.create({
  btnText: {
    textTransform: 'uppercase',
    ..._style.textCenter,
  },
  btnContainer: {
    ..._style.padding10,
  },
});

export default Styles;
