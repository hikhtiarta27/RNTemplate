import { StyleSheet } from "react-native";
import _style from '../../styles'
import _typography from '../../styles/Typography'
import _color from '../../styles/Color'

const Styles = StyleSheet.create({
  drawerItem: {
    ..._style.margin0,
    ..._style.mx10,
    borderRadius: 0,
    backgroundColor: "#fff"
  },
  drawerItemLogout: {
    ..._style.margin0,    
    ..._style.px10,
    borderRadius: 0,
    backgroundColor: _color.red
  },
  label:{
    ..._typography.bodyText,   
  },
  labelLogout:{
    ..._typography.bodyText,   
    color: _color.white
  },
  labelActive:{
    ..._typography.headerText,   
    color: _color.red
  },
  iconActive:{
    color: _color.red
  },
  icon:{
    color: _color.black
  }
})

export default Styles