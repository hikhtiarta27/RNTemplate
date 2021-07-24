import {StyleSheet} from 'react-native';
import _style from '../../styles';
import _color from '../../styles/Color';

const Styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loading:{
    ..._style.rowCenter,
    ..._style.bgWhite,
    ..._style.padding20,
    borderRadius: 10,
  },
  loadingText:{
    ..._style.ml10
  }
});

export default Styles;
