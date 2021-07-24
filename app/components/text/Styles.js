import {StyleSheet} from 'react-native';
import _style from '../../styles';
import _font from '../../styles/Font';
import _color from '../../styles/Color';
import _typography from '../../styles/Typography'

const Styles = StyleSheet.create({
  textStyle: {
    ..._style.textLeft,
    color: _color.black,
  },
  errorText:{
    color: "red",
    marginTop: 3,
    fontFamily: _font.robotoRegular,
    fontSize: 12,
  }
});

export default Styles;
