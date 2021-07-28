import {StyleSheet} from 'react-native';
import _style from '../../styles';
import _color from '../../styles/Color';
import _font from '../../styles/Font'

const Styles = StyleSheet.create({
  headerContainer: {
    // ..._style.flexRowCenter
    ..._style.rowCenter,    
  },
  headerContainerChild: {
    // minWidth: 90,
    // maxWidth: 150,    
    width: 90,
    ..._style.py8,
    ..._style.px10,
    backgroundColor: _color.blueDark
  },
  headerContainerChildBorder:{
    borderRightWidth: 2,
    borderRightColor: _color.white,
  },
  headerText: {
    fontFamily: _font.robotoMedium,
    color: _color.white,    
  },
  itemContainer: {
    // ..._style.flexRowCenter
    ..._style.rowCenter,    
  },
  itemContainerChild: {
    // minWidth: 90,
    // maxWidth: 150,
    width: 90,
    ..._style.py8,
    ..._style.px10,
    // backgroundColor: _color.blueDark
  },  
  itemText: {
    // fontFamily: _font.robotoMedium,
    // color: _color.white,    
  },
});

export default Styles;
