import React from 'react'
import {
  StatusBar,
  View,
  Platform
} from 'react-native'
import {statusBarHeight} from '../../config/Platform'
import _style from './Styles'
import _color from '../../styles/Color'

function MyStatusBar(){
  return(
    <View style={_style.statusBarContainer(statusBarHeight)}>
      <StatusBar
        translucent        
        backgroundColor={_color.red}
        barStyle="light-content"
      />
    </View>
  );
}

export default MyStatusBar;