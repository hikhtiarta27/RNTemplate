import {StyleSheet} from 'react-native';
import {appBarHeight} from '../../config/Platform';
import _style from '../../styles';
import _color from '../../styles/Color';

const Styles = StyleSheet.create({
  headerContainer: {
    // ..._style.px10,    
    ..._style.rowCenter,    
    backgroundColor: _color.white,
    height: appBarHeight,
    elevation: 8,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backBtn: {    
    ..._style.px18,  
    ..._style.py15,  
    zIndex: 10,    
  },
  nameStyleIos: {
    position: 'absolute',
    right: 0,
    left: 0,
    ..._style.textCenter,
  },
});

export default Styles;
