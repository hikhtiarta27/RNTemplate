import {StyleSheet} from 'react-native';
import { appBarHeight } from '../../config/Platform';
import _style from '../../styles';
import _color from '../../styles/Color';

const Styles = StyleSheet.create({
  headerContainer: {
    ..._style.px10,
    ..._style.py15,
    ..._style.rowCenter,
    borderBottomColor: _color.grayEEE,
    borderBottomWidth: 1,
    backgroundColor: _color.white,
    height: appBarHeight
  },
  backBtn: {
    ..._style.mr15,
    ..._style.px8,
    zIndex: 10,
    // ..._style.py5
  },
  nameStyleIos: {
    position: 'absolute', 
    right: 0, 
    left: 0, 
    ..._style.textCenter
  },
});

export default Styles;
