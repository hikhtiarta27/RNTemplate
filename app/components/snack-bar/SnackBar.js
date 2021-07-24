import React, {useEffect, useState} from 'react';
import {View, Animated, Platform} from 'react-native';
import {Text} from '..';
import _style from './Styles'
import _s from '../../styles'
import {setSnackBar} from '../../config/redux/app/AppAction'
import { useDispatch, useSelector } from 'react-redux';
import {iconSizeIos, iconSizeAndroid} from '../../config/Variables'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

function SnackBar(){
  const app = useSelector(state => state.app)
  const animated = new Animated.Value(50);
  const dispatch = useDispatch()
  const timing = 350

  useEffect(() => {    
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 0,
        duration: timing,
        useNativeDriver: true,
      }),
      Animated.delay(800),
      Animated.timing(animated, {
        toValue: 50,
        duration: timing,
        useNativeDriver: true,
      }),
    ]).start(()=>{
      dispatch(setSnackBar({
        show: false,
      }))
    }); 
  });

  return (
    <Animated.View style={[_style.snackBarContainer(animated), 
      app.snackBar.type == 'info' ? _style.info : 
      app.snackBar.type == 'error' ? _style.error :
      null
      ]}>      
      <View style={_s.flexRowCenter}>
        {app.snackBar.type == 'error' && <AntDesignIcon style={_s.mr10}
          color="#fff" name="exclamationcircleo" size={Platform.OS == 'ios' ? iconSizeIos : iconSizeAndroid} />
        }
        <Text value={app.snackBar.text} style={
          app.snackBar.type == 'info' ? _style.infoText : 
          app.snackBar.type == 'error' ? _style.errorText :
          null
        }/>
      </View>
    </Animated.View>
  );
}

SnackBar.propTypes = {

}

export default SnackBar;
