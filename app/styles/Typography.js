import { StyleSheet } from 'react-native'
import _font from './Font'

const Styles = StyleSheet.create({
  h1:{
    fontFamily: _font.robotoRegular,
    fontSize: 20,  
  },
  bodyText:{  
    fontFamily: _font.robotoRegular,
    fontSize: 14,
  },
  listItemText:{
    fontFamily: _font.robotoRegular,
    fontSize: 16,    
  },
  listItemHeaderText:{
    fontFamily: _font.robotoMedium,
    fontSize: 14,
  },
  btnText:{
    fontFamily: _font.robotoMedium,
    fontSize: 14,    
  },
  formText:{
    fontFamily: _font.robotoRegular,
    fontSize: 16,
  },
  errorText:{
    fontFamily: _font.robotoRegular,
    fontSize: 12,
  },
  headerText:{
    fontFamily: _font.robotoMedium,
    fontSize: 14, 
  }
})

export default Styles;