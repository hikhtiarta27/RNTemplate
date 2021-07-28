import {StyleSheet} from 'react-native';
import _font from './Font';
import _color from './Color';

const Styles = StyleSheet.create({
  margin0: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
  margin10: {
    margin: 10,
  },
  margin20: {
    margin: 20,
  },
  mx10: {
    marginHorizontal: 10,
  },
  mx20: {
    marginHorizontal: 20,
  },
  mt10: {
    marginTop: 10,
  },
  mt15: {
    marginTop: 15,
  },
  mt20: {
    marginTop: 20,
  },
  mt25: {
    marginTop: 25,
  },
  mt30: {
    marginTop: 30,
  },
  mt35: {
    marginTop: 35,
  },
  mr2: {
    marginRight: 2,
  },
  mr10: {
    marginRight: 10,
  },
  mr15: {
    marginRight: 15,
  },
  mr20: {
    marginRight: 20,
  },
  mr25: {
    marginRight: 25,
  },
  mr30: {
    marginRight: 30,
  },
  mr35: {
    marginRight: 35,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  mb25: {
    marginBottom: 25,
  },
  mb30: {
    marginBottom: 30,
  },
  mb35: {
    marginBottom: 35,
  },
  ml10: {
    marginLeft: 10,
  },
  ml15: {
    marginLeft: 15,
  },
  ml20: {
    marginLeft: 20,
  },
  ml25: {
    marginLeft: 25,
  },
  ml30: {
    marginLeft: 30,
  },
  ml35: {
    marginLeft: 35,
  },
  padding8: {
    padding: 8,
  },
  padding10: {
    padding: 10,
  },
  padding20: {
    padding: 20,
  },
  px8: {
    paddingHorizontal: 8,
  },
  px10: {
    paddingHorizontal: 10,
  },
  px18: {
    paddingHorizontal: 18,
  },
  px20: {
    paddingHorizontal: 20,
  },
  py5: {
    paddingVertical: 5,
  },
  py8: {
    paddingVertical: 8,
  },
  py15: {
    paddingVertical: 15,
  },
  pt10: {
    paddingTop: 10,
  },
  pt15: {
    paddingTop: 15,
  },
  pt20: {
    paddingTop: 20,
  },
  pt25: {
    paddingTop: 25,
  },
  pt30: {
    paddingTop: 30,
  },
  pt35: {
    paddingTop: 35,
  },
  pr10: {
    paddingRight: 10,
  },
  pr15: {
    paddingRight: 15,
  },
  pr20: {
    paddingRight: 20,
  },
  pr25: {
    paddingRight: 25,
  },
  pr30: {
    paddingRight: 30,
  },
  pr35: {
    paddingRight: 35,
  },
  pb10: {
    paddingBottom: 10,
  },
  pb15: {
    paddingBottom: 15,
  },
  pb20: {
    paddingBottom: 20,
  },
  pb25: {
    paddingBottom: 25,
  },
  pb30: {
    paddingBottom: 30,
  },
  pb35: {
    paddingBottom: 35,
  },
  pl10: {
    paddingLeft: 10,
  },
  pl15: {
    paddingLeft: 15,
  },
  pl20: {
    paddingLeft: 20,
  },
  pl25: {
    paddingLeft: 25,
  },
  pl30: {
    paddingLeft: 30,
  },
  pl35: {
    paddingLeft: 35,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flexRowCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowEnd: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  flexJustifyEnd: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textJustify: {
    textAlign: 'justify',
  },
  bgWhite: {
    backgroundColor: _color.white,
  },
  bgBlack: {
    backgroundColor: _color.black,
  },
  btn: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  btnPrimary: {
    backgroundColor: _color.red,
    borderColor: _color.red,
  },
  btnPrimaryText: {
    color: _color.white,
  },
  btnSecondary: {
    backgroundColor: _color.white,
    borderColor: _color.white,
  },
  btnSecondaryText: {
    color: _color.red,
  },
  btnGreen: {
    backgroundColor: _color.green,
    borderColor: _color.green,
  },
  btnGreenText: {
    color: _color.white,
  },
  btnDisable: {
    backgroundColor: _color.gray,
    borderColor: _color.gray,
  },
  btnDisableText: {
    color: _color.white,
  },
  field: {
    paddingHorizontal: 0,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    fontFamily: _font.robotoRegular,
    fontSize: 14,
    marginVertical: 5,
  },
  fieldFocus:{
    borderBottomColor: _color.red,
  },
  fieldContainer: {
    marginTop: 10,
  },
  fieldHeaderText: {
    textTransform: "capitalize",
    fontFamily: _font.robotoMedium,
  },
});

export default Styles;
