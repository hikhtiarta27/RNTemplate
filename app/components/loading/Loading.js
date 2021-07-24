import React from 'react'
import {
  View,
  ActivityIndicator
} from 'react-native'
import {Text} from '..'

import _style from './Styles'

function Loading(){
  return(
    <View style={_style.loadingContainer}>
      <View style={_style.loading}>
        <ActivityIndicator size="small" color="#000" />      
        <Text value="Loading" style={_style.loadingText}/>
      </View>
    </View>
  )
}

export default Loading;